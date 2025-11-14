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
    <div className="relative flex min-h-screen flex-col bg-[#FFF6E4]">
      <Header />
      <main className="flex-1">
        <div className="hidden lg:block">
          <HeroSection />
        </div>
        <AboutSection />
        <ToursSection />
        <TestimonialsSection />
        <VideoSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
