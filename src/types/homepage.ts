/**
 * Types pour la page d'accueil Madabest
 */

export interface Destination {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export interface Tour {
  id: string;
  destination: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  location: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  rating: number;
  title: string;
  content: string;
  avatar: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: "official" | "airline" | "institutional";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
