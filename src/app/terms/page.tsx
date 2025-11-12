"use client";
import { Button } from "@/features/design-system/components/ui/button";
import { MainLayout } from "@/features/shared/components/layout";
import type { Section } from "@/features/terms";
import { TermsPanel, TermsSidebar } from "@/features/terms";
import {
  AlertTriangle,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Download,
  Receipt,
  Share2,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { useMemo, useState } from "react";

export default function TermsPage() {
  const sections = useMemo<Section[]>(
    () => [
      {
        id: "reservation",
        title: "Réservation & Engagement",
        description: [
          "La réservation d’un voyage ou d’autres prestations peut se faire à notre bureau, par téléphone ou e‑mail. Une confirmation claire et complète de l’itinéraire et des prestations vous est envoyée après validation.",
          "L’engagement ne prend effet qu’à la réception de l’acompte demandé. Une facture proforma vous sera expédiée dès confirmation de la prestation.",
        ],
        sidebarText:
          "Réservation possible en bureau, par téléphone ou e‑mail, confirmée par facture proforma.",
        icon: <CalendarCheck2 className="h-5 w-5" />,
      },
      {
        id: "assurance",
        title: "Assurance",
        description: [
          "Notre agence Madabest a souscrit une assurance en responsabilité civile professionnelle auprès de la compagnie NY HAVANA, couvrant les risques liés à l’exercice de nos activités. Cependant, cette couverture ne comprend pas les évacuations sanitaires, ni les assurances assistance, annulation ou multirisque voyage. Nous recommandons vivement à chaque voyageur de souscrire, auprès de son assureur habituel, une police d’assurance adaptée (assistance médicale, rapatriement, perte de bagages, annulation, etc.) afin de voyager en toute sérénité.",
        ],
        sidebarText:
          "Responsabilité civile incluse, assurances voyage complémentaires à votre charge.",
        icon: <ShieldCheck className="h-5 w-5" />,
      },
      {
        id: "prix",
        title: "Prix",
        description: [
          "Pour les règlements de facture, en Ariary, le tarif sera calculé en fonction du cours de l’euro du jour où le paiement sera effectué. La validité des tarifs annoncés dans le référentiel de prix ou sur notre site web est pour l’année en cours. En générale, nous mentionnons les détails des dépenses inclus dans le prix. Les pourboires et boissons ne sont pas compris dans les prix. Des réductions sur certaines prestations sont prévus pour les enfants moins de 10 ans.",
        ],
        sidebarText:
          "Les tarifs pourront être révisés à la hausse qu’à la baisse, si des changements majeures de l’extérieur de notre entité interviennent, comme :.",
        icon: <Tag className="h-5 w-5" />,
      },
      {
        id: "reglement",
        title: "Règlement",
        description: [],
        sidebarText: "Un acompte de 20 % à la réservation, solde à régler 30 jours avant départ.",
        icon: <Receipt className="h-5 w-5" />,
      },
      {
        id: "annulation",
        title: "Annulation",
        description: ["En cas d’annulation, nous demandons au client selon les cas suivant :"],
        sidebarText:
          "Frais variables selon la date d’annulation, jusqu’à 100 % à 7 jours du départ.",
        icon: <AlertTriangle className="h-5 w-5" />,
      },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const atStart = activeIdx <= 0;
  const atEnd = activeIdx >= sections.length - 1;

  return (
    <div className="min-h-screen bg-[#FFF6E4]">
      <MainLayout>
        <main className="mx-auto mt-16 w-full max-w-7xl px-4 py-10 sm:mt-20 lg:mt-24 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Conditions & Modalités
              </h1>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Retrouvez ici l’ensemble des informations relatives à votre voyage.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-1 h-4 w-4" /> PDF
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-1 h-4 w-4" /> Partager
              </Button>
            </div>
          </div>

          <section className="relative -mx-4 rounded-[25px] bg-[#FFE2D7] p-3 px-7 py-4 sm:-mx-8 sm:p-4 lg:-mx-14 lg:p-5 xl:-mx-20 2xl:-mx-28">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <aside className="lg:col-span-3">
                <TermsSidebar
                  sections={sections}
                  activeIdx={activeIdx}
                  onSelect={(i) => setActiveIdx(i)}
                />
              </aside>
              <div className="lg:col-span-9">
                <TermsPanel section={sections[activeIdx]} />
              </div>
            </div>
            {/* Bottom-right nav buttons */}
            <div className="mt-4 flex items-center justify-end gap-2 lg:absolute lg:right-5 lg:bottom-4">
              <Button
                size="sm"
                disabled={atStart}
                aria-disabled={atStart}
                className={`rounded px-4 py-2 text-white ${atStart ? "cursor-not-allowed bg-[rgba(226,83,31,0.2)] opacity-60" : "bg-[rgba(226,83,31,0.4)] hover:opacity-90"}`}
                onClick={() => {
                  if (!atStart) setActiveIdx((i) => Math.max(0, i - 1));
                }}
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Précédent
              </Button>
              <Button
                size="sm"
                disabled={atEnd}
                aria-disabled={atEnd}
                className={`rounded text-white ${atEnd ? "cursor-not-allowed bg-[rgba(226,83,31,0.2)] opacity-60" : "bg-[#E2531F] hover:bg-[#d64a2e]"}`}
                onClick={() => {
                  if (!atEnd) setActiveIdx((i) => Math.min(sections.length - 1, i + 1));
                }}
              >
                Suivant <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </section>
        </main>
      </MainLayout>
    </div>
  );
}
