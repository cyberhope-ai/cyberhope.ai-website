import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technology - CyberHopeAI',
  description: 'Discover our Skills Intelligence Engine and Precognition OS - the revolutionary technology powering the future of work.',
};

export default function Technology() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section 
        className="relative min-h-[600px] flex items-end bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pb-16 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Skills Intelligence Engine
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              At the core of CyberHopeAI&apos;s Precognition OS lies our proprietary Skills Intelligence Engine. This engine is the key to unlocking the potential of SkillDNA profiles, providing unparalleled insights into individual capabilities and potential.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Three Column Features */}
      <section className="py-20 px-6 bg-[#0D0F13]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">How It Works</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Skills Intelligence Engine analyzes vast datasets of skills, performance data, and industry trends to create unique SkillDNA profiles for each individual. These profiles go beyond traditional resumes, offering a dynamic and comprehensive view of skills, proficiencies, and potential growth areas.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Precognition OS</h2>
              <p className="text-gray-300 leading-relaxed">
                The Skills Intelligence Engine is a critical component of Precognition OS, our patent-pending operating system for the future of work. Precognition OS leverages AI and machine learning to provide predictive insights, personalized learning pathways, and optimized talent management solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Patent-Pending Technology</h2>
              <p className="text-gray-300 leading-relaxed">
                The architecture of our Skills Intelligence Engine and Precognition OS is protected by multiple patent applications. Due to the proprietary nature of our technology, detailed architectural diagrams and technical specifications are available under NDA only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NDA Access Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Access Detailed Information</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              To gain deeper insights into our technology and its architecture, please request access under a Non-Disclosure Agreement.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-700/50 text-white font-bold border border-gray-600 rounded-md hover:bg-gray-700 transition-all duration-300"
            >
              <span>Request NDA Access</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Technology Features */}
      <section className="py-16 px-6 bg-[#0D0F13]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-300">Core Technology Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Advanced ML Models</h3>
              <p className="text-gray-300">
                State-of-the-art machine learning models trained on millions of data points to understand skill relationships and progression patterns.
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Real-time Analytics</h3>
              <p className="text-gray-300">
                Process and analyze skill data in real-time to provide instant insights and recommendations for workforce optimization.
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">SkillDNA Profiling</h3>
              <p className="text-gray-300">
                Create comprehensive skill profiles that capture not just current abilities but also learning velocity and future potential.
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Enterprise Security</h3>
              <p className="text-gray-300">
                Military-grade encryption and security protocols to protect sensitive skill data and organizational intelligence.
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Predictive Intelligence</h3>
              <p className="text-gray-300">
                Forecast future skill needs and workforce trends using advanced predictive modeling and industry analysis.
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Modular Architecture</h3>
              <p className="text-gray-300">
                Flexible, scalable architecture that adapts to different industries and organizational structures seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}