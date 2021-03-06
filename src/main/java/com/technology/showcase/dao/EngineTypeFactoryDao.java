package com.technology.showcase.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

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
		List<Integer> uniqueList = new LinkedList<Integer>(); 
		for(int i = 1; i < 5; i++){
			uniqueList.add(i+1);
		}
		for (int i = 1; i<=100; i++) {
			Collections.shuffle(uniqueList);

			for (int j = 1; j<=1 + (int) (Math.random() * 3); j++) {
				RecordDto record = new RecordDto();
				record.put(ENGINE_TYPE_ID, String.valueOf(uniqueList.get(j)));
				record.put(FACTORY_ID, Objects.toString(i, ""));
				super.create(record);
			}
		}
	}
	
	public List<OptionDto> getEngineTypes(RecordDto request) throws ServiceException {
		List<OptionDto> result = new LinkedList<OptionDto>();

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
	        	   result.add(new OptionDto(rs.getString("name"), rs.getString("id")));
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
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(ENGINE_TYPE_ID));
			add(new DataFieldString(FACTORY_ID));
		}};
	}

}
