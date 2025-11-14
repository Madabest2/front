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
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

function Stepper() {
  return (
    <div className="mx-auto mt-2 mb-6 max-w-5xl">
      <div className="relative">
        <div className="absolute top-4 right-0 left-0 h-px bg-[#CCCCCC]" />
        <div className="relative z-10 grid grid-cols-3">
          {["Informations", "Paiement", "Confirmation"].map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className={`flex size-8 items-center justify-center rounded-full border ${
                  i === 0 ? "border-[#E2531F] bg-[#FEF7EA]" : "border-transparent bg-[#E9E9E9]"
                }`}
              >
                {i === 0 ? (
                  <div className="size-2 rounded-full bg-[#E2531F]" />
                ) : (
                  <Check className="size-4 text-neutral-600" />
                )}
              </div>
              <span className="text-sm text-[#0D0D0D]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PaymentStepOnePage() {
  return (
    <main className="min-h-dvh w-full py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[1440px] rounded-md border border-white/10 bg-[#FBFBFB] p-4 md:p-8">
          {/* Back */}
          <div className="mb-3">
            <Link href="/payment" className="inline-flex items-center gap-2">
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

          <Stepper />

          <div className="grid gap-6 md:grid-cols-[440px_1fr]">
            {/* Left summary */}
            <div className="space-y-6">
              <Card className="border-[#9D9D9D]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-[#707070]">
                    Informations sur la réservation
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-[#707070]">Lieu</div>
                    <div className="font-semibold">03 baies - Ankoriky</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#707070]">Date</div>
                    <div className="font-semibold">22/10/25</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#707070]">Nombre de personnes</div>
                    <div className="font-semibold">02</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#707070]">Durée</div>
                    <div className="font-semibold">4 heures</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#9D9D9D]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-[#707070]">
                    Résumé du paiement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#707070]">
                        Prix unitaire (par personne)
                      </div>
                      <div className="text-xs">x 02 personnes</div>
                    </div>
                    <div className="font-semibold">300.00 €</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#707070]">
                        Location voiture (par jour)
                      </div>
                      <div className="text-xs">x 03 voitures</div>
                    </div>
                    <div className="font-semibold">120.00 €</div>
                  </div>
                  <div className="h-px bg-[#9D9D9D]/30" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#707070]">Montant payé</div>
                    </div>
                    <div className="font-semibold">00.00 €</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#707070]">Montant dû</div>
                    </div>
                    <div className="font-semibold text-[#E2531F]">420.00 €</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right form */}
            <div className="space-y-6">
              <Card className="border-[#9D9D9D] bg-[#E2531F]/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-[#707070]">
                    Contact & Informations
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#292727]">Nom</label>
                    <Input defaultValue="Joh" className="bg-white" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#292727]">
                      Prénom
                    </label>
                    <Input placeholder="Saisissez votre prénom" className="bg-white" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#292727]">Email</label>
                    <Input defaultValue="johndoe@gmail.com" className="bg-white" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-[#292727]">
                      Contact
                    </label>
                    <Input defaultValue="+33 6 12 34 56 78" className="bg-white" />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-[#292727]">
                        Pays de résidence
                      </label>
                      <Select defaultValue="fr">
                        <SelectTrigger className="w-full bg-white">
                          <SelectValue placeholder="France" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="mg">Madagascar</SelectItem>
                          <SelectItem value="us">États‑Unis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-[#292727]">
                        Ville
                      </label>
                      <Input placeholder="ex : 75009 Paris" className="bg-white" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="mb-1 block text-sm font-semibold text-[#292727]">
                        Adresse
                      </label>
                      <Input
                        placeholder="ex : 12 Rue Lafayette, 75009 Paris"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div className="col-span-2 mt-2 flex items-start gap-3">
                    <input id="terms" type="checkbox" className="mt-1 size-4 rounded border" />
                    <label htmlFor="terms" className="text-sm">
                      J&apos;ai lu et j&apos;accepte les{" "}
                      <Link href="/terms" className="text-[#E2531F] underline">
                        termes et conditions
                      </Link>
                    </label>
                  </div>
                  <div className="col-span-2 mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link href="/" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full bg-white text-[#40302A]">
                        Annuler la réservation
                      </Button>
                    </Link>
                    <Link href="/payment/checkout" className="w-full sm:w-auto">
                      <Button className="w-full bg-[#E2531F] text-white hover:bg-[#E2531F]/90">
                        Poursuivre
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
