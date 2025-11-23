'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function QuestionCard({ question }) {
  const [showFullScreen, setShowFullScreen] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowFullScreen(true)}
        className="card-hover group"
      >
        {/* Image */}
        <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
          <Image
            src={question.image_url} // Changed from imageUrl to image_url
            alt={`${question.subject} - ${question.year}`}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <h3 className="font-bold text-gray-900 mb-2">{question.subject}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="badge-gray">{question.year}</span>
          <span className="badge-gray">Semester {question.semester}</span>
        </div>
      </div>

      {/* Full Screen Modal */}
      {showFullScreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowFullScreen(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={() => setShowFullScreen(false)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Image
              src={question.image_url} // Changed from imageUrl to image_url
              alt={`${question.subject} - ${question.year}`}
              width={1200}
              height={1600}
              className="w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}