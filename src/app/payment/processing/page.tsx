"use client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentProcessingPage() {
  const router = useRouter();
  useEffect(() => {
    const t = setTimeout(() => router.replace("/payment/confirmed"), 2000);
    return () => clearTimeout(t);
  }, [router]);
  return (
    <main className="min-h-dvh w-full py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-[1440px] place-items-center rounded-md border border-white/10 bg-[#FBFBFB] p-8 text-center">
          <div className="mx-auto mb-6 max-w-3xl">
            <p className="text-xl font-medium md:text-2xl">
              Merci de patienter un moment pendant la vérification
            </p>
          </div>
          <Loader2 className="size-16 animate-spin text-[#E2531F]" />
          <p className="mt-8 text-base">Ne fermez pas cette fenêtre jusqu’à la confirmation !</p>
        </div>
      </div>
    </main>
  );
}
