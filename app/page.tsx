import HomeHero from "@/components/site/HomeHero";
import AboutSection from "@/components/site/AboutSection";
import VatServicesSection from "@/components/site/VatServicesSection";
import PricingSection from "@/components/site/PricingSection";
import TestimonialsSection from "@/components/site/TestimonialsSection";
import WhyChooseSection from "@/components/site/WhyChooseSection";
import SiteCtaFooter from "@/components/site/SiteCtaFooter";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <HomeHero />
      </div>
      <main className="homepage-sections">
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal delay={60}>
          <VatServicesSection />
        </Reveal>
        <Reveal delay={80}>
          <PricingSection />
        </Reveal>
        <Reveal delay={100}>
          <TestimonialsSection />
        </Reveal>
        <Reveal delay={120}>
          <WhyChooseSection />
        </Reveal>
        <Reveal delay={140}>
          <SiteCtaFooter />
        </Reveal>
      </main>
    </>
  );
}
