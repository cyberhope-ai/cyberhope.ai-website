import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Mission - CyberHopeAI',
  description: 'Our mission is to build AI with practical skills, creating a future where technology empowers human potential and drives industrial progress.',
};

export default function Mission() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            To build AI with practical skills, creating a future where technology empowers human potential and drives industrial progress.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Empowering Human Potential</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe that AI should augment human capabilities, not replace them. Our mission is to create intelligent systems that work alongside humans, enhancing their skills and enabling them to achieve more than ever before. By developing AI with practical, real-world skills, we&apos;re building a future where technology serves as a powerful ally in human endeavors.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Driving Industrial Progress</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Industries across the globe face complex challenges that require innovative solutions. Our AI technology is designed to address these challenges head-on, providing practical tools that drive efficiency, innovation, and growth. From manufacturing to healthcare, from finance to logistics, we&apos;re committed to delivering AI solutions that make a real difference.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">The New Era of Intelligent Automation</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We&apos;re not just building another AI system – we&apos;re pioneering a new era of intelligent automation. Our Precognition OS represents a fundamental shift in how AI systems learn, adapt, and perform complex tasks. This is the foundation for creating a skilled digital workforce that can handle the most demanding industrial challenges.
            </p>
          </section>

          <div className="bg-gradient-to-r from-sky-900/20 to-blue-900/20 border border-sky-700/50 rounded-lg p-8 mt-16">
            <h3 className="text-2xl font-bold mb-4 text-sky-300">Our Commitment</h3>
            <p className="text-gray-300 leading-relaxed">
              We are committed to developing AI technology that is ethical, transparent, and beneficial to society. Our work is guided by principles of responsibility, innovation, and the belief that technology should serve humanity&apos;s best interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

