'use client';

import { useState } from 'react';
import { EXAM_TOPICS } from '@/lib/examTopics';

export default function ImportantTopicsPage() {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);

  const semesterData = EXAM_TOPICS[selectedSemester] || {};
  const subjects = Object.keys(semesterData);

  if (subjects.length > 0 && !selectedSubject) {
    setSelectedSubject(subjects[0]);
  }

  const currentSubjectData = selectedSubject ? semesterData[selectedSubject] : null;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-teal mb-4">
            Exam Preparation
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Important Topics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these exam-focused topics with code examples and key concepts
          </p>
        </div>

        {/* Semester Selector */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((sem) => (
            <button
              key={sem}
              onClick={() => {
                setSelectedSemester(sem);
                setSelectedSubject(null);
                setExpandedTopic(null);
              }}
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

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-32">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Subjects
              </h3>
              <div className="space-y-2">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => {
                      setSelectedSubject(subject);
                      setExpandedTopic(null);
                    }}
                    className={
                      selectedSubject === subject
                        ? 'sidebar-item-active bg-teal-600 text-white'
                        : 'sidebar-item-inactive text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white'
                    }
                  >
                    <div className="text-sm">{subject}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentSubjectData ? (
              <div className="space-y-6">
                {/* Programming Topics */}
                {currentSubjectData.topics && currentSubjectData.topics.map((topic, index) => (
                  <div key={index} className="card">
                    <button
                      onClick={() => setExpandedTopic(expandedTopic === index ? null : index)}
                      className="w-full flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold shadow-sm">
                          {index + 1}
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-gray-900">
                            {topic.name}
                          </h3>
                          <span className={`text-xs font-semibold ${
                            topic.importance === 'Very High' ? 'text-red-600' :
                            topic.importance === 'High' ? 'text-orange-600' :
                            'text-teal-600'
                          }`}>
                            {topic.importance} Importance
                          </span>
                        </div>
                      </div>
                      <svg
                        className={`w-6 h-6 text-teal-600 transition-transform ${
                          expandedTopic === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {expandedTopic === index && (
                      <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
                        {/* Code */}
                        {topic.code && (
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-3">Code Example:</h4>
                            <div className="relative">
                              <pre className="bg-gray-900 text-green-400 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
                                <code>{topic.code}</code>
                              </pre>
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(topic.code);
                                  alert('Code copied!');
                                }}
                                className="absolute top-4 right-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-xs text-white font-semibold transition-colors"
                              >
                                Copy
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Key Points */}
                        {topic.keyPoints && (
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-3">Key Points:</h4>
                            <ul className="space-y-3">
                              {topic.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 p-3 bg-teal-50 rounded-xl">
                                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-gray-700">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Theory Topics */}
                {currentSubjectData.theoryTopics && (
                  <div className="card">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Theory Topics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentSubjectData.theoryTopics.map((theory, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors">
                          <span className="flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{theory}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="card text-center py-20">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="text-gray-500 text-lg">Select a subject to view topics</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
