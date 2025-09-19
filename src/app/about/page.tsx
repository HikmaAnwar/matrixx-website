import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import AboutContentSection from '@/components/sections/about/AboutContentSection';
import AboutGoalsSection from '@/components/sections/about/AboutGoalsSection';
import AboutServicesSection from '@/components/sections/about/AboutServicesSection';
import AboutMobileAppSection from '@/components/sections/about/AboutMobileAppSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <AboutContentSection />
      <AboutGoalsSection />
      <AboutServicesSection />
      <AboutMobileAppSection />
    </div>
  );
}
