"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Card } from "@/features/design-system/components/ui/card";
import { Input } from "@/features/design-system/components/ui/input";
import type { Tour } from "@/types/homepage";
import { Bookmark, ChevronDown, ChevronRight, Euro, MapPin, Search, Ticket } from "lucide-react";
import { useState } from "react";

const tours: Tour[] = [
  {
    id: "1",
    destination: "Nosy-Be",
    title: "Le trésor de Madagascar",
    description: "Île paradisiaque aux plages de rêve",
    price: 510,
    currency: "€",
    image: "/images/tours/nosy-be.jpg",
    location: "Nosy-Be",
    featured: true,
  },
  {
    id: "2",
    destination: "Antsohihy",
    title: "Le trésor de Madagascar",
    description: "Découverte authentique du Nord",
    price: 550,
    currency: "€",
    image: "/images/tours/antsohihy.jpg",
    location: "Antsohihy",
    featured: true,
  },
  {
    id: "3",
    destination: "Diego-Suarez",
    title: "Le trésor de Madagascar",
    description: "Baie magnifique et patrimoine colonial",
    price: 85,
    currency: "€",
    image: "/images/tours/diego-suarez.jpg",
    location: "Diego-Suarez",
    featured: true,
  },
  {
    id: "4",
    destination: "Ambanja",
    title: "Le trésor de Madagascar",
    description: "Capitale du cacao malgache",
    price: 250,
    currency: "€",
    image: "/images/tours/ambanja.jpg",
    location: "Ambanja",
    featured: false,
  },
];

export function ToursSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section
      className="relative bg-cover bg-center py-20 lg:py-32"
      style={{ backgroundImage: "url(/images/tours-bg.jpg)" }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-6xl">
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="mb-4 text-4xl font-semibold text-white lg:text-5xl">
                Nos Forfaits Tours
              </h2>
              <p className="text-lg text-white">Découvrez votre destination de rêve ici</p>
            </div>

            {/* Filtres */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Barre de recherche */}
              <div className="relative w-full sm:w-96">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-white/70" />
                <Input
                  type="text"
                  placeholder="Recherchez votre prochaine destination..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-lg border-none bg-white/14 py-6 pr-4 pl-12 text-white backdrop-blur-md placeholder:text-white/70 focus:bg-white/20"
                />
              </div>

              {/* Dropdown localisation */}
              <button className="flex min-w-[220px] items-center gap-3 rounded-lg bg-white px-6 py-4 backdrop-blur-md transition-all hover:bg-white/90">
                <MapPin className="h-6 w-6 text-[#E2531F]" />
                <span className="flex-1 text-left text-base font-medium text-[#E2531F]">
                  Où allez-vous ?
                </span>
                <ChevronDown className="h-4 w-4 text-[#E2531F]" />
              </button>
            </div>
          </div>

          {/* Bouton voir toutes les destinations */}
          <Button
            variant="outline"
            size="lg"
            className="border-none bg-white text-base font-medium text-black hover:bg-white/90"
          >
            Voir toutes les destinations
          </Button>
        </div>

        {/* Grid des tours */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-end">
            <button
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
              aria-label="Suivant"
            >
              <ChevronRight className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <Card className="group cursor-pointer overflow-hidden border border-white/20 bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30">
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gray-700" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />

        {/* Badge favori */}
        {tour.featured && (
          <button className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#E2531F] bg-[#E2531F]/17 backdrop-blur-md transition-transform hover:scale-110">
            <Bookmark className="h-5 w-5 fill-white text-white" />
          </button>
        )}

        {/* Location */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-[#E2531F]" />
          <span className="text-sm font-medium text-white">{tour.location}</span>
        </div>
      </div>

      {/* Contenu */}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="mb-2 text-2xl font-medium text-white">{tour.destination}</h3>
          <p className="text-base text-gray-300">{tour.description}</p>
        </div>

        {/* Prix */}
        <div className="flex items-center gap-2">
          <Euro className="h-10 w-10 text-[#E2531F]" />
          <span className="text-3xl font-medium text-[#E2531F]">{tour.price}.00</span>
        </div>

        {/* Bouton réserver */}
        <Button
          size="lg"
          className="w-full gap-2 bg-[#E2531F] text-base font-medium text-white hover:bg-[#d64a2e]"
        >
          <Ticket className="h-5 w-5" />
          Réserver
        </Button>
      </div>
    </Card>
  );
}
