import Link from 'next/link';
import { SEMESTERS } from '@/lib/utils';


export const metadata = {
  verification: {
    google: 'yc5Kt9gcHQ9teCn2Ol4qyxr3nizW1m8nW0tUf5Rxrnw',
  },
};
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen pt-16 pb-20 bg-gradient-to-b from-teal-50/30 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-teal-200">
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
              Purbanchal University
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              BIT Past Questions Nepal
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Complete collection of past question papers, project ideas, and study materials for BIT students
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link href="/semester/1" className="btn-primary text-lg">
                Browse Questions
              </Link>
              
              <Link href="/important-topics" className="btn-outline text-lg">
                Important Topics
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '8', label: 'Semesters' },
                { number: '48', label: 'Subjects' },
                { number: '500+', label: 'Questions' },
                { number: '138', label: 'Credits' },
              ].map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Semesters Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse by Semester</h2>
            <p className="section-subtitle">
              Select your semester to access past question papers and study materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEMESTERS.map((semester) => (
              <Link
                key={semester.id}
                href={semester.available ? `/semester/${semester.id}` : '#'}
                className={semester.available ? 'card-hover' : 'card opacity-60 cursor-not-allowed'}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-teal-600 text-white rounded-lg flex items-center justify-center text-2xl font-bold shadow-sm shadow-teal-200">
                    {semester.id}
                  </div>
                  {semester.available && (
                    <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Semester {semester.id}
                </h3>
                
                <div className={semester.available ? 'badge-green' : 'badge-orange'}>
                  {semester.available ? (
                    <>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Available
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Coming Soon
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Everything you need to excel in your studies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Past Questions',
                description: 'Access comprehensive collection of previous year question papers from Purbanchal University',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                link: '/semester/1',
              },
              {
                title: 'Project Ideas',
                description: 'Semester-wise project topics with implementation guides and presentation tips',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                link: '/projects',
              },
              {
                title: 'Important Topics',
                description: 'Exam-focused topics with code examples and key concepts for each subject',
                icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                link: '/important-topics',
              },
            ].map((feature, idx) => (
              <Link key={idx} href={feature.link} className="feature-card group">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-teal-600 font-medium group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
     {/* SEO Content Section - IMPROVED DESIGN */}
<section className="section bg-white">
  <div className="container max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content - 2 Columns */}
      <div className="lg:col-span-2 space-y-8">
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About This Platform
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            BIT Past Questions from Purbanchal University
          </h2>
          <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
        </div>
        
        {/* Content Cards */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-teal-200 transition-colors">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Comprehensive Question Bank
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Nepal's most comprehensive platform for <strong className="text-gray-900">BIT (Bachelor of Information Technology) past questions</strong> from <strong className="text-gray-900">Purbanchal University (PU)</strong>, also known as Purwanchal University. Access previous year question papers organized semester-wise for easy preparation.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-teal-200 transition-colors">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              All Semesters Covered
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Whether you're searching for <strong className="text-gray-900">BIT 1st semester past questions</strong>, <strong className="text-gray-900">BIT 2nd semester papers</strong>, <strong className="text-gray-900">BIT 3rd semester old questions</strong>, or <strong className="text-gray-900">BIT 4th semester previous papers</strong> from Purbanchal University, we have everything organized systematically.
            </p>
          </div>

          <div className="p-6 bg-teal-600 text-white rounded-xl">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              Complete Study Resources
            </h3>
            <p className="text-teal-50 leading-relaxed">
              Our platform includes <strong className="text-white">PU BIT exam papers</strong>, <strong className="text-white">BIT question bank</strong>, project ideas, important topics, and complete syllabus to help you prepare effectively for your Purbanchal University BIT examinations.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {[
            { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: '8 Semesters', value: 'All' },
            { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', label: '48 Subjects', value: 'Total' },
            { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: '500+', value: 'Questions' },
            { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', label: '50+', value: 'Projects' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <svg className="w-6 h-6 mx-auto mb-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
              </svg>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar - 1 Column */}
      <div className="lg:col-span-1 space-y-6">
        {/* Quick Links */}
        <div className="card bg-gradient-to-br from-teal-50 to-white border-teal-200 sticky top-24">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Quick Access</h3>
          </div>
          
          <div className="space-y-2">
            {[
              { name: 'Semester 1 Questions', href: '/semester/1', badge: 'Active' },
              { name: 'Semester 2 Questions', href: '/semester/2', badge: 'Active' },
              { name: 'Semester 3 Questions', href: '/semester/3', badge: 'Active' },
              { name: 'Semester 4 Questions', href: '/semester/4', badge: 'Active' },
              { name: 'All Projects', href: '/projects' },
              { name: 'Important Topics', href: '/important-topics' },
              { name: 'Complete Syllabus', href: '/syllabus' },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-teal-600 hover:text-white transition-all group border border-gray-200 hover:border-teal-600"
              >
                <span className="text-sm font-medium">{link.name}</span>
                <div className="flex items-center gap-2">
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full group-hover:bg-white/20 group-hover:text-white">
                      {link.badge}
                    </span>
                  )}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div className="card bg-gray-50">
          <h4 className="text-sm font-bold text-gray-900 mb-3">Popular Keywords</h4>
          <div className="flex flex-wrap gap-2">
            {[
              'BIT Past Questions',
              'PU Questions',
              'BIT Nepal',
              'Purbanchal University',
              'Previous Papers',
              'Question Bank',
              'BIT Exam',
              'Old Questions'
            ].map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full hover:border-teal-600 hover:text-teal-600 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Help Box */}
        <div className="card bg-blue-50 border-blue-200">
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Need Help?</h4>
              <p className="text-sm text-gray-600 mb-3">
                Can't find what you're looking for? Contact us for assistance.
              </p>
              <a href="mailto:whoismanish12@gmail.com" className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                Send Message
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Access hundreds of past questions and study materials
          </p>
          <Link href="/semester/1" className="btn bg-white text-teal-600 hover:bg-gray-100 text-lg">
            Browse Questions
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}