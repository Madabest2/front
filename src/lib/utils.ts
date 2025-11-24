import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Parse le texte formaté avec **texte** en HTML avec <span className="font-semibold">
 * @param text Le texte avec la syntaxe **texte** pour les parties en semibold
 * @returns Le HTML formaté
 */
export function parseFormattedText(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold">$1</span>');
}
