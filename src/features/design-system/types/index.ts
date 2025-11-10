/**
 * Design System Types
 */

export type Theme = "light" | "dark" | "system";

export interface ThemeConfig {
  theme: Theme;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}
