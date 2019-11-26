package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.exceptions.ServiceException;

public class SpaceshipDao extends H2Dao {

	public static final String APPLICATION_ID = "application_id";
	public static final String SPACESHIP_GALAXY = "spaceship_galaxy";
	public static final String SPACESHIP_PLANET = "spaceship_planet";
	public static final String SPACESHIP_FACTORY = "spaceship_factory";
	public static final String ENGINE_TYPE = "engine_type";
	public static final String DOCUMENT = "document";

	public SpaceshipDao() throws ServiceException {
		super();
	}
	
	@Override
	public String getTable() {
		return "spaceship";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(APPLICATION_ID));
			add(new DataFieldClob(DOCUMENT));
			add(new DataFieldString(SPACESHIP_GALAXY, new GalaxyDao()));
			add(new DataFieldString(SPACESHIP_PLANET, new PlanetDao()));
			add(new DataFieldString(SPACESHIP_FACTORY, new FactoryDao()));
			add(new DataFieldString(ENGINE_TYPE, new EngineTypeDao()));
		}};
	}

}
