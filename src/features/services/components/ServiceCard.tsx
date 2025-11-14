"use client";

import { Card, CardContent, CardHeader } from "@/features/design-system";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface ServiceCardProps {
  title: string;
  location: string;
  rating?: number;
  imageSrc?: string;
  rotation?: number;
  offsetX?: number;
  offsetY?: number;
  className?: string;
  index?: number;
  cardWidth?: number; // largeur personnalisée
  cardHeight?: number; // hauteur personnalisée
  imageAspectRatio?: string; // ex: "312.46 / 208.07"
}

export function ServiceCard({
  title,
  location,
  rating = 5,
  imageSrc,
  rotation = 0,
  className,
  index = 0,
  cardWidth,
  cardHeight,
  imageAspectRatio,
}: ServiceCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = -(e.clientY - rect.top - rect.height / 2) / 25;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    let animationFrame: number;
    const duration = 400;
    const start = performance.now();
    const initial = { ...tilt };

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const easing = 1 - Math.pow(1 - progress, 3);
      setTilt({
        x: initial.x * (1 - easing),
        y: initial.y * (1 - easing),
      });
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotation - 10 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
      className={cn("transition-transform duration-500 ease-out", className)}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        className="cursor-pointer transition-transform duration-150 ease-out hover:scale-[1.03]"
      >
        <Card
          className="relative mt-0 overflow-hidden rounded-[15px] border-none bg-white shadow-[0_6px_15px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
          style={{
            width: cardWidth ? `${cardWidth}px` : undefined,
            height: cardHeight ? `${cardHeight}px` : "",
            maxWidth: cardWidth ? `${cardWidth}px` : "760px",
          }}
        >
          <CardHeader className="relative rounded-[20px] border-10 border-white p-0">
            <div
              className="relative w-full overflow-hidden rounded-[20px] object-center"
              style={{
                aspectRatio: imageAspectRatio || "310 / 300",
              }}
            >
              {imageSrc ? (
                <Image src={imageSrc} alt={title} fill className="object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#D9D9D9]">
                  <span className="text-black/60">Image</span>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-2 px-5">
            <h3 className="min-h-[46px] text-[16px] leading-[23px] font-medium text-black">
              {title}
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[15px] text-[#797676]">
                <MapPin className="h-5 w-5 text-[#797676]" />
                <span>{location}</span>
              </div>

              {rating && (
                <div className="flex items-center gap-1">
                  <span className="text-[15px] font-medium text-black">{rating.toFixed(1)}</span>
                  <Star className="h-5 w-5 fill-[#FFB92C] text-[#FFB92C]" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

export function ServiceCardsLayout({ cards }: { cards: ServiceCardProps[] }) {
  return (
    <div className="relative flex flex-col items-center gap-16 px-4 md:flex-row md:justify-center md:gap-20 lg:gap-28">
      {cards.map((c, i) => (
        <div
          key={i}
          className="relative"
          style={{
            transform: `translateX(${c.offsetX}px) translateY(${c.offsetY}px) rotate(${c.rotation}deg)`,
          }}
        >
          <ServiceCard {...c} index={i} />
        </div>
      ))}
    </div>
  );
}
