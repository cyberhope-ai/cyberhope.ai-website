import type { Metadata } from 'next'

export const revalidate = 3600

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cyberhopeai.com'
const url = `${SITE_URL}/press/series-a`

export const metadata: Metadata = {
  title: 'CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential',
  description:
    'CyberHopeAI announced $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™, an intelligence operating system that empowers human potential.',
  alternates: { canonical: url },
  openGraph: {
    type: 'article',
    url,
    title: 'CyberHopeAI Raises $500K Series A',
    description:
      'Funding accelerates development of Precognition OS™, an intelligence operating system to validate skills and unlock human potential.',
    siteName: 'CyberHopeAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberHopeAI Raises $500K Series A',
    description:
      'Funding accelerates development of Precognition OS™, an intelligence operating system to validate skills and unlock human potential.',
  },
}

export default function SeriesAPressRelease() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PressRelease',
    headline:
      'CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential',
    datePublished: '2025-09-09',
    dateModified: '2025-09-09',
    mainEntityOfPage: url,
    url,
    author: {
      '@type': 'Person',
      name: 'Rick Barretto',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CyberHopeAI',
      url: SITE_URL,
    },
    description:
      'CyberHopeAI announced $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™, an intelligence operating system that empowers human potential.',
    articleSection: 'Funding',
    articleBody:
      `Indianapolis, IN – September 9, 2025 – CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust. The investment will accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system that empowers human potential and redefines how industries work.

CyberHopeAI is architected to deliver practical, real-world skills for AI across workforce development, advanced manufacturing, biotechnology, agritech, law enforcement, and hyperscale data centers. The platform is designed to run seamlessly on the world’s leading AI and cloud ecosystems — including Google Cloud, Amazon Web Services (AWS), Microsoft Azure, NVIDIA, and OpenAI — ensuring scalability, compatibility, and enterprise readiness.

“This Series A is about more than growth—it’s about purpose,” said Rick Barretto, Founder & CEO of CyberHopeAI. “We are creating an operating system for intelligence itself: one that validates skills, drives trust, and unlocks new frontiers for human progress.”

The announcement is also live on Crunchbase, marking CyberHopeAI’s entry into the global startup ecosystem.

CyberHopeAI is selectively opening its Seed Round to additional strategic investors. For more information, visit www.cyberhopeai.com or view the official CyberHope Crunchbase profile.`,
  }

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-invert max-w-none">
          <header className="mb-8">
            <p className="text-sm text-gray-400 mb-2">FOR IMMEDIATE RELEASE</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential
            </h1>
            <p className="text-lg text-gray-400">Indianapolis, IN – September 9, 2025</p>
          </header>

          <div className="text-lg text-gray-300 space-y-6 leading-relaxed">
            <p>
              CyberHopeAI announced today it has raised <strong>$500,000 in Series A seed funding</strong> from the
              Joan Young Trust. The investment will accelerate development of <strong>Precognition OS™</strong>, an AI
              platform designed to serve as an intelligence operating system that empowers human potential and
              redefines how industries work.
            </p>

            <p>
              CyberHopeAI is architected to deliver practical, real-world skills for AI across workforce development,
              advanced manufacturing, biotechnology, agritech, law enforcement, and hyperscale data centers. The
              platform is designed to run seamlessly on the world’s leading AI and cloud ecosystems — including
              <strong>Google Cloud</strong>, <strong>AWS</strong>, <strong>Microsoft Azure</strong>, <strong>NVIDIA</strong>, and
              <strong> OpenAI</strong> — ensuring scalability, compatibility, and enterprise readiness.
            </p>

            <blockquote className="border-l-4 border-cyan-400 pl-4 my-8 italic">
              <p className="text-xl text-white">
                “This Series A is about more than growth—it’s about purpose,” said Rick Barretto, Founder & CEO of
                CyberHopeAI. “We are creating an operating system for intelligence itself: one that validates skills,
                drives trust, and unlocks new frontiers for human progress.”
              </p>
            </blockquote>

            <p>
              The announcement is also live on Crunchbase, marking CyberHopeAI’s entry into the global startup
              ecosystem.
            </p>

            <p>
              CyberHopeAI is selectively opening its Seed Round to additional strategic investors. For more
              information, visit <a className="text-cyan-400" href="https://www.cyberhopeai.com">www.cyberhopeai.com</a> or
              view the official CyberHope <a className="text-cyan-400" href="/out/crunchbase">Crunchbase profile</a>.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}

