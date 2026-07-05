import Hero from "@/components/Hero";
import MagicSection from "@/components/MagicSection";
import DestinationsSection from "@/components/DestinationsSection";
import PackagesSection from "@/components/PackagesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 2. Hero Section */}
      <Hero />

      {/* 4. "Experience the Magic" section */}
      <MagicSection />

      {/* 5. Destination discovery section */}
      <DestinationsSection />

      {/* 7. Packages section */}
      <PackagesSection />

      {/* 8. Why choose us section */}
      <WhyChooseUs />

      {/* 9. How it works section */}
      <HowItWorks />

      {/* 10. Testimonials section */}
      <TestimonialsSection />

      {/* 11. FAQ section */}
      <FAQSection />

      {/* 12. Final CTA section */}
      <FinalCTA />
    </>
  );
}
