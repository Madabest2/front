"use client";

import { Button } from "@/features/design-system/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, ROUTES } from "@/shared/config/routes";
import { appConfig } from "@/shared/constants/appConfig";
import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center space-x-2">
            <img src="/images/logo-madabest.svg" alt={appConfig.name} className="h-12 w-auto" />
            <span className="font-heading text-primary-madabest text-2xl font-bold">
              {appConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {NAV_LINKS.MAIN.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-madabest hover:text-primary-madabest text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Link href={ROUTES.AUTH.LOGIN}>
              <Button variant="ghost" size="sm">
                <User className="mr-2 h-4 w-4" />
                Connexion
              </Button>
            </Link>
            <Link href={ROUTES.AUTH.REGISTER}>
              <Button size="sm" className="bg-primary-madabest hover:bg-primary-dark-madabest">
                S&apos;inscrire
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className="text-dark-madabest h-6 w-6" />
            ) : (
              <Menu className="text-dark-madabest h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-200 py-4 lg:hidden">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.MAIN.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark-madabest hover:text-primary-madabest text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 border-t border-gray-200 pt-4">
                <Link href={ROUTES.AUTH.LOGIN} onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Connexion
                  </Button>
                </Link>
                <Link href={ROUTES.AUTH.REGISTER} onClick={() => setIsOpen(false)}>
                  <Button
                    size="sm"
                    className="bg-primary-madabest hover:bg-primary-dark-madabest w-full"
                  >
                    S&apos;inscrire
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
