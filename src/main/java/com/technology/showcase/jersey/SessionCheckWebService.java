package com.technology.showcase.jersey;



import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.technology.jef.server.exceptions.ServiceException;
import com.technology.jef.server.dto.StatusDto;

import static com.technology.jef.server.WebServiceConstant.*;

@Path("/seseion")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class SessionCheckWebService{
	@Context
	HttpServletRequest request;
	
	@Context
	HttpServletResponse response;
	
	
	@GET
	@Path("/check")
	public StatusDto check() throws ServiceException {

		// Check credentials

		return new StatusDto(SERVICE_STATUS_OK);
	}

	

}
