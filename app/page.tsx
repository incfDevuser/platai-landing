import { HeroSection } from "@/components/hero-section";
import { ExplanationSection } from "@/components/explanation-section";
import { BenefitsSection } from "@/components/benefits-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { DemoSection } from "@/components/demo-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { DemoSectionStep2 } from "@/components/demo-section-step2";
import { DemoSectionStep3 } from "@/components/demo-section-step3";
export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExplanationSection />
      <BenefitsSection />
      <HowItWorksSection />
      <DemoSection />
      <DemoSectionStep2 />
      <DemoSectionStep3 />
      <TestimonialSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
