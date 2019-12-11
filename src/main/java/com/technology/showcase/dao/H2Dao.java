package com.technology.showcase.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.security.auth.Destroyable;
import javax.sql.DataSource;

import org.apache.maven.shared.utils.StringUtils;

import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;
import static com.technology.jef.server.serialize.SerializeConstant.*;

public abstract class H2Dao {

	static Connection db = null;

	public abstract String getTable();
	public abstract String getKey();
	public abstract List<DataField> getFields() throws ServiceException;
	
	public H2Dao() throws ServiceException {
		super();
		try {
			if (db == null || db.isClosed()) {
					Context ctx = new InitialContext();
					DataSource ds = (DataSource) ctx.lookup("java:comp/env/jdbc/showcaseDS");
		
					setDb(ds.getConnection());
			}
		} catch (SQLException | NamingException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
	}

	public static void close()  throws ServiceException {
		try {
			if (db != null && !db.isClosed()) {
				db.close();
			}
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
	}
	
	public Connection getDb() {
		return db;
	}

	public void setDb(Connection db) {
		this.db = db;
	}


	public Integer update(RecordDto fields, Integer applicationId) throws ServiceException {

		Integer recordId = null;
		for (String key : fields.keySet()) {
			if(!getFields().stream().map(field  -> field.getName()).collect(Collectors.toList()).contains(key)) {
				throw new ServiceException("Unknown field " + key);
			}
		}
		String sql = "";
		
		try {

			ArrayList<Object> values = new ArrayList<Object>(fields.values());

			if (applicationId != null) {
				sql =
	            		"MERGE INTO " + getTable() + " (" +  getKey() + ", " + String.join(",", fields.keySet()) + ")" +
	            		" KEY (" + getKey() + ")"; 

				values.add(0, Objects.toString(applicationId, ""));
			} else {
				sql =
	            		"INSERT INTO " + getTable() + " (" +  String.join(",", fields.keySet()) + ")";
			}

			sql = sql + " VALUES (? " + StringUtils.repeat(",?", values.size()-1)  + ");";

			PreparedStatement preparedStatement = db.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			for (int i = 1; i<= values.size(); i++ ) {
				preparedStatement.setString(i, (String) values.get(i-1));
			}

			preparedStatement.executeUpdate();

			if (applicationId == null) {
				ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
	            if (generatedKeys.next()) {
	            	recordId = generatedKeys.getInt(1);
	            } else {
	                preparedStatement.close();
	            	throw new ServiceException("Can't get indentifier for merged of " +  getTable());
	            }
			} else {
				recordId = applicationId;
			}
            preparedStatement.close();
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage() + " for SQL: " + sql, e.getCause());
		}

		return recordId;
	}

	public Integer create(RecordDto recordDto) throws ServiceException {

		Integer recordId = null;
		for (String key : recordDto.keySet()) {
			if(!getFields().stream().map(field  -> field.getName()).collect(Collectors.toList()).contains(key)) {
				throw new ServiceException("Unknown field " + key);
			}
		}

		try {
			String sql = "INSERT INTO " + getTable() + " (" +  String.join(",", recordDto.keySet()) + ")" +
            		" VALUES (?" + StringUtils.repeat(",?", recordDto.values().size()-1) + ");";
			PreparedStatement preparedStatement = db.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			for (int i = 1; i<= recordDto.values().size(); i++ ) {
				preparedStatement.setString(i, (String) recordDto.values().toArray()[i-1]);
			}
			preparedStatement.executeUpdate();
            ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
            if (generatedKeys.next()) {
            	recordId = generatedKeys.getInt(1);
            } else {
                preparedStatement.close();
            	throw new ServiceException("Can't get indentifier for new element of " +  getTable());
            }
            preparedStatement.close();
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

		String joinedParametersList = "";
		String joinedTablesList = ""; 

 	   for (DataField key: getFields()) {
 		   H2Dao linkedTable = key.getLinkedTable();
		   if ( linkedTable != null) {
			   joinedParametersList = joinedParametersList.concat(", " + linkedTable.getTable() + "." + linkedTable.getFields().get(0).getName() + " AS " + linkedTable.getTable() + "_name");
			   joinedTablesList = joinedTablesList.concat(" INNER JOIN " + linkedTable.getTable() + " ON " + linkedTable.getTable() + "." + linkedTable.getKey() + " = " + key.getName());
		   }
	   }

		if (id != null) {
			try {
		        try (PreparedStatement query =
		                db.prepareStatement("SELECT " + getTable() + ".* " + joinedParametersList + " from " + getTable() + joinedTablesList + " WHERE " + getTable() + "." + getKey() + " = " + id + ";")) {
		           ResultSet rs = query.executeQuery();
		           while (rs.next()) {
		        	   for (DataField key: getFields()) {
		        		   H2Dao linkedTable = key.getLinkedTable();
		        		   if ( linkedTable != null) {
		        			   result.put(key.getName(), rs.getString(key.getName()) + PARAMETER_NAME_VALUE_SEPARATOR + rs.getString(linkedTable.getTable() + "_name") );
		        		   } else {
		        			   result.put(key.getName(), rs.getString(key.getName()));
		        		   }
		        	   }
		           }
		           rs.close();
		        }
		        if (result.size() == 0) {
//TODO when groups will created
//		        	throw new ServiceException("Record not found for id: " + Objects.toString(id, "") + " table: " + getTable());
		        }
			} catch (SQLException e) {
				throw new ServiceException(e.getMessage(), e.getCause());
			}
		}
		
		return result;
	}

	public void delete(Integer id) throws ServiceException {


		if (id != null) {
			try {
		        try (PreparedStatement query =
		                db.prepareStatement("DELETE FROM " + getTable() + " WHERE " +  getKey() + " = " + id + ";")) {
		           query.execute();
		        }
			} catch (SQLException e) {
				throw new ServiceException(e.getMessage(), e.getCause());
			}
		}
		
	}

	public List<OptionDto> getOptions() throws ServiceException {
		List<OptionDto> result = new LinkedList<OptionDto>();

		try {
	        try (PreparedStatement query =
	                db.prepareStatement("SELECT * from " + getTable() + ";")) {
	           ResultSet rs = query.executeQuery();
	           while (rs.next()) {
	        	   OptionDto option = new OptionDto(rs.getString(getFields().get(0).getName()), rs.getString(getKey()));
	        	   for (DataField key: getFields()) {
	        		   option.put(key.getName(), rs.getString(key.getName()));
	        	   }
		           result.add(option);
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
	        	   OptionDto option = new OptionDto(rs.getString(getFields().get(0).getName()), rs.getString(getKey()));
	        	   for (DataField key: getFields()) {
	        		   option.put(key.getName(), rs.getString(key.getName()));
	        	   }
		           result.add(option);
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
	            	"DROP TABLE IF EXISTS " + getTable() + "; CREATE TABLE " + getTable() + 
	            	" (" + getKey() + " int AUTO_INCREMENT primary key, " +
	            	String.join(" ,", getFields().stream().map(field  -> field.getName() + " " + field.getType()).collect(Collectors.toList())) + " );"
	            );
				dataQuery.close();
			}
		} catch (SQLException e) {
			throw new ServiceException(e.getMessage(), e.getCause());
		}
	}

}
