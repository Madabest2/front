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
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PaymentCheckoutPage() {
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
                Retour
              </Button>
            </Link>
          </div>

          <div className="mx-auto mb-6 max-w-xl text-center">
            <h2 className="text-xl font-semibold">Paiement par carte</h2>
          </div>

          <div className="mx-auto grid max-w-2xl gap-6">
            <Card className="border-[#9D9D9D] bg-[#E2531F]/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-[#707070]">
                  Détails de la carte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#292727]">
                    Numéro de carte
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
                      Expiration
                    </label>
                    <Input placeholder="MM/YY" className="bg-white" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#292727]">CVC</label>
                    <Input placeholder="CVC" className="bg-white" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-[#292727]">Pays</label>
                  <Select defaultValue="fr">
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="mg">Madagascar</SelectItem>
                      <SelectItem value="us">États‑Unis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Link href="/payment/processing">
                  <Button className="w-full bg-[#E2531F] text-white hover:bg-[#E2531F]/90">
                    Payer maintenant
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
