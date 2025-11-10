/**
 * Application Configuration
 * Configuration centralisée de l'application MADABEST
 */

export const appConfig = {
  name: "Madabest",
  version: "0.1.0",
  description: "Votre Destination Management Company à Madagascar",
  tagline: "Je veux visiter.",
  slogan: "Découvrez Madagascar différemment",

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 30000,
  },

  // Mapbox Configuration
  mapbox: {
    token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "",
    defaultCenter: {
      lng: 49.2919, // Diego Suarez longitude
      lat: -12.2787, // Diego Suarez latitude
    },
    defaultZoom: 14,
  },

  // Supabase Configuration
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },

  // Contact Information
  contact: {
    address: "43 Rue de la marne – Diego Suarez",
    phone: "+261 32 01 234 56",
    email: "contact@madabest.com",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/madabest",
    instagram: "https://instagram.com/madabest",
    linkedin: "https://linkedin.com/company/madabest",
    youtube: "https://youtube.com/madabest",
  },

  // Features flags
  features: {
    enableAuth: true,
    enableUsers: true,
    enableDarkMode: true,
    enableNewsletter: true,
    enableTestimonials: true,
  },

  // Pagination
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
  },
} as const;

export type AppConfig = typeof appConfig;
