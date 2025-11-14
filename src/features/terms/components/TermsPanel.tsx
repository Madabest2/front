"use client";
import {
  CancellationRow,
  InfoPill,
  PercentageBadge,
} from "@/features/design-system/components/custom";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Section } from "../types";

export function TermsPanel({ section }: { section: Section }) {
  const s = section;
  return (
    <div className="px-2 py-2 sm:px-4 sm:py-3">
      <h2 className="mb-2 text-xl font-semibold sm:text-2xl">{s.title}</h2>
      <div className="space-y-3 text-[15px] leading-[1.7] sm:text-base">
        {s.description.map((p, i) => (
          <p
            key={i}
            className={
              i === 0 && s.id === "reservation" ? "text-[16px] leading-[23px] font-bold" : ""
            }
          >
            {p}
          </p>
        ))}
      </div>

      {s.id === "reservation" && (
        <div className="mt-6 flex flex-col gap-4">
          {/* Image with white border and overlay controls */}
          <div className="relative w-full overflow-hidden rounded-xl border-[3px] border-white md:h-[243px] md:w-[405px]">
            <Image
              src="/about/hero.jpg"
              alt={s.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 405px"
            />
            <div className="absolute bottom-3 left-5 flex items-center gap-2">
              <div className="flex h-[27px] w-[27px] items-center justify-center rounded-full border border-white bg-black">
                <div
                  className="h-0 w-0 border-y-[4.7px] border-l-[9.45px] border-y-transparent border-l-[#FFC4AF]"
                  aria-hidden
                />
              </div>
              <span className="flex h-[22px] w-[107px] items-center justify-center rounded-full border border-white bg-black text-[16px] leading-[23px] text-white">
                Voir la vidéo
              </span>
            </div>
          </div>

          {/* Contact pills stacked */}
          <div className="flex flex-col gap-3">
            <InfoPill className="w-full md:w-[337px]" icon={<MapPin className="h-4 w-4" />}>
              43 Rue de la marne – Diego Suarez
            </InfoPill>
            <InfoPill className="w-full md:w-[377px]" icon={<Phone className="h-4 w-4" />}>
              +261 34 28 325 14 / +261 32 05 127 11
            </InfoPill>
            <InfoPill className="w-full md:w-[453px]" icon={<Mail className="h-4 w-4" />}>
              madabesttrip@gmail.com / contact@madabesttour.com
            </InfoPill>
          </div>
        </div>
      )}

      {s.id === "assurance" && (
        <div className="mt-5 space-y-4">
          {/* Logo zone (≈200x49) */}
          <div className="h-[49px] w-[200px] overflow-hidden">
            <Image
              src="/havana.png"
              alt="NY HAVANA"
              width={200}
              height={49}
              className="h-[49px] w-[200px] object-contain"
            />
          </div>

          <div>
            <p className="text-[20px] leading-[29px] font-medium">Contact NY HAVANA :</p>
            <div className="mt-2 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="underline">NY HAVANA - ANTANANARIVO</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="underline">+261 34 82 523 41</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="underline">nyhavana@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {s.id === "prix" && (
        <div className="mt-5 space-y-6">
          {/* Divider */}
          <hr className="border-t-2 border-[#969696]" />

          {/* Single-line bullet container (no wrapping) */}
          <div className="overflow-hidden rounded-[10px] border border-[#969696] px-7 py-4">
            <div className="flex flex-nowrap items-center space-x-14 text-[16px] leading-[23px] xl:space-x-16">
              <div className="flex shrink-0 items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span>La hausse de prix du carburant</span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span>La variation du taux de change etc</span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span>Le changement de tarif des prestataires spécifiques.</span>
              </div>
            </div>
          </div>

          {/* Closing sentence */}
          <p className="text-[16px] leading-[23px]">
            Au cas ou les changements se présentent, ces modification sont communiquées au moins un
            mois avant la date de départ prévu.
          </p>
        </div>
      )}

      {s.id === "reglement" && (
        <div className="mt-5 space-y-3 text-sm sm:text-base">
          <p>
            Un acompte d’un taux de <PercentageBadge>20 %</PercentageBadge> de la prestation est
            sollicité pour enclencher l’engagement et la préparation du voyage/prestation. Le solde
            est idéalement payable 30 jours avant la date de début du voyage ou départ.
          </p>
          <p>
            et la préparation du voyage/prestation. Le solde est idéalement payable 30 jours avant
            la date de début du voyage ou départ. Nous ne pourrons garantir la concrétisation du
            voyage du client avant que le règlement de la prestation soit intégral. Le paiement peut
            se faire en Euro ou en Ariary par virement bancaire. Il va sans dire que les frais liés
            au virement seront à la charge du client. Un email de confirmation de la part du client
            du virement ou paiement avec une copie de l’ordre du virement est sollicité. Le compte
            et numéro bancaire vous sont communiqués dès votre demande.
          </p>
        </div>
      )}

      {s.id === "annulation" && (
        <div className="mt-6 space-y-4">
          <CancellationRow
            label="À 20 jours avant le départ :"
            value="30 % du prix total du voyage"
          />
          <CancellationRow
            label="À 15 jours avant la date prévue de départ :"
            value="50 % du prix total du voyage"
          />
          <CancellationRow
            label="À 10 jours avant le départ :"
            value="75 % du prix total du voyage"
          />
          <CancellationRow
            label="À 7 jours avant le départ :"
            value="100 % du prix total du voyage"
          />

          {/* Additional note + reasons box */}
          <p className="pt-2 text-[16px] leading-[23px]">
            Notre agence, Madabest, se réserve le droit d’annuler ou de modifier un voyage, à un
            mois (30 jours) avant la date de départ dans les cas où :
          </p>
          <div className="rounded-[14px] border border-[#969696] p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex max-w-[360px] items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span className="text-[16px] leading-[23px]">
                  Le solde du règlement de la facture n’a pas été effectué à temps utile
                </span>
              </div>
              <div className="flex max-w-[520px] items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span className="text-[16px] leading-[23px]">
                  Les problèmes majeurs externes, éventuels de changement sur le transport aérien,
                  et les conditions climatique etc surgissent.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
