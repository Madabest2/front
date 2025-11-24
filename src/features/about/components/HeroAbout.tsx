"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeroAbout() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative mx-auto mt-4 h-[526px] max-w-[1389px] overflow-hidden rounded-[50px]">
      <Image src="/about/hero.jpg" alt={t("title")} fill priority className="object-cover" />
      <div className="absolute inset-0 rounded-[50px] bg-black/60" />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[10%] text-center text-4xl font-medium text-white md:text-5xl">
        {t("title")}
      </h1>
      <ActivitiesBar />
    </section>
  );
}

function ActivitiesBar() {
  const t = useTranslations("about.hero.activities");

  return (
    <div className="absolute bottom-4 left-1/2 z-10 w-[95%] -translate-x-1/2 rounded-[15px] bg-white/10 backdrop-blur-sm lg:w-[1135px]">
      <div className="flex h-[60px] items-center justify-start overflow-x-auto px-6 text-white lg:justify-center">
        <div className="flex cursor-pointer flex-nowrap items-center justify-start gap-6 text-base font-bold md:text-lg lg:flex-wrap lg:justify-center">
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">{t("trekking")}</span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">
            {t("birdwatching")}
          </span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">{t("wildlife")}</span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">
            {t("community")}
          </span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">{t("packages")}</span>
          <span className="shrink-0 hover:border-b-2 hover:border-orange-500">{t("custom")}</span>
        </div>
      </div>
    </div>
  );
}
