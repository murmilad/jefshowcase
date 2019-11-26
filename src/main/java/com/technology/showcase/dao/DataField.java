package com.technology.showcase.dao;

public abstract class DataField {
	H2Dao linkedTable = null;
	String name = null;

	public DataField(String name) {
		setName(name);
	}
	
	public DataField(String name, H2Dao connectedDao) {
		this(name);
		setLinkedTable(connectedDao);
	}

	public H2Dao getLinkedTable() {
		return linkedTable;
	}
	public void setLinkedTable(H2Dao linkedTable) {
		this.linkedTable = linkedTable;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public abstract String getType(); 
}
