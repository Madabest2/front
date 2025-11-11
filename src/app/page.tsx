import {
  AboutSection,
  HeroSection,
  PartnersSection,
  TestimonialsSection,
  ToursSection,
  VideoSection,
} from "@/features/shared/components/home";
import { Footer } from "@/features/shared/components/layout/Footer";
import { Header } from "@/features/shared/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ToursSection />
        <TestimonialsSection />
        <VideoSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
