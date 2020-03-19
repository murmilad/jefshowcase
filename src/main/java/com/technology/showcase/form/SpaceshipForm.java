
package com.technology.showcase.form;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import static com.technology.showcase.dao.PlanetDao.GALAXY_ID;
import static com.technology.showcase.dao.RegionDao.PLANET_ID;
import static com.technology.showcase.dao.EngineTypeFactoryDao.FACTORY_ID;
import static com.technology.showcase.dao.SpaceshipDao.*;
import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.form.Field;
import com.technology.jef.server.form.Form;
import com.technology.showcase.dao.EngineTypeFactoryDao;
import com.technology.showcase.dao.FactoryDao;
import com.technology.showcase.dao.GalaxyDao;
import com.technology.showcase.dao.PlanetDao;
import com.technology.showcase.dao.SpaceshipDao;
import com.technology.jef.server.form.parameters.Parameters;
/**
* Interface "Address" controller
*/

public class SpaceshipForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("spaceship_galaxy", new Field(SPACESHIP_GALAXY) {{

				getListListener((String parameterName, Parameters parameters) -> {
					GalaxyDao galaxyDao = new GalaxyDao();
					return  galaxyDao.getOptions();
				});
			}});
			put("spaceship_planet", new Field(SPACESHIP_PLANET) {{

				getListInteractiveListener((String parameterName, Parameters parameters) -> {
					PlanetDao planetDao = new PlanetDao();
					return  planetDao.getOptions(new RecordDto() {{
						put(GALAXY_ID, parameters.getValue("spaceship_galaxy"));
					}});
				});
			}});
			put("spaceship_factory", new Field(SPACESHIP_FACTORY) {{

				getListInteractiveListener((String parameterName, Parameters parameters) -> {
					FactoryDao factoryDao = new FactoryDao();
					return  factoryDao.getOptions(new RecordDto() {{
						put(PLANET_ID, parameters.getValue("spaceship_planet"));
					}});
				});
			}});
			put("engine_type", new Field(ENGINE_TYPE) {{

				getListInteractiveListener((String parameterName, Parameters parameters) -> {
					EngineTypeFactoryDao engineTypeFactoryDao = new EngineTypeFactoryDao();
					return  engineTypeFactoryDao.getEngineTypes(new RecordDto() {{
						put(FACTORY_ID, parameters.getValue("spaceship_factory"));
					}});
				});

				isVisibleListener((String parameterName, Parameters parameters) -> {
					return !"".equals(parameters.getValue("spaceship_factory"));
				});

				isRequiredListener((String parameterName, Parameters parameters) -> {
					return !"".equals(parameters.getValue("spaceship_factory"));
				});
			}});
			put("document", new Field(DOCUMENT));
			put("button_add", new Field(){{
				isVisibleListener((String parameterName, Parameters parameters) -> {
					return Integer.valueOf(parameters.getValue("group_count")) < 3;
				});
			}});

		}};
	}


	@Override
	public void load(Integer primaryId, Integer secondaryId, Parameters parameters) throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		setFormData(spaceshipDao.load(secondaryId));
	}


	@Override
	public Integer saveForm(Integer primaryId, Integer secondaryId, Parameters parameters)
			throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		RecordDto record = mapDaoParameters(parameters);
		record.put(APPLICATION_ID, Objects.toString(primaryId, ""));
		spaceshipDao.update(record, secondaryId);
		
		return primaryId;
	}

	@Override
	public void deleteForm(Integer primaryId, Integer secondaryId, Parameters parameters)
			throws ServiceException {

		SpaceshipDao spaceshipDao = new SpaceshipDao();

		spaceshipDao.delete(secondaryId);
		
	}

	
	
	@Override
	public List<String> getGroups(Integer primaryId, Parameters parameters) throws ServiceException {
		SpaceshipDao spaceshipDao = new SpaceshipDao();

		RecordDto record = new RecordDto();
		record.put(APPLICATION_ID, primaryId);

		return spaceshipDao.getOptions(record).stream().map(item -> item.getValue().toString()).collect(Collectors.toList());
	}

}
		