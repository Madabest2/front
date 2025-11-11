"use client";

import type { Partner } from "@/types/homepage";

const partners: { official: Partner[]; airlines: Partner[] } = {
  official: [
    {
      id: "1",
      name: "Madagascar National Parks",
      logo: "/images/partners/mnp.png",
      category: "official",
    },
    {
      id: "2",
      name: "Office National du Tourisme",
      logo: "/images/partners/ont.png",
      category: "official",
    },
    { id: "3", name: "WWF Madagascar", logo: "/images/partners/wwf.png", category: "official" },
    {
      id: "4",
      name: "Conservation International",
      logo: "/images/partners/ci.png",
      category: "official",
    },
  ],
  airlines: [
    {
      id: "5",
      name: "Air Madagascar",
      logo: "/images/airlines/air-madagascar.png",
      category: "airline",
    },
    { id: "6", name: "Air France", logo: "/images/airlines/air-france.png", category: "airline" },
    {
      id: "7",
      name: "Air Mauritius",
      logo: "/images/airlines/air-mauritius.png",
      category: "airline",
    },
    {
      id: "8",
      name: "Kenya Airways",
      logo: "/images/airlines/kenya-airways.png",
      category: "airline",
    },
    {
      id: "9",
      name: "Air Seychelles",
      logo: "/images/airlines/air-seychelles.png",
      category: "airline",
    },
    {
      id: "10",
      name: "Air Austral",
      logo: "/images/airlines/air-austral.png",
      category: "airline",
    },
    { id: "11", name: "Airlink", logo: "/images/airlines/airlink.png", category: "airline" },
    { id: "12", name: "Emirates", logo: "/images/airlines/emirates.png", category: "airline" },
  ],
};

const institutional = [
  { id: "i1", name: "UNWTO", logo: "/images/institutional/unwto.png" },
  { id: "i2", name: "IATA", logo: "/images/institutional/iata.png" },
];

export function PartnersSection() {
  return (
    <section className="bg-[#FFF6E4] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Partenaires Officiels */}
          <div>
            <h2 className="mb-12 text-4xl font-semibold text-black lg:text-5xl">
              Nos Partenaires Officiels
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {partners.official.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center rounded-lg bg-white p-6 transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="h-24 w-24 rounded bg-gray-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Accords Institutionnels */}
          <div>
            <h2 className="mb-12 text-4xl font-semibold text-black lg:text-5xl">
              Nos Accords Institutionnels
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {institutional.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center rounded-lg bg-white p-6 transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="h-20 w-32 rounded bg-gray-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partenaires Aériens */}
        <div className="mt-20">
          <h2 className="mb-12 text-4xl font-semibold text-black lg:text-5xl">
            Nos Partenaires Aériens
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {partners.airlines.map((airline) => (
              <div
                key={airline.id}
                className="flex transform cursor-pointer items-center justify-center rounded-lg bg-white p-6 transition-shadow duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="h-16 w-32 rounded bg-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
