import ServicesHeroSection from '@/components/sections/services/ServicesHeroSection';
import ServicesContentBlocksSection from '@/components/sections/services/ServicesContentBlocksSection';
import ServicesProductSection from '@/components/sections/services/ServicesProductSection';
import ServicesExploreSection from '@/components/sections/services/ServicesExploreSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHeroSection />
      <ServicesContentBlocksSection />
      <ServicesProductSection />
      <ServicesExploreSection />
    </div>
  );
}
