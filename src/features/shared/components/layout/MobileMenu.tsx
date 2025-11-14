"use client";

import { Button } from "@/features/design-system/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/features/design-system/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  return (
    <nav className="relative flex h-20 w-full items-center justify-between lg:hidden">
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          aria-label="Recherche"
          className="h-10 w-10 rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
        >
          <Search className="h-5 w-5" />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" aria-label="Ouvrir le menu" className="text-white">
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black/95 p-0 text-white"
            aria-labelledby="mobile-menu-title"
          >
            <VisuallyHidden>
              <SheetTitle id="mobile-menu-title" className="sr-only">
                {" "}
                Menu principal
              </SheetTitle>
            </VisuallyHidden>
            <div className="flex flex-col gap-1 p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-4 py-3 text-base font-medium tracking-wide text-white/90 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/10 py-4" />
              <div className="px-4 pb-6">
                <Button className="w-full rounded-full bg-[#E2531F] py-3 text-base font-semibold text-white hover:bg-[#d64a2e]">
                  Réserver maintenant
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
