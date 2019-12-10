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
			case ABOUT_ME:
				form = new AboutMeForm();
				break;
			case ADDRESS:
				form = new AddressForm();
				break;
			case MULTIPASS:
				form = new MultiPassForm();
				break;
			case SPACESHIP:
				form = new SpaceshipForm();
				break;
			case ACHIEVEMENT:
				form = new AchievementForm();
				break;
				
			default:
				throw new ServiceException("Form not found " + name, null);
			}
			
			return form;
			
		}
	
}
