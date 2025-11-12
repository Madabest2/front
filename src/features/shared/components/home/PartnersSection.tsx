"use client";

import Image from "next/image";

const ALL_PARTNERS = [
  "Accord-AT.svg",
  "Accord-MTD.svg",
  "Air-Austral.svg",
  "Air-emirates.svg",
  "Air-france.svg",
  "Air-kenya.svg",
  "Air-Link.svg",
  "Air-Mauritius.svg",
  "Air-seychelles.svg",
  "Air-Mada.svg",
  "PartenaireOfficiel-MadaDiego.svg",
  "PartenaireOfficiel-Madagascar-National-Parks-180x180.svg",
  "PartenaireOfficiel-Nosybe.svg",
  "PartenaireOfficiel-otm.svg",
];

const officials = ALL_PARTNERS.filter((file) => file.startsWith("PartenaireOfficiel-"));
const institutional = ALL_PARTNERS.filter((file) => file.startsWith("Accord-"));
const airlines = ALL_PARTNERS.filter((file) => file.startsWith("Air-"));

function labelFromFilename(name: string) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export function PartnersSection() {
  return (
    <section className="bg-[#FFF6E4] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[30px]">
        {/* First Row - Official Partners and Institutional Agreements */}
        <div className="mb-20 grid gap-16 lg:grid-cols-2">
          {/* Nos Partenaires Officiels */}
          <div>
            <h2 className="mb-12 text-[48px] leading-[69px] font-medium text-black">
              Nos Partenaires Officiels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {officials.map((file) => (
                <div
                  key={file}
                  className="flex h-[91px] w-full items-center justify-center bg-transparent p-4 transition-shadow duration-300"
                >
                  <Image
                    src={`/partners/${file}`}
                    alt={labelFromFilename(file)}
                    width={160}
                    height={64}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nos Accords Institutionnels */}
          <div>
            <h2 className="mb-12 text-[48px] leading-[69px] font-medium text-black">
              Nos Accords Institutionnels
            </h2>
            <div className="grid grid-cols-2">
              {institutional.map((file) => (
                <div
                  key={file}
                  className="flex h-20 w-full items-center justify-center rounded-lg bg-transparent p-4 transition-shadow duration-300"
                >
                  <Image
                    src={`/partners/${file}`}
                    alt={labelFromFilename(file)}
                    width={160}
                    height={64}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nos Partenaires Aériens */}
        <div>
          <h2 className="mb-12 text-[48px] leading-[69px] font-medium text-black">
            Nos Partenaires Aériens
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {airlines.map((file) => (
              <div
                key={file}
                className="flex h-[134px] w-full transform cursor-pointer items-center justify-center rounded-lg bg-transparent p-6 transition-shadow duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <Image
                    src={`/partners/${file}`}
                    alt={labelFromFilename(file)}
                    width={200}
                    height={80}
                    className="mx-auto h-50 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
