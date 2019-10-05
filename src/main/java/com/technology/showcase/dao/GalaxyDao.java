package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class GalaxyDao extends H2Dao {

	public static final String NAME = "name";

	public GalaxyDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		super.create(new RecordDto() {{
			put(NAME, "Black Eye");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Bode`s");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Cartwheel");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Cigar");
		}});
		super.create(new RecordDto() {{
			put(NAME, "Cosmos Redshift 7");
		}});
	}
	


	@Override
	public String getTable() {
		return "galaxy";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataField(NAME));
		}};
	}

}
