package com.technology.showcase.dao;

public class DataFieldString extends DataField {

	public DataFieldString(String name) {
		super(name);
	}

	public DataFieldString(String name, H2Dao parrent) {
		super(name, parrent);
	}

	@Override
	public String getType() {
		return "varchar(250)";
	}

}
