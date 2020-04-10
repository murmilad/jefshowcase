
package com.technology.showcase.form;

import static com.technology.showcase.dao.AddressDao.*;
import static com.technology.showcase.dao.PlanetDao.*;
import static com.technology.showcase.dao.RegionDao.*;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.form.Field;
import com.technology.jef.server.form.Form;
import com.technology.jef.server.form.FormData.Attribute;
import com.technology.showcase.dao.AddressDao;
import com.technology.showcase.dao.GalaxyDao;
import com.technology.showcase.dao.PlanetDao;
import com.technology.showcase.dao.RegionDao;
import com.technology.jef.server.form.parameters.Parameters;
/**
* Interface "Phone" controller
*/

public class AddressForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("galaxy", new Field(GALAXY) {{

				getListListener((String parameterName, Parameters parameters) -> {
					GalaxyDao galaxyDao = new GalaxyDao();
					return galaxyDao.getOptions();
				});
			}});
			put("planet", new Field(PLANET) {{

				getListInteractiveListener((String parameterName, Parameters parameters) -> {
					PlanetDao planetDao = new PlanetDao();
					return planetDao.getOptions(new RecordDto() {{
						put(GALAXY_ID, parameters.getValue("galaxy"));
					}});
				});
			}});
			put("region", new Field(REGION) {{

				getListInteractiveListener((String parameterName, Parameters parameters) -> {
					RegionDao regionDao = new RegionDao();
					return regionDao.getOptions(new RecordDto() {{
						put(PLANET_ID, parameters.getValue("planet"));
					}});
				});
			}});
			put("zip", new Field(REG_POST_INDEX) {{

				getValueListener((String parameterName, Parameters parameters) -> {
					String zip = "";
					RegionDao regionDao = new RegionDao();
					PlanetDao planetDao = new PlanetDao();
					GalaxyDao galaxyDao = new GalaxyDao();

					try {
						byte[] bytesOfMessage = 
								((String) galaxyDao.load(Integer.parseInt(parameters.getValue("galaxy"))).get(GalaxyDao.NAME))
								.concat(planetDao.load(Integer.parseInt(parameters.getValue("planet"))).get(PlanetDao.NAME))
								.concat(regionDao.load(Integer.parseInt(parameters.getValue("region"))).get(RegionDao.NAME)).getBytes("UTF-8");

						MessageDigest md;
						md = MessageDigest.getInstance("MD5");

						zip =  md.digest(bytesOfMessage).toString();
					} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
						throw new ServiceException(e.getMessage(), e.getCause());
					}
					return zip;
				});

				checkListener((String parameterName, Parameters parameters) -> {
					List<String> errors = new LinkedList<String>();
					if ("zip".equals(parameterName) && !parameters.getValue(parameterName).matches("^\\[B@[\\da-f]{5,8}$")) {
						errors.add("Incorrect Universe ZIP");
					}
					return errors;
				});
				
				getAttributesListener((String parameterName, Parameters parameters, Integer primaryId) -> {
					Map<Attribute, Boolean> attributes = new HashMap<Attribute, Boolean>();
					
					attributes.put(Attribute.READONLY, true);

					return attributes;
				});
			}});

		}};
	}

	@Override
	public void load(Integer id, Integer secondaryId,  Parameters parameters) throws ServiceException {
		AddressDao addressDao = new AddressDao();

		setFormData(addressDao.load(id));
	}

	@Override
	public Integer saveForm(Integer primaryId, Integer secondaryId, Parameters parameters)
			throws ServiceException {
		AddressDao addressDao = new AddressDao();

		return addressDao.update(mapDaoParameters(parameters), primaryId);
	}	

}
		