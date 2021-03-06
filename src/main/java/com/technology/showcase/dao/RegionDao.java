package com.technology.showcase.dao;

import java.util.LinkedList;
import java.util.Objects;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class RegionDao extends H2Dao {

	public static final String NAME = "name";
	public static final String PLANET_ID = "planet_id";

	private static final String[] REGIONS = new String[] {"Iktotchon", "Isobe", "Kerkoidia", "Kiros", "Mikkia", "Mimban", "Shili", "Sibensko", "Thisspias", "Thustra", "Tynna", "Umbara", "Vendaxa", "Nimban", "Ques", "Vodran", "Amethia Prime", "Antar", "Arreyel", "Bastatha", "Bestine IV", "Birren", "Aargonar", "Kamino", "Abednedo", "Bardotta", "Carida", "Castell", 	"Cato'Neimoidia", "Commenor", "Devaron", "Fondor", "Giju", "Halcyon", "Narq", "Neimoidia", "Tholoth", "Uquine", "Wecacoe", "Alderaan", "Anaxes", "Atrisia", 	"Bar'leth", 	"Brentaal IV", "Cardota", "Chandrila", "Corellia", "Corulag", "Coruscant", "Courtsilius", "Dowut", "Duro"};
 
	public RegionDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		
		for (int i = 1; i<=25; i++) {
			for (int j = 1; j<=2; j++) {
				RecordDto record = new RecordDto();
				record.put(NAME, REGIONS[(i-1)*2 + j]);
				record.put(PLANET_ID, Objects.toString(i, ""));
				super.create(record);
			}
		}
	}
	


	@Override
	public String getTable() {
		return "region";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataFieldString(NAME));
			add(new DataFieldString(PLANET_ID));
		}};
	}

}
