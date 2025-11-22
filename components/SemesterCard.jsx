'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SemesterCard({ semester, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <Link href={semester.available ? `/semester/${semester.id}` : '#'}>
        <div className={`glass-card relative overflow-hidden ${!semester.available && 'opacity-60 cursor-not-allowed'}`}>
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Content */}
          <div className="relative">
            {/* Icon */}
            <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2">{semester.name}</h3>
            
            {/* Status */}
            {semester.available ? (
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available Now</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-orange-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Coming Soon</span>
              </div>
            )}

            {/* Arrow Icon */}
            {semester.available && (
              <div className="absolute top-4 right-4 transform group-hover:translate-x-1 transition-transform">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}