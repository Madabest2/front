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
      <div className="container mx-auto px-4 sm:px-6 lg:px-[70px]">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            {/* Subtitle */}
            <p className="text-[24px] leading-[35px] font-(--font-kaushan-script) text-[#E2531F]">
              Ce qu&apos;ils disent
            </p>
            <div className="h-[3px] w-[77px] bg-[#E2531F]" />
            {/* Main Title */}
            <h2 className="max-w-[422px] text-[48px] leading-[69px] font-medium text-black">
              Ce que nos clients disent de nous
            </h2>
            {/* Orange line indicator */}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="h-[38px] rounded border-none bg-white px-[15px] text-[16px] leading-[23px] font-medium text-black shadow-[0px_5px_9px_rgba(0,0,0,0.25)] hover:bg-gray-50"
            >
              Voir tous les avis
            </Button>
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white shadow-[-3px_4px_4px_rgba(0,0,0,0.25)] transition-transform hover:scale-110"
                aria-label="Précédent"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white shadow-[-3px_4px_4px_rgba(0,0,0,0.25)] transition-transform hover:scale-110"
                aria-label="Suivant"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel - 2 columns */}
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Pagination Indicators */}
        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all ${
                index === activeIndex ? "w-3 bg-[#E2531F]" : "w-3 bg-[#FFC4AF]"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <Card className="relative h-[486px] w-full overflow-hidden rounded-[15px] border-none bg-[#FFE2D7] p-8 transition-shadow duration-300 hover:shadow-2xl lg:p-10">
      {/* Large Quote Icon - Position: top-right */}
      <div className="absolute -top-8 -right-8 h-[145px] w-[145px] text-[#FFB499] opacity-100">
        <Quote className="h-full w-full" />
      </div>

      <div className="relative space-y-6">
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <Avatar className="h-[92px] w-[92px] rounded-full border-4 border-white">
            <AvatarFallback className="bg-gray-400" />
          </Avatar>
          <div>
            <h3 className="text-[20px] leading-[29px] font-medium text-black">
              {testimonial.name}
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[24px]">{testimonial.countryFlag}</span>
              <span className="text-[20px] leading-[29px] font-light text-black">
                {testimonial.country}
              </span>
            </div>
          </div>
        </div>

        {/* Title Quote */}
        <h4 className="text-[20px] leading-[29px] font-medium text-black">
          &quot;{testimonial.title}&quot;
        </h4>

        {/* Divider */}
        <div className="h-px border-t border-[#A6A6A6]" />

        {/* Content */}
        <p className="items-baseline text-[16px] leading-[23px] font-normal text-black">
          {testimonial.content}
        </p>

        {/* Rating Stars */}
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
      </div>
    </Card>
  );
}
