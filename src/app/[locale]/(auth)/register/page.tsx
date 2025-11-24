import { useTranslations } from "next-intl";

/**
 * Register Page (localized path)
 */
export default function RegisterPage() {
  const t = useTranslations("auth.register");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="text-muted-foreground mt-2">{t("subtitle")}</p>
        </div>
        {/* TODO: Ajouter le formulaire d'inscription */}
      </div>
    </div>
  );
}
