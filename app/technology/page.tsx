import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology - CyberHopeAI',
  description: 'Learn about our groundbreaking Precognition OS and the advanced AI technology that powers CyberHopeAI.',
};

export default function Technology() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Technology
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the groundbreaking technology behind CyberHopeAI, including our revolutionary Precognition OS that enables AI to learn, adapt, and perform complex industrial tasks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-sky-300">Precognition OS</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At the heart of CyberHopeAI lies Precognition OS, a revolutionary operating system designed specifically for AI applications. This groundbreaking platform enables artificial intelligence to anticipate, learn, and adapt to complex industrial challenges with unprecedented accuracy and efficiency.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Unlike traditional AI systems that rely on static models, Precognition OS creates a dynamic, evolving intelligence that grows more capable over time, making it the ideal foundation for building practical, real-world AI solutions.
            </p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Adaptive learning algorithms that evolve with new data
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Real-time decision making and problem solving
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Industry-specific skill development and optimization
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Seamless integration with existing industrial systems
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">High Performance</h3>
            <p className="text-gray-300">
              Optimized for speed and efficiency, delivering real-time results even in the most demanding industrial environments.
            </p>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Secure & Reliable</h3>
            <p className="text-gray-300">
              Built with enterprise-grade security and reliability standards to ensure safe deployment in critical industrial applications.
            </p>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Scalable Architecture</h3>
            <p className="text-gray-300">
              Designed to scale from small deployments to enterprise-wide implementations across multiple industries and use cases.
            </p>
          </div>
        </div>

        <div className="bg-amber-900/20 border border-amber-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Technology Access</h3>
          <p className="text-gray-300 leading-relaxed">
            Detailed technical specifications, architecture documentation, and implementation guides for Precognition OS are available to qualified partners and investors under appropriate confidentiality agreements. Contact us to learn more about accessing our technology documentation.
          </p>
        </div>
      </div>
    </div>
  );
}

