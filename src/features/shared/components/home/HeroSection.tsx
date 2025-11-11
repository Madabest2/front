"use client";

import { Button } from "@/features/design-system/components/ui/button";
import type { Destination } from "@/types/homepage";
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { useState } from "react";

const destinations: Destination[] = [
  { id: "1", name: "Antsohihy", image: "/hero image/Antsohihy.jpg" },
  { id: "2", name: "Diego-Suarez", image: "/hero image/Diego suarez.jpg" },
  { id: "3", name: "Nosy-Be", image: "/hero image/Nosy Be.jpg" },
  { id: "4", name: "Ambanja", image: "/hero image/Ambanja.jpg" },
];

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: MessageCircle, url: "#", label: "WhatsApp" },
];

export function HeroSection() {
  const [activeDestination, setActiveDestination] = useState(2);

  return (
    <section className="relative h-[870px] w-full overflow-hidden">
      {/* Background Images Layer */}
      <div className="absolute inset-0 -top-px h-[871px] w-full">
        {/* Image gauche (left.jpg) */}
        <div
          className="absolute top-0 left-0 h-full w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero image/left.jpg')" }}
        />

        {/* Image droite (right.jpg) */}
        <div
          className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero image/right.jpg')" }}
        />
      </div>

      {/* Left translucent panel behind heading/text (desktop only) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[220px] bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Réseaux sociaux verticaux - Position fixe gauche */}
        <div className="absolute top-[151px] left-[70px] hidden h-[242px] w-[69px] flex-col items-center gap-5 rounded-[50px] bg-[rgba(80,162,223,0.3)] p-4 backdrop-blur-[5.5px] lg:flex">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-white transition-colors duration-200 hover:text-[#E2531F]"
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Texte principal */}
        <div className="absolute top-[163px] left-[183px] hidden lg:block">
          <h2 className="mb-8 w-[387px] text-2xl leading-[35px] font-medium text-white">
            Découvrez Madagascar autrement : explorez des lieux exotiques et organisez vos circuits
          </h2>
          <h1 className="text-5xl leading-[69px] font-medium text-white">Je veux visiter...</h1>
        </div>

        {/* Mobile: Texte centré */}
        <div className="px-4 pt-32 lg:hidden">
          <h2 className="mb-6 text-xl leading-relaxed font-medium text-white">
            Découvrez Madagascar autrement : explorez des lieux exotiques et organisez vos circuits
          </h2>
          <h1 className="mb-8 text-4xl font-medium text-white">Je veux visiter...</h1>
        </div>

        {/* Container des destinations avec positions absolues */}
        <div className="hidden lg:block">
          {/* Antsohihy - Position: left: 180px, top: 473px */}
          <div
            className="group absolute top-[473px] left-[180px] h-[155px] w-[143px] cursor-pointer"
            onClick={() => setActiveDestination(0)}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-white">
              {/* Image de fond exacte pour la carte Antsohihy */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero image/Antsohihy.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-0 bottom-0 left-0 p-3">
                <h3 className="text-xl font-medium text-white">Antsohihy</h3>
              </div>
            </div>
          </div>

          {/* Diego-Suarez - Position: left: 334px, top: 472px */}
          <div
            className="group absolute top-[472px] left-[334px] h-[155px] w-[143px] cursor-pointer"
            onClick={() => setActiveDestination(1)}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white">
              {/* Image de fond pour Diego-Suarez */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero image/Diego suarez.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-0 bottom-0 left-0 p-3">
                <h3 className="text-xl leading-[35px] font-medium text-white">Diego-Suarez</h3>
              </div>
            </div>
          </div>

          {/* Nosy-Be - Position: left: 488px, top: 373px (FEATURED - Plus grande) */}
          <div
            className="group absolute top-[373px] left-[488px] h-[255px] w-[242px] cursor-pointer"
            onClick={() => setActiveDestination(2)}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white">
              {/* Image de fond pour la carte mise en avant (Nosy-Be) */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero image/Nosy Be.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Icon plane */}
              <div className="absolute top-4 right-4 flex h-[37px] w-[37px] items-center justify-center rounded-full bg-white">
                {/* Rotation corrigée pour classe tailwind */}
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                  <g clipPath="url(#clip0_1_57)">
                    <path
                      d="M21.2819 13.2739L24.527 10.6933C24.9573 10.3511 25.506 10.1939 26.0522 10.2562C26.5985 10.3185 27.0976 10.5953 27.4398 11.0256C27.782 11.4559 27.9393 12.0046 27.877 12.5508C27.8146 13.0971 27.5379 13.5962 27.1075 13.9384L23.8624 16.519L25.1333 24.7785L22.6995 26.7139L19.8061 19.7447L16.561 22.3252L16.2287 25.238L13.7948 27.1734L12.8369 22.638L8.63376 20.6832L11.0676 18.7478L13.9804 19.0801L17.2255 16.4995L11.087 12.1109L13.5208 10.1755L21.2819 13.2739Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_57">
                      <rect
                        width="24.8764"
                        height="24.8764"
                        fill="white"
                        transform="translate(1.8501 15.4833) rotate(-38.4921)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Contenu */}
              <div className="absolute right-0 bottom-0 left-0 p-4">
                <h3 className="mb-4 text-2xl font-medium text-white">Nosy-Be</h3>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="h-auto rounded bg-[#E2531F] px-4 py-1.5 text-base text-white hover:bg-[#d64a2e]"
                  >
                    Je réserve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-auto rounded border border-[#E2531F] bg-transparent px-4 py-1.5 text-base text-white hover:bg-[#E2531F]/10"
                  >
                    Découvrir
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Ambanja - Position: left: 741px, top: 470px */}
          <div
            className="group absolute top-[470px] left-[741px] h-[155px] w-[143px] cursor-pointer"
            onClick={() => setActiveDestination(3)}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white">
              {/* Image de fond pour Ambanja */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero image/Ambanja.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-0 bottom-0 left-0 p-3">
                <h3 className="text-xl font-medium text-white">Ambanja</h3>
              </div>
            </div>
          </div>

          {/* Voir plus - Position: left: 895px, top: 470px */}
          <div className="absolute top-[470px] left-[895px] h-[155px] w-[143px] cursor-pointer">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20 bg-[rgba(66,139,193,0.2)] backdrop-blur-[5px]">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <span className="text-2xl text-white">+</span>
                </div>
                <p className="text-base font-medium text-white">Voir plus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Grille responsive */}
        <div className="px-4 lg:hidden">
          <div className="mx-auto grid max-w-xl grid-cols-2 gap-4">
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${
                  index === activeDestination ? "col-span-2 h-64" : "h-40"
                }`}
                onClick={() => setActiveDestination(index)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${dest.image})` }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <h3 className="mb-2 text-xl font-medium text-white">{dest.name}</h3>
                  {index === activeDestination && (
                    <div className="mt-2 flex gap-2">
                      <Button size="sm" className="bg-[#E2531F] text-white hover:bg-[#d64a2e]">
                        Je réserve
                      </Button>
                      <Button size="sm" variant="outline" className="border-[#E2531F] text-white">
                        Découvrir
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image femme - Position: right side */}
        <div className="absolute top-[304px] right-0 hidden h-[567px] w-[851px] lg:block">
          <div className="relative h-full w-full">
            <div
              className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero image/right-overlay.png')" }}
            />
          </div>
        </div>

        {/* Pagination numéros - Position: left: 1242px, top: 207px */}
        <div className="absolute top-[207px] left-[1242px] hidden flex-col gap-4 text-white xl:flex">
          <span className="text-base font-medium opacity-60">01</span>
          <span className="text-2xl font-medium">02</span>
          <span className="text-[40px] leading-[58px] font-medium">03</span>
          <span className="text-2xl font-medium opacity-60">04</span>
          <button className="mt-2 text-base font-medium transition-colors hover:text-[#E2531F]">
            Voir plus
          </button>
        </div>

        {/* Voir plus mobile */}
        <div className="absolute right-[936px] bottom-[292px] hidden lg:block xl:hidden">
          <button className="text-base font-medium text-white transition-colors hover:text-[#E2531F]">
            Voir plus
          </button>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-2">
          <div className="h-3 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
