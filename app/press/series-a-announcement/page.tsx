import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CyberHopeAI Raises $500K Series A Funding - Press Release',
  description: 'CyberHopeAI announced today it has raised $500,000 in Series A seed funding to accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system.',
  openGraph: {
    title: 'CyberHopeAI Raises $500K Series A to Build Intelligence Operating System',
    description: 'Series A funding from Joan Young Trust to accelerate Precognition OS™ development',
    type: 'article',
    publishedTime: '2025-09-09T00:00:00.000Z',
    authors: ['CyberHopeAI'],
    tags: ['Series A', 'Funding', 'AI', 'Precognition OS', 'Investment'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberHopeAI Raises $500K Series A Funding',
    description: 'Building an Intelligence Operating System for Human Potential with Precognition OS™',
  },
};

export default function SeriesAAnnouncement() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential',
    datePublished: '2025-09-09T00:00:00.000Z',
    dateModified: '2025-09-09T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: 'CyberHopeAI',
      url: 'https://cyberhopeai.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CyberHopeAI',
      url: 'https://cyberhopeai.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cyberhopeai.com/logo.png'
      }
    },
    description: 'CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™.',
    articleBody: 'CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust. The investment will accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system that empowers human potential and redefines how industries work.',
    url: 'https://cyberhopeai.com/press/series-a-announcement'
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Press Release Header */}
          <div className="mb-8">
            <Link 
              href="/press"
              className="text-primary hover:text-sky-300 transition-colors mb-4 inline-block"
            >
              ← Back to Press Releases
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
                PRESS RELEASE
              </span>
              <time dateTime="2025-09-09">September 9, 2025</time>
              <span>Indianapolis, IN</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential
          </h1>

          {/* Lead Paragraph */}
          <div className="text-xl text-gray-300 mb-8 font-medium">
            CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust. The investment will accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system that empowers human potential and redefines how industries work.
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-gray-300 leading-relaxed">
              <strong>Indianapolis, IN – September 9, 2025</strong> – CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust. The investment will accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system that empowers human potential and redefines how industries work.
            </p>

            <p className="text-gray-300 leading-relaxed">
              CyberHopeAI is architected to deliver practical, real-world skills for AI across workforce development, advanced manufacturing, biotechnology, agritech, law enforcement, and hyperscale data centers. The platform is designed to run seamlessly on the world&apos;s leading AI and cloud ecosystems — including Google Cloud, Amazon Web Services (AWS), Microsoft Azure, NVIDIA, and OpenAI — ensuring scalability, compatibility, and enterprise readiness.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-8 italic">
              <p className="text-xl text-white">
                &ldquo;This Series A is about more than growth—it&apos;s about purpose. We are creating an operating system for intelligence itself: one that validates skills, drives trust, and unlocks new frontiers for human progress.&rdquo;
              </p>
              <cite className="text-gray-400 not-italic block mt-4">
                — Rick Barretto, Founder & CEO of CyberHopeAI
              </cite>
            </blockquote>

            <p className="text-gray-300 leading-relaxed">
              The announcement is also live on{' '}
              <a 
                href="https://www.crunchbase.com/organization/cyberhopeai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-sky-300 underline transition-colors"
              >
                Crunchbase
              </a>
              , marking CyberHopeAI&apos;s entry into the global startup ecosystem.
            </p>

            <p className="text-gray-300 leading-relaxed">
              CyberHopeAI is selectively opening its Seed Round to additional strategic investors. For more information, visit{' '}
              <Link href="/" className="text-primary hover:text-sky-300 underline transition-colors">
                www.cyberhopeai.com
              </Link>
              {' '}or view the official{' '}
              <a 
                href="https://www.crunchbase.com/organization/cyberhopeai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-sky-300 underline transition-colors"
              >
                CyberHope Crunchbase profile
              </a>.
            </p>
          </div>

          {/* Key Highlights Box */}
          <div className="bg-gradient-to-r from-primary/10 to-sky-900/20 border border-primary/30 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Investment Highlights</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Amount:</strong> $500,000 Series A Funding</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Lead Investor:</strong> Joan Young Trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Focus:</strong> Accelerating Precognition OS™ development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Platform Compatibility:</strong> Google Cloud, AWS, Microsoft Azure, NVIDIA, OpenAI</span>
              </li>
            </ul>
          </div>

          {/* About CyberHopeAI Section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <h2 className="text-2xl font-bold mb-4">About CyberHopeAI</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              CyberHopeAI is building the world&apos;s first AI with practical, real-world skills through its revolutionary Precognition OS™ platform. The company is focused on creating an intelligence operating system that empowers human potential across multiple industries including workforce development, manufacturing, biotechnology, and data centers.
            </p>
            
            {/* Contact and Links */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="font-bold mb-3">Media Contact & Information</h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <strong>Website:</strong>{' '}
                  <Link href="/" className="text-primary hover:text-sky-300 transition-colors">
                    www.cyberhopeai.com
                  </Link>
                </p>
                <p>
                  <strong>Crunchbase:</strong>{' '}
                  <a 
                    href="https://www.crunchbase.com/organization/cyberhopeai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-sky-300 transition-colors"
                  >
                    CyberHopeAI Profile
                  </a>
                </p>
                <p>
                  <strong>Investor Relations:</strong>{' '}
                  <Link href="/contact" className="text-primary hover:text-sky-300 transition-colors">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-lg font-bold mb-4">Share This Announcement</h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System')}&url=${encodeURIComponent('https://cyberhopeai.com/press/series-a-announcement')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/50 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
              >
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://cyberhopeai.com/press/series-a-announcement')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/50 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}