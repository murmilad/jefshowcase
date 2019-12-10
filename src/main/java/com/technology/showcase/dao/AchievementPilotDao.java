package com.technology.showcase.dao;

import static com.technology.jef.server.serialize.SerializeConstant.PARAMETER_NAME_VALUE_SEPARATOR;

import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class AchievementPilotDao extends H2Dao {

	public static final String PILOT_ID = "pilot_id";
	public static final String ACHIEVEMENT_ID = "achievement_id";
	public static final String SCORE = "score";

	 
	public AchievementPilotDao() throws ServiceException {
		super();
	}
	
	

	@Override
	public String getTable() {
		return "achievement_pilot";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(PILOT_ID));
			add(new DataFieldString(SCORE));
			add(new DataFieldClob(ACHIEVEMENT_ID, new AchievementTypeDao()));
		}};
	}

}
