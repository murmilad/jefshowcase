
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
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.form.Form;
import com.technology.showcase.dao.AboutMeDao;
import com.technology.showcase.dao.AddressDao;
import com.technology.showcase.dao.GalaxyDao;
import com.technology.showcase.dao.GenderDao;
import com.technology.showcase.dao.PlanetDao;
import com.technology.showcase.dao.RegionDao;
import com.technology.showcase.dao.SocialStatusDao;

/**
* Interface "Phone" controller
*/

public class AddressForm extends Form {

	@Override
	public Map<String, String> getParametersMap() {

		return new HashMap<String, String>(){{
			put("galaxy", GALAXY);
			put("planet", PLANET);
			put("region", REGION);
			put("reg_post_index", REG_POST_INDEX);
		}};
	}

	@Override
	public void load(Integer applicationId, Integer operatorId, Integer cityId) throws ServiceException {
		AddressDao addressDao = new AddressDao();

		setFormData(addressDao.load(applicationId));
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName)
			throws ServiceException {
		 List<OptionDto> list = new LinkedList<OptionDto>();

		if("galaxy".equals(parameterName)) {
			GalaxyDao galaxyDao = new GalaxyDao();
			list = galaxyDao.getOptions();
		}

		 return list;
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName,
			Map<String, String> parameters) throws ServiceException {
		 
		List<OptionDto> list = new LinkedList<OptionDto>();

		if("planet".equals(parameterName)) {
			PlanetDao planetDao = new PlanetDao();
			list = planetDao.getOptions(new RecordDto() {{
				put(GALAXY_ID, parameters.get("galaxy"));
			}});
		} else if ("region".equals(parameterName)) {
			RegionDao regionDao = new RegionDao();
			list = regionDao.getOptions(new RecordDto() {{
				put(PLANET_ID, parameters.get("planet"));
			}});
		}

		return list;
	}

	@Override
	public String getValue(Integer applicationId, Integer operatorId, Integer cityId, String parameterName,
			Map<String, String> parameters) throws ServiceException {
		
		String zip = "";
		if ("zip".equals(parameterName)) {
			RegionDao regionDao = new RegionDao();

			try {
				byte[] bytesOfMessage = parameters.get("galaxy").concat(parameters.get("planet")).concat(parameters.get("region")).getBytes("UTF-8");

				MessageDigest md;
				md = MessageDigest.getInstance("MD5");

				zip =  md.digest(bytesOfMessage).toString();
			} catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
				throw new ServiceException(e.getMessage(), e.getCause());
			}
		}

		return zip;
	}

	@Override
	public Boolean isVisible(Integer applicationId, Integer operatorId, Integer cityId, String parameterName,
			Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean isActive(Integer applicationId, Integer operatorId, Integer cityId, String parameterName,
			Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<String> checkParameter(String parameterName, Boolean isRequired, Integer applicationId, String groupPrefix,
			Map<String, String> parameters) throws ServiceException {

		List<String> errors = new LinkedList<String>();
		isRequired = false;
		
		if ("zip".equals(parameterName) && !parameters.get(parameterName).matches("^[\\dA-F]+$")) {
			errors.add("Incorrect Universe ZIP");
		}
		
		errors.addAll(super.checkParameter(parameterName, isRequired, applicationId, groupPrefix, parameters));

		return errors;
	}

	
	@Override
	public void saveForm(Integer applicationId, Integer operatorId, String iPAddress, String groupPrefix, Map<String, String> parameters)
			throws ServiceException {
		AddressDao addressDao = new AddressDao();

		addressDao.update(mapDaoParameters(parameters));
	}	

}
		