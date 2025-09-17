import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full text-center py-20 sm:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            CyberHopeAI — Powering Industries,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
              One Skill at a Time
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            We build AI with practical skills, creating a future where technology empowers human potential and drives industrial progress. This is the new era of intelligent automation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link 
              href="/thesis"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-sky-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="truncate">View Investment Thesis</span>
            </Link>
            <Link 
              href="/contact"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-gray-700/50 text-white text-base font-bold border border-gray-600 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="truncate">Request Introduction</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full max-w-4xl mx-auto pb-16 sm:pb-24 px-4 text-center" id="vision">
        <h2 className="text-4xl font-bold mb-6">The Bigger Vision</h2>
        <p className="text-lg text-gray-300 mb-8">
          Our goal is to build the world&apos;s first AI with practical, real-world skills. We are developing{" "}
          <span className="font-bold text-sky-300">Precognition OS</span>, a groundbreaking operating system for AI that enables it to learn, adapt, and perform complex industrial tasks autonomously. This is more than just data analysis; it&apos;s about creating a skilled digital workforce.
        </p>
        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 max-w-3xl mx-auto">
          <p className="text-gray-400">
            <span className="font-bold text-amber-400">Disclaimer:</span> Access to detailed information about Precognition OS and our technology roadmap is available to accredited investors under a Non-Disclosure Agreement (NDA).
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0D0F13] py-20 sm:py-32" id="cta">
        <div className="container mx-auto max-w-3xl text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Join Us in Building the Future</h2>
          <p className="text-lg text-gray-300 mb-8">
            We are seeking strategic partners to join our Seed Round. This is an opportunity to get in on the ground floor of a company poised to redefine the relationship between humans and machines in industry.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/investors"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-sky-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="truncate">Request Investor Deck</span>
            </Link>
            <Link 
              href="/contact"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-gray-700/50 text-white text-base font-bold border border-gray-600 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="truncate">Schedule a Call</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
