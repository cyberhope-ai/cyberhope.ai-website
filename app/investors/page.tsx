import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Relations - CyberHopeAI',
  description: 'Join our Seed Round and be part of the future of AI technology. Investment opportunities with CyberHopeAI.',
};

export default function Investors() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Investor Relations
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We are seeking strategic partners to join our Seed Round. This is an opportunity to get in on the ground floor of a company poised to redefine the relationship between humans and machines in industry.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Investment Opportunity</h3>
            <p className="text-gray-300 mb-6">
              Join us in building the world&apos;s first AI with practical, real-world skills. Our Precognition OS™ represents a breakthrough in AI technology.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-sky-400 transition-all duration-300 transform hover:scale-105"
            >
              Request Investor Deck
            </Link>
          </div>
          
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Strategic Partnership</h3>
            <p className="text-gray-300 mb-6">
              Partner with us to accelerate the development and deployment of AI solutions across various industries.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700/50 text-white font-bold border border-gray-600 rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Partnership
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-sky-900/20 border border-sky-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-sky-300">Learn More About CyberHopeAI</h3>
          <p className="text-gray-300 mb-6">
            Visit our Crunchbase profile for additional company information, news, and updates.
          </p>
          <a 
            href="https://www.crunchbase.com/organization/cyberhopeai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-sky-600/30 text-white font-bold border border-sky-600 rounded-md hover:bg-sky-600/50 transition-all duration-300"
          >
            <span>View on Crunchbase</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="mt-8 bg-amber-900/20 border border-amber-700 rounded-lg p-6">
          <p className="text-amber-400">
            <span className="font-bold">Disclaimer:</span> Access to detailed financial information and investment materials is available to accredited investors under a Non-Disclosure Agreement (NDA).
          </p>
        </div>
      </div>
    </div>
  );
}

