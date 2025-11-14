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
  SelectValue,
} from "@/features/design-system/components/ui/select";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState("fr");
  const pathname = usePathname();
  const lineRef = useRef<HTMLDivElement | null>(null);
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

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
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Nos activités", href: "/activities" },
    { label: "Nos services", href: "/services" },
    { label: "Conditions & modalités", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ];

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
          <div className="absolute top-1/2 left-[4.5%] -translate-y-1/2">
            <Link href="/" aria-label="Aller à l'accueil">
              <Image
                src="/logo1.png"
                alt="Madabest"
                width={550}
                height={60}
                priority
                className="h-[153px] w-[341px] select-none"
              />
            </Link>
          </div>

          {/* Ligne blanche + indicateur orange sous le lien actif */}
          <div ref={lineRef} className="absolute top-[77.12%] right-0 left-[5.74%]">
            <div className="h-0.5 w-full bg-white/90" />
            <div
              className="absolute top-1/2 h-1 -translate-y-1/2 bg-[#E2531F] transition-all duration-300"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
          </div>

          {/* Liens */}
          <div className="absolute top-[50.98%] right-[31.3%] left-[22.08%] -translate-y-1/2 transform">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={isActive ? activeLinkRef : undefined}
                    className={`group relative text-[16px] leading-[23px] font-medium text-white transition-colors hover:text-[#E2531F] ${
                      isActive ? "text-[#E2531F]" : ""
                    }`}
                  >
                    {link.label}
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
          <div className="absolute top-[47.71%] left-[70.3%] -translate-y-1/2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label="Rechercher"
                  className="h-[42px] w-[42px] rounded-full border border-white bg-[rgba(31,121,188,0.15)] text-white backdrop-blur-[17px] hover:bg-white/10"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xl border-white/20 bg-black/80 backdrop-blur-xl">
                <DialogHeader>
                  <DialogTitle className="text-white">Rechercher une destination</DialogTitle>
                </DialogHeader>
                <div className="relative">
                  <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-white/50" />
                  <Input
                    type="text"
                    placeholder="Ex: Nosy-Be, Antsiranana..."
                    className="w-full rounded-lg border-white/30 bg-white/10 py-3 pr-4 pl-12 text-white placeholder:text-white/50 focus:border-white/50"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* CTA */}
          <div className="absolute top-[45.1%] left-[74.58%] -translate-y-1/2">
            <Button className="rounded bg-[#E2531F] px-[15px] py-1.5 text-[16px] leading-[23px] font-medium text-white hover:bg-[#d64a2e]">
              Commencer votre réservation
            </Button>
          </div>

          {/* Sélecteur de langue */}
          <div className="absolute top-[45.1%] left-[92.88%] -translate-y-1/2">
            <Select value={lang} onValueChange={setLang}>
              <SelectTrigger className="h-[35px] w-[72.63px] items-center justify-center gap-2 rounded border-2 border-white bg-transparent px-[13px] text-white">
                <span className="text-[21px]">{lang === "fr" ? "🇫🇷" : "🇬🇧"}</span>
                <SelectValue placeholder="FR" />
              </SelectTrigger>
              <SelectContent className="border-white/20 bg-black/90 text-white">
                <SelectItem value="fr">🇫🇷 FR - Français</SelectItem>
                <SelectItem value="en">🇬🇧 EN - English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </nav>

        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}
