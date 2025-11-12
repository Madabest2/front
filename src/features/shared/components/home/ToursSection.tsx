"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Card } from "@/features/design-system/components/ui/card";
import { Input } from "@/features/design-system/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/features/design-system/components/ui/select";
import { Bookmark, ChevronDown, ChevronRight, Euro, MapPin, Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const tours = [
  {
    id: "1",
    destination: "Nosy-Be",
    title: "Le trésor de Madagascar",
    price: 510.0,
    image: "/hero/Nosy Be.jpg",
  },
  {
    id: "2",
    destination: "Antsohihy",
    title: "Le trésor de Madagascar",
    price: 550.0,
    image: "/hero/Antsohihy.jpg",
  },
  {
    id: "3",
    destination: "Diego-Suarez",
    title: "Le trésor de Madagascar",
    price: 85.0,
    image: "/hero/Diego suarez.jpg",
  },
  {
    id: "4",
    destination: "Ambanja",
    title: "Le trésor de Madagascar",
    price: 250.0,
    image: "/hero/Ambanja.jpg",
  },
];

export function ToursSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[779px] w-full overflow-hidden">
      {/* Background Images and Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/forfaitbg.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179.34deg, rgba(105, 153, 244, 0.05) 0.53%, #000000 92.3%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-[67px] lg:py-32">
        {/* Header Section */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-[48px] leading-[69px] font-medium text-white">
              Nos Forfaits Tours
            </h2>
            <p className="text-[16px] leading-[23px] font-medium text-white">
              Découvrez votre destination de rêve ici
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Search Bar - Width: 549px, Height: 44px */}
            <div className="relative w-full sm:w-[549px]">
              <Search className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 transform text-white" />
              <Input
                type="text"
                placeholder="Recherchez votre prochaine destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-[44px] rounded-[8px] border-none bg-[rgba(255,255,255,0.14)] py-6 pr-4 pl-12 text-[16px] leading-[23px] font-medium text-white backdrop-blur-[12px] placeholder:text-white/70 focus:bg-white/20"
              />
            </div>

            {/* Location Dropdown - Width: 220px, Height: 44px */}
            <Select>
              <SelectTrigger className="h-[44px] w-full rounded-[8px] border-none bg-white text-[#E2531F] backdrop-blur-[12px] sm:w-[220px]">
                <div className="flex w-full items-center gap-3">
                  <MapPin className="h-[27px] w-[27px] shrink-0 text-[#E2531F]" />
                  <SelectValue
                    placeholder="Où allez-vous ?"
                    className="text-[16px] leading-[23px] font-medium"
                  />
                  <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-[#E2531F]" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nosy-be">Nosy-Be</SelectItem>
                <SelectItem value="antsohihy">Antsohihy</SelectItem>
                <SelectItem value="diego-suarez">Diego-Suarez</SelectItem>
                <SelectItem value="ambanja">Ambanja</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Button - Voir toutes les destinations */}
        <Button
          variant="outline"
          size="lg"
          className="mb-12 h-[38px] rounded border-none bg-white px-[15px] text-[16px] leading-[23px] font-medium text-black hover:bg-white/90"
        >
          Voir toutes les destinations
        </Button>

        {/* Tours Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Navigation Arrow */}
        <div className="mt-8 flex justify-end">
          <button
            className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-white shadow-[-3px_4px_4px_rgba(0,0,0,0.25)] transition-transform hover:scale-110"
            aria-label="Suivant"
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TourCard({ tour }: { tour: (typeof tours)[0] }) {
  return (
    <Card className="group relative h-auto w-full cursor-pointer overflow-hidden rounded-[15px] border border-white bg-[rgba(255,255,255,0.2)] backdrop-blur-[4px] transition-all duration-300 hover:scale-105 hover:bg-white/30">
      {/* Image - Height: 235px */}
      <div className="relative h-[235px] w-full overflow-hidden rounded-t-[15px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${tour.image}')` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Bookmark Badge - Position: top-right */}
        <button className="absolute top-[20px] right-[20px] flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#E2531F] bg-[rgba(226,83,31,0.17)] backdrop-blur-[6px] transition-transform hover:scale-110">
          <Bookmark className="h-6 w-6 fill-white text-white" />
        </button>

        {/* Location Pin */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <MapPin className="h-[34px] w-[34px] text-[#E2531F]" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Destination Name */}
        <h3 className="text-[24px] leading-[35px] font-medium text-white">{tour.destination}</h3>

        {/* Title */}
        <p className="text-[15px] leading-[22px] font-medium text-[#E4E4E4]">{tour.title}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <Euro className="h-[40px] w-[40px] text-[#E2531F]" />
          <span className="text-[32px] leading-[46px] font-medium text-[#E2531F]">
            {tour.price.toFixed(2)}
          </span>
        </div>

        {/* Reserve Button */}
        <Button
          size="lg"
          className="w-full gap-2 rounded bg-[#E2531F] px-[15px] py-[6px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#d64a2e]"
        >
          Réserver
          <Image
            src={`/ticket.png`}
            alt={"ticket"}
            width={20}
            height={20}
            className="h-5 w-auto object-contain"
          />
        </Button>
      </div>
    </Card>
  );
}
