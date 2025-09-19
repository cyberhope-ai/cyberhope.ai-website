import type { Metadata } from 'next'

export const revalidate = 3600

const SITE_URL = 'https://www.cyberhopeai.com'
const url = `${SITE_URL}/press/series-a`

export const metadata: Metadata = {
  title: 'CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential',
  description:
    'CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system that empowers human potential.',
  keywords: 'CyberHopeAI, Series A, funding, investment, Joan Young Trust, Precognition OS, AI, artificial intelligence, intelligence operating system',
  authors: [{ name: 'Rick Barretto' }],
  publisher: 'CyberHopeAI',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: { canonical: url },
  openGraph: {
    type: 'article',
    url,
    title: 'CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential',
    description:
      'CyberHopeAI announced $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™, an intelligence operating system that empowers human potential.',
    siteName: 'CyberHopeAI',
    locale: 'en_US',
    publishedTime: '2025-09-09T00:00:00.000Z',
    modifiedTime: '2025-09-09T00:00:00.000Z',
    authors: ['Rick Barretto'],
    section: 'Funding',
    tags: ['Series A', 'Funding', 'AI', 'Precognition OS', 'Investment', 'Joan Young Trust'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System',
    description:
      'CyberHopeAI announces $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™',
    site: '@cyberhopeai',
    creator: '@rickbarretto',
  },
}

export default function SeriesAPressRelease() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': url,
    headline:
      'CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential',
    alternativeHeadline: 'CyberHopeAI Secures Series A Funding from Joan Young Trust',
    datePublished: '2025-09-09T00:00:00.000Z',
    dateModified: '2025-09-09T00:00:00.000Z',
    dateCreated: '2025-09-09T00:00:00.000Z',
    dateline: 'Indianapolis, IN',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    url,
    author: {
      '@type': 'Person',
      name: 'Rick Barretto',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name: 'CyberHopeAI'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'CyberHopeAI',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512
      }
    },
    description:
      'CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system that empowers human potential.',
    articleSection: 'Funding',
    keywords: 'Series A, funding, investment, artificial intelligence, AI, Precognition OS, Joan Young Trust, CyberHopeAI',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'WebSite',
      name: 'CyberHopeAI',
      url: SITE_URL
    },
    about: {
      '@type': 'Thing',
      name: 'Series A Funding Round',
      description: '$500,000 investment in CyberHopeAI'
    },
    mentions: [
      {
        '@type': 'Organization',
        name: 'Joan Young Trust',
        description: 'Lead investor in CyberHopeAI Series A round'
      },
      {
        '@type': 'Product',
        name: 'Precognition OS™',
        description: 'AI platform designed as an intelligence operating system'
      }
    ],
    articleBody:
      `Indianapolis, IN – September 9, 2025 – CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust. The investment will accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system that empowers human potential and redefines how industries work.

CyberHopeAI is architected to deliver practical, real-world skills for AI across workforce development, advanced manufacturing, biotechnology, agritech, law enforcement, and hyperscale data centers. The platform is designed to run seamlessly on the world's leading AI and cloud ecosystems — including Google Cloud, Amazon Web Services (AWS), Microsoft Azure, NVIDIA, and OpenAI — ensuring scalability, compatibility, and enterprise readiness.

"This Series A is about more than growth—it's about purpose," said Rick Barretto, Founder & CEO of CyberHopeAI. "We are creating an operating system for intelligence itself: one that validates skills, drives trust, and unlocks new frontiers for human progress."

The announcement is also live on Crunchbase, marking CyberHopeAI's entry into the global startup ecosystem.

CyberHopeAI is selectively opening its Seed Round to additional strategic investors. For more information, visit www.cyberhopeai.com or view the official CyberHope Crunchbase profile.`,
  }

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-invert max-w-none" itemScope itemType="https://schema.org/NewsArticle">
          <header className="mb-8">
            <p className="text-sm text-gray-400 mb-2">FOR IMMEDIATE RELEASE</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" itemProp="headline">
              CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential
            </h1>
            <p className="text-lg text-gray-400">
              <span itemProp="dateline">Indianapolis, IN</span> – <time dateTime="2025-09-09" itemProp="datePublished">September 9, 2025</time>
            </p>
          </header>

          <div className="text-lg text-gray-300 space-y-6 leading-relaxed" itemProp="articleBody">
            <p>
              CyberHopeAI announced today it has raised <strong>$500,000 in Series A seed funding</strong> from the
              Joan Young Trust. The investment will accelerate development of <strong>Precognition OS™</strong>, an AI
              platform designed to serve as an intelligence operating system that empowers human potential and
              redefines how industries work.
            </p>

            <p>
              CyberHopeAI is architected to deliver practical, real-world skills for AI across workforce development,
              advanced manufacturing, biotechnology, agritech, law enforcement, and hyperscale data centers. The
              platform is designed to run seamlessly on the world&apos;s leading AI and cloud ecosystems — including
              <strong>Google Cloud</strong>, <strong>AWS</strong>, <strong>Microsoft Azure</strong>, <strong>NVIDIA</strong>, and
              <strong> OpenAI</strong> — ensuring scalability, compatibility, and enterprise readiness.
            </p>

            <blockquote className="border-l-4 border-cyan-400 pl-4 my-8 italic">
              <p className="text-xl text-white">
                &ldquo;This Series A is about more than growth—it&apos;s about purpose,&rdquo; said <span itemProp="author" itemScope itemType="https://schema.org/Person"><span itemProp="name">Rick Barretto</span>, <span itemProp="jobTitle">Founder & CEO</span></span> of
                CyberHopeAI. &ldquo;We are creating an operating system for intelligence itself: one that validates skills,
                drives trust, and unlocks new frontiers for human progress.&rdquo;
              </p>
            </blockquote>

            <p>
              The announcement is also live on Crunchbase, marking CyberHopeAI&apos;s entry into the global startup
              ecosystem.
            </p>

            <p>
              CyberHopeAI is selectively opening its Seed Round to additional strategic investors. For more
              information, visit <a className="text-cyan-400" href="https://www.cyberhopeai.com">www.cyberhopeai.com</a> or
              view the official CyberHope <a className="text-cyan-400" href="https://www.crunchbase.com/organization/cyberhopeai" target="_blank" rel="noopener noreferrer">Crunchbase profile</a>.
            </p>

            <footer className="mt-8 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                <strong>Media contact:</strong> Rick Barretto — <a href="mailto:rick@cyberhopeai.com" className="text-cyan-400">rick@cyberhopeai.com</a>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Note: This release is intentionally limited in distribution. Please contact media relations for additional information.
              </p>
            </footer>
          </div>
        </article>
      </div>
    </main>
  )
}