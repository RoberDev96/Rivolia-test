"use client";

import {
  HeroSection,
  AboutSection,
  ProductsSection,
  PreparationSection,
  QualitySection,
  ComparisonSection,
  EnjoySection,
  TestimonialsSection,
  CTASection,
  Footer,
} from "../organisms";

export function LandingTemplate() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PreparationSection />
      <QualitySection />
      <ComparisonSection />
      <EnjoySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
