import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">CyberHope™</h3>
            <p className="text-gray-400 mb-4">
              A division of Decolores Holdings, LLC
            </p>
            <p className="text-sm text-gray-500">
              Building the first vertical of Precognition OS™ — replacing résumés with SkillDNA™
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-cyan-400 transition">
                  Press Release
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:rick@cyberhopeai.com" 
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  rick@cyberhopeai.com
                </a>
              </li>
              <li className="text-gray-400">
                Carmel, Indiana
              </li>
              <li className="pt-2">
                <div className="flex items-center space-x-4">
                  {/* Ready to add when CyberHope Crunchbase profile is created: */}
                  {/* <a 
                    href="https://www.crunchbase.com/organization/cyberhope" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition text-sm"
                  >
                    View on Crunchbase
                  </a> */}
                  <span className="text-xs text-gray-500">
                    Backed by Joan C. Young Revocable Trust
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2025 Decolores Holdings, LLC dba CyberHope. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-gray-500">
              <span>Founded 2018</span>
              <span>•</span>
              <span>Pre-Seed A Stage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}