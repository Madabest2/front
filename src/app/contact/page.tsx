import { ContactForm, MapboxEmbed } from "@/features/contact";
import { MainLayout } from "@/features/shared/components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Madabest",
  description: "Contactez-nous pour toute question ou remarque. Nous sommes là pour vous aider !",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFF6E4]">
      <MainLayout>
        <main>
          <ContactForm />
          {/* <MapboxEmbed /> */}
        </main>
      </MainLayout>
    </div>
  );
}
