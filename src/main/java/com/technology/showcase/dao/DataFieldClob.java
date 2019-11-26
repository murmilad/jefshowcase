package com.technology.showcase.dao;

public class DataFieldClob extends DataField {

	public DataFieldClob(String name) {
		super(name);
	}

	public DataFieldClob(String name, H2Dao parrent) {
		super(name, parrent);
	}

	@Override
	public String getType() {
		return "CLOB";
	}

}
