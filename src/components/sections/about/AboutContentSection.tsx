'use client';

export default function AboutContentSection() {
  return (
    <section className="pt-0 pb-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 right-20 w-24 h-24 opacity-40">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Main content text */}
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </p>
          
          {/* Two images below paragraph */}
          <div className="flex items-center justify-between w-full">
            {/* Left image */}
            <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-sm">Image Placeholder</div>
            </div>
            
            {/* Right image */}
            <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-sm">Image Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
