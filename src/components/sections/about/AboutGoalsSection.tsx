'use client';

export default function AboutGoalsSection() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: '#F8F8F8' }}>
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-40">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <img src="/assets/service_logo.svg" alt="About Us Logo" className="w-8 h-8" />
            <h2 className="text-lg md:text-xl font-bold text-[#464646]">About Us</h2>
          </div>
        </div>

        {/* Goals, Mission, Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Our Goal */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#464646]">Our Goal</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Empty space */}
          <div></div>

          {/* Our Mission */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#464646]">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Our Vision */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#464646]">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
