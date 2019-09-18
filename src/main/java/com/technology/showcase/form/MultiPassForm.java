
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
import com.technology.jef.server.form.Form;
import com.technology.showcase.dao.AboutMeDao;
import com.technology.showcase.dao.MultiPassDao;

/**
* Interface "Phone" controller
*/

public class MultiPassForm extends Form {

	@Override
	public Map<String, String> getParametersMap() {

		return new HashMap<String, String>(){{
			put("has_multipass", HAS_MULTIPASS);
			put("multipass_id", MULTIPASS_ID);

		}};
	}

	@Override
	public void load(Integer applicationId, Integer operatorId, Integer cityId) throws ServiceException {
		MultiPassDao multiPassDao = new MultiPassDao();

		setFormData(multiPassDao.load(applicationId));
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName)
			throws ServiceException {
		// TODO Auto-generated method stub
		 return null;
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName,
			Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getValue(Integer applicationId, Integer operatorId, Integer cityId, String parameterName,
			Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean isVisible(Integer applicationId, Integer operatorId, Integer cityId, String parameterName,
			Map<String, String> parameters) throws ServiceException {
		return null;
	}

	@Override
	public Boolean isActive(Integer applicationId, Integer operatorId, Integer cityId, String parameterName,
			Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<String> checkParameter(String parameterName, Boolean isRequired, Integer applicationId, String groupPrefix,
			Map<String, String> parameters) throws ServiceException {

		List<String> errors = new LinkedList<String>();
		isRequired = false;
		
		if ("multipass_id".equals(parameterName) && !parameters.get(parameterName).matches("^\\w{2}\\d{7}$")) {
			errors.add("Incorrect Universe Pass");
		} 
		
		errors.addAll(super.checkParameter(parameterName, isRequired, applicationId, groupPrefix, parameters));

		return errors;
	}

	
	@Override
	public void saveForm(Integer applicationId, Integer operatorId, String iPAddress, String groupPrefix, Map<String, String> parameters)
			throws ServiceException {
		MultiPassDao multiPassDao = new MultiPassDao();

		multiPassDao.update(mapDaoParameters(parameters));
	}	

}
		