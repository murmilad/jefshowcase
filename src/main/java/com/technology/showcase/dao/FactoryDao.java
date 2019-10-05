package com.technology.showcase.dao;

import java.util.LinkedList;

import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.exceptions.ServiceException;

public class FactoryDao extends H2Dao {

	public static final String NAME = "name";
	public static final String PLANET_ID = "planet_id";

	private static final String[] FACTORIES = new String[] {"Bogden", "Calcoraan", "Champala", "Colla IV", "Cona", "Denon", "Gilvaanen", "Gorse", "Kiffex", "Kiffu", "Kooriva", 	"Li-Toran", "Manaan", 	"Obroa-skai", "Onderon", "Pasher", "Pheryon", "Pijal", "Quarzite", "Riosa", "Sergia", "Taanab", "Tirahnn", "Ubduria", "Vurdon Ka", "Alaris", "Aleen", "Aleen Minor", "Ando", "Ansion", "Asmeru", "Balnab", "Bothawui", "Bracca", "Bromlarch", "Cerea", "Chalacta", "Chalcedon", "Codia", "Coyerti", "Crul", "Cyphar", "Dallenor", "Dasoor", "Dinzo", "Dressel", "Durkteel", "Falleen", "Gan Moradir", "Glee Anselm", "Haidoral Prime", "Haruun Kal", "Ikkrukk", "Inusagi", "Iridonia", "Iskalon", "Ithor", "Jeyell", "Karfeddion", "Kashyyyk", "Keitum", "Kril'Dor", "Lannik", "Lexrul", "Malastare", "Moonus Mandel", "Naboo", "Najan-Rovi", "NaJedha", "Nakadia", "Nanth'ri", "Numidian Prime", "Ord Mantell", "Ord Pardron", "Ord Tiddell", "Patitite Pattuna", "Phorsa Gedd", "Pothor"};
	private static final String[] COLORS = new String[] {"red", "syan", "green"};
	private static final String[] TYPES = new String[] {"CIVIL", "Imperium", "n/a"};
 
 
	public FactoryDao() throws ServiceException {
		super();
	}
	
	@Override
	public void init() throws ServiceException {
		super.init();
		
		for (int i = 1; i<=5; i++) {
			for (int j = 1; j<=(int) (Math.random() * 3); j++) {
				RecordDto record = new RecordDto();
				int type = 1 + (int) (Math.random() * 2);
				record.put(NAME, FACTORIES[j] + "<br><span style='color:" + COLORS[type] +"'>" + TYPES[type] + "</span>");
				record.put(PLANET_ID, String.valueOf(i));
				super.create(record);
			}
		}
	}
	


	@Override
	public String getTable() {
		return "factory";
	}

	@Override
	public String getKey() {
		return "id";
	}

	@Override
	public LinkedList<DataField> getFields() throws ServiceException  {

		return new LinkedList<DataField>(){{
			add(new DataField(NAME));
			add(new DataField(PLANET_ID));
		}};
	}

}
