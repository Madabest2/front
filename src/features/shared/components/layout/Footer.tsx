"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Input } from "@/features/design-system/components/ui/input";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const footerLinks = {
  services: [
    { label: "Location de véhicule", href: "/services/car-rental" },
    { label: "Conditions des ventes", href: "/terms" },
    { label: "Convictions", href: "/about/convictions" },
    { label: "Notre Agence", href: "/about" },
    { label: "Spécifiques tours", href: "/tours/specific" },
    { label: "Trekking", href: "/tours/trekking" },
  ],
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Tailor made", href: "/tailor-made" },
    { label: "Services", href: "/services" },
    { label: "Excursions", href: "/excursions" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: MessageCircle, url: "#", label: "WhatsApp" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full bg-white px-8 py-10 lg:px-16">
      <div className="mx-auto max-w-[1452px]">
        {/* 3 colonnes principales */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Colonne gauche - Logo + contact */}
          <div className="space-y-6">
            <Image
              src="/logo1.png"
              alt="Madabest"
              width={341}
              height={153}
              className="select-none"
              priority
            />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-black" />
                <div>
                  <p className="text-[16px] leading-[23px] font-semibold text-black">
                    +261 34 28 325 14 /
                  </p>
                  <p className="text-[16px] leading-[23px] font-semibold text-black">
                    +261 32 05 127 11
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-black" />
                <div>
                  <p className="text-[16px] leading-[23px] font-semibold text-black">
                    madabesrtip@gmail.com /
                  </p>
                  <p className="text-[16px] leading-[23px] font-semibold text-black">
                    contact@madabestour.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-black" />
                <p className="text-[16px] leading-[23px] font-semibold text-black">
                  43 Rue de la marne – Diego Suarez
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[24px] leading-[35px] font-bold text-black">Suivez-nous</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-black transition-colors hover:text-[#E2531F]"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne milieu - Services */}
          <div className="flex flex-col justify-center space-y-3">
            {footerLinks.services.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] leading-[23px] text-black hover:text-[#E2531F]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Colonne droite - Newsletter */}
          <div className="space-y-6">
            <h3 className="text-[24px] leading-[35px] font-bold text-black">Entrer en contact</h3>
            <form onSubmit={handleSubscribe} className="relative">
              <Input
                type="email"
                placeholder="Entrer votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[60px] w-full rounded-lg border border-black px-4 pr-[180px] text-[16px] font-bold text-black placeholder:text-black/60"
              />
              <Button
                type="submit"
                className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-2 rounded-lg bg-[#E2531F] px-4 py-2 text-white hover:bg-[#d64a2e]"
              >
                abonnez-vous
                <div className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-white">
                  <Send className="h-4 w-4 text-black" />
                </div>
              </Button>
            </form>

            <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-black pt-6">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[16px] font-medium text-black hover:text-[#E2531F]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-black pt-6 text-[16px] font-semibold text-black md:flex-row">
          <div className="flex items-center gap-2 underline">
            <Copyright className="h-5 w-5" />
            <span>{currentYear} by LANTORIAN</span>
          </div>
          <Link href="/privacy" className="underline hover:text-[#E2531F]">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
