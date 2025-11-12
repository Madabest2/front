"use client";
import { Button } from "@/features/design-system/components/ui/button";

export function IntroCTA() {
  return (
    <section className="mx-auto mt-16 flex max-w-[1216px] flex-col gap-8 px-4 md:flex-row md:items-start">
      <div className="md:w-[615px]">
        <Button
          variant="outline"
          className="h-[59px] w-full rounded-full border-[#E2531F] bg-[#E2531F]/20 text-base font-medium text-[#0D0D0D] md:w-[415px]"
        >
          APPRENDRE À NOUS CONNAITRE
        </Button>
      </div>
      <div className="flex items-start gap-4 md:w-[575px]">
        <div className="h-[99px] w-1.5 rounded-full bg-[#E2531F]" />
        <p className="text-[20px]/[29px] text-[#0D0D0D]">
          Madabest est une Destination Management Company et agence de voyages réceptive à
          Madagascar. Nous créons des voyages sur mesure et expérientiels, en partageant notre
          passion pour la Grande Île.
        </p>
      </div>
    </section>
  );
}
