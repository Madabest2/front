"use client";

import { useEffect, useState } from "react";

/**
 * Hook pour détecter l'élément actif dans une liste de sections
 * Utile pour les menus de navigation qui suivent le scroll
 *
 * @param sectionIds - Array des IDs des sections à surveiller
 * @param offset - Offset en pixels depuis le haut de la fenêtre (défaut: 100)
 * @returns string - ID de la section actuellement active
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Parcourir les sections de bas en haut
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Vérifier si le scroll position est dans cette section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveId(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}

/**
 * Hook pour détecter la direction du scroll (up/down)
 * @param threshold - Seuil de déclenchement en pixels (défaut: 10)
 * @returns 'up' | 'down' | null
 */
export function useScrollDirection(threshold: number = 10) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        return;
      }

      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, threshold]);

  return scrollDirection;
}
