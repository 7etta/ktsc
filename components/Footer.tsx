import React from 'react';
import { useContent } from '../context/ContentContext';
import { Icons } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { companyInfo, t } = useContent();
  
  return (
    <footer className="bg-ktsc-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-lg overflow-hidden p-1">
                   <img src={companyInfo.logo} alt="KTSC" className="object-contain h-full w-full" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">KTSC</span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               {t.footer.desc}
             </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold font-display mb-4 text-gray-100">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-ktsc-red transition">{t.nav.about}</Link></li>
              <li><Link to="/departments" className="hover:text-ktsc-red transition">{t.nav.departments}</Link></li>
              <li><Link to="/projects" className="hover:text-ktsc-red transition">{t.nav.projects}</Link></li>
              <li><Link to="/contact" className="hover:text-ktsc-red transition">{t.nav.contact}</Link></li>
              <li><Link to="/admin" className="hover:text-ktsc-red transition">{t.nav.admin}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-display mb-4 text-gray-100">{t.footer.contactUs}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-ktsc-red"><Icons.MapPin /></span>
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-ktsc-red">✉</span>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition">{companyInfo.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-ktsc-red">☎</span>
                <div className="flex flex-col">
                  {companyInfo.phone.map(p => (
                    <a key={p} href={`tel:${p}`} className="hover:text-white transition ltr:text-left rtl:text-right">{p}</a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
             <h3 className="text-lg font-bold font-display mb-4 text-gray-100">{t.footer.partnerTitle}</h3>
             <p className="text-gray-400 text-sm mb-4">{t.footer.partnerDesc}</p>
             <Link to="/contact" className="inline-block bg-white text-ktsc-dark px-6 py-2 rounded font-semibold text-sm hover:bg-ktsc-red hover:text-white transition-colors w-full text-center">
               {t.home.contactUsToday}
             </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {companyInfo.name}. {t.footer.rightsReserved}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0 text-gray-500 text-xs">
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
            <a href="#" className="hover:text-white">{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;