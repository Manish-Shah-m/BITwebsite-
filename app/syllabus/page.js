'use client';

import { useState } from 'react';
import { SYLLABUS } from '@/lib/utils';

export default function SyllabusPage() {
  const [expandedSemester, setExpandedSemester] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-teal mb-4"> {/* CHANGED */}
            Complete Curriculum
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            BIT Syllabus
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Purbanchal University - Bachelor of Information Technology
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Semesters</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">48</div>
            <div className="stat-label">Subjects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">138</div>
            <div className="stat-label">Credits</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4</div>
            <div className="stat-label">Years</div>
          </div>
        </div>

        {/* Syllabus Accordion */}
        <div className="space-y-4">
          {SYLLABUS.map((semesterData) => (
            <div key={semesterData.semester} className="card">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === semesterData.semester ? null : semesterData.semester
                  )
                }
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-5">
                  {/* CHANGED */}
                  <div className="w-14 h-14 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-teal-200">
                    {semesterData.semester}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900">
                      Semester {semesterData.semester}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {semesterData.subjects.length} Subjects •{' '}
                      {semesterData.subjects.reduce((sum, s) => sum + s.creditHours, 0)} Credit Hours
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-6 h-6 text-teal-600 transition-transform ${  /* CHANGED */
                    expandedSemester === semesterData.semester ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedSemester === semesterData.semester && (
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {semesterData.subjects.map((subject, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors group"  // CHANGED
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-teal-600 font-bold">{idx + 1}.</span> {/* CHANGED */}
                          <span className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors"> {/* CHANGED */}
                            {subject.name}
                          </span>
                        </div>
                        <span className="badge-teal">{subject.creditHours} CH</span> {/* CHANGED */}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
