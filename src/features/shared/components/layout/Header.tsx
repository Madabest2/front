"use client";

import { Button } from "@/features/design-system/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/features/design-system/components/ui/dialog";
import { Input } from "@/features/design-system/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/features/design-system/components/ui/select";
import { Link, usePathname } from "@/i18n/navigation";
import { Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "./MobileMenu";

// Inline SVG flag components to replace emoji flags (better rendering & styling control)
const FlagFR = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" aria-hidden="true" className="shrink-0">
    <rect width="24" height="16" fill="#FFFFFF" />
    <rect width="8" height="16" x="0" fill="#0055A4" />
    <rect width="8" height="16" x="16" fill="#EF4135" />
  </svg>
);

const FlagEN = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" aria-hidden="true" className="shrink-0">
    <rect width="24" height="16" fill="#012169" />
    <path d="M0 0 L24 16 M24 0 L0 16" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.5" />
    <rect x="10" width="4" height="16" fill="#FFFFFF" />
    <rect y="6" width="24" height="4" fill="#FFFFFF" />
    <rect x="11" width="2" height="16" fill="#C8102E" />
    <rect y="7" width="24" height="2" fill="#C8102E" />
  </svg>
);

interface HeaderProps {
  /** Tailwind text color utility e.g. 'text-white' | 'text-black'. If omitted, auto-selects based on route */
  textColorClass?: string;
}
export function Header({ textColorClass }: HeaderProps) {
  const t = useTranslations("common");
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const lineRef = useRef<HTMLDivElement | null>(null);
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const handleLanguageChange = (newLocale: string) => {
    // Force a full page reload with the new locale to ensure all translations update
    const currentPath = pathname;
    window.location.href = `/${newLocale}${currentPath}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Position the orange indicator on the long white line under the active nav link
  useEffect(() => {
    const updateIndicator = () => {
      const line = lineRef.current;
      const active = activeLinkRef.current;
      if (!line || !active) return;
      const lineRect = line.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      setIndicatorStyle({
        left: Math.max(0, activeRect.left - lineRect.left),
        width: Math.max(0, activeRect.width),
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    window.addEventListener("scroll", updateIndicator, { passive: true });
    return () => {
      window.removeEventListener("resize", updateIndicator);
      window.removeEventListener("scroll", updateIndicator);
    };
  }, [pathname]);

  const navLinks = [
    { label: t("navigation.home"), href: "/" },
    { label: t("navigation.about"), href: "/about" },
    { label: t("navigation.activities"), href: "/activities" },
    { label: t("navigation.services"), href: "/services" },
    { label: t("navigation.terms"), href: "/terms" },
    { label: t("navigation.contact"), href: "/contact" },
  ];

  // Auto fallback: pages services, terms, contact => black text else white
  const autoColor = ["/services", "/terms", "/contact"].includes(pathname)
    ? "text-black"
    : "text-white";
  const finalTextColor = textColorClass || autoColor;
  const isDark = finalTextColor.includes("text-black");
  const lineColor = isDark ? "bg-black/90" : "bg-white/90";
  const borderColor = isDark ? "border-black" : "border-white";
  const mutedText = isDark ? "text-black/50" : "text-white/50";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/55 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8">
        {/* Desktop Header */}
        <nav className="relative hidden h-[153px] w-full items-center lg:flex">
          {/* Logo légèrement plus à droite et aligné sur la ligne */}
          <div className="absolute top-1/2 left-[3.5%] -translate-y-1/2 xl:left-[.5%]">
            <Link href="/" aria-label="Aller à l'accueil">
              <Image
                src="/logo1.png"
                alt="Madabest"
                width={550}
                height={60}
                priority
                className="h-[153px] select-none lg:w-[260px] xl:w-[341px]"
              />
            </Link>
          </div>

          {/* Ligne blanche + indicateur orange sous le lien actif */}
          <div ref={lineRef} className="absolute top-[77.12%] right-0 left-[5.6%] xl:left-[5.74%]">
            <div className={`h-0.5 w-full ${lineColor}`} />
            <div
              className="absolute top-1/2 h-1 -translate-y-1/2 bg-[#E2531F] transition-all duration-300"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
          </div>

          {/* Liens */}
          <div className="absolute top-[50.98%] right-[31%] left-[28%] -translate-y-1/2 transform xl:right-[31.3%] xl:left-[22.08%]">
            <div className="flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={isActive ? activeLinkRef : undefined}
                    className={`group relative leading-[22px] font-medium ${finalTextColor} transition-colors hover:text-[#E2531F] lg:text-sm xl:text-[16px] ${
                      isActive ? "text-[#E2531F]" : ""
                    }`}
                  >
                    {link.href === "/terms" ? (
                      <>
                        <span className="hidden xl:inline">{t("navigation.terms")}</span>
                        <span className="xl:hidden">{t("navigation.terms").split(" ")[0]}</span>
                      </>
                    ) : link.href === "/activities" ? (
                      <>
                        <span className="hidden xl:inline">{t("navigation.activities")}</span>
                        <span className="xl:hidden">
                          {t("navigation.activities").split(" ")[1] || t("navigation.activities")}
                        </span>
                      </>
                    ) : link.href === "/services" ? (
                      <>
                        <span className="hidden xl:inline">{t("navigation.services")}</span>
                        <span className="xl:hidden">
                          {t("navigation.services").split(" ")[1] || t("navigation.services")}
                        </span>
                      </>
                    ) : (
                      link.label
                    )}
                    {/* Soulignement local au survol – on laisse actif pour feedback mais c'est la grande ligne qui marque la page */}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                        isActive ? "scale-x-100" : ""
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recherche */}
          <div className="absolute top-[47.71%] left-[74%] -translate-y-1/2 xl:left-[70.3%]">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={t("search.open")}
                  className={`h-[42px] w-[42px] rounded-full border ${borderColor} bg-[rgba(31,121,188,0.15)] ${finalTextColor} backdrop-blur-[17px] hover:${isDark ? "bg-black/10" : "bg-white/10"}`}
                >
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent
                className={`max-w-xl ${isDark ? "border-black/20 bg-white/90" : "border-white/20 bg-black/80"} backdrop-blur-xl`}
              >
                <DialogHeader>
                  <DialogTitle className={finalTextColor}>{t("search.dialogTitle")}</DialogTitle>
                </DialogHeader>
                <div className="relative">
                  <Search
                    className={`absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 ${mutedText}`}
                  />
                  <Input
                    type="text"
                    placeholder={t("search.placeholder")}
                    className={`w-full rounded-lg ${isDark ? "border-black/30 bg-black/5" : "border-white/30 bg-white/10"} py-3 pr-4 pl-12 ${finalTextColor} placeholder:${mutedText} focus:${isDark ? "border-black/50" : "border-white/50"}`}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* CTA */}
          <div className="absolute top-[45.1%] left-[82%] -translate-y-1/2 xl:left-[74.58%]">
            <Button className="rounded bg-[#E2531F] py-1.5 leading-[22px] font-medium text-white hover:bg-[#d64a2e] lg:px-3 lg:text-sm xl:px-4 xl:text-[16px]">
              <>
                <span className="hidden 2xl:inline">{t("cta.startReservation.long")}</span>
                <span className="2xl:hidden">{t("cta.startReservation.short")}</span>
              </>
            </Button>
          </div>

          {/* Sélecteur de langue */}
          <div className="absolute top-[45.1%] left-[92.88%] -translate-y-1/2 lg:block">
            <Select value={locale} onValueChange={handleLanguageChange}>
              <SelectTrigger
                className={`h-[35px] items-center justify-center gap-2 rounded border-2 ${borderColor} bg-transparent px-2.5 ${finalTextColor} lg:w-20 xl:w-[100px]`}
              >
                <span className="flex items-center gap-2">
                  {locale === "fr" ? <FlagFR /> : <FlagEN />}
                  <span className="text-sm font-medium uppercase">{locale}</span>
                </span>
              </SelectTrigger>
              <SelectContent
                className={`${isDark ? "border-black/20 bg-white/95" : "border-white/20 bg-black/90"} ${finalTextColor}`}
              >
                <SelectItem value="fr">
                  <div className="flex items-center gap-2">
                    <FlagFR /> <span>FR</span>
                  </div>
                </SelectItem>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <FlagEN /> <span>EN</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </nav>

        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}
