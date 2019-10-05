
package com.technology.showcase.form;

import static com.technology.showcase.dao.AboutMeDao.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.dto.RecordDto;
import com.technology.jef.server.form.Field;
import com.technology.jef.server.form.Form;
import com.technology.showcase.dao.AboutMeDao;
import com.technology.showcase.dao.GenderDao;
import com.technology.showcase.dao.SocialStatusDao;

/**
* Interface "Phone" controller
*/

public class AboutMeForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("first_name", new Field(FIRST_NAME));
			put("last_name", new Field(LAST_NAME));
			put("gender", new Field(GENDER) {
				public java.util.List<OptionDto> getListHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					GenderDao genderDao = new GenderDao();
					return genderDao.getOptions();
				};
			});
			put("name_changed_upon_marriage", new Field(NAME_CHANGED_UPON_MARRIAGE));
			put("birth_name", new Field(BIRTH_NAME) {
				public Boolean isVisibleHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					 return "1".equals(parameters.get("name_changed_upon_marriage"));
				};
			});
			put("social_status_id", new Field(SOCIAL_STATUS_ID) {
				public java.util.List<OptionDto> getListHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					SocialStatusDao socialStatusDao = new SocialStatusDao();
					return socialStatusDao.getOptions();
				};
			});
			put("current_date", new Field());
		}};
	}

	@Override
	public void load(Integer applicationId, Integer operatorId, Integer cityId) throws ServiceException {
		AboutMeDao aboutMeDao = new AboutMeDao();

		setFormData(aboutMeDao.load(applicationId));
	}

	@Override
	public void saveForm(Integer applicationId, Integer operatorId, String iPAddress, String groupPrefix, Map<String, String> parameters)
			throws ServiceException {
		AboutMeDao aboutMeDao = new AboutMeDao();

		aboutMeDao.update(mapDaoParameters(parameters), applicationId);
	}	

}
		