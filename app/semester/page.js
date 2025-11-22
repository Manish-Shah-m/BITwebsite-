// app/semester/page.js
import { Suspense } from 'react';
import SemesterContent from './SemesterContent';
import LoadingSpinner from '@/components/LoadingSpinner';

export const dynamic = 'force-dynamic';  // important for Vercel

export default function SemesterPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SemesterContent />
    </Suspense>
  );
}
