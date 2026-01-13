import React, { Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentProvider, useContent } from './context/ContentContext';

// Lazy loading pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Departments = React.lazy(() => import('./pages/Departments'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Admin = React.lazy(() => import('./pages/Admin'));

const AppLayout: React.FC = () => {
  const { language, companyInfo } = useContent();

  useEffect(() => {
    // Set direction and font based on language
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.body.classList.add('font-arabic');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.body.classList.remove('font-arabic');
    }
  }, [language]);

  return (
    <Router>
      <style>
        {`
          :root {
            --primary-color: ${companyInfo.primaryColor || '#D52B1E'};
          }
          .text-ktsc-red { color: var(--primary-color) !important; }
          .bg-ktsc-red { background-color: var(--primary-color) !important; }
          .border-ktsc-red { border-color: var(--primary-color) !important; }
          .hover\\:text-ktsc-red:hover { color: var(--primary-color) !important; }
          .hover\\:bg-ktsc-red:hover { background-color: var(--primary-color) !important; }
          .focus\\:ring-ktsc-red:focus { --tw-ring-color: var(--primary-color) !important; }
          .focus\\:border-ktsc-red:focus { border-color: var(--primary-color) !important; }
        `}
      </style>
      <div className={`flex flex-col min-h-screen ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen bg-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ktsc-red"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ContentProvider>
      <AppLayout />
    </ContentProvider>
  );
}

export default App;