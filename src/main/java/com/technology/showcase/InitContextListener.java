package com.technology.showcase;

import javax.servlet.ServletContextEvent;  
import javax.servlet.ServletContextListener;

import com.technology.jef.server.exceptions.ServiceException;
import com.technology.showcase.dao.AboutMeDao;
import com.technology.showcase.dao.AchievementPilotDao;
import com.technology.showcase.dao.AchievementTypeDao;
import com.technology.showcase.dao.AddressDao;
import com.technology.showcase.dao.EngineTypeDao;
import com.technology.showcase.dao.EngineTypeFactoryDao;
import com.technology.showcase.dao.FactoryDao;
import com.technology.showcase.dao.GalaxyDao;
import com.technology.showcase.dao.GenderDao;
import com.technology.showcase.dao.H2Dao;
import com.technology.showcase.dao.MultiPassDao;
import com.technology.showcase.dao.PlanetDao;
import com.technology.showcase.dao.RegionDao;
import com.technology.showcase.dao.SocialStatusDao;
import com.technology.showcase.dao.SpaceshipDao;

public class InitContextListener implements ServletContextListener {
	@Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        System.out.println("Init H2 database");
        
        try {
        	new AboutMeDao().init();
			new AddressDao().init();
			new EngineTypeDao().init();
			new EngineTypeFactoryDao().init();
			new FactoryDao().init();
			new GalaxyDao().init();
			new GenderDao().init();
			new MultiPassDao().init();
			new PlanetDao().init();
			new RegionDao().init();
			new SocialStatusDao().init();
			new SpaceshipDao().init();
			new AchievementPilotDao().init();
			new AchievementTypeDao().init();
        } catch (ServiceException e) {
			e.printStackTrace();
        }
    }

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		try {
			H2Dao.close();
		} catch (ServiceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		ServletContextListener.super.contextDestroyed(sce);
	}
}
