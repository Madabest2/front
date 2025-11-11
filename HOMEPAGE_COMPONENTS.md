# Page d'accueil Madabest - Documentation

## 🎨 Design & Architecture

Cette page d'accueil a été créée en respectant les principes suivants :

### ✅ Responsive Design

- **Mobile First** : Tous les composants s'adaptent de mobile à desktop
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Police minimum** : 16px (text-base) partout

### 🎨 Design System

- **Couleurs** :
  - Primary: `#E2531F` (Orange Madabest)
  - Secondary: `#FFF6E4` (Crème)
  - Background: `#000000` (Noir) pour les sections sombres
- **Fonts** : Utilisation des fonts par défaut de l'application
- **Composants** : Tous les composants utilisent shadcn/ui pour la réutilisabilité

## 📁 Structure des composants

```
src/
├── features/
│   └── shared/
│       └── components/
│           ├── layout/
│           │   ├── Header.tsx          # Navigation principale
│           │   └── Footer.tsx          # Footer avec newsletter
│           └── home/
│               ├── HeroSection.tsx     # Hero avec destinations
│               ├── AboutSection.tsx    # Présentation Madabest
│               ├── ToursSection.tsx    # Liste des tours
│               ├── TestimonialsSection.tsx # Témoignages clients
│               ├── VideoSection.tsx    # Section vidéo CTA
│               ├── PartnersSection.tsx # Partenaires
│               └── index.ts            # Export centralisé
├── types/
│   └── homepage.ts                     # Types TypeScript
└── app/
    └── page.tsx                        # Page principale assemblée
```

## 🧩 Composants créés

### 1. **Header** (`Header.tsx`)

- Navigation responsive avec menu mobile
- Barre de recherche expandable
- Sélecteur de langue
- CTA "Commencer votre réservation"
- Background transparent avec blur
- Effet de scroll

**Props** : Aucune
**État** : Gère l'ouverture du menu mobile et de la recherche

### 2. **HeroSection** (`HeroSection.tsx`)

- Background image avec overlay gradient
- Grille de 4 destinations principales
- Réseaux sociaux verticaux (desktop uniquement)
- Système de sélection de destination active
- Boutons d'action par destination
- Pagination numérotée (desktop)

**Props** : Aucune
**État** : `activeDestination` (index de la destination sélectionnée)

### 3. **AboutSection** (`AboutSection.tsx`)

- Polaroids avec rotations aléatoires
- Texte de présentation Madabest
- Liste des 4 services principaux avec icônes
- CTA principale
- Background noir

**Props** : Aucune
**État** : Aucun

### 4. **ToursSection** (`ToursSection.tsx`)

- Background image avec overlay
- Barre de recherche + filtre localisation
- Grille de cards tours (4 colonnes desktop)
- Card avec :
  - Image de destination
  - Badge "favori"
  - Localisation avec icône
  - Prix en euro
  - Bouton réservation

**Props** : Aucune
**État** : `searchQuery` pour la recherche

### 5. **TestimonialsSection** (`TestimonialsSection.tsx`)

- Carousel de témoignages (2 colonnes desktop)
- Card avec :
  - Avatar client
  - Nom + pays avec drapeau
  - Notation étoiles
  - Citation + texte complet
- Navigation prev/next
- Indicateurs de pagination

**Props** : Aucune
**État** : `activeIndex` pour le carousel

### 6. **VideoSection** (`VideoSection.tsx`)

- Background vidéo/image
- Texte de présentation "Les Meilleures Excursions"
- Bouton play vidéo
- Description Nosy-Be
- Miniatures vidéos (desktop)

**Props** : Aucune
**État** : Aucun

### 7. **PartnersSection** (`PartnersSection.tsx`)

- 3 sections :
  - Partenaires Officiels (4 logos)
  - Accords Institutionnels (2 logos)
  - Partenaires Aériens (8 logos)
- Grid responsive
- Hover effects sur les logos

**Props** : Aucune
**État** : Aucun

### 8. **Footer** (`Footer.tsx`)

- 3 colonnes (desktop) :
  - Contact (téléphone, email, adresse)
  - Liens de services
  - Newsletter
- Réseaux sociaux
- Navigation footer
- Copyright + politique de confidentialité

**Props** : Aucune
**État** : `email` pour la newsletter

## 🔧 Types TypeScript

Tous les types sont définis dans `src/types/homepage.ts` :

```typescript
- Destination  : Représente une destination (nom, image)
- Tour        : Représente un tour/circuit (destination, prix, description, etc.)
- Service     : Représente un service Madabest
- Testimonial : Représente un témoignage client
- Partner     : Représente un partenaire (logo, catégorie)
- SocialLink  : Représente un lien réseau social
```

## 🎯 Intégration API future

Chaque composant est préparé pour l'intégration API :

### Exemple pour ToursSection :

```typescript
// Actuellement : données mockées
const tours: Tour[] = [...];

// Future intégration :
const { data: tours, isLoading } = useTours();

if (isLoading) return <LoadingSpinner />;
```

### Services à créer :

```
src/features/shared/services/
├── tours.service.ts       # getTours(), getTourById()
├── testimonials.service.ts # getTestimonials()
├── partners.service.ts    # getPartners()
└── newsletter.service.ts  # subscribeNewsletter()
```

### Hooks à créer :

```
src/features/shared/hooks/
├── useTours.ts
├── useTestimonials.ts
└── useNewsletter.ts
```

## 🚀 Utilisation

### Page principale

```typescript
// src/app/page.tsx
import { Header, Footer } from '@/features/shared/components/layout';
import {
  HeroSection,
  AboutSection,
  ToursSection,
  TestimonialsSection,
  VideoSection,
  PartnersSection,
} from '@/features/shared/components/home';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ToursSection />
        <TestimonialsSection />
        <VideoSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
```

## 📝 Notes importantes

1. **Images** : Toutes les images sont des placeholders (bg-gray-xxx). Remplacez-les par vos vraies images.

2. **Responsiveness** : Tous les composants sont testés pour :
   - Mobile (< 640px)
   - Tablet (640px - 1024px)
   - Desktop (> 1024px)

3. **Accessibilité** :
   - Tous les boutons ont des `aria-label`
   - Images ont des `alt` text
   - Navigation au clavier fonctionnelle

4. **Performance** :
   - Utilisation de `'use client'` uniquement quand nécessaire
   - Pas de re-renders inutiles
   - États locaux minimaux

## 🔄 Prochaines étapes

1. ✅ Remplacer les images placeholder par les vraies images
2. ✅ Créer les services API
3. ✅ Créer les hooks personnalisés
4. ✅ Ajouter les animations au scroll
5. ✅ Implémenter la recherche réelle
6. ✅ Connecter le formulaire newsletter
7. ✅ Ajouter les tests unitaires

## 💡 Conseils

- Les couleurs `#E2531F` et `#FFF6E4` sont déjà configurées dans `globals.css`
- Utilisez toujours les composants shadcn/ui pour la cohérence
- Gardez les composants < 300 lignes pour la maintenabilité
- Séparez la logique métier dans des hooks
