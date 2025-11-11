"use client";

import { Button } from "@/features/design-system/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        isScrolled ? "bg-black/60 backdrop-blur-lg" : "bg-transparent"
      } border-b border-white/10`}
    >
      <div className="container lg:px-8">
        {/* Navigation principale */}
        <nav className="flex h-20 w-full items-center justify-between lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 transform transition-transform duration-200 hover:scale-105"
          >
            <Image src="/logoorange.png" alt="Madabest" width={341} height={153} />
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-base font-medium text-white transition-colors duration-200 hover:text-[#E2531F]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#E2531F] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions Desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Recherche (Dialog) */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  aria-label="Rechercher"
                  className="border-white/20 bg-transparent text-white/90 hover:bg-white/10"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl border-white/20 bg-black/70 backdrop-blur-lg">
                <DialogHeader>
                  <DialogTitle className="text-white">Rechercher une destination</DialogTitle>
                </DialogHeader>
                <div className="relative">
                  <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-white/60" />
                  <Input
                    type="text"
                    placeholder="Rechercher une destination..."
                    className="w-full rounded-lg border-white/20 bg-white/10 py-3 pr-4 pl-12 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Sélecteur de langue (Select) */}
            <Select value={lang} onValueChange={setLang}>
              <SelectTrigger className="border-white/40 text-white">
                <SelectValue placeholder="Langue" />
              </SelectTrigger>
              <SelectContent className="border-white/20 bg-black/90 text-white">
                <SelectItem value="fr">🇫🇷 FR - Français</SelectItem>
                <SelectItem value="en">🇬🇧 EN - English</SelectItem>
              </SelectContent>
            </Select>

            {/* CTA Button */}
            <Button
              size="lg"
              className="rounded bg-[#E2531F] px-6 text-base font-medium text-white shadow-lg shadow-orange-500/30 hover:bg-[#d64a2e]"
            >
              Commencer votre réservation
            </Button>
          </div>

          {/* Menu Mobile (Dialog) */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Menu"
                className="text-white lg:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent
              className="inset-0 top-0 left-0 h-dvh w-full translate-x-0 translate-y-0 rounded-none border-0 bg-black/90 p-6 text-white sm:max-w-none"
              showCloseButton={false}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="shrink-0">
                  <Image src="/logoorange.png" alt="Madabest" width={112} height={32} />
                </Link>
                <DialogClose asChild>
                  <Button size="icon" variant="ghost" aria-label="Fermer">
                    <X className="h-6 w-6" />
                  </Button>
                </DialogClose>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 text-base font-medium text-white transition-colors hover:text-[#E2531F]"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-white/20 pt-4">
                  <Button
                    size="lg"
                    className="w-full bg-[#E2531F] font-medium text-white hover:bg-[#d64a2e]"
                  >
                    Commencer votre réservation
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
        {/* The old inline search bar and mobile dropdown are replaced by shadcn Dialogs above */}
      </div>

      {/* Ligne de séparation animée */}
      <div className="h-0.5 bg-linear-to-r from-transparent via-[#E2531F] to-transparent" />
    </header>
  );
}
