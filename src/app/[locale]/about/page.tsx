"use client";

import { AboutAccordions } from "@/features/about/components/AboutAccordions";
import { HeroAbout } from "@/features/about/components/HeroAbout";
import { IntroCTA } from "@/features/about/components/IntroCTA";
import { TestimonialsSection } from "@/features/shared/components/home/TestimonialsSection";
import { Footer } from "@/features/shared/components/layout/Footer";
import { Header } from "@/features/shared/components/layout/Header";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF6E4]">
      <Header />
      <HeroAbout />
      <IntroCTA />
      <AboutAccordions />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
