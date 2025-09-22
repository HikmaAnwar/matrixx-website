'use client';

export default function OurClientsSection() {
  return (
    <section className="pt-20 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <img src="/assets/service_logo.svg" alt="Our Clients Logo" className="w-8 h-8" />
            <h2 className="text-lg md:text-xl font-bold text-[#464646]">Our Clients</h2>
          </div>
          
          {/* Lorem ipsum text */}
          <p className="text-gray-600 leading-relaxed text-lg mb-8 w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          
          {/* Horizontal separator line */}
          <div className="w-1/2 h-px bg-gray-300 mb-12"></div>
          
          {/* Client Logos Placeholders */}
          <div className="flex gap-6 mb-12">
            <div className="w-64 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-sm">Client Logo</div>
            </div>
            <div className="w-64 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-sm">Client Logo</div>
            </div>
            <div className="w-64 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-sm">Client Logo</div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-end space-x-2">
            <button className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
