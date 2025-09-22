'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="bg-[#F3F3F3] border border-gray-200 rounded-full shadow-sm px-8 mx-32">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={pathname === "/" ? "/assets/Active Logo.svg" : "/assets/logo.svg"} 
              alt="Logo" 
              className={pathname === "/" ? "w-32 h-32" : "w-12 h-12"} 
            />
          </Link>

          {/* Desktop Navigation - Aligned Right */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors duration-200 font-medium ${
                      isActive 
                        ? 'text-[#00ABB1] font-bold' 
                        : 'text-gray-700 hover:text-[#00ABB1]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Arrow Button */}
            <button className="w-10 h-10 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
              <img src="/assets/Explore More.svg" alt="Explore More" className="w-8 h-8" />
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden absolute top-full left-0 right-0 mt-2">
            <div className="px-4 pt-4 pb-4 space-y-2 bg-white border border-gray-200 rounded-2xl shadow-lg mx-4">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#00ABB1] font-bold bg-[#00ABB1]/10' 
                        : 'text-gray-700 hover:text-[#00ABB1] hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
