'use client';

import { useState, useEffect } from 'react';
import { HERO_CONTENT } from '@/lib/constants';

export default function mHeroSection() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 2000); // Show card after 2 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative min-h-screen bg-[#F3F3F3] overflow-hidden mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#464646] leading-tight">
                Innovation that{' '}
                <span className="font-script text-[#00ABB1] text-4xl md:text-5xl lg:text-6xl">
                  defines trends
                </span>{' '}
                and designing{' '}
                <span className="font-script text-[#00ABB1] text-4xl md:text-5xl lg:text-6xl">
                  high-impact
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Note */}
            <p className="text-gray-600 text-base leading-relaxed max-w-md text-left mt-16 mb-0">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Explore More Section */}
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-gray-700 font-medium">Explore More</span>
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Abstract Circles */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#00ABB1] rounded-full opacity-60"></div>
              <div className="absolute top-2 left-8 w-2 h-2 bg-[#0B3A93] rounded-full opacity-40"></div>
              <div className="absolute top-6 left-2 w-2.5 h-2.5 bg-[#00ABB1] rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Right Content - Hero Section Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              <img 
                src="/assets/herosection_image.svg" 
                alt="Hero Section" 
                className="w-full h-full object-contain"
              />
              
              {/* Cards Section - Overlapping */}
              <div className={`absolute -bottom-16 left-0 right-0 bg-white rounded-2xl shadow-lg mx-4 overflow-hidden transition-all duration-1000 ease-out ${
                showCard 
                  ? 'opacity-100 transform translate-y-0 animate-slow-bounce' 
                  : 'opacity-0 transform translate-y-8'
              }`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Section - Our Latest Product */}
                  <div className="p-3">
                    <h3 className="text-xl font-bold text-[#464646] mb-4">
                      Our Latest{' '}
                      <span className="font-script text-[#00ABB1]">Product</span>
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-700 font-medium">View Product</span>
                      <button className="w-10 h-10 bg-[#0B3A93] rounded-lg flex items-center justify-center hover:bg-[#00ABB1] transition-colors duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Right Section - MPOS */}
                  <div className="bg-white p-3 text-[#464646] relative">
                    {/* Hero Slide Image */}
                    <div className="relative p-2">
                      <img 
                        src="/assets/Hero Slide Image.png" 
                        alt="MPOS Dashboard" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
