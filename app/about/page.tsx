import { Nav } from "@/components/nav"

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-black pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About CyberHope</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              CyberHope, a division of Decolores Holdings, LLC, is the flagship product of Precognition OS™ — 
              a universal foresight framework that unites human cognition, AI intelligence, and machine data 
              into predictive pathways. CyberHope verifies skills and maps them to real opportunities through 
              SkillDNA™ profiles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Roots in Real-World Training</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              CyberHope was created in a grassroots lab beginning in 2018, after years of teaching and training 
              underrepresented and diverse learners who needed new career pathways. In partnership with Hope 
              Training Academy (a 501(c)(3) nonprofit), the team developed CyberHope around the real needs of 
              real populations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              HTA's Onramp to Tech Prosperity initiative has served thousands of adults across Indiana with 
              hands-on, tech-enabled training and U.S. Department of Labor–registered apprenticeships in IT 
              and Cybersecurity. As a CompTIA partner, HTA has helped learners earn industry-recognized 
              certifications while preparing for careers and entrepreneurship.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Vision</h2>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">▸</span>
                <span>Replace résumés with verified skills.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">▸</span>
                <span>Fuse human potential with AI foresight.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">▸</span>
                <span>Scale pilots and partnerships across industries, from edge deployments to quantum-ready environments.</span>
              </li>
            </ul>
          </section>

          <section className="border-t border-gray-800 pt-8 mt-12">
            <p className="text-center text-gray-400">
              Contact us at{" "}
              <a href="mailto:rick@cyberhopeai.com" className="text-cyan-400 hover:text-cyan-300">
                rick@cyberhopeai.com
              </a>{" "}
              | Carmel, Indiana
            </p>
          </section>
        </div>
      </main>
    </>
  )
}