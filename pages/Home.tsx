
import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { Icons } from '../constants';

const Home: React.FC = () => {
  const { vessels, projects, companyInfo, t, language } = useContent();

  return (
    <div className="animate-fade-in">
      {/* Immersive Full-Screen Hero Section */}
      <section className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with optimized loading */}
        <div className="absolute inset-0 z-0">
          <img 
            src={companyInfo.heroImage} 
            alt="KTSC Hero" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
          {/* Multi-layered Gradient Overlay for maximum legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-ktsc-red/20 backdrop-blur-md border border-ktsc-red/30 mb-4 animate-fade-in-up">
              <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
                {companyInfo.shortName} – Since 1929
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] drop-shadow-2xl animate-fade-in-up [animation-delay:200ms]">
              {companyInfo.heroTitle}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto drop-shadow-md animate-fade-in-up [animation-delay:400ms]">
              {companyInfo.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up [animation-delay:600ms]">
              <Link 
                to="/departments" 
                className="w-full sm:w-auto bg-ktsc-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-1 active:scale-95"
              >
                {t.home.heroCta1}
              </Link>
              <Link 
                to="/projects" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-md hover:border-white shadow-xl transform hover:-translate-y-1 active:scale-95"
              >
                {t.home.heroCta2}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1 backdrop-blur-sm">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">{t.home.coreDepts}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t.home.coreDeptsSub}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-50 p-10 rounded-3xl transition-all hover:bg-white hover:shadow-2xl border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-red-100 text-ktsc-red rounded-2xl flex items-center justify-center mb-8 group-hover:bg-ktsc-red group-hover:text-white transition-all duration-300 transform group-hover:rotate-3 shadow-sm">
                <Icons.Globe />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.home.deptTrading}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{t.departments.tradingDesc.substring(0, 120)}...</p>
              <Link to="/departments" className="text-ktsc-red font-bold hover:gap-3 transition-all flex items-center gap-2 rtl:flex-row-reverse w-fit group/btn">
                {t.home.learnMore} 
                <span className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
            
            <div className="group bg-gray-50 p-10 rounded-3xl transition-all hover:bg-white hover:shadow-2xl border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-red-100 text-ktsc-red rounded-2xl flex items-center justify-center mb-8 group-hover:bg-ktsc-red group-hover:text-white transition-all duration-300 transform group-hover:rotate-3 shadow-sm">
                <Icons.Ship />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.home.deptShipping}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{t.departments.shippingDesc.substring(0, 120)}...</p>
              <Link to="/departments" className="text-ktsc-red font-bold hover:gap-3 transition-all flex items-center gap-2 rtl:flex-row-reverse w-fit group/btn">
                {t.home.viewFleet} 
                <span className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

            <div className="group bg-gray-50 p-10 rounded-3xl transition-all hover:bg-white hover:shadow-2xl border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-red-100 text-ktsc-red rounded-2xl flex items-center justify-center mb-8 group-hover:bg-ktsc-red group-hover:text-white transition-all duration-300 transform group-hover:rotate-3 shadow-sm">
                <Icons.Factory />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.home.deptProjects}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{t.projects.statsDesc.substring(0, 120)}...</p>
              <Link to="/projects" className="text-ktsc-red font-bold hover:gap-3 transition-all flex items-center gap-2 rtl:flex-row-reverse w-fit group/btn">
                {t.home.checkProgress} 
                <span className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vessels Section - Dark Modern Style */}
      <section className="py-24 bg-ktsc-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-ktsc-red/5 skew-x-12 translate-x-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-ktsc-red font-bold uppercase tracking-widest text-sm mb-2 block">{t.departments.tabShipping}</span>
              <h2 className="text-4xl font-display font-bold text-white">{t.home.ourFleet}</h2>
            </div>
            <Link to="/departments" className="mt-6 md:mt-0 text-white border border-white/20 hover:bg-white hover:text-ktsc-dark px-8 py-3 rounded-full transition-all font-bold text-sm">
              {t.home.viewFullDetails}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {vessels.map((vessel, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all group backdrop-blur-sm">
                <div className="h-72 overflow-hidden relative">
                  <img src={vessel.image} alt={vessel.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" />
                  <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 bg-ktsc-red text-white text-[10px] font-black uppercase tracking-tighter px-4 py-1.5 rounded-full shadow-2xl">
                    {vessel.status}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold font-display mb-2 text-white">{vessel.name}</h3>
                  <p className="text-gray-400 font-medium mb-6 uppercase tracking-widest text-xs">{vessel.type}</p>
                  <div className="flex justify-between items-center text-sm border-t border-white/10 pt-6">
                    <div className="flex flex-col">
                      <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest mb-1">{t.departments.route}</span>
                      <span className="text-gray-200">{vessel.routes}</span>
                    </div>
                    <div className="text-end flex flex-col">
                      <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest mb-1">{t.departments.capacity}</span>
                      <span className="text-ktsc-red font-mono font-bold text-lg">{vessel.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-ktsc-red font-black tracking-[0.2em] uppercase text-xs mb-3 block">{t.home.futureGrowth}</span>
            <h2 className="text-4xl font-display font-bold text-gray-900">{t.home.activeProjects}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg ${project.category === 'Industrial' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                    {project.category}
                  </span>
                  <div className="text-right">
                    <span className="text-sm font-black text-gray-900 block leading-none">{project.completion}%</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Done</span>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{project.title}</h3>
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6 overflow-hidden">
                  <div className="bg-ktsc-red h-full rounded-full transition-all duration-[2000ms] shadow-sm" style={{ width: `${project.completion}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-2 text-ktsc-red font-bold text-xs uppercase tracking-widest">
                  <Icons.MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/projects" className="inline-flex items-center text-gray-900 font-bold hover:text-ktsc-red transition-all gap-2 rtl:flex-row-reverse group border-b-2 border-transparent hover:border-ktsc-red pb-1">
               {t.home.seeAllProjects} 
               <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-ktsc-red relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-white">{t.home.readyToPartner}</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.home.readyToPartnerDesc}
          </p>
          <Link to="/contact" className="inline-block bg-white text-ktsc-red px-14 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-2 hover:scale-105 active:scale-95">
            {t.home.contactUsToday}
          </Link>
        </div>
      </section>

      <style>
        {`
          @keyframes slow-zoom {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
          }
          .animate-slow-zoom {
            animation: slow-zoom 20s infinite alternate ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
