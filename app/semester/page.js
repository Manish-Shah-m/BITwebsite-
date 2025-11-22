// app/semester/page.js
import { Suspense } from 'react';
import SemesterContent from './SemesterContent';
import LoadingSpinner from '@/components/LoadingSpinner';

// Force dynamic rendering - prevents build-time prerendering
export const dynamic = 'force-dynamic';

export default function SemesterPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SemesterContent />
    </Suspense>
  );
}