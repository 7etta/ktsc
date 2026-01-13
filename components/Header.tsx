import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { companyInfo, toggleLanguage, language, t } = useContent();

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.departments, path: '/departments' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.contact, path: '/contact' },
    { name: t.nav.admin, path: '/admin' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="h-12 w-auto flex items-center justify-center overflow-hidden">
                 <img 
                   src={companyInfo.logo} 
                   alt="KTSC Logo" 
                   className="h-full object-contain max-w-[150px]" 
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 <div className="hidden w-12 h-12 bg-ktsc-red rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-red-700 transition">
                    K
                 </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors duration-200 border-b-2 ${
                  isActive(item.path)
                    ? 'text-ktsc-red border-ktsc-red'
                    : 'text-gray-600 border-transparent hover:text-ktsc-red hover:border-red-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 rounded border border-gray-300 text-sm font-bold text-gray-700 hover:bg-gray-100 transition"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>

            <Link
              to="/contact"
              className="bg-ktsc-red hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t.nav.getQuote}
            </Link>
          </div>

          {/* Mobile Button & Lang Switcher */}
          <div className="flex items-center md:hidden gap-4">
            <button 
              onClick={toggleLanguage}
              className="px-2 py-1 rounded border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 transition"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-ktsc-red focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-ktsc-red bg-red-50'
                    : 'text-gray-700 hover:text-ktsc-red hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;