'use client';

export default function AboutUsSection() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: '#F3F3F3' }}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-45 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-60 h-34 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <img src="/assets/service_logo.svg" alt="About Us Logo" className="w-12 h-12" />
            <h2 className="text-xl md:text-2xl font-bold text-[#464646]">About Us</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-[#464646] mb-8">
            Our Goal
          </h3>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Our Mission */}
          <div className="space-y-6">
            <h4 className="text-3xl md:text-4xl font-bold text-[#464646]">
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Our Vision */}
          <div className="space-y-6">
            <h4 className="text-3xl md:text-4xl font-bold text-[#464646]">
              Our Vision
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
