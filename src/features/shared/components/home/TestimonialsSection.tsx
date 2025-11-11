"use client";

import { Avatar } from "@/features/design-system/components/ui/avatar";
import { Button } from "@/features/design-system/components/ui/button";
import { Card } from "@/features/design-system/components/ui/card";
import type { Testimonial } from "@/types/homepage";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials: Testimonial[] = [
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
    rating: 4,
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-6xl">
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <p className="font-['Kaushan_Script',cursive] text-2xl text-[#E2531F] italic">
                Ce qu&apos;ils disent
              </p>
              <h2 className="max-w-md text-4xl leading-tight font-semibold text-black lg:text-5xl">
                Ce que nos clients disent de nous
              </h2>
              <div className="h-1 w-20 bg-[#E2531F]" />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-none bg-white text-base font-medium shadow-lg hover:bg-gray-50"
              >
                Voir tous les avis
              </Button>
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
                  aria-label="Suivant"
                >
                  <ChevronRight className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? "scale-100 transform opacity-100"
                    : "scale-95 transform opacity-50"
                }`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-[#E2531F]" : "bg-[#FFC4AF]"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="group relative overflow-hidden border-none bg-[#FFE2D7] p-8 transition-shadow duration-300 hover:shadow-2xl lg:p-10">
      {/* Quote icon decoration */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 text-[#FFB499] opacity-20">
        <Quote className="h-full w-full" />
      </div>

      <div className="relative space-y-6">
        {/* Author */}
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24 border-4 border-white">
            <div className="h-full w-full rounded-full bg-gray-400" />
          </Avatar>
          <div>
            <h3 className="text-xl font-medium text-black">{testimonial.name}</h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg">{testimonial.countryFlag}</span>
              <span className="text-lg font-light text-black">{testimonial.country}</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
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

        {/* Divider */}
        <div className="border-t border-[#A6A6A6]" />

        {/* Title */}
        <h4 className="text-xl leading-relaxed font-medium text-black">
          &quot;{testimonial.title}&quot;
        </h4>

        {/* Content */}
        <p className="line-clamp-6 text-base leading-relaxed text-black">{testimonial.content}</p>
      </div>
    </Card>
  );
}
