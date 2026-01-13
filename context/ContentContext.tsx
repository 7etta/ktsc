
import React, { createContext, useContext, useState, useEffect } from 'react';
import { TimelineEvent, Project, Vessel, Service, CompanyInfo, Language, UITranslations, SiteData } from '../types';
import { INITIAL_DATA_EN, INITIAL_DATA_AR } from '../constants';

interface ContentContextType {
  language: Language;
  toggleLanguage: () => void;
  t: UITranslations; 
  
  timeline: TimelineEvent[];
  projects: Project[];
  vessels: Vessel[];
  services: Service[];
  companyInfo: CompanyInfo;

  updateCompanyInfo: (info: CompanyInfo) => void;
  updateTranslations: (translations: UITranslations) => void;
  
  updateProject: (project: Project) => void;
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  
  updateVessel: (vessel: Vessel) => void;
  addVessel: (vessel: Vessel) => void;
  deleteVessel: (id: string) => void;
  
  updateService: (service: Service) => void;
  addService: (service: Service) => void;
  deleteService: (id: string) => void;

  updateTimelineEvent: (event: TimelineEvent) => void;
  addTimelineEvent: (event: TimelineEvent) => void;
  deleteTimelineEvent: (id: string) => void;

  resetData: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('ktsc_lang');
    return (saved as Language) || 'en';
  });

  const [dataEn, setDataEn] = useState<SiteData>(() => {
    const saved = localStorage.getItem('ktsc_content_en');
    return saved ? JSON.parse(saved) : INITIAL_DATA_EN;
  });

  const [dataAr, setDataAr] = useState<SiteData>(() => {
    const saved = localStorage.getItem('ktsc_content_ar');
    return saved ? JSON.parse(saved) : INITIAL_DATA_AR;
  });

  useEffect(() => {
    localStorage.setItem('ktsc_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('ktsc_content_en', JSON.stringify(dataEn));
  }, [dataEn]);

  useEffect(() => {
    localStorage.setItem('ktsc_content_ar', JSON.stringify(dataAr));
  }, [dataAr]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const currentData = language === 'en' ? dataEn : dataAr;
  const setCurrentData = language === 'en' ? setDataEn : setDataAr;
  const t = currentData.translations;

  const updateCompanyInfo = (info: CompanyInfo) => {
    setCurrentData(prev => ({ ...prev, companyInfo: info }));
    const otherSetter = language === 'en' ? setDataAr : setDataEn;
    otherSetter(prev => ({
       ...prev, 
       companyInfo: { 
         ...prev.companyInfo, 
         primaryColor: info.primaryColor, 
         logo: info.logo, 
         heroImage: info.heroImage,
         formSubmissionEmail: info.formSubmissionEmail 
       } 
    }));
  };

  const updateTranslations = (translations: UITranslations) => {
    setCurrentData(prev => ({ ...prev, translations }));
  };

  const updateProject = (project: Project) => {
    setCurrentData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === project.id ? project : p)
    }));
  };

  const addProject = (project: Project) => {
    setCurrentData(prev => ({ ...prev, projects: [...prev.projects, project] }));
  };

  const deleteProject = (id: string) => {
    setCurrentData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
  };

  const updateVessel = (vessel: Vessel) => {
    setCurrentData(prev => ({
      ...prev,
      vessels: prev.vessels.map(v => v.id === vessel.id ? vessel : v)
    }));
  };

  const addVessel = (vessel: Vessel) => {
    setCurrentData(prev => ({ ...prev, vessels: [...prev.vessels, vessel] }));
  };

  const deleteVessel = (id: string) => {
    setCurrentData(prev => ({ ...prev, vessels: prev.vessels.filter(v => v.id !== id) }));
  };

  const updateService = (service: Service) => {
    setCurrentData(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === service.id ? service : s)
    }));
  };

  const addService = (service: Service) => {
    setCurrentData(prev => ({ ...prev, services: [...prev.services, service] }));
  };

  const deleteService = (id: string) => {
    setCurrentData(prev => ({ ...prev, services: prev.services.filter(s => s.id !== id) }));
  };

  const updateTimelineEvent = (event: TimelineEvent) => {
    setCurrentData(prev => ({
      ...prev,
      timeline: prev.timeline.map(t => t.id === event.id ? event : t)
    }));
  };

  const addTimelineEvent = (event: TimelineEvent) => {
    setCurrentData(prev => ({ 
      ...prev, 
      timeline: [...prev.timeline, event].sort((a, b) => parseInt(a.year) - parseInt(b.year)) 
    }));
  };

  const deleteTimelineEvent = (id: string) => {
    setCurrentData(prev => ({ ...prev, timeline: prev.timeline.filter(t => t.id !== id) }));
  };

  const resetData = () => {
    setDataEn(INITIAL_DATA_EN);
    setDataAr(INITIAL_DATA_AR);
  };

  return (
    <ContentContext.Provider value={{
      language,
      toggleLanguage,
      t,
      ...currentData,
      updateCompanyInfo,
      updateTranslations,
      updateProject,
      addProject,
      deleteProject,
      updateVessel,
      addVessel,
      deleteVessel,
      updateService,
      addService,
      deleteService,
      updateTimelineEvent,
      addTimelineEvent,
      deleteTimelineEvent,
      resetData
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
