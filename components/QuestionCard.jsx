'use client';

import { useState } from 'react'; // CHANGE: Import useState
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

export default function QuestionCard({ question, index }) {
  // CHANGE: Add state to manage the full-screen modal
  const [showFullScreen, setShowFullScreen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: (index || 0) * 0.05,
        duration: 0.4,
      },
    },
  };

  if (!question) {
    return null;
  }

  return (
    <>
      {/* Main Card Component */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="card group overflow-hidden bg-white border-2 border-transparent hover:border-charcoal transition-all duration-300 rounded-lg shadow-sm p-0 cursor-pointer" // CHANGE: Added cursor-pointer
        onClick={() => setShowFullScreen(true)} // CHANGE: Added onClick handler
      >
        <div className="relative w-full h-56 bg-slate-100">
          <Image
            src={question.image_url}
            alt={`${question.subject || 'Question'} - ${question.year || 'N/A'}`}
            fill
            className="object-contain p-2"
          />
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold bg-white/70 backdrop-blur-sm text-charcoal rounded-full border border-slate-200">
            Sem {question.semester}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display font-bold text-xl text-charcoal mb-4 truncate group-hover:text-teal-600 transition-colors">
            {question.subject}
          </h3>
          <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-100 pt-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{question.year}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- CHANGE: ADDED THE FULL-SCREEN MODAL LOGIC BACK IN --- */}
      {showFullScreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowFullScreen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            onClick={() => setShowFullScreen(false)}
          >
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full"
            // Prevent the modal from closing when clicking on the image itself
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={question.image_url}
              alt={`${question.subject} - ${question.year}`}
              width={1200}
              height={1600}
              className="w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}