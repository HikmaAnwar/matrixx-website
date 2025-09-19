'use client';

export default function ContentBlocksSection() {
  const contentBlocks = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Lorem ipsum dolor sit amet ${i + 1}`,
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }));

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#464646]">Our Story</h2>
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our journey of innovation and the stories that shape our commitment to excellence.
          </p>
        </div>

        {/* Innovation Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#464646] leading-tight">
            Innovation that{' '}
            <span className="font-script gradient-text text-5xl md:text-6xl">
              defines trends
            </span>{' '}
            and designing{' '}
            <span className="font-script gradient-text text-5xl md:text-6xl">
              high-impact
            </span>
          </h2>
        </div>

        {/* Content Blocks Grid */}
        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentBlocks.slice(rowIndex * 4, (rowIndex + 1) * 4).map((block) => (
                <div
                  key={block.id}
                  className="bg-white rounded-lg p-6 card-hover group"
                >
                  <div className="flex items-start space-x-4">
                    {/* Image Placeholder */}
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-200"></div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[#464646] mb-2 group-hover:text-teal-600 transition-colors duration-200">
                        {block.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {block.description}
                      </p>
                      
                      {/* Action Button */}
                      <button className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-200 ml-auto">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Image Placeholder</span>
            </div>
            
            {/* Social Icons */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#464646]">Your Company Slogan</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
