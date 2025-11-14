"use client";
import { Button } from "@/features/design-system/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGOS = [
  "Stripe.png",
  "Visa.png",
  "Klarna.png",
  "Amex.png",
  "PayPal.png",
  "Discover.png",
  "GooglePay.png",
  "ApplePay.png",
  "WeChat.png",
  "Bitpay.png",
  "Yandex.png",
  "ShopPay.png",
  "AmazonPay.png",
  "Bitcoin.png",
  "Etherium.png",
  "Lightcoin.png",
  "Skrill.png",
  "Qiwi.png",
  "Mastercard.png",
].filter(Boolean);

function InfiniteCarouselHorizontal() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="relative w-full overflow-hidden p-2">
      <div
        className="flex items-center gap-6 overflow-hidden will-change-transform"
        style={{ animation: "pay-scroll-x 28s linear infinite" }}
      >
        {items.map((file, idx) => (
          <div
            key={`${file}-${idx}`}
            className="flex h-24 w-[140px] shrink-0 items-center justify-center"
            aria-hidden={idx >= LOGOS.length}
          >
            <Image
              src={`/payment/${file}`}
              alt={file.replace(/\.png$/i, "")}
              width={96}
              height={48}
              className="pointer-events-none h-30 w-30 object-contain select-none"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes pay-scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function VerticalColumn({ direction, delay }: { direction: "up" | "down"; delay?: string }) {
  const items = [...LOGOS, ...LOGOS];
  const anim = direction === "up" ? "pay-scroll-y-up" : "pay-scroll-y-down";
  return (
    <div className="relative h-[380px] w-full overflow-hidden p-2 md:h-[500px]">
      <div
        className="flex flex-col items-stretch gap-6 will-change-transform"
        style={{ animation: `${anim} 28s linear infinite`, animationDelay: delay || "0s" }}
      >
        {items.map((file, idx) => (
          <div
            key={`${file}-${idx}`}
            className="flex h-24 w-full shrink-0 items-center justify-center rounded-xl"
            aria-hidden={idx >= LOGOS.length}
          >
            <Image
              src={`/payment/${file}`}
              alt={file.replace(/\.png$/i, "")}
              width={120}
              height={48}
              className="pointer-events-none h-50 w-50 object-contain select-none"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes pay-scroll-y-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes pay-scroll-y-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function TwinVerticalCarousels() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <VerticalColumn direction="up" />
      <VerticalColumn direction="down" delay="-14s" />
    </div>
  );
}

export default function PaymentMethodsPage() {
  return (
    <main className="min-h-dvh w-full py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[1440px] rounded-md border border-white/10 bg-[#FFF6E4] p-6 md:p-10">
          {/* Back */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-10 rounded-md bg-white text-[#40302A]"
              >
                <ArrowLeft className="size-4" />
                Retour
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
            {/* Left content */}
            <div className="space-y-6 pl-1">
              <p className="max-w-xl text-lg leading-7 text-[#0D0D0D]/90 md:text-2xl md:leading-9">
                Effectuez votre paiement en toute simplicité avec le moyen de paiement de votre
                choix
              </p>
              <h1 className="text-4xl leading-tight font-medium text-[#0D0D0D] md:text-7xl md:leading-[1.02]">
                Méthode de
                <br />
                paiement
              </h1>
              <div>
                <Link href="/payment/step-1">
                  <Button className="bg-[#E2531F] text-white hover:bg-[#e2531f]/90">
                    Commencer votre réservation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: twin vertical columns on desktop, horizontal on mobile */}
            <div className="space-y-4">
              {/* Mobile (horizontal) */}
              <div className="space-y-4 md:hidden">
                <InfiniteCarouselHorizontal />
                <InfiniteCarouselHorizontal />
              </div>
              {/* Desktop (vertical) */}
              <div className="hidden md:block">
                <TwinVerticalCarousels />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
