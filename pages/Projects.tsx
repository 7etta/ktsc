import React from 'react';
import { useContent } from '../context/ContentContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Projects: React.FC = () => {
  const { projects, t } = useContent();

  // Data for the summary chart
  const chartData = [
    { name: 'Completed', value: projects.filter(p => p.completion === 100).length },
    { name: 'In Progress (>50%)', value: projects.filter(p => p.completion > 50 && p.completion < 100).length },
    { name: 'Early Stage (<50%)', value: projects.filter(p => p.completion <= 50).length },
  ];

  const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">{t.projects.title}</h1>
          <p className="text-lg text-gray-600">{t.projects.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-6">{t.projects.activeProjects}</h2>
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-medium">
                      {project.location}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-grow bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          project.completion >= 90 ? 'bg-green-500' : 
                          project.completion >= 40 ? 'bg-ktsc-red' : 'bg-gray-400'
                        }`}
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold w-12 text-end">{project.completion}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar / Stats */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4 border-b pb-2">{t.projects.portfolioOverview}</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-sm text-gray-500">
                    {t.projects.statsDesc}
                  </p>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <span className="block text-2xl font-bold text-green-700">6,000</span>
                    <span className="text-sm text-green-800">{t.projects.reclaimedAcres}</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;