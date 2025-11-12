"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/features/design-system/components/ui/accordion";

export function AboutAccordions() {
  return (
    <section className="mx-auto mt-16 max-w-[1300px] px-4">
      <Accordion type="single" collapsible className="grid gap-4">
        <AccordionItem value="qui" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            Qui sommes nous ?
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-[20px]/[29px]">
            Madabest, est un voyagiste et agence réceptive à Diego Suarez Madagascar spécialisé dans
            le voyage sur mesure et les circuits ludiques tels que les séjours animaliers,
            balnéaires et sportifs. Notre équipe créative, chaleureuse et passionnée est
            expérimentée, forgée en apprenant de chaque service accompli depuis quelques années.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="pourquoi" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            Pourquoi choisir MADABEST ?
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-[20px]/[29px]">
            Laissez notre équipe expérimentée et créative s’occuper de tout. Nous sommes toujours
            disponibles pour organiser vos vacances, faites-nous part de vos besoins spécifiques, de
            vos moyens et de votre temps.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="equipe" className="rounded-2xl bg-[#EFEFEF] px-6">
          <AccordionTrigger className="text-left text-3xl leading-[69px] font-medium text-[#0D0D0D]">
            Notre équipe au sein de MADABEST
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-[20px]/[29px]">
            Une équipe passionnée et attentionnée, partageant la même vision du voyage responsable
            et de l’accueil chaleureux malgache.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
