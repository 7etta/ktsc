
import React from 'react';
import { TimelineEvent, Project, Vessel, Service, CompanyInfo, UITranslations, SiteData } from './types';

export const Icons: Record<string, React.FC<any>> = {
  Ship: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.74-.2 2.25-.572m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 18 9.75m-12.75-3h12.75c.896 0 1.74-.2 2.25-.572M6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v3.006c0 .506-.2.991-.571 1.353A2.995 2.995 0 0 1 15 12.006V21M5.25 12.006V21" />
    </svg>
  ),
  Globe: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  Factory: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5M9 12.75h1.5M9 18.75h1.5M13.5 6.75h1.5M13.5 12.75h1.5M13.5 18.75h1.5M6 6.75h.75M6 12.75h.75M6 18.75h.75M17.25 6.75h.75M17.25 12.75h.75M17.25 18.75h.75" />
    </svg>
  ),
  CheckCircle: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  Chart: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
  MapPin: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
};

const INITIAL_TRANSLATIONS_EN: UITranslations = {
  nav: {
    home: "Home",
    about: "About",
    departments: "Departments",
    projects: "Projects",
    contact: "Contact",
    admin: "Admin",
    getQuote: "Get a Quote"
  },
  home: {
    heroCta1: "Explore Shipping Fleet",
    heroCta2: "See Active Projects",
    coreDepts: "Core Departments",
    coreDeptsSub: "We operate at the intersection of commerce and logistics, providing integrated solutions for the nation.",
    deptTrading: "Trading",
    deptShipping: "Shipping",
    deptProjects: "Projects",
    learnMore: "Learn more",
    viewFleet: "View Fleet",
    checkProgress: "Check Progress",
    ourFleet: "Our Fleet",
    viewFullDetails: "View Full Details",
    futureGrowth: "Future Growth",
    activeProjects: "Active Projects",
    seeAllProjects: "See all upcoming projects",
    readyToPartner: "Ready to work with KTSC?",
    readyToPartnerDesc: "From logistics to manufacturing, we are building the future of Sudan's economy. Contact us to discuss partnership opportunities.",
    contactUsToday: "Contact Us Today"
  },
  about: {
    title: "About KTSC",
    subtitle: "A legacy that began in 1929, transforming through decades to become a pillar of Sudan's economic and military infrastructure.",
    visionTitle: "Our Vision",
    missionTitle: "Our Mission",
    values: ["Professional Service", "High Quality Execution", "Qualified HR", "Maritime Excellence"],
    historyTitle: "Our History",
    historySubtitle: "The evolution of Khartoum Trading & Shipping Co."
  },
  departments: {
    title: "Our Departments",
    subtitle: "Specialized divisions working in unison to deliver excellence in trade, manufacturing, and marine transport.",
    tabTrading: "Trading & Industry",
    tabShipping: "Shipping & Marine",
    tradingTitle: "Trading Capabilities",
    tradingDesc: "Our trading branch is pivotal, focusing on import, export, and manufacturing. We aim to satisfy the Armed Forces' requirements while contributing significantly to the local market through our diverse subsidiaries.",
    shippingTitle: "Marine Fleet",
    shippingDesc: "A cornerstone of our operations, our marine department owns and operates vessels to secure supply chains and support the national economy.",
    businessNames: "Business Names & Subsidiaries",
    capacity: "Capacity",
    payload: "Payload",
    route: "Route",
    expandingReach: "Expanding Our Reach",
    expandingReachDesc: "KTSC is actively working on forming a larger marine fleet as a strategic step to further develop business and support the national economy."
  },
  projects: {
    title: "What's Next",
    subtitle: "Tracking our development in industrial and agricultural sectors.",
    activeProjects: "Active Projects",
    portfolioOverview: "Portfolio Overview",
    statsDesc: "KTSC is aggressively increasing capital assets by entering industrial projects. Revenue focus is shifting towards goods diversification and maximizing agency returns.",
    reclaimedAcres: "Acres Reclaimed in Gedaref"
  },
  contact: {
    title: "Contact Us",
    subtitle: "Get in touch with our headquarters in Port Sudan.",
    getInTouch: "Get in touch",
    getInTouchDesc: "Whether you have a question about our shipping routes, trading capabilities, or partnership opportunities, our team is ready to answer all your questions.",
    headquarters: "Headquarters",
    emailUs: "Email Us",
    callUs: "Call Us",
    viewMap: "View on Google Maps",
    ourLocation: "Our Location",
    sendMessage: "Send us a message",
    formName: "Full Name",
    formPhone: "Phone Number",
    formEmail: "Email Address",
    formCompany: "Company (Optional)",
    formMessage: "Message",
    formConsent: "I agree to the privacy policy",
    formSubmit: "Send Message"
  },
  footer: {
    desc: "Strengthening Sudan’s trade and maritime capability since 1929. A legacy of resilience and growth.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    partnerTitle: "Ready to Partner?",
    partnerDesc: "Get a quote for shipping or logistics services today.",
    rightsReserved: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Settings"
  }
};

const INITIAL_TRANSLATIONS_AR: UITranslations = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    departments: "الأقسام",
    projects: "المشاريع",
    contact: "اتصل بنا",
    admin: "المسؤول",
    getQuote: "احصل على عرض"
  },
  home: {
    heroCta1: "استكشف أسطول الشحن",
    heroCta2: "شاهد المشاريع الحالية",
    coreDepts: "الأقسام الرئيسية",
    coreDeptsSub: "نعمل في تقاطع التجارة والخدمات اللوجستية، مقدمين حلولاً متكاملة للأمة.",
    deptTrading: "التجارة",
    deptShipping: "الشحن",
    deptProjects: "المشاريع",
    learnMore: "اعرف المزيد",
    viewFleet: "عرض الأسطول",
    checkProgress: "تابع التقدم",
    ourFleet: "أسطولنا",
    viewFullDetails: "عرض التفاصيل الكاملة",
    futureGrowth: "النمو المستقبلي",
    activeProjects: "المشاريع النشطة",
    seeAllProjects: "شاهد جميع المشاريع القادمة",
    readyToPartner: "جاهز للعمل مع KTSC؟",
    readyToPartnerDesc: "من الخدمات اللوجستية إلى التصنيع، نحن نبني مستقبل الاقتصاد السوداني. اتصل بنا لمناقشة فرص الشراكة.",
    contactUsToday: "اتصل بنا اليوم"
  },
  about: {
    title: "عن شركة الخرطوم",
    subtitle: "إرث بدأ في عام 1929، وتحول عبر العقود ليصبح ركيزة من ركائز البنية التحتية الاقتصادية والعسكرية في السودان.",
    visionTitle: "رؤيتنا",
    missionTitle: "مهمتنا",
    values: ["خدمة احترافية", "تنفيذ عالي الجودة", "موارد بشرية مؤهلة", "تميز بحري"],
    historyTitle: "تاريخنا",
    historySubtitle: "تطور شركة الخرطوم للتجارة والملاحة المحدودة"
  },
  departments: {
    title: "أقسامنا",
    subtitle: "أقسام متخصصة تعمل بانسجام لتقديم التميز في التجارة والتصنيع والنقل البحري.",
    tabTrading: "التجارة والصناعة",
    tabShipping: "الشحن والملاحة",
    tradingTitle: "القدرات التجارية",
    tradingDesc: "فرع التجارة لدينا محوري، ويركز على الاستيراد والتصدير والتصنيع. نهدف إلى تلبية متطلبات القوات المسلحة مع المساهمة بشكل كبير في السوق المحلي من خلال شركاتنا التابعة المتنوعة.",
    shippingTitle: "الأسطول البحري",
    shippingDesc: "حجر الزاوية في عملياتنا، يمتلك قسمنا البحري ويدير سفناً لتأمين سلاسل التوريد ودعم الاقتصاد الوطني.",
    businessNames: "الأسماء التجارية والشركات التابعة",
    capacity: "السعة",
    payload: "الحمولة",
    route: "المسار",
    expandingReach: "توسيع نطاقنا",
    expandingReachDesc: "تعمل KTSC بنشاط على تشكيل أسطول بحري أكبر كخطوة استراتيجية لتطوير الأعمال ودعم الاقتصاد الوطني."
  },
  projects: {
    title: "ماذا بعد",
    subtitle: "تتبع تطورنا في القطاعات الصناعية والزراعية.",
    activeProjects: "المشاريع النشطة",
    portfolioOverview: "نظرة عامة على المحفظة",
    statsDesc: "تقوم KTSC بزيادة الأصول الرأسمالية بقوة من خلال الدخول في مشاريع صناعية. يتحول التركيز في الإيرادات نحو تنويع البضائع وتعظيم عوائد الوكالات.",
    reclaimedAcres: "فدان مستصلح في القضارف"
  },
  contact: {
    title: "اتصل بنا",
    subtitle: "تواصل مع مقرنا الرئيسي في بورتسودان.",
    getInTouch: "تواصل معنا",
    getInTouchDesc: "سواء كان لديك سؤال حول طرق الشحن الخاصة بنا، أو قدرات التداول، أو فرص الشراكة، فإن فريقنا مستعد للإجابة على جميع أسئلتك.",
    headquarters: "المقر الرئيسي",
    emailUs: "راسلنا عبر البريد الإلكتروني",
    callUs: "اتصل بنا",
    viewMap: "عرض على خرائط جوجل",
    ourLocation: "موقعنا",
    sendMessage: "أرسل لنا رسالة",
    formName: "الاسم الكامل",
    formPhone: "رقم الهاتف",
    formEmail: "عنوان البريد الإلكتروني",
    formCompany: "الشركة (اختياري)",
    formMessage: "الرسالة",
    formConsent: "أوافق على سياسة الخصوصية",
    formSubmit: "إرسال الرسالة"
  },
  footer: {
    desc: "تعزيز قدرات السودان التجارية والبحرية منذ عام 1929. إرث من الصمود والنمو.",
    quickLinks: "روابط سريعة",
    contactUs: "اتصل بنا",
    partnerTitle: "جاهز للشراكة؟",
    partnerDesc: "احصل على عرض لخدمات الشحن أو الخدمات اللوجستية اليوم.",
    rightsReserved: "جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    cookies: "إعدادات ملفات تعريف الارتباط"
  }
};

export const INITIAL_DATA_EN: SiteData = {
  companyInfo: {
    name: "Khartoum Trading & Shipping Co. Ltd.",
    shortName: "KTSC",
    email: "INFO@KTSC.LTD",
    formSubmissionEmail: "INQUIRIES@KTSC.LTD",
    phone: ["+29311828118", "+249311823412"],
    address: "1/1 Al Muna St, Block 5, Port Sudan, PO Box 242",
    vision: "To strengthen Sudan's trade and maritime capabilities and serve national market needs through reliable logistics, manufacturing, and fleet operations.",
    mission: "Providing high-quality import/export services, developing industrial and agricultural projects, and operating a capable marine fleet to support the Armed Forces and local economy.",
    logo: "https://picsum.photos/seed/ktsc-logo/200/200",
    heroImage: "https://picsum.photos/seed/ktsc-hero/1200/800",
    heroTitle: "Driving Trade & Shipping Across Sudan and the Red Sea",
    heroSubtitle: "Since 1929, KTSC has been the backbone of national logistics, empowering the Armed Forces and local economy with reliable import, export, and maritime solutions.",
    primaryColor: "#D52B1E"
  },
  timeline: [
    { id: "t1", year: "1929", title: "Establishment", description: "Founded under the name Mitchell Cotts." },
    { id: "t2", year: "1970", title: "Nationalization", description: "Incorporated into the Public Corporation for Trade and Foreign Affairs." },
    { id: "t3", year: "1982", title: "Military Economic Corp", description: "Became one of the Military Economic Corporation companies." }
  ],
  projects: [
    { id: "1", title: "Food & Tea Packing Line", location: "KTSC Industrial Area", completion: 90, category: 'Industrial', description: "Advanced packaging facility nearing completion." }
  ],
  vessels: [
    {
      id: "v1",
      name: "BLUE GOLD",
      type: "Multi-purpose Bulk Carrier",
      capacity: "912 Containers",
      payload: "12,000 Tons",
      routes: "Red Sea Trips",
      status: "Operational",
      description: "Refurbished and fully operational.",
      image: "https://picsum.photos/seed/ship1/800/600"
    }
  ],
  services: [
    { id: "s1", title: "Import & Export", description: "Comprehensive trade solutions.", iconKey: "Globe" }
  ],
  translations: INITIAL_TRANSLATIONS_EN
};

export const INITIAL_DATA_AR: SiteData = {
  companyInfo: {
    ...INITIAL_DATA_EN.companyInfo,
    name: "شركة الخرطوم للتجارة والملاحة المحدودة",
    address: "1/1 شارع المنى، مربع 5، بورتسودان، ص.ب: 242",
    vision: "تعزيز قدرات السودان التجارية والبحرية وخدمة احتياجات السوق الوطني.",
    mission: "تقديم خدمات استيراد وتصدير عالية الجودة، وتنمية المشاريع الصناعية والزراعية.",
    heroTitle: "ريادة التجارة والشحن عبر السودان والبحر الأحمر",
    heroSubtitle: "منذ عام 1929، كانت KTSC العمود الفقري للوجستيات الوطنية."
  },
  timeline: [
    { id: "t1", year: "1929", title: "التأسيس", description: "تأسست تحت اسم ميتشل كوتس." }
  ],
  projects: [
    { id: "1", title: "خط تعبئة المواد الغذائية والشاي", location: "منطقة KTSC الصناعية", completion: 90, category: 'Industrial', description: "منشأة تعبئة متقدمة تقترب من الاكتمال." }
  ],
  vessels: [
    {
      id: "v1",
      name: "BLUE GOLD",
      type: "ناقلة بضائع سائبة متعددة الأغراض",
      capacity: "912 حاوية",
      payload: "12,000 طن",
      routes: "رحلات البحر الأحمر",
      status: "Operational",
      description: "مجددة وتعمل بكامل طاقتها.",
      image: "https://picsum.photos/seed/ship1/800/600"
    }
  ],
  services: [
    { id: "s1", title: "الاستيراد والتصدير", description: "حلول تجارية شاملة.", iconKey: "Globe" }
  ],
  translations: INITIAL_TRANSLATIONS_AR
};

export const INITIAL_DATA = INITIAL_DATA_EN;
