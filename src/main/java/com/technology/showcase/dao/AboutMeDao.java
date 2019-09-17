package com.technology.showcase.dao;

import java.util.HashMap;
import java.util.LinkedList;

import com.technology.jef.server.exceptions.ServiceException;

public class AboutMeDao extends H2Dao {

	public static final String FIRST_NAME = "first_name";
	public static final String LAST_NAME = "last_name";
	public static final String GENDER = "gender";
	public static final String NAME_CHANGED_UPON_MARRIAGE = "name_changed_upon_marriage";
	public static final String BIRTH_NAME = "birth_name";
	public static final String SOCIAL_STATUS_ID = "social_status_id";

	public AboutMeDao() throws ServiceException {
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
			add(FIRST_NAME);
			add(LAST_NAME);
			add(GENDER);
			add(NAME_CHANGED_UPON_MARRIAGE);
			add(BIRTH_NAME);
			add(SOCIAL_STATUS_ID);
		}};
	}

}
