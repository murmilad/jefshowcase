package com.technology.showcase.dao;

import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class AboutMeDao extends H2Dao {

	public static final String FIRST_NAME = "first_name";
	public static final String LAST_NAME = "last_name";
	public static final String GENDER = "gender";
	public static final String NAME_CHANGED_UPON_MARRIAGE = "name_changed_upon_marriage";
	public static final String BIRTH_NAME = "birth_name";
	public static final String SOCIAL_STATUS_ID = "social_status_id";
	public static final String CURRENT_DATE = "current_date";

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
	public LinkedList<DataField> getFields() throws ServiceException {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(FIRST_NAME));
			add(new DataFieldString(LAST_NAME));
			add(new DataFieldString(GENDER));
			add(new DataFieldString(NAME_CHANGED_UPON_MARRIAGE));
			add(new DataFieldString(BIRTH_NAME));
			add(new DataFieldString(SOCIAL_STATUS_ID, new SocialStatusDao()));
		}};
	}
	
	@Override
	public RecordDto load(Integer id) throws ServiceException {
		RecordDto data = super.load(id);
		data.put(CURRENT_DATE, "<h2><div>" + new Date() + "</div></h2>");
		return data;
	}

}
