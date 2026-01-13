
import React from 'react';

export type Language = 'en' | 'ar';

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  completion: number; // 0 to 100
  description: string;
  category: 'Industrial' | 'Agricultural' | 'Infrastructure';
}

export interface Vessel {
  id: string;
  name: string;
  type: string;
  capacity: string;
  payload: string;
  routes: string;
  status: 'Operational' | 'Maintenance' | 'Planned';
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconKey: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  email: string;
  formSubmissionEmail: string; // Destination for contact form
  phone: string[];
  address: string;
  vision: string;
  mission: string;
  logo: string;
  heroImage: string;
  heroTitle: string; 
  heroSubtitle: string;
  primaryColor: string; 
}

export interface UITranslations {
  nav: {
    home: string;
    about: string;
    departments: string;
    projects: string;
    contact: string;
    admin: string;
    getQuote: string;
  };
  home: {
    heroCta1: string;
    heroCta2: string;
    coreDepts: string;
    coreDeptsSub: string;
    deptTrading: string;
    deptShipping: string;
    deptProjects: string;
    learnMore: string;
    viewFleet: string;
    checkProgress: string;
    ourFleet: string;
    viewFullDetails: string;
    futureGrowth: string;
    activeProjects: string;
    seeAllProjects: string;
    readyToPartner: string;
    readyToPartnerDesc: string;
    contactUsToday: string;
  };
  about: {
    title: string;
    subtitle: string;
    visionTitle: string;
    missionTitle: string;
    values: string[];
    historyTitle: string;
    historySubtitle: string;
  };
  departments: {
    title: string;
    subtitle: string;
    tabTrading: string;
    tabShipping: string;
    tradingTitle: string;
    tradingDesc: string;
    shippingTitle: string;
    shippingDesc: string;
    businessNames: string;
    capacity: string;
    payload: string;
    route: string;
    expandingReach: string;
    expandingReachDesc: string;
  };
  projects: {
    title: string;
    subtitle: string;
    activeProjects: string;
    portfolioOverview: string;
    statsDesc: string;
    reclaimedAcres: string;
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    getInTouchDesc: string;
    headquarters: string;
    emailUs: string;
    callUs: string;
    viewMap: string;
    ourLocation: string;
    sendMessage: string;
    formName: string;
    formPhone: string;
    formEmail: string;
    formCompany: string;
    formMessage: string;
    formConsent: string;
    formSubmit: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    contactUs: string;
    partnerTitle: string;
    partnerDesc: string;
    rightsReserved: string;
    privacy: string;
    terms: string;
    cookies: string;
  }
}

export interface SiteData {
  companyInfo: CompanyInfo;
  timeline: TimelineEvent[];
  projects: Project[];
  vessels: Vessel[];
  services: Service[];
  translations: UITranslations;
}
