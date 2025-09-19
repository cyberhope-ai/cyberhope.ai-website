'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-10 py-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg 
            className="h-8 w-8 text-primary" 
            fill="none" 
            viewBox="0 0 48 48" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" 
              fill="currentColor"
            />
          </svg>
          <h2 className="text-2xl font-bold">CyberHopeAI</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/about" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link 
            href="/technology" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Technology
          </Link>
          <Link 
            href="/mission" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Mission
          </Link>
          <Link 
            href="/press" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Press
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/investors" 
            className="hidden sm:inline-block text-sm font-medium hover:text-primary transition-colors"
          >
            Investor Relations
          </Link>
          <Link 
            href="/contact"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-sky-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="truncate">Access Data Room</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0F13]/95 backdrop-blur-sm border-t border-gray-700">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              href="/about" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/technology" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              href="/mission" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mission
            </Link>
            <Link 
              href="/press" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Press
            </Link>
            <Link 
              href="/investors" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Investor Relations
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

