'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import QuestionCard from '@/components/QuestionCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ImportantTopics from '@/components/ImportantTopics';
import { SUBJECTS } from '@/lib/utils';

export default function SemesterPage({ params }) {
  const semesterId = parseInt(params.id);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [activeTab, setActiveTab] = useState('questions');

  useEffect(() => {
    fetchQuestions();
  }, [semesterId]);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'pastQuestions'),
        where('semester', '==', semesterId)
      );
      const querySnapshot = await getDocs(q);
      const questionsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setQuestions(questionsData);
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (semesterId > 4) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container max-w-2xl">
          <div className="card text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h1>
            <p className="text-gray-600 mb-8">
              Semester {semesterId} content is currently being prepared. Check back soon!
            </p>
            <a href="/" className="btn-primary inline-block">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  const filteredQuestions = selectedSubject === 'all'
    ? questions
    : questions.filter(q => q.subject === selectedSubject);

  const subjects = SUBJECTS[semesterId] || [];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Semester {semesterId}
          </h1>
          <p className="text-gray-600">
            Past questions and important topics
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('questions')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'questions'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Past Questions
          </button>
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'topics'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Important Topics
          </button>
        </div>

        {/* Content */}
        {activeTab === 'questions' ? (
          <>
            {/* Filter */}
            <div className="mb-6">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="input max-w-xs"
              >
                <option value="all">All Subjects</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {loading ? (
              <LoadingSpinner />
            ) : filteredQuestions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuestions.map((question, index) => (
                  <QuestionCard key={question.id} question={question} index={index} />
                ))}
              </div>
            ) : (
              <div className="card text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No questions found</h3>
                <p className="text-gray-600">Questions will appear here once uploaded by admin</p>
              </div>
            )}
          </>
        ) : (
          <div className="max-w-5xl">
            <ImportantTopics semester={semesterId} />
          </div>
        )}
      </div>
    </div>
  );
}