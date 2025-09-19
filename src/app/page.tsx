import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import MobileAppSection from "@/components/sections/MobileAppSection";
import OurClientsSection from "@/components/sections/OurClientsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <MobileAppSection />
      <OurClientsSection />
      <FAQSection />
    </div>
  );
}
