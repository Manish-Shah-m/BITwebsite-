'use client';

import { useState } from 'react';
import { projectsData } from '@/lib/projectsData';

export default function ProjectsPage() {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [activeSection, setActiveSection] = useState('ideas'); // ideas, features, presentation
  
  const currentProject = projectsData.find(p => p.semester === selectedSemester);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-teal mb-4">
            Project Guidelines
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            BIT Project Ideas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete project ideas, features, and presentation guidelines
          </p>
        </div>

        {/* Semester Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSemester(sem)}
              className={`px-8 py-4 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedSemester === sem
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-200'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Semester {sem}
            </button>
          ))}
        </div>

        {/* Section Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto">
          {[
            { id: 'ideas', label: 'Project Ideas', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
            { id: 'features', label: 'Features to Implement', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { id: 'presentation', label: 'Presentation Guide', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeSection === section.id
                  ? 'bg-white border-2 border-teal-600 text-teal-600 shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
              </svg>
              {section.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {currentProject && (
          <div className="space-y-6">
            {/* Subject Header */}
            <div className="card bg-teal-50 border-teal-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{currentProject.subject}</h2>
                  <p className="text-sm text-gray-600">Semester {currentProject.semester}</p>
                </div>
              </div>
            </div>

            {/* Project Ideas */}
            {activeSection === 'ideas' && (
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Ideas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProject.ideas.map((idea, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-teal-50 hover:border-teal-200 border-2 border-transparent transition-all group">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                            {idea}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features to Implement */}
            {activeSection === 'features' && (
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Features to Implement</h3>
                <div className="space-y-3">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">Implementation Tip</p>
                      <p className="text-sm text-blue-800">
                        Start with basic features first, then add advanced functionality. Test each feature thoroughly before moving to the next.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Presentation Guide */}
            {activeSection === 'presentation' && (
              <div className="space-y-6">
                {/* Slide Structure */}
                <div className="card">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Presentation Slide Structure</h3>
                  <div className="space-y-4">
                    {currentProject.presentation.slides.map((slide, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{slide.title}</h4>
                          <p className="text-sm text-gray-600">{slide.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Presentation Tips */}
                <div className="card bg-amber-50 border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Presentation Tips
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentProject.presentation.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-white rounded-lg">
                        <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-sm text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}