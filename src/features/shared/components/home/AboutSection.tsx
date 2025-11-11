"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Card } from "@/features/design-system/components/ui/card";
import type { Service } from "@/types/homepage";
import { Car, Hotel, Map, MapPin } from "lucide-react";

const services: Service[] = [
  {
    id: "1",
    title: "Excursions",
    description: "Découvrez les merveilles de Madagascar",
    icon: "directions",
  },
  {
    id: "2",
    title: "Circuits sur mesure",
    description: "Voyages personnalisés selon vos envies",
    icon: "map",
  },
  {
    id: "3",
    title: "Location de voiture",
    description: "Véhicules confortables avec chauffeur",
    icon: "car",
  },
  {
    id: "4",
    title: "Réservation d'hôtels",
    description: "Hébergements sélectionnés avec soin",
    icon: "hotel",
  },
];

export function AboutSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "map":
        return Map;
      case "car":
        return Car;
      case "hotel":
        return Hotel;
      default:
        return MapPin;
    }
  };

  return (
    <section className="relative bg-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Colonne gauche - Polaroids */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Photo 1 - Rotation gauche */}
            <div className="absolute top-0 left-0 w-48 -rotate-[7deg] transform cursor-pointer transition-transform duration-300 hover:rotate-0 lg:w-56">
              <Card className="bg-white p-2 shadow-2xl">
                <div className="aspect-square rounded bg-gray-700" />
              </Card>
            </div>

            {/* Photo 2 - Rotation droite */}
            <div className="absolute top-8 right-16 z-10 w-48 rotate-[11deg] transform cursor-pointer transition-transform duration-300 hover:rotate-0 lg:right-24 lg:w-56">
              <Card className="bg-white p-2 shadow-2xl">
                <div className="aspect-square rounded bg-gray-600" />
              </Card>
            </div>

            {/* Photo 3 - Avant plan */}
            <div className="absolute right-0 bottom-16 z-20 w-48 transform cursor-pointer transition-transform duration-300 hover:scale-105 lg:w-56">
              <Card className="bg-white p-2 shadow-2xl">
                <div className="aspect-square rounded bg-gray-800" />
              </Card>
            </div>

            {/* Photo 4 - Rotation gauche forte */}
            <div className="absolute bottom-0 left-4 w-48 -rotate-[26deg] transform cursor-pointer transition-transform duration-300 hover:rotate-[-20deg] lg:w-56">
              <Card className="bg-white p-2 shadow-2xl">
                <div className="aspect-square rounded bg-gray-500" />
              </Card>
            </div>
          </div>

          {/* Colonne droite - Texte et services */}
          <div className="space-y-10">
            {/* Titre section */}
            <div className="space-y-6">
              <h3 className="font-['Kaushan_Script',cursive] text-2xl text-[#E2531F] italic lg:text-3xl">
                Prêt à vivre l&apos;aventure ?
              </h3>

              <h2 className="text-3xl font-semibold text-white lg:text-4xl">
                Tout pour organiser votre séjour à Madagascar :
              </h2>

              <p className="text-lg leading-relaxed text-white lg:text-xl">
                <span className="font-bold">MADABEST</span> est une Destination Management Company
                et une agence de voyages spécialisée dans l&apos;organisation de circuits à
                Madagascar. Nous proposons des voyages sur mesure et expérientiels, adaptés à vos
                envies. Passionnée de découvertes et profondément attachée à Madagascar, notre
                équipe souhaite partager cette passion avec vous et rendre votre voyage inoubliable.
              </p>

              <Button
                variant="link"
                className="h-auto p-0 text-xl font-semibold text-[#E2531F] underline hover:text-[#d64a2e]"
              >
                En savoir plus
              </Button>
            </div>

            {/* Services Grid */}
            <div className="space-y-4">
              {services.map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <div key={service.id} className="group flex cursor-pointer items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#E2531F] transition-transform duration-200 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-[#E2531F]">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-[#E2531F] px-8 text-base font-medium text-white shadow-lg shadow-orange-500/30 hover:bg-[#d64a2e]"
            >
              Commencer votre réservation
            </Button>
          </div>
        </div>
      </div>

      {/* Décoration - Logo blanc semi-transparent */}
      <div className="absolute top-0 left-0 h-48 w-96 opacity-10">
        <div className="h-full w-full rounded-br-[100px] bg-white" />
      </div>
    </section>
  );
}
