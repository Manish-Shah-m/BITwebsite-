import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BIT Past Questions Nepal - Purbanchal University (PU) Previous Year Questions',
  description: 'Access comprehensive BIT (Bachelor of Information Technology) past questions, previous year question papers from Purbanchal University (PU), Purwanchal University Nepal. Download semester-wise exam papers, project ideas, and important topics for BIT students.',
  keywords: 'BIT past questions, BIT previous questions, Purbanchal University, PU past questions, Purwanchal University, BIT Nepal, BIT exam papers, BIT question bank, BIT semester papers, BIT old questions, Bachelor of Information Technology Nepal, PU BIT questions',
  openGraph: {
    title: 'BIT Past Questions Nepal - PU Previous Year Papers',
    description: 'Complete collection of BIT past questions from Purbanchal University',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="BIT past questions, BIT previous questions, Purbanchal University, PU past questions, Purwanchal University, BIT Nepal, BIT exam papers, BIT question bank, BIT semester papers, BIT old questions" />
        <meta name="author" content="BIT Past Questions Nepal" />
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-20 bg-white">
          {children}
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
            },
          }}
        />
      </body>
    </html>
  );
}