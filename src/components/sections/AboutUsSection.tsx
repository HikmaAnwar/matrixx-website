'use client';

export default function AboutUsSection() {
  return (
    <section className="pt-20 relative" style={{ backgroundColor: '#F3F3F3' }}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-60 h-60 opacity-80">
        <img src="/assets/about_pattern2.svg" alt="About Pattern 2" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 w-60 h-60 opacity-80">
        <img src="/assets/about_pattern.svg" alt="About Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <img src="/assets/service_logo.svg" alt="About Us Logo" className="w-8 h-8" />
            <h2 className="text-lg md:text-xl font-bold text-[#464646]">About Us</h2>
          </div>
          
          {/* Mixed font headline */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#464646] leading-tight">
              Innovation that{' '}
              <span className="font-script text-[#00ABB1] text-4xl md:text-5xl lg:text-6xl">defines trends</span>{' '}
              and designing{' '}
              <span className="font-script text-[#00ABB1] text-4xl md:text-5xl lg:text-6xl">high-impact</span>
            </h3>
          </div>
          
          {/* Lorem ipsum text */}
          <p className="text-gray-600 leading-relaxed text-lg mb-8 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          
          {/* Horizontal separator line */}
          <div className="w-full h-px bg-gray-300 mb-12"></div>
          
          {/* Horizontal layout matching the image */}
          <div className="flex items-start gap-12">
            {/* Image placeholders */}
            <div className="flex gap-6">
              <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 text-sm">Image Placeholder</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Image</div>
                </div>
                <div className="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Image</div>
                </div>
              </div>
            </div>
            
            {/* Text and Explore More button - moved downward and right aligned */}
            <div className="flex-1 mt-40 text-right">
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex items-center justify-end space-x-4">
                <span className="text-gray-700 font-medium">Explore More</span>
                <button className="w-10 h-10 bg-[#00ABB1] rounded-lg flex items-center justify-center hover:bg-[#0B3A93] transition-colors duration-200">
                  <img src="/assets/about_arrow.svg" alt="Arrow" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
