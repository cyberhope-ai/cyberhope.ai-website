import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Press & News - CyberHopeAI',
  description: 'Latest news, press releases, and announcements from CyberHopeAI. Stay updated on our funding rounds, product launches, and company milestones.',
};

export const revalidate = 3600

export default function PressIndex() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Press & News</h1>
        <p className="text-gray-300 text-xl mb-12 text-center max-w-3xl mx-auto">
          Official announcements and media resources from CyberHopeAI. Follow our journey as we build the future of AI with practical skills.
        </p>
        
        {/* Featured Press Release */}
        <div className="mb-12 bg-gradient-to-r from-primary/10 to-sky-900/20 border border-primary/30 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              LATEST
            </span>
            <span className="text-gray-400">September 9, 2025</span>
          </div>
          
          <Link href="/press/series-a-announcement" className="group">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
              CyberHopeAI Raises $500K Series A to Build an Intelligence Operating System for Human Potential
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              CyberHopeAI announced today it has raised $500,000 in Series A seed funding from the Joan Young Trust to accelerate development of Precognition OS™, an AI platform designed to serve as an intelligence operating system.
            </p>
            <span className="text-primary group-hover:text-sky-300 transition-colors inline-flex items-center gap-2">
              Read Full Announcement
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
        
        {/* Media Resources */}
        <div className="mt-16 bg-gray-800/30 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Media Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3 text-sky-300">Company Profile</h3>
              <p className="text-gray-300 mb-3">View our complete company profile and funding history.</p>
              <a 
                href="https://www.crunchbase.com/organization/cyberhopeai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-sky-300 transition-colors inline-flex items-center gap-1"
              >
                View on Crunchbase
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-sky-300">Press Inquiries</h3>
              <p className="text-gray-300 mb-3">For media inquiries and interview requests.</p>
              <Link href="/contact" className="text-primary hover:text-sky-300 transition-colors">
                Contact Press Team →
              </Link>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-sky-300">Investor Relations</h3>
              <p className="text-gray-300 mb-3">Information for current and prospective investors.</p>
              <Link href="/investors" className="text-primary hover:text-sky-300 transition-colors">
                Investor Information →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

