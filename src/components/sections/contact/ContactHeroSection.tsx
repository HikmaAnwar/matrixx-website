'use client';

export default function ContactHeroSection() {
  return (
    <section className="pt-32 pb-20 relative" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <img src="/assets/service_logo.svg" alt="Contact Us Logo" className="w-8 h-8" />
            <h2 className="text-lg md:text-xl font-bold text-[#464646]">Contact Us</h2>
          </div>
          
          {/* Mixed font headline */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#464646] leading-tight">
              Innovation that{' '}
              <span className="font-script text-[#00ABB1] text-5xl md:text-6xl lg:text-7xl italic">defines trends and designing</span>{' '}
              high-impact
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
