import { SocialLinks } from "@/features/design-system/components/custom/SocialLinks";
import { NAV_LINKS } from "@/shared/config/routes";
import { appConfig } from "@/shared/constants/appConfig";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-madabest text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold">{appConfig.name}</h3>
            <p className="text-sm text-gray-300">{appConfig.description}</p>
            <SocialLinks variant="footer" />
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold">Entreprise</h4>
            <ul className="space-y-2">
              {NAV_LINKS.FOOTER.COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-madabest text-sm text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold">Informations légales</h4>
            <ul className="space-y-2">
              {NAV_LINKS.FOOTER.LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-madabest text-sm text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${appConfig.contact.email}`}
                className="hover:text-primary-madabest flex items-center gap-2 text-sm text-gray-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {appConfig.contact.email}
              </a>
              <a
                href={`tel:${appConfig.contact.phone}`}
                className="hover:text-primary-madabest flex items-center gap-2 text-sm text-gray-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {appConfig.contact.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>{appConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-400">
              © {currentYear} {appConfig.name}. Tous droits réservés.
            </p>
            <p className="text-center text-sm text-gray-400">Conçu avec ❤️ à Madagascar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
