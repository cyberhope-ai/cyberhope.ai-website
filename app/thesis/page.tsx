import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Thesis - CyberHopeAI',
  description: 'Our investment thesis: Building the world\'s first AI with practical, real-world skills through Precognition OS.',
};

export default function Thesis() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Investment Thesis
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The world needs AI with practical skills. We&apos;re building the foundation for a skilled digital workforce that can transform industries.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-sky-300">The Opportunity</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The global AI market is projected to reach $1.8 trillion by 2030, but current AI solutions are limited to narrow, specialized tasks. There&apos;s a massive gap in the market for AI systems that can perform complex, practical work across multiple domains – the kind of work that requires real skills, not just pattern recognition.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              CyberHopeAI is positioned to capture this opportunity by building the world&apos;s first AI with practical, transferable skills that can adapt and learn across industries.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-sky-300">Our Solution</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Precognition OS™ represents a fundamental breakthrough in AI architecture. Unlike traditional AI systems that are trained for specific tasks, our platform creates AI that can learn, adapt, and develop new skills autonomously. This is the foundation for building a truly skilled digital workforce.
            </p>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Competitive Advantages</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  First-mover advantage in practical AI skills development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Proprietary Precognition OS™ technology platform
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Scalable across multiple industries and use cases
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Strong intellectual property portfolio
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-sky-300">Market Validation</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Industries across the globe are struggling with labor shortages, increasing complexity, and the need for more efficient operations. Our early pilots have demonstrated significant ROI improvements and operational efficiency gains, validating the market demand for practical AI solutions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-sky-300">The Vision</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We envision a future where AI doesn&apos;t just process data or recognize patterns, but actually performs skilled work alongside humans. This represents a trillion-dollar opportunity to transform how work gets done across every industry, from manufacturing and logistics to healthcare and finance.
            </p>
          </section>

          <div className="bg-gradient-to-r from-primary/10 to-sky-900/20 border border-primary/30 rounded-lg p-8 mt-16">
            <h3 className="text-2xl font-bold mb-4 text-primary">Join Our Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We&apos;re seeking strategic investors who share our vision of building the future of AI. This is an opportunity to be part of a company that&apos;s not just building another AI tool, but creating the foundation for a new era of human-AI collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-sky-400 transition-all duration-300 transform hover:scale-105"
              >
                Request Full Thesis
              </Link>
              <Link 
                href="/investors"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-700/50 text-white font-bold border border-gray-600 rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                Investor Relations
              </Link>
            </div>
          </div>

          <div className="bg-amber-900/20 border border-amber-700 rounded-lg p-6">
            <p className="text-amber-400">
              <span className="font-bold">Disclaimer:</span> This summary is for informational purposes only. Detailed financial projections, market analysis, and investment terms are available to qualified investors under appropriate confidentiality agreements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

