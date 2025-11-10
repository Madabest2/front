"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { Input } from "@/features/design-system/components/ui/input";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import React from "react";

interface NewsletterProps {
  variant?: "default" | "footer";
  className?: string;
}

export function Newsletter({ variant = "default", className }: NewsletterProps) {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-lg p-8",
        variant === "default" ? "bg-cream-madabest" : "bg-dark-light-madabest",
        className
      )}
    >
      <div className="mx-auto max-w-2xl text-center">
        <Mail className="text-primary-madabest mx-auto mb-4 h-12 w-12" />
        <h3 className="font-heading mb-2 text-2xl font-bold">Restez informé de nos offres</h3>
        <p className="mb-6 text-sm text-gray-600">
          Inscrivez-vous à notre newsletter et recevez nos meilleures offres et actualités
        </p>

        {isSuccess ? (
          <div className="rounded-lg bg-green-100 p-4 text-green-800">
            ✓ Merci ! Vous êtes maintenant inscrit à notre newsletter.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary-madabest hover:bg-primary-dark-madabest"
            >
              {isLoading ? "Envoi..." : "S'inscrire"}
            </Button>
          </form>
        )}

        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}
