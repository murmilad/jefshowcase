package com.technology.showcase.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class ReasonAchievementPilotDao extends H2Dao {

	public static final String REASON_ID = "reason_id";
	public static final String ACHIEVEMENT_PILOT_ID = "achievement_pilot_id";

	public ReasonAchievementPilotDao() throws ServiceException {
		super();
	}
	
	@Override
	public String getTable() {
		return "reason_achievement_pilot";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(REASON_ID));
			add(new DataFieldString(ACHIEVEMENT_PILOT_ID));
		}};
	}

	public List<OptionDto> loadList(Integer secondaryId) throws ServiceException {
			List<OptionDto> result = new LinkedList<OptionDto>();

			try {
				String querySQL = "SELECT reason.id, reason.name from " + getTable() + 
						" INNER JOIN reason on reason.id = reason_id" + 
						" WHERE achievement_pilot_id = " + secondaryId + ";";

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

	public void deleteList(Integer secondaryId) throws ServiceException  {
		if (secondaryId != null) {
			try {
		        try (PreparedStatement query =
		                db.prepareStatement("DELETE FROM " + getTable() + " WHERE achievement_pilot_id = " + secondaryId + ";")) {
		           query.execute();
		        }
			} catch (SQLException e) {
				throw new ServiceException(e.getMessage(), e.getCause());
			}
		}
		
	}

	public Object create(String id, String secondaryId)  throws ServiceException{
		RecordDto record = new RecordDto();
		
		record.put(REASON_ID, id);
		record.put(ACHIEVEMENT_PILOT_ID, secondaryId);
		
		return create(record);
	}

}
