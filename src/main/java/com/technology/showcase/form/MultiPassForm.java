
package com.technology.showcase.form;

import static com.technology.showcase.dao.MultiPassDao.*;

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
import com.technology.showcase.dao.MultiPassDao;

/**
* Interface "Phone" controller
*/

public class MultiPassForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("has_multipass", new Field(HAS_MULTIPASS) {{

				getListListener((String parameterName, Map<String,String> parameters) -> {
					return new LinkedList<OptionDto> () {{
						add(new OptionDto("Yes", 1));
						add(new OptionDto("No", 0));
					}}; 
					
				});
			}});
			put("multipass_id", new Field(MULTIPASS_ID) {{

				checkListener((String parameterName, Map<String,String> parameters) -> {
					List<String> errors = new LinkedList<String>();
					
					if ("1".equals(parameters.get("has_multipass")) && !parameters.get(parameterName).matches("^\\w{2}\\d{7}$")) {
						errors.add("Incorrect Universe Pass. Must be 2 letters and 7 digits");
					} 
					
					return errors;
				});

				isVisibleListener((String parameterName, Map<String,String> parameters) -> {
					return "1".equals(parameters.get("has_multipass"));
				});

				isRequiredListener((String parameterName, Map<String,String> parameters) -> {
					return "1".equals(parameters.get("has_multipass"));
					
				});
			}});

		}};
	}

	@Override
	public void load(Integer applicationId, Integer secondaryId, Map<String, String> parameters) throws ServiceException {
		MultiPassDao multiPassDao = new MultiPassDao();

		setFormData(multiPassDao.load(applicationId));
	}


	@Override
	public Integer saveForm(Integer primaryId, Integer secondaryId, Map<String, String> parameters)
			throws ServiceException {
		MultiPassDao multiPassDao = new MultiPassDao();

		return multiPassDao.update(mapDaoParameters(parameters), primaryId);
	}	

}
		