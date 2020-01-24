
package com.technology.showcase.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.AbstractMap;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static com.technology.showcase.dao.PlanetDao.GALAXY_ID;
import static com.technology.showcase.dao.RegionDao.PLANET_ID;
import static com.technology.showcase.dao.EngineTypeFactoryDao.FACTORY_ID;
import static com.technology.showcase.dao.SpaceshipDao.*;
import static java.util.Calendar.*;

import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.form.Field;
import com.technology.jef.server.form.Form;
import com.technology.jef.server.form.FormData.Attribute;
import com.technology.showcase.dao.AboutMeDao;
import com.technology.showcase.dao.EngineTypeFactoryDao;
import com.technology.showcase.dao.FactoryDao;
import com.technology.showcase.dao.GalaxyDao;
import com.technology.showcase.dao.PlanetDao;
import com.technology.showcase.dao.RegionDao;
import com.technology.showcase.dao.SpaceshipDao;

/**
* Interface "Address" controller
*/

public class SpaceshipForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("spaceship_galaxy", new Field(SPACESHIP_GALAXY) {{

				getListListener((String parameterName, Map<String,String> parameters) -> {
					GalaxyDao galaxyDao = new GalaxyDao();
					return  galaxyDao.getOptions();
				});
			}});
			put("spaceship_planet", new Field(SPACESHIP_PLANET) {{

				getListInteractiveListener((String parameterName, Map<String,String> parameters) -> {
					PlanetDao planetDao = new PlanetDao();
					return  planetDao.getOptions(new RecordDto() {{
						put(GALAXY_ID, parameters.get("spaceship_galaxy"));
					}});
				});
			}});
			put("spaceship_factory", new Field(SPACESHIP_FACTORY) {{

				getListInteractiveListener((String parameterName, Map<String,String> parameters) -> {
					FactoryDao factoryDao = new FactoryDao();
					return  factoryDao.getOptions(new RecordDto() {{
						put(PLANET_ID, parameters.get("spaceship_planet"));
					}});
				});
			}});
			put("engine_type", new Field(ENGINE_TYPE) {{

				getListInteractiveListener((String parameterName, Map<String,String> parameters) -> {
					EngineTypeFactoryDao engineTypeFactoryDao = new EngineTypeFactoryDao();
					return  engineTypeFactoryDao.getEngineTypes(new RecordDto() {{
						put(FACTORY_ID, parameters.get("spaceship_factory"));
					}});
				});

				isVisibleListener((String parameterName, Map<String,String> parameters) -> {
					return !"".equals(parameters.get("spaceship_factory"));
				});

				isRequiredListener((String parameterName, Map<String,String> parameters) -> {
					return !"".equals(parameters.get("spaceship_factory"));
				});
			}});
			put("document", new Field(DOCUMENT));
			put("button_add", new Field(){{
				isVisibleListener((String parameterName, Map<String,String> parameters) -> {
					return Integer.valueOf(parameters.get("group_count")) < 3;
				});
			}});

		}};
	}


	@Override
	public void load(Integer primaryId, Integer secondaryId, Map<String, String> parameters) throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		setFormData(spaceshipDao.load(secondaryId));
	}


	@Override
	public Integer saveForm(Integer primaryId, Integer secondaryId, Map<String, String> parameters)
			throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		RecordDto record = mapDaoParameters(parameters);
		record.put(APPLICATION_ID, Objects.toString(primaryId, ""));
		spaceshipDao.update(record, secondaryId);
		
		return primaryId;
	}

	@Override
	public void deleteForm(Integer primaryId, Integer secondaryId, Map<String, String> parameters)
			throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		spaceshipDao.delete(secondaryId);
		
	}

	
	
	@Override
	public List<String> getGroups(Integer primaryId, Map<String, String> parameters) throws ServiceException {
		SpaceshipDao spaceshipDao = new SpaceshipDao();

		RecordDto record = new RecordDto();
		record.put(APPLICATION_ID, primaryId);

		return spaceshipDao.getOptions(record).stream().map(item -> item.getValue().toString()).collect(Collectors.toList());
	}

}
		