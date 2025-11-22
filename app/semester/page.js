// app/semester/page.js   ← MUST be a Server Component → NO 'use client' here!!

import { Suspense } from 'react';
import SemesterContent from './SemesterContent';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function SemesterPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SemesterContent />
    </Suspense>
  );
}