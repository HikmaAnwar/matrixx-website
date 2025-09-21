import ContactHeroSection from '@/components/sections/contact/ContactHeroSection';
import ContactFormSection from '@/components/sections/contact/ContactFormSection';
import ContactInfoSection from '@/components/sections/contact/ContactInfoSection';
import ContactMapSection from '@/components/sections/contact/ContactMapSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactMapSection />
      {/* <ContactInfoSection /> */}
    </div>
  );
}
