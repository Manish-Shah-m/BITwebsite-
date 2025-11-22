'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen, Code, FileText } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.hero-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.5,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-24 pb-16"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Text Content */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block hero-text">
              <span className="inline-block px-6 py-2 border border-charcoal/20 rounded text-sm font-medium text-charcoal">
                For BIT Students in Nepal
              </span>
            </div>

            <h1 className="heading-1 hero-text max-w-4xl mx-auto">
              Your Complete Resource for{' '}
              <span className="relative inline-block">
                BIT Excellence
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C100 2 200 2 298 10" stroke="currentColor" strokeWidth="3" className="text-accent" />
                </svg>
              </span>
            </h1>

            <p className="body-large hero-text text-slate-600 max-w-2xl mx-auto">
              Access comprehensive past questions, innovative project ideas, and complete syllabus 
              for semesters 1-4. Everything you need to excel in your BIT journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 hero-text">
              <Link href="/semester" className="btn-primary w-full sm:w-auto group">
                <span className="flex items-center justify-center gap-3">
                  Browse Questions
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
              <Link href="/projects" className="btn-secondary w-full sm:w-auto">
                Explore Projects
              </Link>
            </div>
          </div>

          {/* Feature Cards - ALWAYS VISIBLE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="hero-card card p-8 group">
              <div className="text-charcoal mb-4 transition-transform group-hover:scale-110 duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal font-display">Past Questions</h3>
              <p className="text-slate-600 leading-relaxed">Semester-wise past question papers with downloadable images</p>
            </div>

            <div className="hero-card card p-8 group">
              <div className="text-charcoal mb-4 transition-transform group-hover:scale-110 duration-300">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal font-display">Project Ideas</h3>
              <p className="text-slate-600 leading-relaxed">Comprehensive project guides with presentation tips</p>
            </div>

            <div className="hero-card card p-8 group">
              <div className="text-charcoal mb-4 transition-transform group-hover:scale-110 duration-300">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal font-display">Complete Syllabus</h3>
              <p className="text-slate-600 leading-relaxed">Detailed syllabus with credit hours for all semesters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-charcoal/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}