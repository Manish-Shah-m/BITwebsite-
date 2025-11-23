'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../../lib/supabase/config';
import QuestionCard from '../../components/QuestionCard';
import SemesterFilter from '../../components/SemesterFilter';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function SemesterContent() {
  const searchParams = useSearchParams();
  const [selectedSemester, setSelectedSemester] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sem = searchParams.get('sem');
    if (sem) setSelectedSemester(parseInt(sem));
  }, [searchParams]);

  useEffect(() => {
    fetchQuestions();
  }, [selectedSemester]);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('past_questions')
        .select('*');

      // If a specific semester is selected (not 0 = "All")
      if (selectedSemester !== 0) {
        query = query.eq('semester', selectedSemester);
      }

      // Order by upload date
      query = query.order('uploaded_at', { ascending: false });

      const { data, error } = await query;

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      setQuestions(data || []);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-teal-200">
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
            Purbanchal University
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            BIT Past Questions
          </h1>
          <p className="text-gray-600">
            {selectedSemester === 0 
              ? `${questions.length} total past questions available`
              : `${questions.length} questions for Semester ${selectedSemester}`
            }
          </p>
        </div>

        {/* Filter */}
        <SemesterFilter
          selectedSemester={selectedSemester}
          onSemesterChange={setSelectedSemester}
        />

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : questions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questions.map((question, index) => (
              <QuestionCard key={question.id} question={question} index={index} />
            ))}
          </div>
        ) : (
          <div className="card text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No questions available yet
            </h3>
            <p className="text-gray-600">
              {selectedSemester === 0
                ? 'No questions have been uploaded yet. Check back later!'
                : `Questions for Semester ${selectedSemester} will appear here once uploaded by admin.`
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}