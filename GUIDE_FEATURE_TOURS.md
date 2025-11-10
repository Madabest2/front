# 🎯 Guide d'Implémentation - Feature Tours

Ce document explique comment implémenter la feature `tours` étape par étape.

---

## 📁 Structure de la feature

```
src/features/tours/
├── components/
│   ├── TourCard.tsx          # Carte individuelle d'un tour
│   ├── TourGrid.tsx          # Grille de tours
│   ├── TourFilter.tsx        # Filtres de recherche
│   ├── TourDetails.tsx       # Page détail d'un tour
│   └── index.ts              # Export des composants
├── hooks/
│   ├── useTours.ts           # Hook pour récupérer les tours
│   ├── useTourSearch.ts      # Hook pour la recherche
│   ├── useTourDetails.ts     # Hook pour un tour spécifique
│   └── index.ts
├── services/
│   ├── toursApi.ts           # Appels API tours
│   └── index.ts
├── types/
│   ├── tour.types.ts         # Types TypeScript
│   └── index.ts
└── index.ts                  # Export public de la feature
```

---

## 📝 Étape 1 : Créer les types

**Fichier :** `src/features/tours/types/tour.types.ts`

```typescript
export interface Tour {
  id: string;
  title: string;
  slug: string;
  image: string;
  images?: string[];
  location: string;
  rating: number;
  ratingCount: number;
  price: number;
  currency: string;
  duration: number;
  difficulty: "EASY" | "MODERATE" | "DIFFICULT" | "EXTREME";
  featured: boolean;
  description?: string;
  included?: string[];
  excluded?: string[];
  maxGroupSize?: number;
  availableFrom?: string;
  availableTo?: string;
}

export interface TourSearchParams {
  destination?: string;
  startDate?: string;
  endDate?: string;
  minPrice?: number;
  maxPrice?: number;
  difficulty?: string;
  featured?: boolean;
  limit?: number;
  page?: number;
}

export interface ToursResponse {
  tours: Tour[];
  total: number;
  page: number;
  pageSize: number;
}
```

**Fichier :** `src/features/tours/types/index.ts`

```typescript
export type * from "./tour.types";
```

---

## 📝 Étape 2 : Créer le service API

**Fichier :** `src/features/tours/services/toursApi.ts`

```typescript
import { apiClient } from "@/shared/utils/apiClient";
import type { Tour, TourSearchParams, ToursResponse } from "../types";

export const toursApi = {
  /**
   * Récupère la liste des tours
   */
  getTours: async (params?: TourSearchParams): Promise<ToursResponse> => {
    const { data } = await apiClient.get("/tours", { params });
    return data;
  },

  /**
   * Récupère un tour par son slug
   */
  getTourBySlug: async (slug: string): Promise<Tour> => {
    const { data } = await apiClient.get(`/tours/${slug}`);
    return data;
  },

  /**
   * Recherche de tours avec filtres avancés
   */
  searchTours: async (searchParams: TourSearchParams): Promise<ToursResponse> => {
    const { data } = await apiClient.post("/tours/search", searchParams);
    return data;
  },

  /**
   * Récupère les destinations disponibles
   */
  getDestinations: async (): Promise<string[]> => {
    const { data } = await apiClient.get("/tours/destinations");
    return data;
  },
};
```

**Fichier :** `src/features/tours/services/index.ts`

```typescript
export { toursApi } from "./toursApi";
```

---

## 📝 Étape 3 : Créer le hook useTours

**Fichier :** `src/features/tours/hooks/useTours.ts`

```typescript
"use client";

import { useState, useEffect } from "react";
import { toursApi } from "../services";
import type { Tour, TourSearchParams } from "../types";

interface UseToursOptions extends TourSearchParams {}

interface UseToursReturn {
  tours: Tour[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useTours(options: UseToursOptions = {}): UseToursReturn {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTours = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await toursApi.getTours(options);
      setTours(response.tours);
    } catch (err) {
      setError("Erreur lors du chargement des tours");
      console.error("Error fetching tours:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.featured, options.limit, options.destination]);

  return {
    tours,
    isLoading,
    error,
    refetch: fetchTours,
  };
}
```

**Fichier :** `src/features/tours/hooks/index.ts`

```typescript
export { useTours } from "./useTours";
export { useTourSearch } from "./useTourSearch";
export { useTourDetails } from "./useTourDetails";
```

---

## 📝 Étape 4 : Créer le composant TourCard

**Fichier :** `src/features/tours/components/TourCard.tsx`

```typescript
import React from 'react';
import Link from 'next/link';
import { MapPin, Star, Clock, Users } from 'lucide-react';
import { Card } from '@/features/design-system';
import { ROUTES } from '@/shared/config/routes';
import { cn } from '@/lib/utils';
import type { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  className?: string;
}

export function TourCard({ tour, className }: TourCardProps) {
  return (
    <Link href={ROUTES.TOURS.DETAIL(tour.slug)}>
      <Card
        className={cn(
          'group overflow-hidden transition-all duration-300 hover:shadow-xl',
          className
        )}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Featured Badge */}
          {tour.featured && (
            <div className="absolute right-4 top-4 rounded-full bg-primary-madabest px-3 py-1 text-xs font-semibold text-white">
              ⭐ Featured
            </div>
          )}

          {/* Difficulty Badge */}
          <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {tour.difficulty}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Location */}
          <div className="mb-2 flex items-center text-sm text-gray-600">
            <MapPin className="mr-1 h-4 w-4" />
            {tour.location}
          </div>

          {/* Title */}
          <h3 className="mb-3 font-heading text-xl font-bold text-dark-madabest line-clamp-2 group-hover:text-primary-madabest">
            {tour.title}
          </h3>

          {/* Metadata */}
          <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {tour.duration} jours
            </div>
            {tour.maxGroupSize && (
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                Max {tour.maxGroupSize}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            {/* Rating */}
            <div className="flex items-center">
              <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{tour.rating}</span>
              <span className="ml-1 text-sm text-gray-600">
                ({tour.ratingCount})
              </span>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="text-xs text-gray-600">À partir de</div>
              <div className="font-heading text-2xl font-bold text-primary-madabest">
                {tour.price} {tour.currency}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
```

---

## 📝 Étape 5 : Créer le composant TourGrid

**Fichier :** `src/features/tours/components/TourGrid.tsx`

```typescript
import React from 'react';
import { TourCard } from './TourCard';
import { LoadingSpinner } from '@/features/shared';
import { cn } from '@/lib/utils';
import type { Tour } from '../types';

interface TourGridProps {
  tours: Tour[];
  isLoading?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function TourGrid({
  tours,
  isLoading = false,
  columns = 3,
  className,
}: TourGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600">Aucun tour trouvé</p>
          <p className="mt-2 text-sm text-gray-500">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('grid gap-6', gridCols[columns], className)}>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
```

---

## 📝 Étape 6 : Exporter les composants

**Fichier :** `src/features/tours/components/index.ts`

```typescript
export { TourCard } from "./TourCard";
export { TourGrid } from "./TourGrid";
export { TourFilter } from "./TourFilter";
export { TourDetails } from "./TourDetails";
```

---

## 📝 Étape 7 : Index principal de la feature

**Fichier :** `src/features/tours/index.ts`

```typescript
// Components
export * from "./components";

// Hooks
export * from "./hooks";

// Services
export * from "./services";

// Types
export type * from "./types";
```

---

## ✅ Utilisation dans une page

Une fois la feature créée, vous pouvez l'utiliser dans vos pages :

```typescript
// src/app/(frontoffice)/tours/page.tsx
'use client';

import { useTours, TourGrid } from '@/features/tours';

export default function ToursPage() {
  const { tours, isLoading } = useTours({ limit: 12 });

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 font-heading text-4xl font-bold">
        Nos Tours
      </h1>

      <TourGrid tours={tours} isLoading={isLoading} />
    </div>
  );
}
```

---

## 🎯 Prochaines étapes

Après avoir créé la feature `tours` :

1. ✅ Créer la feature `testimonials` (similaire)
2. ✅ Créer la feature `home` qui utilise `tours` et `testimonials`
3. ✅ Créer les autres features (about, services, conditions, contact)
4. ✅ Créer les API routes dans `src/app/api/tours/`

---

## 💡 Conseils

### Performance

- Utiliser `React.memo` pour les composants de carte
- Lazy load les images avec `next/image`
- Implémenter la pagination côté serveur

### Accessibilité

- Ajouter des `aria-label` aux boutons et liens
- Utiliser les balises sémantiques (`<article>`, `<section>`)
- Tester la navigation au clavier

### SEO

- Ajouter des metadata dans les pages
- Utiliser `next/image` pour l'optimisation automatique
- Générer un sitemap pour les tours

Référez-vous au planning principal pour plus de détails sur chaque composant.
