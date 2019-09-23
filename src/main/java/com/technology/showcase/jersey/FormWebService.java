package com.technology.showcase.jersey;



import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.form.Service;
import com.technology.showcase.form.JefShowcaseFormFactory;
import com.technology.jef.server.dto.ErrorDto;
import com.technology.jef.server.dto.FormDto;
import com.technology.jef.server.dto.ListDto;
import com.technology.jef.server.dto.ListItemDto;
import com.technology.jef.server.dto.ResultDto;
import com.technology.jef.server.dto.ValueDto;
import static com.technology.jef.server.WebServiceConstant.*;
import static com.technology.jef.server.serialize.SerializeConstant.*;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Path("/form")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class FormWebService{
	
	@Context
	HttpServletRequest request;
	
	@Context
	HttpServletResponse response;
	
	private Service<JefShowcaseFormFactory> service = new Service<JefShowcaseFormFactory>(new JefShowcaseFormFactory());

	/**
	 * Получение параметров формы интерфейса консультанта
	 * 
	 * @param applicationId идентификатор анкеты
	 * @param cityId идентификатор города интерфейса консультанта
	 * @param formApi идентификатор контроллера интерфейса консультанта
	 * 
	 * @return список групп и параметров формы
	 * @throws ServiceException
	 */

	@GET
	@Path("/get")
	public FormDto getInterfaceData(
			@QueryParam(APPLICATION_ID) Integer applicationId,
			@QueryParam(CITY_ID) Integer cityId,
			@QueryParam(FORM_API) String formApi
			) throws ServiceException {


		FormDto interfaceData = null;
		try {
			interfaceData =  service.getFormData(applicationId, formApi, null, cityId, null);
		} catch ( ServiceException e) {
			if (e.getCause() instanceof IllegalArgumentException) {
				interfaceData = new FormDto(new ErrorDto(INCORRECT_PARAMETER_ERROR_CODE, e.getMessage()));
			} else {
				throw new ServiceException(e.getMessage(),e);
			}
		}

		
		return interfaceData;
		
	}

	/**
	 * Получение списка элементов параметра формы
	 * 
	 * @param applicationId идентификатор анкеты
	 * @param cityId идентификатор города интерфейса консультанта
	 * @param formApi идентификатор контроллера интерфейса консультанта
	 * @param parameterName наименование параметра формы
	 * 
	 * @return список элементов текущего параметра
	 * @throws ServiceException
	 */

	@POST
	@Path("/get_list")
	public ListDto<ListItemDto> getListData(
			@FormParam(APPLICATION_ID) Integer applicationId,
			@FormParam(CITY_ID) Integer cityId,
			@FormParam(FORM_API) String formApi,
			@FormParam(PARAMETER_NAME) String parameterName
			) throws ServiceException {

		HttpSession session = request.getSession();


		ListDto<ListItemDto> listData = null;
		try {
			return new ListDto<ListItemDto>(SERVICE_STATUS_OK, service.getListData(applicationId, formApi, null, cityId, parameterName));
			
		} catch ( ServiceException e) {
			if (e.getCause() instanceof IllegalArgumentException) {
				listData = new ListDto<ListItemDto>(new ErrorDto(INCORRECT_PARAMETER_ERROR_CODE, e.getMessage()));
			} else {
				throw new ServiceException(e.getMessage(),e);
			}
		}

		
		return listData;
		
	}

	/**
	 * Сохранение параметров формы
	 * 
	 * @param applicationId идентификатор анкеты
	 * @param cityId идентификатор города интерфейса консультанта
	 * @param parameters параметры, которые необходимо обработать
	 * 
	 * @return результат выполнения операции
	 * @throws ServiceException
	 */

	@POST
	@Path("/set")
	public ResultDto setFormData(
			@FormParam(APPLICATION_ID) Integer applicationId,
			@FormParam(CITY_ID) Integer cityId,
			@FormParam(PARAMETERS)String parameters
			) throws ServiceException {

		HttpSession session = request.getSession();

		String iPaddress = request.getRemoteAddr();
		ResultDto result = null;
		try {

			result = service.setFormData(applicationId, cityId, null, iPaddress, parameters);
		} catch ( ServiceException e) {
			if (e.getCause() instanceof IllegalArgumentException) {
				result = new ResultDto(new ErrorDto(INCORRECT_PARAMETER_ERROR_CODE, e.getMessage()));
			} else {
				throw new ServiceException(e.getMessage(),e);
			}
		}

		
		return result;
		
	}	


	/**
	 * Интерактивное получение списка элементов для параметра формы
	 * 
	 * @param applicationId идентификатор анкеты
	 * @param cityId идентификатор города интерфейса консультанта
	 * @param formApi идентификатор контроллера интерфейса консультанта
	 * @param parameterName наименование параметра формы
	 * @param parameters параметры, влияющие на список элементов
	 * 
	 * @return список элементов текущего параметра
	 * @throws ServiceException
	 */

	@POST
	@Path("/get_list_interactive")
	public ListDto<ListItemDto> getListData(
			@FormParam(APPLICATION_ID) Integer applicationId,
			@FormParam(CITY_ID) Integer cityId,
			@FormParam(FORM_API) String formApi,
			@FormParam(PARAMETER_NAME) String parameterName,
			@FormParam(PARAMETERS)String parameters
			) throws ServiceException {

		HttpSession session = request.getSession();


		ListDto<ListItemDto> listData = null;
		try {
			return new ListDto<ListItemDto>(SERVICE_STATUS_OK, service.getListData(applicationId, formApi, null, cityId, parameterName, listToMap(parameters)));
			
		} catch ( ServiceException e) {
			if (e.getCause() instanceof IllegalArgumentException) {
				listData = new ListDto<ListItemDto>(new ErrorDto(INCORRECT_PARAMETER_ERROR_CODE, e.getMessage()));
			} else {
				throw new ServiceException(e.getMessage(),e);
			}
		}

		
		return listData;
		
	}	

	
	/**
	 * Интерактивное получение значения параметра формы
	 * 
	 * @param applicationId идентификатор анкеты
	 * @param cityId идентификатор города интерфейса консультанта
	 * @param formApi идентификатор контроллера интерфейса консультанта
	 * @param parameterName наименование параметра формы
	 * @param parameters параметры, влияющие на список элементов
	 * 
	 * @return знечение параметра формы
	 * @throws ServiceException
	 */

	@POST
	@Path("/get_value_interactive")
	public ValueDto<String> getValue(
			@FormParam(APPLICATION_ID) Integer applicationId,
			@FormParam(CITY_ID) Integer cityId,
			@FormParam(FORM_API) String formApi,
			@FormParam(PARAMETER_NAME) String parameterName,
			@FormParam(PARAMETERS) String parameters
			) throws ServiceException {

		try {
		    parameters = java.net.URLDecoder.decode(parameters, StandardCharsets.UTF_8.name());
		} catch (UnsupportedEncodingException e) {
		    // not going to happen - value came from JDK's own StandardCharsets
		}
		
		HttpSession session = request.getSession();


		ValueDto<String> valueData = null;
		try {
			return new ValueDto<String>(SERVICE_STATUS_OK, service.getValueData(applicationId, formApi, null, cityId, parameterName, listToMap(parameters)));
			
		} catch ( ServiceException e) {
			if (e.getCause() instanceof IllegalArgumentException) {
				valueData = new ValueDto<String>(new ErrorDto(INCORRECT_PARAMETER_ERROR_CODE, e.getMessage()));
			} else {
				throw new ServiceException(e.getMessage(),e);
			}
		}

		
		return valueData;
		
	}	


	/**
	 * Интерактивное получение признака видимости параметра формы
	 * 
	 * @param applicationId идентификатор анкеты
	 * @param cityId идентификатор города интерфейса консультанта
	 * @param formApi идентификатор контроллера интерфейса консультанта
	 * @param parameterName наименование параметра формы
	 * @param parameters параметры, влияющие на список элементов
	 * 
	 * @return Признак видимости параметра формы true видим false не видим
	 * @throws ServiceException
	 */

	@POST
	@Path("/get_is_visible_interactive")
	public ValueDto<Boolean> getIsVisible(
			@FormParam(APPLICATION_ID) Integer applicationId,
			@FormParam(CITY_ID) Integer cityId,
			@FormParam(FORM_API) String formApi,
			@FormParam(PARAMETER_NAME) String parameterName,
			@FormParam(PARAMETERS) String parameters
			) throws ServiceException {

		HttpSession session = request.getSession();


		ValueDto<Boolean> valueData = null;
		try {
			return new ValueDto<Boolean>(SERVICE_STATUS_OK, service.getIsVisible(applicationId, formApi, null, cityId, parameterName, listToMap(parameters)));
			
		} catch ( ServiceException e) {
			if (e.getCause() instanceof IllegalArgumentException) {
				valueData = new ValueDto<Boolean>(new ErrorDto(INCORRECT_PARAMETER_ERROR_CODE, e.getMessage()));
			} else {
				throw new ServiceException(e.getMessage(),e);
			}
		}

		
		return valueData;
		
	}

	/**
	 * Интерактивное получение признака активности параметра формы
	 * 
	 * @param applicationId идентификатор анкеты
	 * @param cityId идентификатор города интерфейса консультанта
	 * @param formApi идентификатор контроллера интерфейса консультанта
	 * @param parameterName наименование параметра формы
	 * @param parameters параметры, влияющие на список элементов
	 * 
	 * @return Признак активности параметра формы true активен false не активен
	 * @throws ServiceException
	 */

	@POST
	@Path("/get_is_active_interactive")
	public ValueDto<Boolean> getIsActive(
			@FormParam(APPLICATION_ID) Integer applicationId,
			@FormParam(CITY_ID) Integer cityId,
			@FormParam(FORM_API) String formApi,
			@FormParam(PARAMETER_NAME) String parameterName,
			@FormParam(PARAMETERS) String parameters
			) throws ServiceException {

		HttpSession session = request.getSession();


		ValueDto<Boolean> valueData = null;
		try {
			return new ValueDto<Boolean>(SERVICE_STATUS_OK, service.getIsActive(applicationId, formApi, null, cityId, parameterName, listToMap(parameters)));
			
		} catch ( ServiceException e) {
			if (e.getCause() instanceof IllegalArgumentException) {
				valueData = new ValueDto<Boolean>(new ErrorDto(INCORRECT_PARAMETER_ERROR_CODE, e.getMessage()));
			} else {
				throw new ServiceException(e.getMessage(),e);
			}
		}

		
		return valueData;
		
	}


	private Map<String,String> listToMap(String list) {
		Map<String,String> parametersMap = new HashMap<String,String>();
		
		for (String parameter: list.split(PARAMETER_NAME_VALUE_SEPARATOR)) {
			Pattern pattern = Pattern.compile("(.*)"+PARAMETER_SEPARATOR+"(.*)");
			Matcher matcher = pattern.matcher(parameter);
			if (matcher.matches()) {
				parametersMap.put(matcher.group(1), matcher.group(2));
			}
		}
		return parametersMap;
		
	}
	
}
