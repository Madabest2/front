# 🏗️ État d'Avancement - Planning d'Intégration Frontend MADABEST

**Architecture :** Feature-based (Next.js 15 + React 19 + Tailwind v4)

---

## ✅ PHASE 1 : SETUP & DESIGN SYSTEM - **COMPLÉTÉ**

### 1.1 Configuration Tailwind v4 ✅

- ✅ Couleurs MADABEST configurées dans `src/app/globals.css`
  - Primaire : `#E85D3F` (Orange coral)
  - Crème : `#F5F1E8`
  - Dark : `#1A1A1A`
- ✅ Classes utilitaires personnalisées créées (.text-primary-madabest, .bg-cream-madabest, etc.)
- ✅ Configuration polices (Poppins, Inter, Parisienne)
- ✅ Support dark mode

### 1.2 Feature design-system ✅

**Emplacement :** `src/features/design-system/`

**Composants custom créés :**

- ✅ `BadgeIcon.tsx` - Badge avec icône pour features
- ✅ `SocialLinks.tsx` - Liens réseaux sociaux (Facebook, Instagram, LinkedIn, YouTube)
- ✅ `ContactLinks.tsx` - Liens de contact (email, téléphone)
- ✅ `PartnerLogos.tsx` - Grille de logos partenaires
- ✅ `index.ts` - Exports centralisés

**Exports disponibles :**

```typescript
import { BadgeIcon, SocialLinks, ContactLinks, PartnerLogos } from "@/features/design-system";
```

### 1.3 Configuration centralisée ✅

**Emplacement :** `src/shared/`

**Fichiers créés :**

- ✅ `constants/appConfig.ts` - Configuration app complète
  - Informations app (nom, description, tagline)
  - Configuration API
  - Configuration Mapbox (Diego Suarez)
  - Configuration Supabase
  - Informations contact (adresse, téléphone, email)
  - Liens réseaux sociaux
  - Feature flags

- ✅ `config/routes.ts` - Routes centralisées
  - Routes frontoffice (home, about, services, conditions, contact)
  - Routes tours (list, detail, search)
  - Routes auth (login, register, forgot/reset password)
  - Routes dashboard client
  - Routes admin/backoffice
  - Navigation links (header/footer)

- ✅ `utils/apiClient.ts` - Client API déjà existant (axios)

### 1.4 Feature shared - Layout global ✅

**Emplacement :** `src/features/shared/`

**Composants layout créés :**

- ✅ `components/layout/Header.tsx` - Header avec navigation responsive
  - Logo + Menu desktop/mobile
  - Scroll detection (background change)
  - Boutons Login/Signup
- ✅ `components/layout/Footer.tsx` - Footer complet
  - 4 colonnes : Company, Legal, Contact
  - Réseaux sociaux
  - Copyright
- ✅ `components/layout/MainLayout.tsx` - Layout wrapper principal

**Composants common créés :**

- ✅ `components/common/Newsletter.tsx` - Formulaire newsletter
  - Validation email
  - États loading/success/error
  - Call API `/api/newsletter`
- ✅ `components/common/LoadingSpinner.tsx` - Spinner réutilisable

**Hooks personnalisés créés :**

- ✅ `hooks/useMediaQuery.ts` - Détection media queries
  - `useMediaQuery(query)` - Hook générique
  - `useBreakpoint()` - Breakpoints prédéfinis (mobile, tablet, desktop, largeDesktop)
- ✅ `hooks/useScrollSpy.ts` - Scroll spy pour navigation
  - `useScrollSpy(sectionIds, offset)` - Détecte section active
  - `useScrollDirection(threshold)` - Direction du scroll (up/down)

**Exports disponibles :**

```typescript
// Layout
import { Header, Footer, MainLayout } from "@/features/shared";

// Common
import { Newsletter, LoadingSpinner } from "@/features/shared";

// Hooks
import { useMediaQuery, useBreakpoint, useScrollSpy, useScrollDirection } from "@/features/shared";
```

---

## 📦 DÉPENDANCES À INSTALLER (En attente)

Pour continuer, il faut installer les dépendances suivantes :

```bash
npm install @radix-ui/react-accordion @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-label @heroicons/react zod react-hook-form @hookform/resolvers axios mapbox-gl
```

Ensuite, installer les composants Shadcn/ui :

```bash
npx shadcn@latest add accordion select tabs textarea badge carousel
```

---

## 🚧 PHASE 2 : INTÉGRATION STATIQUE - **EN ATTENTE**

### À faire ensuite (dans l'ordre recommandé) :

#### 2.1 Feature Tours ⏳

**Priorité :** HAUTE (utilisé dans home)
**Fichiers à créer :**

- `src/features/tours/components/TourCard.tsx`
- `src/features/tours/components/TourGrid.tsx`
- `src/features/tours/hooks/useTours.ts`
- `src/features/tours/services/toursApi.ts`
- `src/features/tours/types/tour.types.ts`

#### 2.2 Feature Testimonials ⏳

**Priorité :** HAUTE (utilisé dans home)
**Fichiers à créer :**

- `src/features/testimonials/components/TestimonialCarousel.tsx`
- `src/features/testimonials/components/TestimonialCard.tsx`
- `src/features/testimonials/hooks/useTestimonials.ts`
- `src/features/testimonials/services/testimonialsApi.ts`

#### 2.3 Feature Home ⏳

**Priorité :** HAUTE (page principale)
**Fichiers à créer :**

- `src/features/home/components/HeroSection.tsx`
- `src/features/home/components/HeroSearch.tsx`
- `src/features/home/components/AboutPreview.tsx`
- `src/features/home/components/FeaturedTours.tsx`
- `src/features/home/hooks/useHeroSearch.ts`
- `src/features/home/services/homeApi.ts`

#### 2.4 Feature About ⏳

**Fichiers à créer :**

- `src/features/about/components/HeroAbout.tsx`
- `src/features/about/components/ExpandableSection.tsx`
- `src/features/about/components/TeamSection.tsx`

#### 2.5 Feature Services ⏳

**Fichiers à créer :**

- `src/features/services-page/components/ServiceCard.tsx` (avec effet tilt)
- `src/features/services-page/components/ServiceList.tsx`

#### 2.6 Feature Conditions ⏳

**Fichiers à créer :**

- `src/features/conditions/components/SidebarNav.tsx` (avec scroll spy)
- `src/features/conditions/components/PDFDownload.tsx`
- `src/features/conditions/hooks/usePDFDownload.ts`

#### 2.7 Feature Contact ⏳

**Fichiers à créer :**

- `src/features/contact/components/ContactForm.tsx` (validation Zod)
- `src/features/contact/components/MapboxEmbed.tsx`
- `src/features/contact/hooks/useContactForm.ts`

---

## 🔌 PHASE 3 : DYNAMISATION BACKEND - **EN ATTENTE**

### API Routes Next.js 15 à créer :

```
src/app/api/
├── tours/
│   ├── route.ts                 # GET /api/tours
│   ├── destinations/route.ts    # GET /api/tours/destinations
│   ├── search/route.ts          # POST /api/tours/search
│   └── [slug]/route.ts          # GET /api/tours/[slug]
├── contact/route.ts             # POST /api/contact
├── newsletter/route.ts          # POST /api/newsletter
├── testimonials/route.ts        # GET /api/testimonials
└── conditions/pdf/route.ts      # GET /api/conditions/pdf
```

---

## 📄 PAGES À CRÉER - **EN ATTENTE**

### App Router (Frontoffice)

Créer le route group `(frontoffice)` :

```
src/app/(frontoffice)/
├── layout.tsx                   # Layout avec MainLayout
├── page.tsx                     # Home (import features/home)
├── a-propos/page.tsx            # À propos
├── nos-services/page.tsx        # Services
├── conditions-modalites/page.tsx # Conditions
└── contact/page.tsx             # Contact
```

**Exemple page.tsx (Home) :**

```typescript
import {
  HeroSection,
  AboutPreview,
  FeaturedTours,
} from '@/features/home';
import { TestimonialCarousel } from '@/features/testimonials';
import { PartnerLogos } from '@/features/design-system';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <FeaturedTours />
      <TestimonialCarousel />
      <PartnerLogos />
    </main>
  );
}
```

---

## 🎯 PROCHAINES ACTIONS IMMÉDIATES

### 1. Installer les dépendances manquantes

```bash
npm install @radix-ui/react-accordion @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-label @heroicons/react zod react-hook-form @hookform/resolvers axios mapbox-gl
```

### 2. Installer composants Shadcn/ui manquants

```bash
npx shadcn@latest add accordion select tabs textarea badge carousel
```

### 3. Créer la feature `tours` (prioritaire)

C'est la feature la plus importante car utilisée dans `home`. Suivre le plan détaillé dans le document principal.

### 4. Créer la feature `testimonials`

Également utilisée dans `home`, à créer avant la feature home.

### 5. Créer la feature `home`

Une fois tours et testimonials prêts, créer la page d'accueil.

### 6. Créer les pages dans app router

Créer le layout frontoffice et les pages principales.

---

## 📁 STRUCTURE ACTUELLE

```
src/
├── features/
│   ├── design-system/
│   │   ├── components/
│   │   │   ├── custom/
│   │   │   │   ├── BadgeIcon.tsx ✅
│   │   │   │   ├── SocialLinks.tsx ✅
│   │   │   │   ├── PartnerLogos.tsx ✅
│   │   │   │   └── index.ts ✅
│   │   │   ├── ui/ (Shadcn components)
│   │   │   └── index.ts ✅
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.ts ✅
│   │
│   └── shared/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.tsx ✅
│       │   │   ├── Footer.tsx ✅
│       │   │   ├── MainLayout.tsx ✅
│       │   │   └── index.ts ✅
│       │   ├── common/
│       │   │   ├── Newsletter.tsx ✅
│       │   │   ├── LoadingSpinner.tsx ✅
│       │   │   └── index.ts ✅
│       │   └── index.ts ✅
│       ├── hooks/
│       │   ├── useMediaQuery.ts ✅
│       │   ├── useScrollSpy.ts ✅
│       │   └── index.ts ✅
│       └── index.ts ✅
│
├── shared/
│   ├── config/
│   │   └── routes.ts ✅
│   ├── constants/
│   │   └── appConfig.ts ✅
│   ├── utils/
│   │   └── apiClient.ts ✅
│   └── types/
│       └── common.types.ts ✅
│
├── lib/
│   └── utils.ts ✅
│
└── app/
    ├── globals.css ✅ (Couleurs MADABEST configurées)
    └── layout.tsx
```

---

## ✅ CHECKLIST PHASE 1

- [x] Configuration Tailwind v4 avec couleurs MADABEST
- [x] Composants custom design-system (BadgeIcon, SocialLinks, PartnerLogos)
- [x] Configuration centralisée (appConfig.ts, routes.ts)
- [x] Feature shared - Layout (Header, Footer, MainLayout)
- [x] Feature shared - Common (Newsletter, LoadingSpinner)
- [x] Hooks personnalisés (useMediaQuery, useScrollSpy)
- [x] Exports centralisés de toutes les features

---

## 📊 PROGRESSION GLOBALE

**Phase 1 :** ✅ **100% COMPLÉTÉ**  
**Phase 2 :** ⏳ **0% - En attente**  
**Phase 3 :** ⏳ **0% - En attente**  
**Phase 4 :** ⏳ **0% - En attente**

**PROGRESSION TOTALE :** 🟩🟩⬜⬜ **25%**

---

## 💡 NOTES IMPORTANTES

### Architecture Feature-Based

✅ Toutes les features suivent la structure standardisée :

```
feature/
├── components/
├── hooks/
├── services/
├── types/
└── index.ts (exports publics)
```

### Imports depuis features

Toujours importer depuis le point d'entrée de la feature :

```typescript
// ✅ BON
import { Header, Footer } from "@/features/shared";
import { BadgeIcon } from "@/features/design-system";

// ❌ MAUVAIS
import { Header } from "@/features/shared/components/layout/Header";
```

### Aliases TypeScript configurés

```json
{
  "@/*": ["./src/*"],
  "@/features/*": ["./src/features/*"],
  "@/shared/*": ["./src/shared/*"],
  "@/lib/*": ["./src/lib/*"]
}
```

---

## 🤝 BESOIN D'AIDE ?

Pour continuer l'intégration :

1. Installer les dépendances listées ci-dessus
2. Commencer par la feature `tours` (cf. plan détaillé dans planning principal)
3. Puis feature `testimonials`
4. Puis feature `home`

Le planning complet avec tous les détails d'implémentation est disponible dans le document initial.
