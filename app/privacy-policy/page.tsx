import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - CyberHope AI',
  description: 'Privacy Policy for CyberHope AI and Hope Training Academy, a 501(c)(3) nonprofit organization.',
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-400">Last updated: February 25, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none space-y-10">

            <div>
              <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-300 leading-relaxed">
                CyberHope AI, operating as Hope Training Academy, is a 501(c)(3) nonprofit organization
                dedicated to empowering communities through technology education and workforce development.
                This Privacy Policy describes how we collect, use, and protect your personal information
                when you interact with our website, programs, and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect the following personal information when you register for programs,
                sign up for communications, or interact with our services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Program registration and enrollment information</li>
                <li>Volunteer participation details</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Program communications and enrollment management</li>
                <li>Event notifications and reminders</li>
                <li>SMS text message notifications (via Twilio)</li>
                <li>Volunteer coordination and outreach</li>
                <li>Training updates and community announcements</li>
                <li>Responding to your inquiries and support requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">SMS / Text Messaging</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you provide your phone number and opt in to receive text messages, we may send you
                SMS notifications related to our programs, events, and services. Our text messaging
                is powered by Twilio.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong className="text-white">Message and data rates may apply.</strong> Please contact your wireless carrier for details about your messaging plan.</li>
                <li><strong className="text-white">Message frequency varies</strong> based on your program participation and preferences.</li>
                <li>You can opt out at any time by replying <strong className="text-white">STOP</strong> to any message.</li>
                <li>For help, reply <strong className="text-white">HELP</strong> to any message or contact us at the information below.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Phone numbers collected for SMS are used solely for the purposes described in this
                policy and are not shared with third parties for marketing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We do <strong className="text-white">not</strong> sell, rent, or share your personal information with
                third parties for marketing purposes. We may share information only with trusted service
                providers (such as Twilio for SMS delivery) who assist us in operating our programs,
                and only to the extent necessary to provide those services. We may also disclose
                information if required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Retention and Deletion</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the
                purposes described in this policy, or as required by law. If you would like to
                request deletion of your personal data, please contact us using the information
                below. We will process your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement reasonable administrative, technical, and physical safeguards to protect
                your personal information from unauthorized access, use, or disclosure. However, no
                method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated &quot;Last updated&quot; date. We encourage you to review this
                policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your data rights,
                please contact us:
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
