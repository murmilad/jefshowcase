
package com.technology.showcase.form;

import static com.technology.showcase.dao.AboutMeDao.*;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.form.Field;
import com.technology.jef.server.form.Form;
import com.technology.showcase.dao.AboutMeDao;
import com.technology.showcase.dao.GenderDao;
import com.technology.showcase.dao.SocialStatusDao;
import com.technology.jef.server.form.parameters.Parameters;

import static com.technology.jef.server.serialize.SerializeConstant.*;

/**
* Interface "Phone" controller
*/

public class AboutMeForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("first_name", new Field(FIRST_NAME));
			put("last_name", new Field(LAST_NAME));
			put("gender", new Field(GENDER) {{
				getListListener((String parameterName, Parameters parameters) -> {
					GenderDao genderDao = new GenderDao();
					return genderDao.getOptions();
				});
			}});
			put("name_changed_upon_marriage", new Field(NAME_CHANGED_UPON_MARRIAGE));
			put("birth_name", new Field(BIRTH_NAME) {{

				isVisibleListener((String parameterName, Parameters parameters) -> {
					 return "1".equals(parameters.getValue("name_changed_upon_marriage"));
				});
			}});
			put("social_status_id", new Field(SOCIAL_STATUS_ID, SocialStatusDao.NAME) {{

				getListListener((String parameterName, Parameters parameters) -> {
					SocialStatusDao socialStatusDao = new SocialStatusDao();
					return socialStatusDao.getOptions();
				});
				
				checkListener((String parameterName, Parameters parameters) -> {
					List<String> errors = new LinkedList<String>();
					
					if (parameters.getValue(parameterName).contains(LIST_SEPARATOR) && parameters.getValue(parameterName).split(LIST_SEPARATOR).length == 1) {
						errors.add("Other value is required");
					} 
					
					return errors;
				});
			}});
			put("current_date", new Field());
			put("photo", new Field(PHOTO));
		}};
	}

	@Override
	public void load(String id, String secondaryId,Parameters parameters) throws ServiceException {
		AboutMeDao aboutMeDao = new AboutMeDao();

		if (id != null) {
			setFormData(aboutMeDao.load(Integer.parseInt(id)));
		}
	}

	@Override
	public String saveForm(String primaryId, String secondaryId, Parameters parameters)
			throws ServiceException {
		AboutMeDao aboutMeDao = new AboutMeDao();

		Boolean isChanged = parameters.get("photo").getIsChanged();
		
		return aboutMeDao.update(mapDaoParameters(parameters), primaryId == null ? null : Integer.parseInt(primaryId)).toString();
	}


}
		