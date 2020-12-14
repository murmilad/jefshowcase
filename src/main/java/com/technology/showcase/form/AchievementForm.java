
package com.technology.showcase.form;

import static com.technology.jef.server.serialize.SerializeConstant.PARAMETER_NAME_VALUE_SEPARATOR;

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
import com.technology.jef.server.form.parameters.Parameters;
/**
* Interface "Address" controller
*/

public class AchievementForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("type", new Field(AchievementPilotDao.ACHIEVEMENT_ID) {{

				getListListener((String parameterName, Parameters parameters) -> {
					AchievementTypeDao achievementTypeDao = new AchievementTypeDao();
					return  achievementTypeDao.getOptions();
				});
			}});
			put("about", new Field() {{

				getValueListener((String parameterName, Parameters parameters) -> {
					AchievementTypeDao achievementTypeDao = new AchievementTypeDao();
					RecordDto achievement = achievementTypeDao.load(Integer.parseInt(parameters.getValue("type")));
					return  achievement.get(AchievementTypeDao.ABOUT);
				});
			}});
			put("image", new Field() {{

				getValueListener((String parameterName, Parameters parameters) -> {
					AchievementTypeDao achievementTypeDao = new AchievementTypeDao();
					RecordDto achievement = achievementTypeDao.load(Integer.parseInt(parameters.getValue("type")));
					return  "<img src='" + achievement.get(AchievementTypeDao.IMAGE) + "' />";
				});
			}});
			put("reason", new Field() {{

				getListListener((String parameterName, Parameters parameters) -> {
					ReasonDao reasonDao = new ReasonDao(); 
					return reasonDao.getOptions();
				});
			}});
			
			put("score", new Field(AchievementPilotDao.SCORE));

		}};
	}


	@Override
	public void load(Integer primaryId, Integer secondaryId, Parameters parameters) throws ServiceException {

		AchievementPilotDao achievementPilotDao = new AchievementPilotDao();

		RecordDto achievementPilot = achievementPilotDao.load(secondaryId);
		setFormData(achievementPilot);
		
		ReasonAchievementPilotDao reasonAchievementPilotDao = new ReasonAchievementPilotDao();

		if (achievementPilot.get(AchievementPilotDao.ACHIEVEMENT_ID) != null && !"".equals(achievementPilot.get(AchievementPilotDao.ACHIEVEMENT_ID))) {
			AchievementTypeDao achievementTypeDao = new AchievementTypeDao();
			RecordDto achievement = achievementTypeDao.load(Integer.parseInt(((String)achievementPilot.get(AchievementPilotDao.ACHIEVEMENT_ID)).split(PARAMETER_NAME_VALUE_SEPARATOR)[0]));
	
			getFormData().putValue("about", (String) achievement.get(AchievementTypeDao.ABOUT));
			getFormData().putValue("image",  "<img src='" +  achievement.get(AchievementTypeDao.IMAGE) + "' />");
		}
		getFormData().putValue("reason", Service.getListData(() -> reasonAchievementPilotDao.loadList(secondaryId)));
	}


	@Override
	public Integer saveForm(Integer primaryId, Integer secondaryId, Parameters parameters)
			throws ServiceException {

		AchievementPilotDao achievementPilot = new AchievementPilotDao();

		RecordDto record = mapDaoParameters(parameters);
		record.put(AchievementPilotDao.PILOT_ID, Objects.toString(primaryId, ""));
		final Integer newSecondaryId = achievementPilot.update(record, secondaryId);

		ReasonAchievementPilotDao reasonAchievementPilotDao = new ReasonAchievementPilotDao();
		
		Service.setListData(parameters.getValue("reason")
				, (String id) -> reasonAchievementPilotDao.create(id, secondaryId != null ? String.valueOf(secondaryId) : String.valueOf(newSecondaryId))
				, () -> reasonAchievementPilotDao.deleteList(secondaryId)
				);
		
				
		return primaryId;
	}

	@Override
	public void deleteForm(Integer primaryId, Integer secondaryId, Parameters parameters)
			throws ServiceException {

		AchievementPilotDao achievementPilot = new AchievementPilotDao();
		ReasonAchievementPilotDao reasonAchievementPilotDao = new ReasonAchievementPilotDao();

		achievementPilot.delete(secondaryId);
		reasonAchievementPilotDao.deleteList(secondaryId);
		
	}

	
	
	@Override
	public List<String> getGroups(Integer primaryId, Parameters parameters) throws ServiceException {
		AchievementPilotDao achievementPilot = new AchievementPilotDao();

		RecordDto record = new RecordDto();
		record.put(AchievementPilotDao.PILOT_ID, primaryId);

		return achievementPilot.getOptions(record).stream().map(item -> item.getValue().toString()).collect(Collectors.toList());
	}

}
		