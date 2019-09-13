package com.technology.showcase.form;

import com.technology.jef.server.form.Form;
import com.technology.jef.server.form.FormFactory;


import com.technology.jef.server.exceptions.ServiceException;
import static com.technology.showcase.form.JefShowcaseFormNames.*;


public class JefShowcaseFormFactory  extends FormFactory {


		@Override
		public Form getForm(String name) throws ServiceException {
			JefShowcaseFormNames d;
			Form form = null;
			// Выбираем форму в зависимости от имени
			switch (name) {
			case PERSON:
				form = new PersonForm();
				break;
			case PHONE:
				form = new PhoneForm();
				break;
			default:
				throw new ServiceException("Form not found " + name, null);
			}
			
			return form;
			
		}
	
}
