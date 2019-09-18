package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class SocialStatusDao extends H2Dao {

	public static final String NAME = "name";

	public SocialStatusDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		super.create(new RecordDto() {{
			put(NAME, "Padawan");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Jedi Master");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Grand Master");
		}});
	}
	


	@Override
	public String getTable() {
		return "social_status";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<String> getFields() {

		return new LinkedList<String>(){{
			add(NAME);
		}};
	}

}
