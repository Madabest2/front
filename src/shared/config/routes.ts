/**
 * Routes Configuration
 * Gestion centralisée des routes de l'application MADABEST
 */

export const ROUTES = {
  // Frontoffice routes
  HOME: "/",
  ABOUT: "/a-propos",
  SERVICES: "/nos-services",
  CONDITIONS: "/conditions-modalites",
  CONTACT: "/contact",

  // Tours routes
  TOURS: {
    LIST: "/tours",
    DETAIL: (slug: string) => `/tours/${slug}`,
    SEARCH: "/tours/recherche",
  },

  // Auth routes
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/mot-de-passe-oublie",
    RESET_PASSWORD: "/reinitialiser-mot-de-passe",
  },

  // Dashboard routes (Client Space)
  DASHBOARD: {
    ROOT: "/dashboard",
    BOOKINGS: "/dashboard/reservations",
    PROFILE: "/dashboard/profil",
    FAVORITES: "/dashboard/favoris",
    USERS: "/dashboard/users",
    SETTINGS: "/dashboard/settings",
  },

  // Admin routes
  ADMIN: {
    ROOT: "/admin",
    TOURS: "/admin/tours",
    BOOKINGS: "/admin/reservations",
    USERS: "/admin/utilisateurs",
    SETTINGS: "/admin/parametres",
  },
} as const;

/**
 * Navigation Links for Header/Footer
 */
export const NAV_LINKS = {
  MAIN: [
    { label: "Accueil", href: ROUTES.HOME },
    { label: "À propos", href: ROUTES.ABOUT },
    { label: "Nos services", href: ROUTES.SERVICES },
    { label: "Conditions & modalités", href: ROUTES.CONDITIONS },
    { label: "Contact", href: ROUTES.CONTACT },
  ],
  FOOTER: {
    COMPANY: [
      { label: "À propos", href: ROUTES.ABOUT },
      { label: "Nos services", href: ROUTES.SERVICES },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    LEGAL: [
      { label: "Conditions générales", href: ROUTES.CONDITIONS },
      { label: "Politique de confidentialité", href: `${ROUTES.CONDITIONS}#privacy` },
      { label: "Mentions légales", href: `${ROUTES.CONDITIONS}#legal` },
    ],
    HELP: [
      { label: "FAQ", href: "/faq" },
      { label: "Guide du voyageur", href: "/guide" },
      { label: "Nous contacter", href: ROUTES.CONTACT },
    ],
  },
} as const;

export type RouteKeys = keyof typeof ROUTES;
