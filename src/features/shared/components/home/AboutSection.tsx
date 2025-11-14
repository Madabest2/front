"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Car, Hotel, Map, Navigation } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "1",
    title: "Excursions",
    icon: Navigation,
  },
  {
    id: "2",
    title: "Circuits sur mesure",
    icon: Map,
  },
  {
    id: "3",
    title: "Location de voiture",
    icon: Car,
  },
  {
    id: "4",
    title: "Réservation d'hôtels",
    icon: Hotel,
  },
];

export function AboutSection() {
  return (
    <section className="relative bg-black py-16 lg:py-32">
      {/* White decoration - Position from Figma */}
      <div className="absolute -top-12 left-30 hidden h-[198px] w-[441px] opacity-100 lg:block">
        <Image
          src="/logoblanc.png"
          alt="Madabest"
          width={441}
          height={198}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - About Text and Polaroids */}
          <div className="space-y-8">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-[20px] leading-[29px] text-white">
                <strong>MADABEST</strong> est une Destination Management Company et une agence de
                voyages spécialisée dans l&apos;organisation de circuits à Madagascar. Nous
                proposons des voyages sur mesure et expérientiels, adaptés à vos envies. Passionnée
                de découvertes et profondément attachée à Madagascar, notre équipe souhaite partager
                cette passion avec vous et rendre votre voyage inoubliable.
              </p>

              <Button
                variant="link"
                className="h-auto p-0 text-[20px] leading-[29px] font-semibold text-[#E2531F] underline hover:text-[#d64a2e]"
              >
                En savoir plus
              </Button>
            </div>

            {/* Mobile/Tablet: clean grid */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {["tsingy.jpg", "baobab.jpg", "nosybe.jpg", "ricefield.jpg"].map((img) => (
                <div
                  key={img}
                  className="overflow-hidden rounded-md border-2 border-white bg-white p-2"
                >
                  <Image
                    src={`/polaroid/${img}`}
                    alt="Madabest"
                    width={280}
                    height={220}
                    className="h-36 w-full rounded-sm object-cover sm:h-40"
                  />
                </div>
              ))}
            </div>

            {/* Desktop collage - Exact positions from Figma (unchanged) */}
            <div className="relative hidden h-[341px] w-full lg:block">
              {/* Photo 1 - Position: left: 75.87px, top: 1249px, rotation: -7.48deg */}
              <div
                className="absolute top-0 left-[55.87px] h-[210px] w-[190px] transform"
                style={{ transform: "rotate(-7.48deg)" }}
              >
                <div className="relative h-full w-full rounded-[5px] border-2 border-white bg-white p-2 shadow-[-5px_4px_4px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/polaroid/tsingy.jpg"
                    alt="Madabest"
                    width={441}
                    height={198}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Photo 2 - Position: left: 224.67px, top: 1258.06px, rotation: 10.54deg */}
              <div
                className="absolute top-[9px] left-[148.8px] h-[210px] w-[190px] transform"
                style={{ transform: "rotate(10.54deg)" }}
              >
                <div className="relative h-full w-full rounded-[5px] border-2 border-white bg-white p-2 shadow-[5px_4px_4px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/polaroid/baobab.jpg"
                    alt="Madabest"
                    width={441}
                    height={198}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Photo 3 - Position: left: 364.69px, top: 1251.54px */}
              <div className="absolute top-0.5 left-[288.82px] h-[210px] w-[190px]">
                <div className="relative h-full w-full rounded-[5px] border-2 border-white bg-white p-2 shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/polaroid/nosybe.jpg"
                    alt="Madabest"
                    width={441}
                    height={198}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Photo 4 - Position: left: 70px, top: 1317.48px, rotation: -26.18deg */}
              <div
                className="absolute top-[68px] left-0 h-[210px] w-[190px] transform"
                style={{ transform: "rotate(-26.18deg)" }}
              >
                <div className="relative h-full w-full rounded-[5px] border-2 border-white bg-white p-2 shadow-[3px_7px_4px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/polaroid/ricefield.jpg"
                    alt="Madabest"
                    width={441}
                    height={198}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h3 className="text-[40px] leading-[58px] font-(--font-kaushan-script) text-[#E2531F]">
                Prêt à vivre l&apos;aventure ?
              </h3>
              <h2 className="text-[20px] leading-[29px] font-semibold text-white">
                Tout pour organiser votre séjour à Madagascar :
              </h2>
            </div>

            {/* Services List */}
            <div className="space-y-[25px]">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="flex items-center gap-4">
                    {/* Icon Box - 55x50px with orange background */}
                    <div className="flex h-[50px] w-[55px] shrink-0 items-center justify-center rounded-[5px] bg-[#E2531F]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Service Title */}
                    <h4 className="text-[16px] leading-[23px] font-semibold text-white">
                      {service.title}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="h-[38px] rounded bg-[#E2531F] px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#d64a2e]"
            >
              Commencer votre réservation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
