import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Icons } from '../constants';

const Departments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trading' | 'shipping'>('trading');
  const { vessels, services, t } = useContent();

  const renderIcon = (key: string) => {
    const IconComponent = Icons[key];
    return IconComponent ? <IconComponent /> : <Icons.Globe />;
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-ktsc-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">{t.departments.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.departments.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('trading')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition ${
                activeTab === 'trading' 
                  ? 'bg-white text-ktsc-red shadow-md' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t.departments.tabTrading}
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition ${
                activeTab === 'shipping' 
                  ? 'bg-white text-ktsc-red shadow-md' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t.departments.tabShipping}
            </button>
          </div>
        </div>

        {activeTab === 'trading' && (
          <div className="animate-fade-in-up">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">{t.departments.tradingTitle}</h2>
              <p className="text-gray-600">
                {t.departments.tradingDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition duration-300">
                  <div className="text-ktsc-red mb-4">{renderIcon(service.iconKey)}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">{t.departments.businessNames}</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "KTSC Mining", 
                  "Khartoum Logistics for Land Transport", 
                  "KTSC Oil Manufacturing Factory", 
                  "Tuarit Factory for Water Treatment", 
                  "KTSC Agricultural Projects"
                ].map((name, i) => (
                  <span key={i} className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200 text-gray-800 font-medium">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="animate-fade-in-up">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">{t.departments.shippingTitle}</h2>
              <p className="text-gray-600">
                {t.departments.shippingDesc}
              </p>
            </div>

            <div className="space-y-12">
              {vessels.map((vessel, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="lg:w-1/2 h-80 lg:h-auto relative">
                     <img src={vessel.image} alt={vessel.name} className="w-full h-full object-cover" />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-3xl font-bold text-white font-display">{vessel.name}</h3>
                     </div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-2">
                        {vessel.status}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900">{vessel.type}</h4>
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-lg">{vessel.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="border-t pt-4">
                        <span className="block text-xs text-gray-400 uppercase tracking-wider font-semibold">{t.departments.capacity}</span>
                        <span className="text-gray-900 font-medium">{vessel.capacity}</span>
                      </div>
                      <div className="border-t pt-4">
                        <span className="block text-xs text-gray-400 uppercase tracking-wider font-semibold">{t.departments.payload}</span>
                        <span className="text-gray-900 font-medium">{vessel.payload}</span>
                      </div>
                      <div className="border-t pt-4 col-span-2">
                        <span className="block text-xs text-gray-400 uppercase tracking-wider font-semibold">{t.departments.route}</span>
                        <span className="text-gray-900 font-medium">{vessel.routes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{t.departments.expandingReach}</h3>
              <p className="text-blue-700">{t.departments.expandingReachDesc}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;