
import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Project, Vessel, TimelineEvent, CompanyInfo, UITranslations, Service } from '../types';

const Admin: React.FC = () => {
  const { 
    companyInfo, updateCompanyInfo, 
    projects, addProject, updateProject, deleteProject, 
    vessels, addVessel, updateVessel, deleteVessel,
    services, addService, updateService, deleteService,
    timeline, addTimelineEvent, deleteTimelineEvent,
    t, updateTranslations,
    resetData, language, toggleLanguage
  } = useContent();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'brand' | 'pages' | 'business' | 'system' | 'translations'>('brand');

  // Edit/Add Modal State
  const [editMode, setEditMode] = useState<{ type: 'project' | 'vessel' | 'service' | null, data: any }>({ type: null, data: null });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') setIsAuthenticated(true);
    else alert('Try "admin"');
  };

  const handleCompanyUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
  };

  const handlePhoneUpdate = (idx: number, val: string) => {
    const newPhones = [...companyInfo.phone];
    newPhones[idx] = val;
    updateCompanyInfo({ ...companyInfo, phone: newPhones });
  };

  const handleTranslationUpdate = (section: keyof UITranslations, key: string, val: string) => {
    const newT = { ...t };
    (newT[section] as any)[key] = val;
    updateTranslations(newT);
  };

  const openAdd = (type: 'project' | 'vessel' | 'service') => {
    const base = { id: Math.random().toString(36).substr(2, 9) };
    if (type === 'project') setEditMode({ type, data: { ...base, title: '', location: '', completion: 0, category: 'Industrial', description: '' } });
    if (type === 'vessel') setEditMode({ type, data: { ...base, name: '', type: '', capacity: '', payload: '', routes: '', status: 'Operational', description: '', image: 'https://picsum.photos/seed/vessel/800/600' } });
    if (type === 'service') setEditMode({ type, data: { ...base, title: '', description: '', iconKey: 'Globe' } });
  };

  const handleSave = () => {
    const { type, data } = editMode;
    if (type === 'project') {
      const exists = projects.find(p => p.id === data.id);
      exists ? updateProject(data) : addProject(data);
    } else if (type === 'vessel') {
      const exists = vessels.find(v => v.id === data.id);
      exists ? updateVessel(data) : addVessel(data);
    } else if (type === 'service') {
      const exists = services.find(s => s.id === data.id);
      exists ? updateService(data) : addService(data);
    }
    setEditMode({ type: null, data: null });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-gray-900">KTSC CMS</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Dashboard Password" 
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-ktsc-red/10 outline-none transition" />
            <button type="submit" className="w-full bg-ktsc-red text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:bg-red-700 transition transform hover:-translate-y-1">Enter CMS</button>
            <p className="text-center text-xs text-gray-400">Default: <code className="bg-gray-100 p-1">admin</code></p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Modals for Editing */}
        {editMode.type && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 shadow-2xl animate-fade-in-up">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 capitalize">Manage {editMode.type}</h3>
                <button onClick={() => setEditMode({ type: null, data: null })} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              
              <div className="space-y-4">
                {editMode.type === 'project' && (
                  <>
                    <input placeholder="Project Title" value={editMode.data.title} onChange={e => setEditMode({...editMode, data: {...editMode.data, title: e.target.value}})} className="w-full p-4 border rounded-xl" />
                    <input placeholder="Location" value={editMode.data.location} onChange={e => setEditMode({...editMode, data: {...editMode.data, location: e.target.value}})} className="w-full p-4 border rounded-xl" />
                    <div className="flex gap-4 items-center">
                      <label className="text-sm font-bold w-32">Completion %</label>
                      <input type="range" min="0" max="100" value={editMode.data.completion} onChange={e => setEditMode({...editMode, data: {...editMode.data, completion: parseInt(e.target.value)}})} className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-ktsc-red" />
                      <span className="font-bold w-12 text-end">{editMode.data.completion}%</span>
                    </div>
                    <select value={editMode.data.category} onChange={e => setEditMode({...editMode, data: {...editMode.data, category: e.target.value}})} className="w-full p-4 border rounded-xl">
                      <option value="Industrial">Industrial</option>
                      <option value="Agricultural">Agricultural</option>
                      <option value="Infrastructure">Infrastructure</option>
                    </select>
                    <textarea placeholder="Description" rows={3} value={editMode.data.description} onChange={e => setEditMode({...editMode, data: {...editMode.data, description: e.target.value}})} className="w-full p-4 border rounded-xl" />
                  </>
                )}

                {editMode.type === 'vessel' && (
                  <>
                    <input placeholder="Vessel Name" value={editMode.data.name} onChange={e => setEditMode({...editMode, data: {...editMode.data, name: e.target.value}})} className="w-full p-4 border rounded-xl" />
                    <input placeholder="Type (e.g. Bulk Carrier)" value={editMode.data.type} onChange={e => setEditMode({...editMode, data: {...editMode.data, type: e.target.value}})} className="w-full p-4 border rounded-xl" />
                    <div className="grid grid-cols-2 gap-4">
                      <input placeholder="Capacity" value={editMode.data.capacity} onChange={e => setEditMode({...editMode, data: {...editMode.data, capacity: e.target.value}})} className="w-full p-4 border rounded-xl" />
                      <input placeholder="Payload" value={editMode.data.payload} onChange={e => setEditMode({...editMode, data: {...editMode.data, payload: e.target.value}})} className="w-full p-4 border rounded-xl" />
                    </div>
                    <input placeholder="Routes" value={editMode.data.routes} onChange={e => setEditMode({...editMode, data: {...editMode.data, routes: e.target.value}})} className="w-full p-4 border rounded-xl" />
                    <input placeholder="Image URL" value={editMode.data.image} onChange={e => setEditMode({...editMode, data: {...editMode.data, image: e.target.value}})} className="w-full p-4 border rounded-xl" />
                    <select value={editMode.data.status} onChange={e => setEditMode({...editMode, data: {...editMode.data, status: e.target.value}})} className="w-full p-4 border rounded-xl">
                      <option value="Operational">Operational</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Planned">Planned</option>
                    </select>
                    <textarea placeholder="Full Description" rows={3} value={editMode.data.description} onChange={e => setEditMode({...editMode, data: {...editMode.data, description: e.target.value}})} className="w-full p-4 border rounded-xl" />
                  </>
                )}

                {editMode.type === 'service' && (
                  <>
                    <input placeholder="Capability Title" value={editMode.data.title} onChange={e => setEditMode({...editMode, data: {...editMode.data, title: e.target.value}})} className="w-full p-4 border rounded-xl" />
                    <select value={editMode.data.iconKey} onChange={e => setEditMode({...editMode, data: {...editMode.data, iconKey: e.target.value}})} className="w-full p-4 border rounded-xl">
                      <option value="Globe">Globe</option>
                      <option value="Ship">Ship</option>
                      <option value="Factory">Factory</option>
                      <option value="Chart">Chart</option>
                    </select>
                    <textarea placeholder="Capability Description" rows={4} value={editMode.data.description} onChange={e => setEditMode({...editMode, data: {...editMode.data, description: e.target.value}})} className="w-full p-4 border rounded-xl" />
                  </>
                )}
              </div>

              <div className="flex gap-4 mt-8">
                <button onClick={handleSave} className="flex-grow bg-ktsc-red text-white py-4 rounded-2xl font-bold shadow-xl">Save Changes</button>
                <button onClick={() => setEditMode({ type: null, data: null })} className="px-8 py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold">Cancel</button>
              </div>
            </div>
          </div>
        )}

        <header className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900">Management Portal</h1>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Editing Mode: <span className="text-ktsc-red">{language.toUpperCase()} Content</span></p>
          </div>
          <div className="flex gap-4">
            <button onClick={toggleLanguage} className="px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold shadow-lg hover:bg-black transition flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              Switch to {language === 'en' ? 'Arabic' : 'English'}
            </button>
            <button onClick={() => { if(confirm('Reset all changes?')) resetData() }} className="px-6 py-3 bg-white border border-red-100 text-red-600 rounded-2xl font-bold hover:bg-red-50 transition">Factory Reset</button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-28 p-3 space-y-2">
              {[
                { id: 'brand', label: 'Identity & Brand' },
                { id: 'pages', label: 'Page Content' },
                { id: 'business', label: 'Business Units' },
                { id: 'system', label: 'System & Contact' },
                { id: 'translations', label: 'UI Translations' }
              ].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full px-5 py-4 rounded-2xl text-start font-bold transition-all ${activeTab === tab.id ? 'bg-ktsc-red text-white shadow-xl shadow-red-100' : 'text-gray-500 hover:bg-gray-50'}`}>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-grow bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 min-h-[700px]">
            
            {/* BRANDING TAB */}
            {activeTab === 'brand' && (
              <div className="space-y-10">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Brand Logo URL</label>
                    <input name="logo" value={companyInfo.logo} onChange={handleCompanyUpdate} className="w-full p-4 border rounded-2xl outline-none focus:ring-2 focus:ring-ktsc-red/20" />
                    <div className="h-32 bg-gray-50 rounded-2xl border-2 border-dashed flex items-center justify-center overflow-hidden p-4">
                       <img src={companyInfo.logo} className="max-h-full object-contain" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Theme Color</label>
                    <div className="flex items-center gap-6">
                      <input type="color" name="primaryColor" value={companyInfo.primaryColor} onChange={handleCompanyUpdate} className="w-20 h-20 cursor-pointer rounded-2xl overflow-hidden border-none p-0" />
                      <p className="text-lg font-mono font-bold text-gray-900">{companyInfo.primaryColor}</p>
                    </div>
                  </div>
                </section>
                <div className="space-y-4">
                  <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Hero Image URL</label>
                  <input name="heroImage" value={companyInfo.heroImage} onChange={handleCompanyUpdate} className="w-full p-4 border rounded-2xl outline-none" />
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                    <img src={companyInfo.heroImage} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            )}

            {/* PAGES CONTENT TAB */}
            {activeTab === 'pages' && (
              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b pb-4">Home Hero Section</h3>
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-gray-400 uppercase">Main Headline</label>
                    <input name="heroTitle" value={companyInfo.heroTitle} onChange={handleCompanyUpdate} className="w-full p-4 border rounded-2xl font-bold text-lg" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-gray-400 uppercase">Lead Paragraph</label>
                    <textarea name="heroSubtitle" rows={4} value={companyInfo.heroSubtitle} onChange={handleCompanyUpdate} className="w-full p-4 border rounded-2xl leading-relaxed" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Company Vision</h3>
                    <textarea name="vision" rows={6} value={companyInfo.vision} onChange={handleCompanyUpdate} className="w-full p-4 border rounded-2xl italic text-gray-600" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Company Mission</h3>
                    <textarea name="mission" rows={6} value={companyInfo.mission} onChange={handleCompanyUpdate} className="w-full p-4 border rounded-2xl text-gray-600" />
                  </div>
                </div>
              </div>
            )}

            {/* SYSTEM & CONTACT TAB */}
            {activeTab === 'system' && (
              <div className="space-y-12">
                <section className="bg-red-50 p-8 rounded-3xl border border-red-100">
                  <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Inquiry Destination Settings
                  </h3>
                  <div className="space-y-4">
                    <label className="block text-xs font-black text-red-400 uppercase tracking-widest">Form Submission Destination Email</label>
                    <input name="formSubmissionEmail" value={companyInfo.formSubmissionEmail} onChange={handleCompanyUpdate} placeholder="Where inquiries go..."
                      className="w-full p-5 border-none rounded-2xl shadow-inner outline-none focus:ring-4 focus:ring-ktsc-red/10 text-xl font-bold text-ktsc-red" />
                    <p className="text-xs text-red-700 italic opacity-75">All contact form messages from the website will be routed to this address.</p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xl font-bold">Global Contact Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-xs font-bold text-gray-400 uppercase">Public Display Email</label>
                      <input name="email" value={companyInfo.email} onChange={handleCompanyUpdate} className="w-full p-4 border rounded-2xl" />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-xs font-bold text-gray-400 uppercase">HQ Physical Address</label>
                      <input name="address" value={companyInfo.address} onChange={handleCompanyUpdate} className="w-full p-4 border rounded-2xl" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-gray-400 uppercase">Contact Phone Numbers</label>
                    {companyInfo.phone.map((p, i) => (
                      <div key={i} className="flex gap-2">
                        <input value={p} onChange={(e) => handlePhoneUpdate(i, e.target.value)} className="flex-grow p-4 border rounded-2xl font-mono" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* UI TRANSLATIONS TAB */}
            {activeTab === 'translations' && (
              <div className="space-y-12">
                <header className="bg-gray-50 p-6 rounded-2xl border mb-8">
                  <p className="text-sm text-gray-600">You are editing the <strong>{language.toUpperCase()}</strong> UI labels. These are the small bits of text like buttons, menu items, and section labels.</p>
                </header>

                <div className="space-y-10">
                  <section>
                    <h4 className="text-lg font-bold mb-6 text-gray-900 border-l-4 border-ktsc-red pl-4">Navigation Menu</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {Object.entries(t.nav).map(([key, val]) => (
                        <div key={key} className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase">{key}</label>
                          <input value={val} onChange={(e) => handleTranslationUpdate('nav', key, e.target.value)} className="w-full p-4 border rounded-2xl text-sm" />
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-lg font-bold mb-6 text-gray-900 border-l-4 border-ktsc-red pl-4">Footer Content</h4>
                    <div className="grid grid-cols-1 gap-6">
                      {Object.entries(t.footer).map(([key, val]) => (
                        <div key={key} className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase">{key}</label>
                          <textarea value={val} onChange={(e) => handleTranslationUpdate('footer', key, e.target.value)} className="w-full p-4 border rounded-2xl text-sm" />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* BUSINESS UNITS TAB - EXPANDED ADD/EDIT */}
            {activeTab === 'business' && (
              <div className="space-y-16">
                 {/* VESSELS */}
                 <section className="space-y-6">
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="text-2xl font-bold">Maritime Fleet</h3>
                        <p className="text-sm text-gray-500">Currently managing {vessels.length} vessels</p>
                      </div>
                      <button onClick={() => openAdd('vessel')} className="bg-ktsc-red text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-sm">
                        <span>+</span> Add Vessel
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vessels.map(v => (
                        <div key={v.id} className="p-4 border rounded-2xl flex items-center gap-4 bg-gray-50 group hover:border-ktsc-red transition">
                          <img src={v.image} className="w-16 h-16 object-cover rounded-xl shadow-sm" />
                          <div className="flex-grow">
                             <p className="font-bold text-gray-900">{v.name}</p>
                             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{v.type}</p>
                          </div>
                          <div className="flex gap-1">
                            <button onClick={() => setEditMode({ type: 'vessel', data: v })} className="p-2 hover:bg-white rounded-lg text-gray-400 hover:text-ktsc-red transition">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            </button>
                            <button onClick={() => deleteVessel(v.id)} className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600 transition">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                 </section>
                 
                 {/* PROJECTS */}
                 <section className="space-y-6">
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="text-2xl font-bold">Ongoing Projects</h3>
                        <p className="text-sm text-gray-500">Industrial, Agricultural, Infrastructure</p>
                      </div>
                      <button onClick={() => openAdd('project')} className="bg-ktsc-red text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-sm">
                        <span>+</span> Add Project
                      </button>
                    </div>
                    <div className="space-y-3">
                       {projects.map(p => (
                         <div key={p.id} className="p-5 border rounded-2xl flex justify-between items-center bg-gray-50 hover:bg-white hover:border-ktsc-red transition group">
                            <div className="flex-grow">
                               <div className="flex items-center gap-2">
                                  <p className="font-bold text-gray-900">{p.title}</p>
                                  <span className="text-[10px] font-bold bg-white px-2 py-0.5 rounded border">{p.category}</span>
                               </div>
                               <div className="flex items-center gap-4 mt-1">
                                  <p className="text-xs text-gray-500">{p.location}</p>
                                  <div className="flex-grow max-w-[100px] h-1 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-ktsc-red" style={{ width: `${p.completion}%` }}></div>
                                  </div>
                                  <span className="text-[10px] font-bold text-gray-400">{p.completion}%</span>
                               </div>
                            </div>
                            <div className="flex gap-2">
                              <button onClick={() => setEditMode({ type: 'project', data: p })} className="px-4 py-2 bg-white border text-xs font-bold rounded-xl hover:text-ktsc-red transition">Edit</button>
                              <button onClick={() => deleteProject(p.id)} className="px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl transition">Remove</button>
                            </div>
                         </div>
                       ))}
                    </div>
                 </section>

                 {/* SERVICES / CAPABILITIES */}
                 <section className="space-y-6">
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="text-2xl font-bold">Trading Capabilities</h3>
                        <p className="text-sm text-gray-500">Commercial services and specializations</p>
                      </div>
                      <button onClick={() => openAdd('service')} className="bg-ktsc-red text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-sm">
                        <span>+</span> Add Service
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map(s => (
                        <div key={s.id} className="p-5 border rounded-2xl bg-gray-50 flex items-start gap-4">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-ktsc-red border">
                              {s.iconKey}
                           </div>
                           <div className="flex-grow">
                              <p className="font-bold text-gray-900">{s.title}</p>
                              <p className="text-xs text-gray-500 line-clamp-2 mt-1">{s.description}</p>
                           </div>
                           <div className="flex flex-col gap-2">
                             <button onClick={() => setEditMode({ type: 'service', data: s })} className="p-1.5 hover:text-ktsc-red"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>
                             <button onClick={() => deleteService(s.id)} className="p-1.5 hover:text-red-500"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                           </div>
                        </div>
                      ))}
                    </div>
                 </section>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
