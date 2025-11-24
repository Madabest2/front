"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Input } from "@/features/design-system/components/ui/input";
import { Link } from "@/i18n/navigation";
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
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { SVGProps } from "react";
import { useState } from "react";

// Brand X (Twitter) logo as a React component using currentColor
const XLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask
      id="xlogo_mask"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="22"
      height="22"
    >
      <path d="M0 0H22V22H0V0Z" fill="white" />
    </mask>
    <g mask="url(#xlogo_mask)">
      <path
        d="M17.325 1.03088H20.6989L13.3289 9.47574L22 20.9692H15.2114L9.89057 13.9999L3.80914 20.9692H0.432143L8.31443 11.9335L0 1.03246H6.96143L11.7637 7.40146L17.325 1.03088ZM16.1386 18.9452H18.0086L5.94 2.9496H3.93486L16.1386 18.9452Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

// Brand X (Twitter) logo as a React component using currentColor
const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
  { icon: XLogo, url: "#", label: "X" },
  { icon: MessageCircle, url: "#", label: "WhatsApp" },
];

export function Footer() {
  const t = useTranslations("common");
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: t("footer.links.vehicleRental"), href: "/services/vehicle-rental" },
      { label: t("navigation.terms"), href: "/terms" },
      { label: t("footer.links.convictions"), href: "/about/convictions" },
      { label: t("navigation.about"), href: "/about" },
      { label: t("footer.links.specificTours"), href: "/tours/specific" },
      { label: t("footer.links.trekking"), href: "/tours/trekking" },
    ],
    navigation: [
      { label: t("navigation.home"), href: "/" },
      { label: t("footer.links.tailorMade"), href: "/tailor-made" },
      { label: t("navigation.services"), href: "/services" },
      { label: t("footer.links.excursions"), href: "/excursions" },
      { label: t("navigation.contact"), href: "/contact" },
    ],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full bg-white px-8 py-10 lg:px-16">
      <div className="mx-auto max-w-[90%]">
        {/* 3 colonnes principales */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Colonne gauche - Logo + contact */}
          <div className="space-y-6">
            <Image
              src="/logo1.png"
              alt="Madabest"
              width={341}
              height={153}
              className="-ml-20 select-none"
              priority
            />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-black" />
                <div className="flex flex-col">
                  <p className="text-[16px] leading-[23px] font-semibold text-black">
                    +261 34 28 325 14 / +261 32 05 127 11
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-black" />
                <div>
                  <p className="text-[16px] leading-[23px] font-semibold text-black">
                    madabesrtip@gmail.com / contact@madabestour.com
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

            {/* Intentionally left empty: 'Suivez-nous' row moved below grid */}
          </div>

          {/* Colonne milieu - Services */}
          <div className="flex h-full flex-col justify-center space-y-2 lg:mt-20">
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
          <div className="space-y-6 lg:mt-20">
            <h3 className="text-[24px] leading-[35px] font-bold text-black">
              {t("footer.contact.heading")}
            </h3>
            <form onSubmit={handleSubscribe} className="relative">
              <Input
                type="email"
                placeholder={t("footer.enterEmail")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[60px] w-full rounded-lg border border-black px-4 pr-[180px] text-[16px] font-bold text-black placeholder:text-black/60"
              />
              <Button
                type="submit"
                className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-2 rounded-lg bg-[#E2531F] px-4 py-2 text-white hover:bg-[#d64a2e]"
              >
                {t("footer.subscribe")}
                <div className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-white">
                  <Send className="h-4 w-4 text-black" />
                </div>
              </Button>
            </form>
          </div>
        </div>

        {/* Row: Suivez-nous + Navigation on same line */}
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <h3 className="text-[24px] leading-[35px] font-bold text-black">
              {t("footer.followUs")}
            </h3>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                className="text-black transition-colors hover:text-[#E2531F]"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 sm:gap-x-6 md:justify-end lg:gap-x-10">
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

        {/* Ligne de séparation */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-black pt-6 text-[16px] font-semibold text-black md:flex-row">
          <div className="flex items-center gap-2 underline">
            <Copyright className="h-5 w-5" />
            <span>
              {currentYear} {t("footer.copyright")}
            </span>
          </div>
          <Link href="/privacy" className="underline hover:text-[#E2531F]">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
