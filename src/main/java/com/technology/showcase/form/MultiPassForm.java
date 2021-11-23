
package com.technology.showcase.form;

import static com.technology.showcase.dao.MultiPassDao.*;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.form.Field;
import com.technology.jef.server.form.Form;
import com.technology.showcase.dao.MultiPassDao;
import com.technology.jef.server.form.parameters.Parameters;
/**
* Interface "Phone" controller
*/

public class MultiPassForm extends Form {

	@Override
	public Map<String, Field> getFieldsMap() {

		return new HashMap<String, Field>(){{
			put("has_multipass", new Field(HAS_MULTIPASS) {{

				getListListener((String parameterName, Parameters parameters) -> {
					return new LinkedList<OptionDto> () {{
						add(new OptionDto("Yes", 1));
						add(new OptionDto("No", 0));
					}}; 
					
				});
			}});
			put("multipass_id", new Field(MULTIPASS_ID) {{

				checkListener((String parameterName, Parameters parameters) -> {
					List<String> errors = new LinkedList<String>();
					
					if ("1".equals(parameters.getValue("has_multipass")) && !parameters.getValue(parameterName).matches("^\\w{2}\\d{7}$")) {
						errors.add("Incorrect Universe Pass. Must be 2 letters and 7 digits");
					} 
					
					return errors;
				});

				isVisibleListener((String parameterName, Parameters parameters) -> {
					return "1".equals(parameters.getValue("has_multipass"));
				});

				isRequiredListener((String parameterName, Parameters parameters) -> {
					return "1".equals(parameters.getValue("has_multipass"));
					
				});
			}});

		}};
	}

	@Override
	public void load(String applicationId, String secondaryId,Parameters parameters) throws ServiceException {
		MultiPassDao multiPassDao = new MultiPassDao();

		if (applicationId != null) {
			setFormData(multiPassDao.load(Integer.parseInt(applicationId)));
		}
	}

	@Override
	public String saveForm(String primaryId, String secondaryId, Parameters parameters)
			throws ServiceException {
		MultiPassDao multiPassDao = new MultiPassDao();

		return multiPassDao.update(mapDaoParameters(parameters), primaryId == null ? null : Integer.parseInt(primaryId)).toString();
	}	

}
		