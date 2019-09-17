package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.exceptions.ServiceException;

public class SpaceshipDao extends H2Dao {

	public static final String SPACESHIP_GALAXY = "spaceship_galaxy";
	public static final String SPACESHIP_PLANET = "spaceship_planet";
	public static final String SPACESHIP_FACTORY = "spaceship_factory";
	public static final String ENGINE_TYPE = "engine_type";

	public SpaceshipDao() throws ServiceException {
		super();
	}
	
	@Override
	public String getTable() {
		return "about_me";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<String> getFields() {

		return new LinkedList<String>(){{
			add(SPACESHIP_GALAXY);
			add(SPACESHIP_PLANET);
			add(SPACESHIP_FACTORY);
			add(ENGINE_TYPE);
		}};
	}

}
