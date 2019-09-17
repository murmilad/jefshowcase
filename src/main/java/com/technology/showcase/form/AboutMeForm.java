
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
import com.technology.jef.server.form.Form;
import com.technology.showcase.dao.AboutMeDao;
import com.technology.showcase.dao.GenderDao;

/**
* Interface "Phone" controller
*/

public class AboutMeForm extends Form {

	@Override
	public Map<String, String> getParametersMap() {

		return new HashMap<String, String>(){{
			put("first_name", FIRST_NAME);
			put("last_name", LAST_NAME);
			put("gender", GENDER);
			put("name_changed_upon_marriage", NAME_CHANGED_UPON_MARRIAGE);
			put("birth_name", BIRTH_NAME);
			put("social_status_id", SOCIAL_STATUS_ID);
		}};
	}

	@Override
	public void load(Integer applicationId, Integer operatorId, Integer cityId) throws ServiceException {
		AboutMeDao aboutMeDao = new AboutMeDao();

		setFormData(aboutMeDao.load(applicationId).get(0));
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName)
			throws ServiceException {
		
		List<OptionDto> list = new LinkedList<OptionDto>();

		if("gender".equals(parameterName)) {
			GenderDao genderDao = new GenderDao();
			list = genderDao.getOptions();
		}

		return list;
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
		Boolean isVisible = false;

		if(parameterName.matches("^extension_phone_number\\w*")) {
			 isVisible = "2".equals(parameters.get("phone_type_id")); //рабочий
		}

		return isVisible;
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
		
		if ("phone_number".equals(parameterName) || "phone_type_id".equals(parameterName) ) {
			isRequired = true;
		} 
		
		errors.addAll(super.checkParameter(parameterName, isRequired, applicationId, groupPrefix, parameters));

		return errors;
	}

	
	@Override
	public void saveForm(Integer applicationId, Integer operatorId, String iPAddress, String groupPrefix, Map<String, String> parameters)
			throws ServiceException {
		ApplicationSummaryDao applicationSummaryDao = new ApplicationSummaryDao();

		RecordDto applicationSummary = applicationSummaryDao.getApplication(applicationId);
		

		PhoneDao phoneDao = new PhoneDao();
		
		Map<String, String> daoParameters = mapDaoParameters(parameters);

		daoParameters.put(PhoneFieldNames.IP_ADDRESS, iPAddress);
		daoParameters.put(PhoneFieldNames.OPERATOR_ID, operatorId.toString());
		daoParameters.put(PhoneFieldNames.APPLICATION_ID, applicationId.toString());
		daoParameters.put(PhoneFieldNames.CUSTOMER_ID, applicationSummary.get(ApplicationSummaryFieldNames.A_CLIENT_ID));

		phoneDao.createOrUpdate(daoParameters);
	}	

}
		