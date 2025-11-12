"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image and Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/aboutbg.jpg')" }}
        />
        {/* Rectangle 12: rotated gradient overlay matching the spec */}
        <div
          className="absolute inset-0 rotate-180"
          style={{
            background: "linear-gradient(164.06deg, rgba(25, 25, 25, 0) 11.74%, #000000 83.55%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-[68px] lg:py-32">
        <div className="max-w-[572px]">
          {/* Main Title */}
          <h2 className="mb-8 text-[48px] leading-[69px] font-medium text-white">
            LES MEILLEURES EXCURSIONS
          </h2>

          {/* Play Button with Text */}
          <div className="mb-8 flex items-center gap-4">
            <button className="group flex h-[61px] w-[61px] shrink-0 items-center justify-center rounded-full border-4 border-[#E2531F] bg-transparent transition-all duration-300 hover:bg-[#E2531F]">
              <Play className="ml-1 h-6 w-6 fill-[#E2531F] text-[#E2531F] group-hover:fill-white group-hover:text-white" />
            </button>
            <h3 className="text-[32px] leading-[46px] font-bold text-white">
              Choisissez vos vacances plaisir
            </h3>
          </div>

          {/* Description */}
          <p className="mb-8 text-[16px] leading-[27px] font-normal text-white">
            Nosy Be, surnommée &quot;l&apos;île aux parfums&quot;, est l&apos;une des destinations
            les plus prisées de Madagascar. Entre ses plages de sable blanc bordées de cocotiers,
            ses eaux turquoise idéales pour la plongée et le snorkeling, et ses paysages volcaniques
            parsemés de lacs sacrés, l&apos;île offre une diversité unique. Vous pourrez partir à la
            découverte de petites îles voisines comme Nosy Komba ou Nosy Tanikely, admirer des
            couchers de soleil inoubliables sur la plage d&apos;Andilana, ou encore flâner dans les
            marchés colorés de Hell-Ville.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="h-[38px] rounded bg-[#E2531F] px-[15px] text-[16px] leading-[23px] font-medium text-white hover:bg-[#d64a2e]"
          >
            Commencer votre réservation
          </Button>
        </div>

        {/* Video Thumbnails - Right side */}
        <div className="absolute right-5 bottom-5 hidden gap-6 lg:flex">
          {/* Thumbnail 1 */}
          <div className="group relative h-[143px] w-[215px] cursor-pointer overflow-hidden rounded-xl border border-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero/left.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/20" />
            <button className="absolute top-1/2 left-1/2 flex h-[61px] w-[61px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-white bg-transparent">
              <Play className="ml-1 h-5 w-5 fill-white text-white" />
            </button>
          </div>

          {/* Thumbnail 2 */}
          <div className="group relative h-[143px] w-[215px] cursor-pointer overflow-hidden rounded-xl border border-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero/right.jpg')" }}
            />
            <div
              className="absolute inset-0 transition-all group-hover:bg-black/20"
              style={{
                background:
                  "linear-gradient(172.07deg, rgba(25, 25, 25, 0) 6.46%, #000000 168.94%)",
              }}
            />
            <button className="absolute top-1/2 left-1/2 flex h-[61px] w-[61px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-white bg-transparent">
              <Play className="ml-1 h-5 w-5 fill-white text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
