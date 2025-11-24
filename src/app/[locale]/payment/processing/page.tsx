"use client";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentProcessingPage() {
  const t = useTranslations("payment.processing");
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => router.replace("/payment/confirmed"), 2000);
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <main className="min-h-dvh w-full py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-[1440px] place-items-center rounded-md border border-white/10 bg-[#FBFBFB] p-8 text-center">
          <div className="mx-auto mb-6 max-w-3xl">
            <p className="text-xl font-medium md:text-2xl">{t("wait")}</p>
          </div>
          <Loader2 className="size-16 animate-spin text-[#E2531F]" />
          <p className="mt-8 text-base">{t("doNotClose")}</p>
        </div>
      </div>
    </main>
  );
}
