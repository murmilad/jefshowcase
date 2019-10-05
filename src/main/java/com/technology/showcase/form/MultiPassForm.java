
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
			put("has_multipass", new Field(HAS_MULTIPASS) {
				public java.util.List<OptionDto> getListHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					return new LinkedList<OptionDto> () {{
						add(new OptionDto("Yes", 1));
						add(new OptionDto("No", 0));
					}}; 
					
				};
			});
			put("multipass_id", new Field(MULTIPASS_ID) {
				public java.util.List<String> checkHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					List<String> errors = new LinkedList<String>();
					
					if ("multipass_id".equals(parameterName) && !parameters.get(parameterName).matches("^\\w{2}\\d{7}$")) {
						errors.add("Incorrect Universe Pass");
					} 
					
					return errors;
				};
				public Boolean isVisibleHandler(String parameterName, java.util.Map<String,String> parameters) throws ServiceException {
					return "1".equals(parameters.get("has_multipass"));
				};
			});

		}};
	}

	@Override
	public void load(Integer applicationId, Integer operatorId, Integer cityId) throws ServiceException {
		MultiPassDao multiPassDao = new MultiPassDao();

		setFormData(multiPassDao.load(applicationId));
	}


	@Override
	public void saveForm(Integer applicationId, Integer operatorId, String iPAddress, String groupPrefix, Map<String, String> parameters)
			throws ServiceException {
		MultiPassDao multiPassDao = new MultiPassDao();

		multiPassDao.update(mapDaoParameters(parameters), applicationId);
	}	

}
		