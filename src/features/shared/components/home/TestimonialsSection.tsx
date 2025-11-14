"use client";

import { Avatar, AvatarFallback } from "@/features/design-system/components/ui/avatar";
import { Button } from "@/features/design-system/components/ui/button";
import { Card } from "@/features/design-system/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: "1",
    name: "Sophie Margaret",
    country: "France",
    countryFlag: "🇫🇷",
    rating: 5,
    title: "Un voyage inoubliable grâce à Madabest !",
    content:
      "Moi et mon mari avons découvert Madagascar d'une façon unique. L'équipe de Madabest a su créer un circuit sur mesure parfaitement adapté à nos envies : entre excursions nature, moments culturels et plages paradisiaques, tout était parfaitement organisé. Les guides étaient passionnés, toujours disponibles, et nous ont fait sentir comme des amis plus que comme de simples voyageurs. Un grand merci à toute l'équipe pour leur professionnalisme et leur chaleur humaine. Nous repartons avec des souvenirs extraordinaires et l'envie de revenir !",
    avatar: "/images/avatars/sophie.jpg",
  },
  {
    id: "2",
    name: "Jean Luc",
    country: "Espagne",
    countryFlag: "🇪🇸",
    rating: 5,
    title: "Une expérience authentique et parfaitement organisée",
    content:
      "J'ai choisi Madabest pour mon voyage à Madagascar, et ce fut une expérience incroyable. L'équipe a tout pris en main : du choix des hôtels aux excursions, en passant par la location de voiture, chaque détail était soigneusement préparé. J'ai particulièrement apprécié la gentillesse des guides et leur connaissance du pays, qui m'ont permis de découvrir des endroits hors des sentiers battus. Je recommande vivement Madabest à tous ceux qui souhaitent explorer Madagascar autrement, avec un service professionnel et chaleureux.",
    avatar: "/images/avatars/jean.jpg",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#FFF6E4] py-20 lg:py-32">
      <div className="mx-auto max-w-[1552px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <p className="font-kaushan text-[24px] leading-[35px] text-[#E2531F]">
              Ce qu’ils disent
            </p>
            <div className="h-[3px] w-[77px] bg-[#E2531F]" />
            <h2 className="max-w-[520px] text-[48px] leading-[69px] font-medium text-black">
              Ce que nos clients disent de nous
            </h2>
          </div>
          {/* Controls */}
          <div className="flex items-center gap-4 pt-2">
            <Button className="flex h-[38px] items-center rounded-[4px] bg-white px-[15px] text-[16px] leading-[23px] font-medium text-black shadow-[0px_5px_9px_rgba(0,0,0,0.25)] hover:bg-gray-50">
              Voir tous les avis
            </Button>
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white shadow-[-3px_4px_4px_rgba(0,0,0,0.25)] transition hover:scale-110"
                aria-label="Précédent"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white shadow-[-3px_4px_4px_rgba(0,0,0,0.25)] transition hover:scale-110"
                aria-label="Suivant"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} active={i === activeIndex} />
          ))}
        </div>

        {/* Dots */}
        <div className="mt-14 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`size-3 rounded-full transition-all ${i === activeIndex ? "bg-[#E2531F]" : "bg-[#FFC4AF]"}`}
              aria-label={`Aller au témoignage ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  active,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  active: boolean;
}) {
  return (
    <Card
      className={`relative flex min-h-[520px] w-full flex-col overflow-hidden rounded-[15px] border-none bg-[#FFE2D7] p-8 lg:p-10 ${
        active ? "shadow-2xl" : "shadow-none hover:shadow-xl"
      } transition-shadow duration-300`}
    >
      {/* Decorative Quote */}
      <div className="pointer-events-none absolute top-10 right-8 h-[145px] w-[145px] text-[#FFB499]">
        <Quote className="h-full w-full" />
      </div>
      {/* Author */}
      <div className="flex items-center gap-6">
        <Avatar className="h-[92px] w-[92px] rounded-full border-4 border-white shadow-md">
          <AvatarFallback className="bg-[#F5F5F5] text-lg font-medium text-black">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-[20px]/[29px] font-medium text-black">{testimonial.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[24px]" aria-hidden>
              {testimonial.countryFlag}
            </span>
            <span className="text-[20px]/[29px] font-light text-black">{testimonial.country}</span>
          </div>
        </div>
      </div>
      {/* Title */}
      <h4 className="mt-10 text-[20px]/[29px] font-medium text-black">“{testimonial.title}”</h4>
      <div className="mt-4 h-px w-full border-t border-[#A6A6A6]" />
      {/* Content */}
      <p className="mt-6 text-[16px]/[23px] text-black">{testimonial.content}</p>
      {/* Stars */}
      <div className="mt-auto pt-10">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-6 w-6 ${
                i < testimonial.rating
                  ? "fill-[#FFB92C] text-[#FFB92C]"
                  : "fill-gray-300 text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
