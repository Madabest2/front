/**
 * Routes Configuration
 * Gestion centralisée des routes de l'application
 */

export const ROUTES = {
  // Public routes
  HOME: "/",

  // Auth routes
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },

  // Dashboard routes
  DASHBOARD: {
    ROOT: "/dashboard",
    USERS: "/dashboard/users",
    SETTINGS: "/dashboard/settings",
  },
} as const;

export type RouteKeys = keyof typeof ROUTES;
