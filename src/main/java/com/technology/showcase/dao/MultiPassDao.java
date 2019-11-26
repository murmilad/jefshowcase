package com.technology.showcase.dao;

import java.util.HashMap;
import java.util.LinkedList;

import com.technology.jef.server.exceptions.ServiceException;

public class MultiPassDao extends H2Dao {

	public static final String HAS_MULTIPASS = "has_multipass";
	public static final String MULTIPASS_ID = "multipass_id";

	public MultiPassDao() throws ServiceException {
		super();
	}
	
	@Override
	public String getTable() {
		return "multipass";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(HAS_MULTIPASS));
			add(new DataFieldString(MULTIPASS_ID));
		}};
	}

}
