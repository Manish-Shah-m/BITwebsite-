'use client';

import { use, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/config';
import QuestionCard from '@/components/QuestionCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ImportantTopics from '@/components/ImportantTopics';
import { SUBJECTS, IMPORTANT_TOPICS } from '@/lib/utils';

export default function SemesterPage({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const semesterId = parseInt(unwrappedParams.id);
  
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
      console.log('Fetching questions for semester:', semesterId); // Debug log
      
      const { data, error } = await supabase
        .from('past_questions')
        .select('*')
        .eq('semester', semesterId)
        .order('year', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Fetched questions:', data); // Debug log
      setQuestions(data || []);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredQuestions = selectedSubject === 'all'
    ? questions
    : questions.filter(q => q.subject === selectedSubject);

  const subjects = SUBJECTS[semesterId] || [];
  const hasTopics = IMPORTANT_TOPICS[semesterId] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Semester {semesterId}
          </h1>
          <p className="text-gray-600">
            {questions.length} past questions available
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('questions')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'questions'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Past Questions
          </button>
          {hasTopics && (
            <button
              onClick={() => setActiveTab('topics')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'topics'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Important Topics
            </button>
          )}
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">No questions available yet</h3>
                <p className="text-gray-600 mb-4">
                  Questions for Semester {semesterId} will appear here once uploaded by admin
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-teal-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Admin can upload questions from the admin panel
                </div>
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