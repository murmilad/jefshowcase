package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class GenderDao extends H2Dao {

	public static final String NAME = "name";

	public GenderDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		super.create(new RecordDto() {{
			put(NAME, "Male");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Female");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Zerg");
		}});
	}
	


	@Override
	public String getTable() {
		return "gender";
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
