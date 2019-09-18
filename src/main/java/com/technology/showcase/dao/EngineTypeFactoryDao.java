package com.technology.showcase.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class EngineTypeFactoryDao extends H2Dao {

	public static final String ENGINE_TYPE_ID = "engine_type_id";
	public static final String FACTORY_ID = "factory_id";

	public EngineTypeFactoryDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		for (int i = 1; i<=75; i++) {

			int type = 1 + (int) (Math.random() * 4);

			RecordDto record = new RecordDto();
			record.put(ENGINE_TYPE_ID, type);
			record.put(FACTORY_ID, String.valueOf(i));
			super.create(record);
		}
	}
	
	public List<OptionDto> getEngineTypes(RecordDto request) throws ServiceException {
		List<OptionDto> result = super.getOptions(request);

		try {
			String querySQL = "SELECT engine_type.id, engine_type.name from " + getTable() + 
					" INNER JOIN engine_type on engine_type.id = engine_type_id" + 
					" WHERE ";
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


	@Override
	public String getTable() {
		return "engine_type_factory";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<String> getFields() {

		return new LinkedList<String>(){{
			add(ENGINE_TYPE_ID);
			add(FACTORY_ID);
		}};
	}

}
