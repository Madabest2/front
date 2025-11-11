"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section
      className="relative min-h-[700px] bg-cover bg-center lg:min-h-[800px]"
      style={{ backgroundImage: "url(/images/video-bg.jpg)" }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/60" />

      <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          {/* Contenu */}
          <div className="space-y-8">
            <h2 className="text-4xl leading-tight font-semibold text-white lg:text-5xl">
              LES MEILLEURES EXCURSIONS
            </h2>

            <div className="flex items-center gap-4">
              <button className="group flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#E2531F] bg-transparent transition-all duration-300 hover:bg-[#E2531F]">
                <Play className="h-6 w-6 fill-[#E2531F] text-[#E2531F] group-hover:fill-white group-hover:text-white" />
              </button>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">
                Choisissez vos vacances plaisir
              </h3>
            </div>

            <p className="text-lg leading-relaxed text-white">
              Nosy Be, surnommée &quot;l&apos;île aux parfums&quot;, est l&apos;une des destinations
              les plus prisées de Madagascar. Entre ses plages de sable blanc bordées de cocotiers,
              ses eaux turquoise idéales pour la plongée et le snorkeling, et ses paysages
              volcaniques parsemés de lacs sacrés, l&apos;île offre une diversité unique. Vous
              pourrez partir à la découverte de petites îles voisines comme Nosy Komba ou Nosy
              Tanikely, admirer des couchers de soleil inoubliables sur la plage d&apos;Andilana, ou
              encore flâner dans les marchés colorés de Hell-Ville.
            </p>

            <Button
              size="lg"
              className="bg-[#E2531F] px-8 text-base font-medium text-white hover:bg-[#d64a2e]"
            >
              Commencer votre réservation
            </Button>
          </div>
        </div>

        {/* Vidéos miniatures */}
        <div className="absolute right-8 bottom-20 hidden gap-6 lg:right-20 lg:flex">
          <div className="group relative h-36 w-56 cursor-pointer overflow-hidden rounded-lg bg-gray-800">
            <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/20" />
            <button className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-white bg-transparent">
              <Play className="h-5 w-5 fill-white text-white" />
            </button>
          </div>
          <div className="group relative h-36 w-56 cursor-pointer overflow-hidden rounded-lg bg-gray-700">
            <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/20" />
            <button className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-white bg-transparent">
              <Play className="h-5 w-5 fill-white text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
