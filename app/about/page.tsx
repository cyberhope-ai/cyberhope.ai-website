import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - CyberHopeAI',
  description: 'From a humble beginning in Indiana, CyberHopeAI has grown into a global force, driven by a vision to transform industries with the power of AI.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">Our Story</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 md:text-xl">
            From a humble beginning in Indiana, CyberHopeAI has grown into a global force, driven by a vision to transform industries with the power of AI. Our journey is marked by innovation, a commitment to excellence, and a relentless pursuit of solutions that matter.
          </p>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Principles</h2>
            <p className="mt-4 text-lg text-gray-400">
              At CyberHopeAI, our work is guided by three core values that shape our approach and define our impact.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold">Trust</h3>
              <p className="mt-2 text-gray-400">
                We build trust through transparency, reliability, and ethical practices in all our AI solutions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold">Impact</h3>
              <p className="mt-2 text-gray-400">
                We are committed to creating meaningful impact by solving real-world problems and driving positive change.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold">Innovation</h3>
              <p className="mt-2 text-gray-400">
                We foster a culture of innovation, constantly pushing the boundaries of AI technology to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precognition OS Section */}
      <section className="bg-gray-900/50 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Precognition OS™: The Foundation of CyberHopeAI
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
              CyberHopeAI is the first application built on the Precognition OS™ framework, a revolutionary platform designed to anticipate and address complex challenges with unparalleled accuracy and efficiency.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-800/50 p-6 border border-gray-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold">Predictive Analytics</h3>
              <p className="mt-2 text-gray-400">
                Precognition OS™ leverages advanced algorithms to predict future outcomes and trends, enabling proactive decision-making.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800/50 p-6 border border-gray-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold">Adaptive Learning</h3>
              <p className="mt-2 text-gray-400">
                The framework continuously learns and adapts to new data, ensuring optimal performance and relevance over time.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800/50 p-6 border border-gray-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold">Targeted Solutions</h3>
              <p className="mt-2 text-gray-400">
                Precognition OS™ powers CyberHopeAI to deliver highly targeted solutions tailored to specific industry needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

