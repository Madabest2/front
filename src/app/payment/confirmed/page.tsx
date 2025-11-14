import { Button } from "@/features/design-system/components/ui/button";
import { Card, CardContent } from "@/features/design-system/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PaymentConfirmedPage() {
  return (
    <main className="min-h-dvh w-full py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[1440px] rounded-md border border-white/10 bg-[#FBFBFB] p-8 text-center">
          <div className="mx-auto mb-6 grid place-items-center gap-4">
            <CheckCircle2 className="size-16 text-green-600" />
            <h1 className="text-2xl font-medium md:text-4xl">
              Votre réservation a bien été effectuée !
            </h1>
          </div>
          <div className="mx-auto max-w-2xl">
            <Card className="border-green-500 bg-[#EBFDF5]">
              <CardContent className="py-6 text-left text-sm md:text-base">
                <p>
                  Consultez votre boîte e-mail pour retrouver le récapitulatif complet de votre
                  réservation.
                </p>
                <p className="mt-2 italic">
                  (Si vous ne le voyez pas, vérifiez vos spams ou courriers indésirables)
                </p>
              </CardContent>
            </Card>
            <div className="mt-6 flex justify-center">
              <Link href="/">
                <Button>Retour à l’accueil</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
