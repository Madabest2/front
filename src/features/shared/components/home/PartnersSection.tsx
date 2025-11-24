"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const ALL_PARTNERS = [
  "Accord-MTD.svg",
  "Accord-AT.svg",
  "Air-Mada.svg",
  "Air-france.svg",
  "Air-Mauritius.svg",
  "Air-kenya.svg",
  "Air-seychelles.svg",
  "Air-Austral.svg",
  "Air-Link.svg",
  "Air-emirates.svg",
  "PartenaireOfficiel-Madagascar-National-Parks-180x180.svg",
  "PartenaireOfficiel-otm.svg",
  "PartenaireOfficiel-MadaDiego.svg",
  "PartenaireOfficiel-Nosybe.svg",
  "Professional-CTM.svg",
  "Professional-topmadagascar.svg",
];

const OFFICIAL_OFFSETS: Record<string, string> = {
  "PartenaireOfficiel-Madagascar-National-Parks-180x180.svg": "-ml-2",
};
const officials = ALL_PARTNERS.filter((file) => file.startsWith("PartenaireOfficiel-"));
const institutional = ALL_PARTNERS.filter((file) => file.startsWith("Accord-"));
const airlines = ALL_PARTNERS.filter((file) => file.startsWith("Air-"));
const professional = ALL_PARTNERS.filter((file) => file.startsWith("Professional-"));

function labelFromFilename(name: string) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export function PartnersSection() {
  const t = useTranslations("home.partners");

  return (
    <section className="bg-[#FFF6E4] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[30px]">
        {/* First Row - Official Partners and Institutional Agreements */}
        <div className="mt-0 mb-16 grid gap-16 lg:grid-cols-2">
          {/* Nos Partenaires Officiels */}
          <div>
            <h2 className="mb-3 text-[48px] leading-[69px] font-medium text-black">
              {t("official")}
            </h2>
            <div className="grid w-full grid-cols-2 justify-items-start gap-2 md:grid-cols-4">
              {officials.map((file) => (
                <div
                  key={file}
                  className="mr-2 flex h-[91px] w-full items-center justify-start overflow-hidden bg-transparent transition-shadow duration-300"
                >
                  <Image
                    src={`/partners/${file}`}
                    alt={labelFromFilename(file)}
                    width={160}
                    height={64}
                    className={`h-20 w-auto max-w-full object-contain object-left ${OFFICIAL_OFFSETS[file] ?? ""}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nos Accords Institutionnels */}
          <div>
            <h2 className="mb-8 text-[48px] leading-[69px] font-medium text-black">
              {t("institutional")}
            </h2>
            <div className="mx-auto inline-grid grid-cols-2 justify-items-start gap-4">
              {institutional.map((file) => (
                <div
                  key={file}
                  className="flex h-20 w-full items-center justify-start overflow-hidden rounded-lg bg-transparent p-2 transition-shadow duration-300"
                >
                  <Image
                    src={`/partners/${file}`}
                    alt={labelFromFilename(file)}
                    width={160}
                    height={64}
                    className="h-20 w-auto max-w-full object-contain object-left"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nos Partenaires Aériens */}
        <div>
          <h2 className="mb-8 text-[48px] leading-[69px] font-medium text-black">
            {t("airlines")}
          </h2>
          <div className="mx-auto inline-grid grid-cols-2 justify-items-start gap-6 md:grid-cols-4">
            {airlines.map((file) => (
              <div
                key={file}
                className="flex h-[120px] w-full transform cursor-pointer items-center justify-start overflow-hidden rounded-lg bg-transparent p-4 transition-shadow duration-300 hover:scale-105"
              >
                <div>
                  <Image
                    src={`/partners/${file}`}
                    alt={labelFromFilename(file)}
                    width={200}
                    height={80}
                    className="h-50 w-auto max-w-full object-contain object-left"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Affiliation Awards */}
        <div className="mt-16">
          <h2 className="mb-8 text-[48px] leading-[69px] font-medium text-black">
            {t("professional")}
          </h2>
          <div className="mx-auto inline-grid grid-cols-2 justify-items-start gap-6">
            {professional.map((file) => (
              <div
                key={file}
                className="flex h-[120px] w-full items-center justify-start overflow-hidden rounded-lg bg-transparent p-4 transition-shadow duration-300"
              >
                <Image
                  src={`/partners/${file}`}
                  alt={labelFromFilename(file)}
                  width={250}
                  height={50}
                  className="h-25 w-auto max-w-full object-contain object-left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
