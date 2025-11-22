'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import QuestionCard from '../../components/QuestionCard';
import SemesterFilter from '../../components/SemesterFilter';
import LoadingSpinner from '../../components/LoadingSpinner';
import { BookOpen } from 'lucide-react';

export default function SemesterPage() {
  const searchParams = useSearchParams();
  const [selectedSemester, setSelectedSemester] = useState('all');
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
      let q;
      if (selectedSemester === 'all') {
        q = query(collection(db, 'pastQuestions'), orderBy('createdAt', 'desc'));
      } else {
        q = query(
          collection(db, 'pastQuestions'),
          where('semester', '==', selectedSemester),
          orderBy('createdAt', 'desc')
        );
      }

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="accent-line mx-auto" />
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-charcoal" />
            <h1 className="heading-2">Past Questions</h1>
          </div>
          <p className="body-large text-slate-600">
            Browse and download past question papers
          </p>
        </motion.div>

        <SemesterFilter
          selectedSemester={selectedSemester}
          onSemesterChange={setSelectedSemester}
        />

        {loading ? (
          <LoadingSpinner />
        ) : questions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {questions.map((question, index) => (
              <QuestionCard key={question.id} question={question} index={index} />
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <p className="text-slate-600 text-lg">
              No questions found for this semester yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}