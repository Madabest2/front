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
    // Logique d'abonnement newsletter
    console.log("Subscribe:", email);
  };

  return (
    <footer className="bg-white pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-12 grid gap-12 lg:grid-cols-12">
          {/* Logo et Contact */}
          <div className="space-y-6 lg:col-span-4">
            {/* Logo */}
            <div className="flex h-16 w-40 items-center justify-center rounded-lg bg-gradient-to-r from-[#E2531F] to-[#d64a2e]">
              <span className="text-2xl font-bold tracking-tight text-white">MADABEST</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-black" />
                <div className="text-base font-semibold text-black">
                  <p>+261 34 28 325 14 /</p>
                  <p>+261 32 05 127 11</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-black" />
                <div className="text-base font-semibold text-black">
                  <p>madabesrtip@gmail.com /</p>
                  <p>contact@madabestour.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-black" />
                <p className="text-base font-semibold text-black">
                  43 Rue de la marne – Diego Suarez
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-black">Suivez-nous</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-black transition-colors duration-200 hover:text-[#E2531F]"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4 lg:col-span-2">
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-black transition-colors hover:text-[#E2531F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 lg:col-span-6">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-black">Entrer en contact</h3>

              <form onSubmit={handleSubscribe} className="relative">
                <Input
                  type="email"
                  placeholder="Entrer votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-black py-6 pr-48 text-lg font-bold text-black placeholder:text-black/60"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="absolute top-1/2 right-2 -translate-y-1/2 gap-2 bg-[#E2531F] font-semibold text-white hover:bg-[#d64a2e]"
                >
                  abonnez-vous
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <Send className="h-4 w-4 text-black" />
                  </div>
                </Button>
              </form>
            </div>

            {/* Navigation Links - Horizontal */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-black pt-8">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-black transition-colors hover:text-[#E2531F]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-base font-semibold text-black">
              <Copyright className="h-5 w-5" />
              <span>{currentYear} by LANTORIAN</span>
            </div>

            <Link
              href="/privacy"
              className="text-base font-semibold text-black underline transition-colors hover:text-[#E2531F]"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
