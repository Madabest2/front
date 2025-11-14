"use client";
import Image from "next/image";

export function HeroAbout() {
  return (
    <section className="relative mx-auto mt-4 h-[526px] max-w-[1389px] overflow-hidden rounded-[50px]">
      <Image src="/about/hero.jpg" alt="À propos de nous" fill priority className="object-cover" />
      <div className="absolute inset-0 rounded-[50px] bg-black/60" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[10%] text-center text-4xl font-medium text-white md:text-5xl">
        À propos de nous
      </h1>
      <ActivitiesBar />
    </section>
  );
}

function ActivitiesBar() {
  return (
    <div className="absolute bottom-4 left-1/2 z-10 w-[95%] -translate-x-1/2 rounded-[15px] bg-white/10 backdrop-blur-sm lg:w-[1135px]">
      <div className="flex h-[60px] items-center justify-start overflow-x-auto px-6 text-white lg:justify-center">
        <div className="flex cursor-pointer flex-nowrap items-center justify-start gap-6 text-base font-bold md:text-lg lg:flex-wrap lg:justify-center">
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">Trekking</span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">Birdwatching</span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">
            Visite de la faune
          </span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">
            Visite communautaire
          </span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">Packages tour</span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">
            Votre visite personnalisée
          </span>
        </div>
      </div>
    </div>
  );
}
