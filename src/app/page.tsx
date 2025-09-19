import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import MobileAppSection from "@/components/sections/MobileAppSection";
import ContentBlocksSection from "@/components/sections/ContentBlocksSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <MobileAppSection />
      <ContentBlocksSection />
    </div>
  );
}
