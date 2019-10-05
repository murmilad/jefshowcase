
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
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
			put("spaceship_galaxy", new Field(SPACESHIP_GALAXY) {
				public java.util.List<OptionDto> getListHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					GalaxyDao galaxyDao = new GalaxyDao();
					return  galaxyDao.getOptions();
				};
			});
			put("spaceship_planet", new Field(SPACESHIP_PLANET) {
				public java.util.List<OptionDto> getListInteractiveHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					PlanetDao planetDao = new PlanetDao();
					return  planetDao.getOptions(new RecordDto() {{
						put(GALAXY_ID, parameters.get("spaceship_galaxy"));
					}});
				};
			});
			put("spaceship_factory", new Field(SPACESHIP_FACTORY) {
				public java.util.List<OptionDto> getListInteractiveHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					FactoryDao factoryDao = new FactoryDao();
					return  factoryDao.getOptions(new RecordDto() {{
						put(PLANET_ID, parameters.get("spaceship_planet"));
					}});
				};
			});
			put("engine_type", new Field(ENGINE_TYPE) {
				public java.util.List<OptionDto> getListInteractiveHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					EngineTypeFactoryDao engineTypeFactoryDao = new EngineTypeFactoryDao();
					return  engineTypeFactoryDao.getEngineTypes(new RecordDto() {{
						put(FACTORY_ID, parameters.get("factory"));
					}});
				};
			});

		}};
	}


	@Override
	public void load(Integer applicationId, Integer operatorId, Integer cityId) throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		setFormData(spaceshipDao.load(applicationId));
	}


	@Override
	public void saveForm(Integer applicationId, Integer operatorId, String iPAddress, String groupPrefix, Map<String, String> parameters)
			throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		spaceshipDao.update(mapDaoParameters(parameters), applicationId);
		
	}



}
		