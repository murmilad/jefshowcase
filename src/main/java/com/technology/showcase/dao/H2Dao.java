package com.technology.showcase.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public abstract class H2Dao {

	Connection db;

	public abstract String getTable();
	public abstract String getKey();
	public abstract List<String> getFields();
	
	public H2Dao() throws ServiceException {
		super();

		try {
			Context ctx = new InitialContext();
			DataSource ds = (DataSource) ctx.lookup("java:/comp/env/jdbc/empDS");

			setDb(ds.getConnection());
		} catch (SQLException | NamingException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
	}

	public Connection getDb() {
		return db;
	}

	public void setDb(Connection db) {
		this.db = db;
	}


	public Integer update(RecordDto values) throws ServiceException {

		Integer recordId = null;
		for (String key : values.keySet()) {
			if(!getFields().contains(key)) {
				throw new ServiceException("Unknown field " + key);
			}
		}
		
		try {
			try (Statement dataQuery = db.createStatement()) {
	            dataQuery.execute(
	            		"MERGE INTO " + getTable() + " (" +  String.join(",", values.keySet()) + ")" +
	            		" KEY (" + getKey() + ")" + 
	            		" VALUES (" + join(",", values.values()) + ");"
	            );
			}
	        try (PreparedStatement query =
	                    db.prepareStatement("SELECT @@IDENTITY AS " + getKey() + ";")) {
	           ResultSet rs = query.executeQuery();
	           while (rs.next()) {
	        	   recordId = rs.getInt(getKey());
	           }
	           rs.close();
	        }            
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}

		return recordId;
	}

	public Integer create(RecordDto recordDto) throws ServiceException {

		Integer recordId = null;
		for (String key : recordDto.keySet()) {
			if(!getFields().contains(key)) {
				throw new ServiceException("Unknown field " + key);
			}
		}

		try {
			try (Statement dataQuery = db.createStatement()) {
	            dataQuery.execute(
	            		"INSERT INTO " + getTable() + " (" +  String.join(",", recordDto.keySet()) + ")" +
	            		" VALUES (" + join(",",  recordDto.values()) + ");"
	            );
			}
	        try (PreparedStatement query =
	                    db.prepareStatement("SELECT @@IDENTITY AS " + getKey() + ";")) {
	           ResultSet rs = query.executeQuery();
	           while (rs.next()) {
	        	   recordId = rs.getInt(getKey());
	           }
	           rs.close();
	        }            
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
		
		return recordId;
	}

	private String join(String separator, Collection<Object> values) {
		String result = "";
		for (Object value: values) {
			if (value != null) {
				result += (result.isEmpty() ? "" : separator) + value.toString();
			}
		}
		return result;
	}
	public RecordDto load(Integer id) throws ServiceException {

		RecordDto result = new RecordDto();

		try {
	        try (PreparedStatement query =
	                db.prepareStatement("SELECT * from " + getTable() +  " WHERE " + getKey() + " = " + id + ";")) {
	           ResultSet rs = query.executeQuery();
	           while (rs.next()) {
	        	   for (String key: getFields()) {
	        		   result.put(key, rs.getString(key));
	        	   }
	           }
	           rs.close();
	        }            
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
		
		return result;
	}

	public List<OptionDto> getOptions() throws ServiceException {
		List<OptionDto> result = new LinkedList<OptionDto>();

		try {
	        try (PreparedStatement query =
	                db.prepareStatement("SELECT * from " + getTable() + ";")) {
	           ResultSet rs = query.executeQuery();
	           while (rs.next()) {
	        	   OptionDto option = new OptionDto(rs.getString(getFields().get(1)), rs.getString(getKey()));
	        	   for (String key: getFields()) {
	        		   option.put(key, rs.getString(key));
	        	   }
	           }
	           rs.close();
	        }            
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
		
		return result;
	}

	public List<OptionDto> getOptions(RecordDto request) throws ServiceException {
		List<OptionDto> result = new LinkedList<OptionDto>();

		try {
			String querySQL = "SELECT * from " + getTable() + (request.keySet().size() > 0 ? " WHERE " : "");
    		for (String key: request.keySet()) {
    			querySQL += " " + key + " = '" + request.get(key) + "' "; 
    		}
    		querySQL += ";";

			try (PreparedStatement query =
	                db.prepareStatement(querySQL)) {
	           ResultSet rs = query.executeQuery();
	           while (rs.next()) {
	        	   OptionDto option = new OptionDto(rs.getString(getFields().get(1)), rs.getString(getKey()));
	        	   for (String key: getFields()) {
	        		   option.put(key, rs.getString(key));
	        	   }
	           }
	           rs.close();
	        }            
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
		
		return result;
	}

	public void init() throws ServiceException {
		try {
			try (Statement dataQuery = db.createStatement()) {
	            dataQuery.execute(
	            	"CREATE TABLE " + getTable() + 
	            	" (" + getKey() + " int NOT NULL AUTO_INCREMENT," +
	            	String.join(" varchar(50),", getFields()) + ", PRIMARY KEY (" + getKey() + "))"
	            );
			}
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
	}

}
