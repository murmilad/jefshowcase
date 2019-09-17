
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
		ApplicationSummaryDao applicationSummaryDao = new ApplicationSummaryDao();

		RecordDto applicationSummary = applicationSummaryDao.getApplication(applicationId);

		PhoneDao phoneDao = new PhoneDao();
		
		setFormData(phoneDao.retrieve(operatorId, "formDebtorPhone", applicationId, (Integer) applicationSummary.get(ApplicationSummaryFieldNames.A_CLIENT_ID),1));
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName)
			throws ServiceException {
		 List<OptionDto> list = new LinkedList<OptionDto>();

		 if(parameterName.matches("^phone_type_id\\w*")) {
			PhoneDao phoneDao = new PhoneDao();
			list = phoneDao.getPhoneType();
		} else if(parameterName.matches("^calls_result_id\\w*")) {
			PhoneDao phoneDao = new PhoneDao();
			list = phoneDao.getCallsResult();
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
		