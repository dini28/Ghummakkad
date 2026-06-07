

import Hero from "@/components/Hero";
import Card from "@/components/Card";
import StickyScroll from "@/components/StickyScroll";
import TrustSection from "@/components/TrustSection";
import StatsBar from "@/components/StatsBar";
import DestinationsSection from "@/components/DestinationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionBanner from "@/components/CallToActionBanner";


export default function Home() {
  return (
    <>
      {/* 1. Emotional Hook */}
      <Hero />

      {/* 2. Authority Signals */}
      <TrustSection />

      {/* 3. Credibility — Animated Stats */}
      <StatsBar />

      {/* 4. Service Offerings */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#f6ac0f] font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-extrabold font-playfair-display text-slate-900">
              Experience the Magic
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card
              icon="ri-compass-3-line"
              title="Curated Journeys"
              description="Handpicked destinations and hidden gems that offer an authentic taste of Rajasthan's heritage."
              href="/packages"
            />
            <Card
              icon="ri-hotel-bed-line"
              title="Heritage Stays"
              description="Experience royalty by staying in centuries-old havellis and palaces converted into luxury hotels."
              href="/hotels"
            />
            <Card
              icon="ri-camera-lens-line"
              title="Photo Tours"
              description="Capture the vibrant colors and stunning architecture with our specialized photography expeditions."
              href="/packages"
            />
          </div>
        </div>
      </section>

      {/* 5. Deep Engagement — Experiences */}
      <StickyScroll />

      {/* 6. Browsable Options — Destinations */}
      <div className="bg-white border-t border-slate-100">
        <DestinationsSection />
      </div>

      {/* 7. Differentiation — Values */}
      <section className="bg-slate-50 py-20 md:py-28 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#f6ac0f] font-semibold tracking-widest uppercase text-sm mb-3">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-extrabold font-playfair-display text-slate-900">
              Why Choose <span className="text-[#f6ac0f]">Ghummakkad</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card
              icon="ri-ancient-gate-fill"
              title="Authentic Rajasthani Stay"
              description="Experience the true essence of Rajasthan with handpicked, heritage properties and personalized tours led by local experts."
            />
            <Card
              icon="ri-shield-check-line"
              title="Assured Quality & Safety"
              description="We prioritize your safety and comfort. All our accommodations and travel partners meet rigorous quality standards."
            />
            <Card
              icon="ri-customer-service-2-line"
              title="24/7 Dedicated Support"
              description="From booking to check-out, our dedicated team is available around the clock to assist you with any request or emergency."
            />
            <Card
              icon="ri-calendar-check-line"
              title="Flexible Booking Options"
              description="Enjoy hassle-free planning with our flexible modification and cancellation policies, designed for peace of mind."
            />
            <Card
              icon="ri-price-tag-3-line"
              title="Best Price Guarantee"
              description="We ensure you receive the most competitive rates without compromising on the quality of your luxurious experience."
            />
            <Card
              icon="ri-team-line"
              title="Deep Cultural Immersion"
              description="Go beyond tourism with activities like Rajasthani cooking classes, folk music evenings, and village visits."
            />
          </div>
        </div>
      </section>

      {/* 8. Social Proof */}
      <TestimonialsSection />

      {/* 9. Conversion */}
      <CallToActionBanner />
    </>
  );
}
