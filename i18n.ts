export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

// Namespaces can be expanded later; keeping a flat structure initially.
export const namespaces = ["common"] as const;
export type Namespace = (typeof namespaces)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Default export required by next-intl
export default {
  locales,
  defaultLocale,
};
