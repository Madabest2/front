import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SocialLink {
  name: string;
  href: string;
  iconPath: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com/madabest",
    iconPath: "/icons/facebook.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/madabest",
    iconPath: "/icons/instagram.png",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/madabest",
    iconPath: "/icons/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/261320123456",
    iconPath: "/icons/whatsapp.svg",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/madabest",
    iconPath: "/icons/x.svg",
  },
];

interface SocialLinksProps {
  variant?: "default" | "footer";
  className?: string;
}

export function SocialLinks({ variant = "default", className }: SocialLinksProps) {
  return (
    <div
      className={cn("flex items-center gap-4", variant === "footer" && "justify-center", className)}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full p-2 transition-colors",
            variant === "default"
              ? "text-primary-madabest hover:bg-primary-madabest bg-white hover:text-white"
              : "bg-primary-madabest hover:bg-primary-dark-madabest text-white"
          )}
          aria-label={link.name}
        >
          <Image src={link.iconPath} alt={link.name} width={20} height={20} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Téléphone",
    value: "+261 32 01 234 56",
    href: "tel:+261320123456",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "contact@madabest.com",
    href: "mailto:contact@madabest.com",
  },
];

export function ContactLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {contactInfo.map((info) => (
        <a
          key={info.label}
          href={info.href}
          className="hover:text-primary-madabest flex items-center gap-3 text-sm transition-colors"
        >
          <span className="text-primary-madabest">{info.icon}</span>
          <span>{info.value}</span>
        </a>
      ))}
    </div>
  );
}
