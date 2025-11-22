import { Suspense } from 'react';
import SemesterContent from './SemesterContent';
import LoadingSpinner from '../../components/LoadingSpinner';

export const metadata = {
  title: 'Past Questions - Semester Archive',
  description: 'Browse and download past question papers',
};

export default function SemesterPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SemesterContent />
    </Suspense>
  );
}