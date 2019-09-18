
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
import com.technology.showcase.dao.SocialStatusDao;

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

		setFormData(aboutMeDao.load(applicationId));
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName)
			throws ServiceException {
		
		List<OptionDto> list = new LinkedList<OptionDto>();

		if("gender".equals(parameterName)) {
			GenderDao genderDao = new GenderDao();
			list = genderDao.getOptions();
		} else if("gender".equals(parameterName)) {
			SocialStatusDao socialStatusDao = new SocialStatusDao();
			list = socialStatusDao.getOptions();
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

		if("birth_name".equals(parameterName)) {
			 isVisible = "1".equals(parameters.get("name_changed_upon_marriage"));
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
	public void saveForm(Integer applicationId, Integer operatorId, String iPAddress, String groupPrefix, Map<String, String> parameters)
			throws ServiceException {
		AboutMeDao aboutMeDao = new AboutMeDao();

		aboutMeDao.update(mapDaoParameters(parameters));
	}	

}
		