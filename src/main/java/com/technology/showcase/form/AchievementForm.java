
package com.technology.showcase.form;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.form.Field;
import com.technology.jef.server.form.Form;
import com.technology.jef.server.form.Service;
import com.technology.showcase.dao.AchievementPilotDao;
import com.technology.showcase.dao.AchievementTypeDao;
import com.technology.showcase.dao.ReasonAchievementPilotDao;
import com.technology.showcase.dao.ReasonDao;

/**
* Interface "Address" controller
*/

public class AchievementForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("type", new Field(AchievementPilotDao.ACHIEVEMENT_ID) {{

				getListListener((String parameterName, Map<String,String> parameters) -> {
					AchievementTypeDao achievementTypeDao = new AchievementTypeDao();
					return  achievementTypeDao.getOptions();
				});
			}});
			put("about", new Field() {{

				getValueListener((String parameterName, Map<String,String> parameters) -> {
					AchievementTypeDao achievementTypeDao = new AchievementTypeDao();
					RecordDto achievement = achievementTypeDao.load(Integer.parseInt(parameters.get("type")));
					return  achievement.get(AchievementTypeDao.ABOUT);
				});
			}});
			put("image", new Field() {{

				getValueListener((String parameterName, Map<String,String> parameters) -> {
					AchievementTypeDao achievementTypeDao = new AchievementTypeDao();
					RecordDto achievement = achievementTypeDao.load(Integer.parseInt(parameters.get("type")));
					return  "<img src='" + achievement.get(AchievementTypeDao.IMAGE) + "' />";
				});
			}});
			put("reason", new Field() {{

				getListListener((String parameterName, Map<String,String> parameters) -> {
					ReasonDao reasonDao = new ReasonDao(); 
					return reasonDao.getOptions();
				});
			}});
			
			put("score", new Field(AchievementPilotDao.SCORE));

		}};
	}


	@Override
	public void load(Integer primaryId, Integer secondaryId, Map<String, String> parameters) throws ServiceException {

		AchievementPilotDao achievementPilotDao = new AchievementPilotDao();

		setFormData(achievementPilotDao.load(secondaryId));
		
		ReasonAchievementPilotDao reasonAchievementPilotDao = new ReasonAchievementPilotDao();
		
		getFormData().putValue("reason", Service.getListData(() -> reasonAchievementPilotDao.loadList(secondaryId)));
	}


	@Override
	public Integer saveForm(Integer primaryId, Integer secondaryId, Map<String, String> parameters)
			throws ServiceException {

		AchievementPilotDao achievementPilot = new AchievementPilotDao();

		RecordDto record = mapDaoParameters(parameters);
		record.put(AchievementPilotDao.PILOT_ID, Objects.toString(primaryId, ""));
		final Integer newSecondaryId = achievementPilot.update(record, secondaryId);

		ReasonAchievementPilotDao reasonAchievementPilotDao = new ReasonAchievementPilotDao();
		
		Service.setListData(parameters.get("reason")
				, (String id) -> reasonAchievementPilotDao.create(id, secondaryId != null ? String.valueOf(secondaryId) : String.valueOf(newSecondaryId))
				, () -> reasonAchievementPilotDao.deleteList(secondaryId)
				);
		
				
		return primaryId;
	}

	@Override
	public void deleteForm(Integer primaryId, Integer secondaryId, Map<String, String> parameters)
			throws ServiceException {

		AchievementPilotDao achievementPilot = new AchievementPilotDao();
		ReasonAchievementPilotDao reasonAchievementPilotDao = new ReasonAchievementPilotDao();

		achievementPilot.delete(secondaryId);
		reasonAchievementPilotDao.deleteList(secondaryId);
		
	}

	
	
	@Override
	public List<String> getGroups(Integer primaryId, Map<String, String> parameters) throws ServiceException {
		AchievementPilotDao achievementPilot = new AchievementPilotDao();

		RecordDto record = new RecordDto();
		record.put(AchievementPilotDao.PILOT_ID, primaryId);

		return achievementPilot.getOptions(record).stream().map(item -> item.getValue().toString()).collect(Collectors.toList());
	}

}
		