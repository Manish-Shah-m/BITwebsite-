'use client';

import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

export default function SemesterFilter({ selectedSemester, onSemesterChange }) {
  const semesters = [1, 2, 3, 4];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6 mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <Filter className="w-5 h-5 text-charcoal" />
        <h3 className="text-lg font-semibold font-display">Filter by Semester</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <button
          onClick={() => onSemesterChange('all')}
          className={`py-3 px-4 font-medium transition-all duration-300 ${
            selectedSemester === 'all'
              ? 'bg-charcoal text-cream'
              : 'border-2 border-slate-200 text-charcoal hover:border-charcoal'
          }`}
        >
          All
        </button>
        {semesters.map((sem) => (
          <button
            key={sem}
            onClick={() => onSemesterChange(sem)}
            className={`py-3 px-4 font-medium transition-all duration-300 ${
              selectedSemester === sem
                ? 'bg-charcoal text-cream'
                : 'border-2 border-slate-200 text-charcoal hover:border-charcoal'
            }`}
          >
            Sem {sem}
          </button>
        ))}
      </div>
    </motion.div>
  );
}