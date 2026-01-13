
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  const { companyInfo, t } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for contacting KTSC. Your inquiry has been sent to ${companyInfo.formSubmissionEmail}. We will respond shortly.`);
    setFormData({
      name: '', email: '', phone: '', company: '', message: '', consent: false
    });
  };

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="animate-fade-in bg-white">
      <div className="bg-ktsc-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">{t.contact.title}</h1>
          <p className="text-gray-400">{t.contact.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t.contact.getInTouch}</h2>
              <p className="text-gray-600 mb-8">
                {t.contact.getInTouchDesc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-ktsc-red mt-1"><Icons.MapPin /></div>
                <div>
                  <h3 className="font-bold text-gray-900">{t.contact.headquarters}</h3>
                  <p className="text-gray-600 text-sm mt-1">{companyInfo.address}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`} target="_blank" rel="noreferrer" className="text-ktsc-red text-sm font-semibold mt-2 inline-block hover:underline">{t.contact.viewMap}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-ktsc-red mt-1">✉</div>
                <div>
                  <h3 className="font-bold text-gray-900">{t.contact.emailUs}</h3>
                  <a href={`mailto:${companyInfo.email}`} className="text-gray-600 text-sm mt-1 block hover:text-ktsc-red transition">{companyInfo.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-ktsc-red mt-1">☎</div>
                <div>
                  <h3 className="font-bold text-gray-900">{t.contact.callUs}</h3>
                  <div className="flex flex-col gap-1 mt-1">
                    {companyInfo.phone.map(p => (
                       <a key={p} href={`tel:${p}`} className="text-gray-600 text-sm hover:text-ktsc-red transition ltr:text-left rtl:text-right">{p}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ktsc-red/5 -mr-16 -mt-16 rounded-full"></div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">{t.contact.sendMessage}</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{t.contact.formName}</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-ktsc-red/10 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{t.contact.formPhone}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-ktsc-red/10 outline-none transition" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{t.contact.formEmail}</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-ktsc-red/10 outline-none transition" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{t.contact.formMessage}</label>
                <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-ktsc-red/10 outline-none transition"></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="consent" required checked={formData.consent} onChange={handleCheckbox} className="w-5 h-5 rounded border-gray-300 text-ktsc-red focus:ring-ktsc-red" />
                <label htmlFor="consent" className="text-sm font-medium text-gray-600">{t.contact.formConsent}</label>
              </div>

              <button type="submit" className="w-full bg-ktsc-red text-white font-bold py-5 rounded-2xl hover:bg-red-700 transition shadow-xl shadow-red-100 flex items-center justify-center gap-2 group">
                {t.contact.formSubmit}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">{t.contact.ourLocation}</h2>
             <div className="w-20 h-1 bg-ktsc-red mx-auto rounded-full"></div>
          </div>
          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
             <iframe
                title="KTSC Headquarters Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={mapUrl}
                className="grayscale hover:grayscale-0 transition duration-700"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
