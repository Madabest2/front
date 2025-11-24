"use client";
import { Button } from "@/features/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/features/design-system/components/ui/card";
import { Input } from "@/features/design-system/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/features/design-system/components/ui/select";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PaymentCheckoutPage() {
  const t = useTranslations("payment");
  return (
    <main className="min-h-dvh w-full py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[1440px] rounded-md border border-white/10 bg-[#FBFBFB] p-4 md:p-8">
          {/* Back */}
          <div className="mb-3">
            <Link href="/payment/step-1" className="inline-flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-10 rounded-md bg-[#E8E8E8] text-[#40302A]"
              >
                <ArrowLeft className="size-4" />
                {t("back")}
              </Button>
            </Link>
          </div>

          <div className="mx-auto mb-6 max-w-xl text-center">
            <h2 className="text-xl font-semibold">{t("card.title")}</h2>
          </div>

          <div className="mx-auto grid max-w-2xl gap-6">
            <Card className="border-[#9D9D9D] bg-[#E2531F]/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-[#707070]">
                  {t("card.details")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#292727]">
                    {t("card.number")}
                  </label>
                  <Input
                    placeholder="1234 1234 1234 1234"
                    inputMode="numeric"
                    className="bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#292727]">
                      {t("card.expiration")}
                    </label>
                    <Input placeholder="MM/YY" className="bg-white" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#292727]">
                      {t("card.cvc")}
                    </label>
                    <Input placeholder="CVC" className="bg-white" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#292727]">
                    {t("card.country")}
                  </label>
                  <Select defaultValue="fr">
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">{t("form.countries.france")}</SelectItem>
                      <SelectItem value="mg">{t("form.countries.madagascar")}</SelectItem>
                      <SelectItem value="us">{t("form.countries.usa")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Link href="/payment/processing">
                  <Button className="w-full bg-[#E2531F] text-white hover:bg-[#E2531F]/90">
                    {t("payNow")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
