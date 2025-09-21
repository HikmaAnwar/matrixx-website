'use client';

export default function ServicesContentBlocksSection() {
  const contentBlocks = [
    {
      id: 1,
      imageLeft: true,
      title: "Our Services",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 2,
      imageLeft: false,
      title: "Partnership",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 3,
      imageLeft: true,
      title: "Our Services",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
      id: 4,
      imageLeft: false,
      title: "Our Services",
      content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-60">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-40">
        <img src="/assets/bubble.svg" alt="Bubble Pattern" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">

        {/* Content Blocks */}
        <div className="space-y-20">
          {contentBlocks.map((block) => (
            <div key={block.id} className={`flex items-center gap-12 ${block.imageLeft ? '' : 'flex-row-reverse'}`}>
              {/* Image */}
              <div className="w-1/3">
                <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Image Placeholder</div>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-2/3">
                <h3 className="text-xl md:text-2xl font-bold text-[#464646] mb-6">
                  {block.title}
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {block.content}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
