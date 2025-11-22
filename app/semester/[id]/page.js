'use client';

import { use, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import QuestionCard from '../../../components/QuestionCard';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SemesterPage({ params }) {
  // Unwrap the params Promise using React.use()
  const unwrappedParams = use(params);
  const semesterId = parseInt(unwrappedParams.id);
  
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState('all');

  useEffect(() => {
    fetchQuestions();
  }, [semesterId, selectedSubject]);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      let q;
      if (selectedSubject === 'all') {
        q = query(
          collection(db, 'pastQuestions'),
          where('semester', '==', semesterId),
          orderBy('createdAt', 'desc')
        );
      } else {
        q = query(
          collection(db, 'pastQuestions'),
          where('semester', '==', semesterId),
          where('subject', '==', selectedSubject),
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
        <Link 
          href="/semester" 
          className="inline-flex items-center gap-2 text-charcoal hover:text-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to All Semesters
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="accent-line mx-auto" />
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-charcoal" />
            <h1 className="heading-2">Semester {semesterId} Questions</h1>
          </div>
        </motion.div>

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
              No questions found for Semester {semesterId}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}