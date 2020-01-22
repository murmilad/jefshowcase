package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class ReasonDao extends H2Dao {

	public static final String NAME = "name";

	public ReasonDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		super.create(new RecordDto() {{
			put(NAME, "For honor");
		}});
		super.create(new RecordDto() {{
			put(NAME, "For courage");
		}});
		super.create(new RecordDto() {{
			put(NAME, "For hard work");
		}});
		super.create(new RecordDto() {{
			put(NAME, "For the horde");
		}});
	}
	


	@Override
	public String getTable() {
		return "reason";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(NAME));
		}};
	}

}
