
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
	public Map<String, String> getParametersMap() {

		return new HashMap<String, String>(){{
			put("spaceship_galaxy", SPACESHIP_GALAXY);
			put("spaceship_planet", SPACESHIP_PLANET);
			put("spaceship_factory", SPACESHIP_FACTORY);
			put("engine_type", ENGINE_TYPE);

		}};
	}


	@Override
	public void load(Integer applicationId, Integer operatorId, Integer cityId) throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		setFormData(spaceshipDao.load(applicationId));
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName)
			throws ServiceException {
		List<OptionDto> list = new LinkedList<OptionDto>();

		if("spaceship_galaxy".equals(parameterName)) {
			GalaxyDao galaxyDao = new GalaxyDao();
			list = galaxyDao.getOptions();
		}
		
		return list;
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, 
			String parameterName, Map<String, String> parameters) throws ServiceException {
		List<OptionDto> list = new LinkedList<OptionDto>();

		if("spaceship_planet".equals(parameterName)) {
			PlanetDao planetDao = new PlanetDao();
			list = planetDao.getOptions(new RecordDto() {{
				put(GALAXY_ID, parameters.get("spaceship_galaxy"));
			}});
		} else if ("spaceship_factory".equals(parameterName)) {
			FactoryDao factoryDao = new FactoryDao();
			list = factoryDao.getOptions(new RecordDto() {{
				put(PLANET_ID, parameters.get("spaceship_planet"));
			}});
		} else if ("engine_type".equals(parameterName)) {
			EngineTypeFactoryDao engineTypeFactoryDao = new EngineTypeFactoryDao();
			list = engineTypeFactoryDao.getEngineTypes(new RecordDto() {{
				put(FACTORY_ID, parameters.get("factory"));
			}});
		}
		
		return list;
	}

	@Override
	public String getValue(Integer applicationId, Integer operatorId, Integer cityId,
			String parameterName, Map<String, String> parameters) throws ServiceException {
		return null;
	}

	@Override
	public Boolean isVisible(Integer applicationId, Integer operatorId, Integer cityId, 
			String parameterName, Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean isActive(Integer applicationId, Integer operatorId, Integer cityId, 
			String parameterName, Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<String> checkParameter(String parameterName, Boolean isRequired, Integer applicationId, String groupPrefix,
			Map<String, String> parameters) throws ServiceException {

		List<String> errors = new LinkedList<String>();
		
		errors.addAll(super.checkParameter(parameterName, isRequired, applicationId, groupPrefix, parameters));

		return errors;
	}

	@Override
	public void saveForm(Integer applicationId, Integer operatorId, String iPAddress, String groupPrefix, Map<String, String> parameters)
			throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		spaceshipDao.update(mapDaoParameters(parameters));
		
	}



}
		