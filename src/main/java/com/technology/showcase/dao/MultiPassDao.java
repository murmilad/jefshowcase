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
		return "about_me";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<String> getFields() {

		return new LinkedList<String>(){{
			add(HAS_MULTIPASS);
			add(MULTIPASS_ID);
		}};
	}

}
