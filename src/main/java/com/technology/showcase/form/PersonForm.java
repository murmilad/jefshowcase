
package com.technology.showcase.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.AbstractMap;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.technology.scoring.jfrontoffice.server.field.HouseFieldNames.*;
import static com.technology.scoring.jfrontoffice.server.field.AddressFieldNames.*;
import static java.util.Calendar.*;

import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.OptionDto;
import com.technology.jef.server.dto.RecordDto;
import com.technology.scoring.jfrontoffice.server.dao.AddressDao;
import com.technology.scoring.jfrontoffice.server.dao.ApplicationSummaryDao;
import com.technology.scoring.jfrontoffice.server.dao.CustomerDebtorJobDao;
import com.technology.scoring.jfrontoffice.server.dao.KLADRDao;
import com.technology.scoring.jfrontoffice.server.field.AddressFieldNames;
import com.technology.scoring.jfrontoffice.server.field.ApplicationSummaryFieldNames;
import com.technology.jef.server.form.Form;
import com.technology.jef.server.form.FormData.Attribute;

/**
* Interface "Address" controller
*/

public class PersonForm extends Form {

	@Override
	public Map<String, String> getParametersMap() {

		return new HashMap<String, String>(){{
			put("reg_section", REG_BLOCK);
			put("how_long_living_here", ACTUAL_ADDRESS_LENGTH_OF_STAY);
			put("housing_type_id", ACTUAL_RESIDENCE_PLACE_TYPE_ID);
			put("real_house", ACTUAL_HOUSE_CODE);
			put("real_and_reg_equals", REG_PLACE_SAME_ACTUAL_PLACE);
			put("registration_date", REGISTRATION_DATE);
			put("real_district_code", ACTUAL_DISTRICT_CODE);
			put("real_settlement_code", ACTUAL_SETTLEMENT_CODE);
			put("reg_district_code", REG_DISTRICT_CODE);
			put("reg_city_code", REG_CITY_CODE);
			put("reg_street_code", REG_STREET_CODE);
			put("real_street_code", ACTUAL_STREET_CODE);
			put("real_city_code", ACTUAL_CITY_CODE);
			put("reg_settlement_code", REG_SETTLEMENT_CODE);
			put("reg_apartment", REG_APARTMENT_NUMBER);
			put("real_post_index", ACTUAL_POSTINDEX);
			put("reg_region_code", REG_REGION_CODE);
			put("real_apartment", ACTUAL_APARTMENT_NUMBER);
			put("reg_building", REG_BUILDING);
			put("real_building", ACTUAL_BUILDING);
			put("real_region_code", ACTUAL_REGION_CODE);
			put("reg_house", REG_HOUSE_CODE);
			put("reg_post_index", REG_POSTINDEX);
			put("real_section", ACTUAL_BLOCK);

		}};
	}

	@Override
	public Map<Attribute, Boolean> getAttributes(String parameterName, Integer applicationId, Integer operatorId,
			Integer cityId) {
		Map<Attribute, Boolean> attributes = new HashMap<Attribute, Boolean>();
		

//TODO Добавить код для супруга		
		return attributes;
	}

	@Override
	public void load(Integer applicationId, Integer operatorId, Integer cityId) throws ServiceException {

		ApplicationSummaryDao applicationSummaryDao = new ApplicationSummaryDao();

		RecordDto applicationSummary = applicationSummaryDao.getApplication(applicationId);
		
		AddressDao addressDao = new AddressDao();
		
		setFormData(addressDao.retrieve(operatorId, "formDebtorRegistrationPlace", applicationId, (Integer) applicationSummary.get(ApplicationSummaryFieldNames.A_CLIENT_ID)));
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, String parameterName)
			throws ServiceException {
		List<OptionDto> list = new LinkedList<OptionDto>();

		if(parameterName.equals("real_and_reg_equals")) {
			KLADRDao kLADRDao = new KLADRDao();
			list = new LinkedList<OptionDto>() {{
				add(new OptionDto("Да", "1"));
				add(new OptionDto("Нет", "0"));
			}};
		} else if(parameterName.equals("housing_type_id")) {
			AddressDao addressDao = new AddressDao();
			list = addressDao.getHousingType();
		} else if(parameterName.equals("how_long_living_here")) {
			CustomerDebtorJobDao customerDebtorJob = new CustomerDebtorJobDao();
			list = customerDebtorJob.getDuration();
		} 
		
		return list;
	}

	@Override
	public List<OptionDto> getList(Integer applicationId, Integer operatorId, Integer cityId, 
			String parameterName, Map<String, String> parameters) throws ServiceException {
		List<OptionDto> list = new LinkedList<OptionDto>();

		 Pattern p = Pattern.compile("^(reg_|real_|)(\\w+)$");
		 Matcher parameterMatcer = p.matcher(parameterName);
		 if (parameterMatcer.find()) {

			 if ("region_code".equals(parameterMatcer.group(2))) {
					KLADRDao kLADRDao = new KLADRDao();
					list = kLADRDao.findRegion(getItemOrSpace(parameters.get(parameterName), 0));
			} else if ("district_code".equals(parameterMatcer.group(2))) {
				KLADRDao kLADRDao = new KLADRDao();
				list = kLADRDao.findDistrict(
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "region_code"), 0),
						getItemOrSpace(parameters.get(parameterName), 0)
				);
			} else if ("city_code".equals(parameterMatcer.group(2))) {
				if (!"".equals(getItemOrSpace(parameters.get(parameterMatcer.group(1) + "region_code"), 0))) {
					KLADRDao kLADRDao = new KLADRDao();
					list = kLADRDao.findCity(
							getItemOrSpace(parameters.get(parameterMatcer.group(1) + "region_code"), 0),
							getItemOrSpace(parameters.get(parameterMatcer.group(1) + "district_code"), 0),
							getItemOrSpace(parameters.get(parameterName), 0)
					);
				}
			} else if ("settlement_code".equals(parameterMatcer.group(2))) {
				if (!"".equals(getItemOrSpace(parameters.get(parameterMatcer.group(1) + "city_code"), 0)) || !"".equals(getItemOrSpace(parameters.get(parameterMatcer.group(1) + "district_code"), 0))) {
					KLADRDao kLADRDao = new KLADRDao();
					list = kLADRDao.findSettlement(
							getItemOrSpace(parameters.get(parameterMatcer.group(1) + "city_code"), 0),
							getItemOrSpace(parameters.get(parameterMatcer.group(1) + "region_code"), 0),
							getItemOrSpace(parameters.get(parameterName), 0),
							getItemOrSpace(parameters.get(parameterMatcer.group(1) + "district_code"), 0)
					);
				}
			} else if ("street_code".equals(parameterMatcer.group(2))) {
				KLADRDao kLADRDao = new KLADRDao();
				list = kLADRDao.findStreet(
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "city_code"), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "settlement_code"), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "region_code"), 0),
						getItemOrSpace(parameters.get(parameterName), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "district_code"), 0)
				);
			} else if ("house".equals(parameterMatcer.group(2))) {
				KLADRDao kLADRDao = new KLADRDao();
				list = kLADRDao.findHouse(
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "city_code"), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "street_code"), 0),
						null,
						getItemOrSpace(parameters.get(parameterName), 0)
				);
			}
		 }
		
		return list;
	}

	@Override
	public String getValue(Integer applicationId, Integer operatorId, Integer cityId,
			String parameterName, Map<String, String> parameters) throws ServiceException {

		String value = "";
		 Pattern p = Pattern.compile("^(reg_|real_|)(\\w+)$");
		 Matcher parameterMatcer = p.matcher(parameterName);
		 if (parameterMatcer.find()) {
			if ("post_index".equals(parameterMatcer.group(2))) {
				KLADRDao kLADRDao = new KLADRDao();
	
				value = kLADRDao.getPostindex(
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "street_code"), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "city_code"), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "settlement_code"), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "region_code"), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "house"), 0),
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "district_code"), 0)
				);
			} else if ("section".equals(parameterMatcer.group(2))) {
				KLADRDao kLADRDao = new KLADRDao();
				List<OptionDto> list = kLADRDao.findHouse(
						null,
						null,
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "house"), 0),
						null
				);
				if (list.size() > 0) {
					value = (String) list.get(0).get(CORPUS_NUMBER);
				}
			} else if ("building".equals(parameterMatcer.group(2))) {
				KLADRDao kLADRDao = new KLADRDao();
				List<OptionDto> list = kLADRDao.findHouse(
						null,
						null,
						getItemOrSpace(parameters.get(parameterMatcer.group(1) + "house"), 0),
						null
				);
				if (list.size() > 0) {
					value = (String) list.get(0).get(STRUCTURE_NUMBER);
				}
			}
		 }

		return value;
	}

	@Override
	public Boolean isVisible(Integer applicationId, Integer operatorId, Integer cityId, 
			String parameterName, Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean isActive(Integer applicationId, Integer operatorId, Integer cityId, 
			String parameterName, Map<String, String> parameters) throws ServiceException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<String> checkParameter(String parameterName, Boolean isRequired, Integer applicationId, String groupPrefix,
			Map<String, String> parameters) throws ServiceException {

		List<String> errors = new LinkedList<String>();
		
		Pattern fiasPattern = Pattern.compile("^(.+?)(?:\\|(.+))?$");
		Matcher fiasMatcher = fiasPattern.matcher(parameters.get(parameterName));
		fiasMatcher.matches();
		
		String fiasValue = parameters.get(parameterName);
		if (fiasMatcher.matches()) {
			fiasValue = fiasMatcher.group(2) != null ? fiasMatcher.group(2) : fiasMatcher.group(1);
		}		

		if (parameterName.matches("(real|reg)_post_index")) {
			isRequired = true;
			if (!"".equals(fiasValue) && !fiasValue.matches("^\\d{6}$")) {
				errors.add("Неверно введено значение. Формат: '6 цифр'.");
			}
		} else if (parameterName.matches("(real|reg)_street_code")) {
			isRequired = true;
			if (!"".equals(fiasValue) && fiasValue.matches("(?ui)^(нет|нет\\sданных|отсутствует|\\-)$")) {
				errors.add("Значение параметра не введено или введено неверно.");
			}
		} else if (parameterName.matches("(real|reg)_house")) {
			if (!"".equals(fiasValue) && !fiasValue.matches("(?ui)^([А-Я\\d\\/\\-\\.\\_\\/]+|Б\\/Н)$")) {
				errors.add("Значение параметра не введено или введено неверно.");
			}
		} else if (parameterName.matches("(real|reg)_section")) {
			if (!"".equals(fiasValue) && !fiasValue.matches("(?ui)^([А-Я\\d\\/\\-\\.\\_\\/]+)$")) {
				errors.add("Значение параметра не введено или введено неверно.");
			}
		} else if (parameterName.matches("(real|reg)_building")) {
			if (!"".equals(fiasValue) && !fiasValue.matches("(?ui)^([А-Я\\d\\/\\-\\.\\_\\/]+)$")) {
				errors.add("Значение параметра не введено или введено неверно.");
			}
		} else if (parameterName.matches("(real|reg)_apartment")) {
			if (!"".equals(fiasValue) && fiasValue.matches(".*,.*")) {
				errors.add("Значение параметра не введено или введено неверно.");
			}
		} else if ("registration_date".equals(parameterName)) {
			isRequired = true;

			if (!"".equals(parameters.get(parameterName))) {
				Calendar registrationDate = Calendar.getInstance();
				try {
					registrationDate.setTime(new SimpleDateFormat("dd.MM.yyyy").parse(parameters.get(parameterName)));
	
					Calendar currentDate = Calendar.getInstance();
					currentDate.setTime(new Date());
					
					if (registrationDate.get(YEAR) < (currentDate.get(YEAR) - 70) || registrationDate.after(currentDate)) {
						errors.add("Неверно введено значение. Формат: 'Min год = Текущий год – 70, Max год = Текущий год'.");
					}
	
				} catch (ParseException e) {
					e.printStackTrace();
					errors.add("Значение параметра не введено или введено неверно.");
				}
			}

		} else if ("real_and_reg_equals".equals(parameterName)) {
			isRequired = true;
		} else if ("housing_type_id".equals(parameterName)) {
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
		
		AddressDao addressDao = new AddressDao();
		Map<String, String> daoParameters = mapDaoParameters(parameters);

		daoParameters.put(AddressFieldNames.IP_ADDRESS, iPAddress);
		daoParameters.put(AddressFieldNames.OPERATOR_ID, operatorId.toString());
		daoParameters.put(AddressFieldNames.APPLICATION_ID, applicationId.toString());

		daoParameters.put(AddressFieldNames.FORM_SHORTNAME, "formDebtorRegistrationPlace");
		daoParameters.put(AddressFieldNames.CUSTOMER_ID, applicationSummary.get(ApplicationSummaryFieldNames.A_CLIENT_ID));


		addressDao.createOrUpdate(daoParameters);
		
	}



}
		