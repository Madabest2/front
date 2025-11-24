"use client";
import {
  CancellationRow,
  InfoPill,
  PercentageBadge,
} from "@/features/design-system/components/custom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Section } from "../types";

export function TermsPanel({ section }: { section: Section }) {
  const s = section;
  const t = useTranslations("terms.sections");
  return (
    <div className="px-2 py-2 sm:px-4 sm:py-3">
      <h2 className="mb-2 text-xl font-semibold sm:text-2xl">{s.title}</h2>
      <div className="space-y-3 text-[15px] leading-[1.7] sm:text-base">
        {s.id === "reservation"
          ? s.description.map((desc, idx) => (
              <div
                key={idx}
                className={idx === 0 ? "text-[16px] leading-[23px] font-bold" : ""}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            ))
          : s.description.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      {s.id === "reservation" && (
        <div className="mt-6 flex flex-col gap-4">
          <p dangerouslySetInnerHTML={{ __html: t("reservation.content.intro") }} />
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
                {t("reservation.content.videoLabel")}
              </span>
            </div>
          </div>
          <p>{t("reservation.content.engagement")}</p>

          {/* Contact pills stacked */}
          <div className="flex flex-col gap-3">
            <InfoPill className="w-full md:w-[337px]" icon={<MapPin className="h-4 w-4" />}>
              {t("reservation.content.address")}
            </InfoPill>
            <InfoPill className="w-full md:w-[377px]" icon={<Phone className="h-4 w-4" />}>
              {t("reservation.content.phone")}
            </InfoPill>
            <InfoPill className="w-full md:w-[453px]" icon={<Mail className="h-4 w-4" />}>
              {t("reservation.content.email")}
            </InfoPill>
          </div>
        </div>
      )}

      {s.id === "assurance" && (
        <div className="mt-5 space-y-4">
          <p dangerouslySetInnerHTML={{ __html: t("assurance.content.description") }} />
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
            <p className="text-[20px] leading-[29px] font-medium">
              {t("assurance.content.contactTitle")}
            </p>
            <div className="mt-2 space-y-2 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="underline">{t("assurance.content.contactName")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="underline">{t("assurance.content.contactPhone")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="underline">{t("assurance.content.contactEmail")}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {s.id === "prix" && (
        <div className="mt-5 space-y-6">
          {/* Divider */}
          <hr className="border-t-2 border-[#969696]" />
          <p>{t("prix.content.revisionIntro")}</p>
          {/* Single-line bullet container (no wrapping) */}
          <div className="overflow-hidden rounded-[10px] border border-[#969696] px-7 py-4">
            <div className="flex flex-nowrap items-center space-x-14 text-[16px] leading-[23px] xl:space-x-16">
              <div className="flex shrink-0 items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span>{t("prix.content.reason1")}</span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span>{t("prix.content.reason2")}</span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span>{t("prix.content.reason3")}</span>
              </div>
            </div>
          </div>

          {/* Closing sentence */}
          <p className="text-[16px] leading-[23px]">{t("prix.content.notice")}</p>
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
            et la préparation du voyage/prestation. Le solde est idéalement payable{" "}
            <span className="font-semibold">
              30 jours avant la date de début du voyage ou départ
            </span>
            . Nous ne pourrons garantir la concrétisation du voyage du client avant que le règlement
            de la prestation soit intégral.{" "}
            <span className="font-semibold">
              Le paiement peut se faire en Euro ou en Ariary par virement bancaire
            </span>
            . Il va sans dire que les frais liés au virement seront à la charge du client. Un email
            de confirmation de la part du client du virement ou paiement avec une copie de l’ordre
            du virement est sollicité. Le compte et numéro bancaire vous sont communiqués dès votre
            demande.
          </p>
        </div>
      )}

      {s.id === "annulation" && (
        <div className="mt-6 space-y-4">
          <CancellationRow
            label={t("annulation.content.fee20Days")}
            value={t("annulation.content.fee20DaysValue")}
          />
          <CancellationRow
            label={t("annulation.content.fee15Days")}
            value={t("annulation.content.fee15DaysValue")}
          />
          <CancellationRow
            label={t("annulation.content.fee10Days")}
            value={t("annulation.content.fee10DaysValue")}
          />
          <CancellationRow
            label={t("annulation.content.fee7Days")}
            value={t("annulation.content.fee7DaysValue")}
          />

          {/* Additional note + reasons box */}
          <p
            className="pt-2 text-[16px] leading-[23px]"
            dangerouslySetInnerHTML={{ __html: t("annulation.content.agencyCancellation") }}
          />
          <div className="rounded-[14px] border border-[#969696] p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex max-w-[360px] items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span className="text-[16px] leading-[23px]">
                  {t("annulation.content.reason1")}
                </span>
              </div>
              <div className="flex max-w-[520px] items-center gap-3">
                <span className="inline-block size-2 rounded-full bg-black" />
                <span className="text-[16px] leading-[23px]">
                  {t("annulation.content.reason2")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
