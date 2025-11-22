'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SemesterClientWrapper({ setSelectedSemester }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sem = searchParams.get('sem');
    if (sem) setSelectedSemester(parseInt(sem));
  }, [searchParams, setSelectedSemester]);

  return null; // no UI, just logic
}
