import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-10 py-6 border-t border-gray-800">
      <div className="container mx-auto text-center text-sm text-gray-500 space-y-2">
        <p>© 2026 CyberHopeAI. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

