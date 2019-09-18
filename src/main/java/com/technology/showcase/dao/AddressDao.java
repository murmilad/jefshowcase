package com.technology.showcase.dao;

import java.util.HashMap;
import java.util.LinkedList;

import com.technology.jef.server.exceptions.ServiceException;

public class AddressDao extends H2Dao {

	public static final String GALAXY = "galaxy";
	public static final String PLANET = "planet";
	public static final String REGION = "region";
	public static final String REG_POST_INDEX = "reg_post_index";

	public AddressDao() throws ServiceException {
		super();
	}
	
	@Override
	public String getTable() {
		return "address";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<String> getFields() {

		return new LinkedList<String>(){{
			add(GALAXY);
			add(PLANET);
			add(REGION);
			add(REG_POST_INDEX);
		}};
	}

}
