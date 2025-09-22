'use client';

export default function ProductsExploreSection() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: '#F3F3F3' }}>
      {/* Background Pattern */}
      <div className="absolute top-10 -right-20 w-80 h-80 opacity-80">
        <img src="/assets/service2_pattern.svg" alt="Service Pattern 2" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex items-center gap-12">
          {/* Large Image Placeholder */}
          <div className="flex-1">
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-lg">Image Placeholder</div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Mixed font headline */}
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#464646] leading-tight">
                Innovation that{' '}
                <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">defines trends</span>{' '}
                and{' '}
                <span className="font-script text-[#00ABB1] text-4xl md:text-5xl italic">designing high-impact</span>
              </h3>
            </div>
            
            {/* Content text */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            {/* Bottom Right Content */}
            <div className="flex flex-col items-end space-y-4">
              <p className="text-gray-600 leading-relaxed text-right max-w-md">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              
              {/* Explore More Button */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Explore More</span>
                <button className="w-8 h-8 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
