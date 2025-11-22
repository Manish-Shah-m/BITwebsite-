'use client';

import { useState, useEffect } from 'react';
import SemesterClientWrapper from './SemesterClientWrapper'; // <-- ADD THIS
// other imports...

export default function SemesterContent() {
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // NO useSearchParams() HERE

  useEffect(() => {
    fetchQuestions();
  }, [selectedSemester]);

  const fetchQuestions = async () => { ... };

  return (
    <>
      <SemesterClientWrapper setSelectedSemester={setSelectedSemester} />  {/* ADD THIS */}

      <div className="min-h-screen bg-cream pt-32 pb-24">
        {/* Your UI continues... */}
      </div>
    </>
  );
}
