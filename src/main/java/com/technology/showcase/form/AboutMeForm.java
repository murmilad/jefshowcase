
package com.technology.showcase.form;

import static com.technology.showcase.dao.AboutMeDao.*;

import java.util.HashMap;
import java.util.Map;
import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.form.Field;
import com.technology.jef.server.form.Form;
import com.technology.showcase.dao.AboutMeDao;
import com.technology.showcase.dao.GenderDao;
import com.technology.showcase.dao.SocialStatusDao;
import com.technology.jef.server.form.parameters.Parameters;
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
			put("social_status_id", new Field(SOCIAL_STATUS_ID) {{

				getListListener((String parameterName, Parameters parameters) -> {
					SocialStatusDao socialStatusDao = new SocialStatusDao();
					return socialStatusDao.getOptions();
				});
			}});
			put("current_date", new Field());
			put("photo", new Field(PHOTO));
		}};
	}

	@Override
	public void load(Integer id, Integer secondaryId, Parameters parameters) throws ServiceException {
		AboutMeDao aboutMeDao = new AboutMeDao();

		setFormData(aboutMeDao.load(id));
	}

	@Override
	public Integer saveForm(Integer primaryId, Integer secondaryId, Parameters parameters)
			throws ServiceException {
		AboutMeDao aboutMeDao = new AboutMeDao();

		Boolean isChanged = parameters.get("photo").getIsChanged();
		
		return aboutMeDao.update(mapDaoParameters(parameters), primaryId);
	}


}
		