import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import AboutContentSection from '@/components/sections/about/AboutContentSection';
import AboutGoalsSection from '@/components/sections/about/AboutGoalsSection';
import AboutServicesSection from '@/components/sections/about/AboutServicesSection';
import AboutMobileAppSection from '@/components/sections/about/AboutMobileAppSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      {/* Image between sections */}
      <div className="bg-white py-8 relative">
        {/* Background Pattern */}
        <div className="absolute -top-16 -left-10 w-80 h-80 opacity-100">
          <img src="/assets/about2_pattern.svg" alt="About Pattern 2" className="w-full h-full object-contain" />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="flex items-center justify-center">
            <div className="w-96 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-lg">Main Image Placeholder</div>
            </div>
          </div>
        </div>
      </div>
      <AboutContentSection />
      <AboutGoalsSection />
      <AboutServicesSection />
      <AboutMobileAppSection />
    </div>
  );
}
