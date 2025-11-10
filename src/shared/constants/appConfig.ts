/**
 * Application Configuration
 * Configuration centralisée de l'application
 */

export const appConfig = {
  name: "Madabest",
  version: "0.1.0",
  description: "Application Madabest avec Next.js 15",

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 30000,
  },

  // Features flags
  features: {
    enableAuth: true,
    enableUsers: true,
    enableDarkMode: true,
  },

  // Pagination
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
  },
} as const;

export type AppConfig = typeof appConfig;
