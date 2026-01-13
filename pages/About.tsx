import React from 'react';
import { useContent } from '../context/ContentContext';

const About: React.FC = () => {
  const { timeline, companyInfo, t } = useContent();

  return (
    <div className="animate-fade-in bg-white">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-1/3 h-full bg-ktsc-red/10 skew-x-12 transform translate-x-20 rtl:-translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{t.about.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {t.about.subtitle}
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-10 rounded-3xl border-l-8 rtl:border-l-0 rtl:border-r-8 border-ktsc-red shadow-sm">
            <h2 className="text-2xl font-bold font-display mb-4 text-ktsc-dark">{t.about.visionTitle}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              "{companyInfo.vision}"
            </p>
          </div>
          <div className="bg-ktsc-dark p-10 rounded-3xl border-l-8 rtl:border-l-0 rtl:border-r-8 border-gray-600 shadow-sm text-white">
            <h2 className="text-2xl font-bold font-display mb-4">{t.about.missionTitle}</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              "{companyInfo.mission}"
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.about.values.map((val, idx) => (
            <div key={idx} className="text-center p-6 border rounded-xl hover:border-ktsc-red transition group">
              <div className="w-12 h-12 mx-auto bg-red-50 text-ktsc-red rounded-full flex items-center justify-center mb-4 group-hover:bg-ktsc-red group-hover:text-white transition">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">{val}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900">{t.about.historyTitle}</h2>
            <p className="text-gray-600 mt-2">{t.about.historySubtitle}</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 rtl:right-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={event.year} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12"></div>
                  
                  <div className="absolute left-1/2 rtl:right-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 w-8 h-8 rounded-full bg-ktsc-red border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                    <span className="text-ktsc-red font-bold text-xl block mb-2">{event.year}</span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;