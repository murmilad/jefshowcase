package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class EngineTypeDao extends H2Dao {

	public static final String NAME = "name";

	public EngineTypeDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		super.create(new RecordDto() {{
			put(NAME, "Wonder engbyt");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Bozon fusion");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Gravity");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Atomic");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Kerosene/LOX");
		}});
	}
	


	@Override
	public String getTable() {
		return "engine_type";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields()  throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(NAME));
		}};
	}

}
