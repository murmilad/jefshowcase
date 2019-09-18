package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class PlanetDao extends H2Dao {

	public static final String NAME = "name";
	public static final String GALAXY_ID = "galaxy_id";

	private static final String[] PLANETS = new String[] {"Eufornis Major", "Ganthel", "Hosnian", "Hosnian Prime", "Kuat", "Lanz Carpo", "Metellos", "Neral", 	"N'Zoth", "Plexis", "Protobranch", "Ralltiir", "Raysho", "Skako Minor", "Tangenine", "Tinnel IV", "Cosia", "Cos Secundu", "Ojom", "Sha Qarot", "Tython", "Vulpter", "Aquaris", "Cartao", "Dorin"};

	public PlanetDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		for (int i = 1; i<=5; i++) {
			for (int j = 1; j<=5; j++) {
				RecordDto record = new RecordDto();
				record.put(NAME, PLANETS[j]);
				record.put(GALAXY_ID, String.valueOf(i));
				super.create(record);
			}
		}

		super.create(new RecordDto() {{
			put(NAME, "Skirnir");
			put(GALAXY_ID, "5");
		}});
	}
	


	@Override
	public String getTable() {
		return "planet";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<String> getFields() {

		return new LinkedList<String>(){{
			add(NAME);
			add(GALAXY_ID);
		}};
	}

}
