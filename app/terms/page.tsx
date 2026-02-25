import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - CyberHope AI',
  description: 'Terms and Conditions for CyberHope AI and Hope Training Academy, a 501(c)(3) nonprofit organization.',
};

export default function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">Terms and Conditions</h1>
          <p className="mt-4 text-lg text-gray-400">Last updated: February 25, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none space-y-10">

            <div>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using the CyberHope AI / Hope Training Academy website and services,
                you agree to be bound by these Terms and Conditions. CyberHope AI, operating as
                Hope Training Academy, is a 501(c)(3) nonprofit organization. If you do not agree
                to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-300 leading-relaxed">
                CyberHope AI provides technology education, workforce development programs, community
                outreach, and related services. We also offer digital communication services including
                email and SMS notifications to keep participants informed about programs, events,
                and opportunities.
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h2 className="text-2xl font-bold mb-4">SMS Notifications Program</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Program Name:</strong> CyberHope AI / Hope Training Academy SMS Notifications
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Program Description:</strong> By opting in, you may receive text messages
                including program notifications, event updates and reminders, training updates,
                volunteer coordination messages, and community outreach communications.
              </p>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg font-semibold text-white">
                  Message and data rates may apply.
                </p>
                <p className="text-lg font-semibold text-white">
                  Message frequency varies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Opting In to SMS</h2>
              <p className="text-gray-300 leading-relaxed">
                By providing your phone number and consenting to receive text messages from
                CyberHope AI / Hope Training Academy, you confirm that you are the owner or
                authorized user of the mobile device associated with that number. You understand
                that consent is not a condition of participation in any program or service.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
              <h2 className="text-2xl font-bold mb-4">Opt-Out and Help</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can manage your SMS preferences at any time:
              </p>
              <ul className="list-none text-gray-300 space-y-4">
                <li>
                  <strong className="text-white text-lg">To stop receiving messages:</strong> Reply{' '}
                  <strong className="text-white bg-gray-700 px-2 py-1 rounded font-mono">STOP</strong>{' '}
                  to any text message from us. You will receive a one-time confirmation message and will
                  no longer receive SMS from this program.
                </li>
                <li>
                  <strong className="text-white text-lg">To get help:</strong> Reply{' '}
                  <strong className="text-white bg-gray-700 px-2 py-1 rounded font-mono">HELP</strong>{' '}
                  to any text message from us, or contact us directly using the information below.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to use our website and services only for lawful purposes and in a manner
                that does not infringe on the rights of others. You may not use our services to
                transmit harmful, threatening, or unlawful content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is the
                property of CyberHope AI or its licensors and is protected by applicable intellectual
                property laws. You may not reproduce, distribute, or create derivative works from
                our content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of
                any kind, either express or implied. We do not guarantee that our services will be
                uninterrupted, error-free, or secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                To the fullest extent permitted by law, CyberHope AI shall not be liable for any
                indirect, incidental, special, or consequential damages arising from your use of
                our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to These Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will
                be posted on this page with an updated date. Continued use of our services after
                changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms and Conditions are governed by the laws of the State of Indiana, without
                regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about these Terms and Conditions or need support, please contact us:
              </p>
              <div className="mt-4 text-gray-300 space-y-1">
                <p><strong className="text-white">CyberHope AI / Hope Training Academy</strong></p>
                <p>Email: <a href="mailto:info@cyberhope.ai" className="text-primary hover:underline">info@cyberhope.ai</a></p>
                <p>Website: <a href="https://cyberhope.ai/contact" className="text-primary hover:underline">cyberhope.ai/contact</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
