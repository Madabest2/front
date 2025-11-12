# 🧭 Instructions de Développement Frontend - Madabest Landing Page

## 🎯 Objectif
Développer le **frontend complet** de la landing page Madabest en respectant **strictement** la maquette fournie (voir image jointe).  
Chaque section doit être **identique visuellement**, sans variantes ni modifications esthétiques non justifiées.

---

## 🧱 Frameworks & Librairies à utiliser
- **React + TypeScript**
- **shadcn/ui** pour **tous les composants** (cards, boutons, inputs, carrousels, sections, etc.)
- **Lucide React** pour les icônes
- **TailwindCSS** uniquement pour les ajustements **nécessaires** (espacement, largeur, alignement ponctuel)
- **Framer Motion** pour les transitions douces et apparitions d’éléments (fade-in, slide-up)
- **Recharts** si besoin d’un graphique (pas ici)

---

## 🎨 Style & Design
- Respecter **scrupuleusement les marges, paddings, tailles de police, couleurs et proportions** visibles sur la maquette.
- Les **typographies** doivent être homogènes sur toute la page (même font-family, même tailles pour les mêmes types de textes).
- Aucune variation arbitraire de taille, couleur ou style ne doit être faite.

### ✅ Typographie
- Titre principal : taille large, gras, couleur principale du thème.
- Sous-titres : semi-bold, légèrement plus petits.
- Texte descriptif : lisible, espacement ligne/lettre conforme à la maquette.
- Boutons : texte en majuscule ou capitalisé selon la maquette.

---

## 🧩 Structure de la page
Voici les sections à coder **dans l’ordre exact** :

### 1. **Hero Section**
- Image de fond couvrante avec overlay léger.
- Titre : *“Découvrez Madagascar autrement”* et sous-texte.
- Bouton principal : *“Commencer votre réservation”*.
- Carrousel horizontal de destinations (Antsiranana, Diego Suarez, Nosy Be, Ambanja…)
- Image de la femme sur la droite avec effet de parallaxe doux.

### 2. **Présentation Madabest**
- Titre *“Madabest”* et description sur fond noir.
- CTA : *“En savoir plus”* et *“Commencer votre réservation”*.
- Quelques images en polaroid flottant.

### 3. **Nos Forfaits Tours**
- Section claire avec carte des destinations en **Card Components**.
- Barre de recherche + menu déroulant *“Où allez-vous ?”*
- Cards avec image, nom, prix, et bouton *“Réserver”*.

### 4. **Avis Clients**
- Fond beige clair.
- 2 à 3 cartes de témoignages avec photo, pays, nom, texte et étoiles.
- Navigation par flèches et pagination.

### 5. **Excursions**
- Section foncée avec vidéo/image de fond.
- Bouton *“Commencer votre réservation”* et sous-texte motivant.
- Carrousel de visuels en bas.

### 6. **Partenaires & Accords**
- Logos officiels alignés proprement en 3 blocs :  
  - Partenaires Officiels  
  - Accords Institutionnels  
  - Partenaires Aériens

### 7. **Footer**
- Logo Madabest, coordonnées, menu secondaire, liens réseaux sociaux.
- Bloc d’inscription à la newsletter.
- Mentions légales, politique de confidentialité.

---

## 🧠 Comportement & Interactivité
- Les boutons CTA doivent être interactifs avec **hover state animé** (changement léger de couleur ou ombre).
- Les carrousels doivent être **scrollables horizontalement** avec bouton flèche visible.
- Les transitions d’apparition des sections doivent être **fluides et discrètes** (Framer Motion).
- Aucun rechargement de page : **SPA fluide**.

---

## ⚙️ Contraintes techniques
- Responsive complet (desktop, tablette, mobile).
- Aucune dépendance visuelle externe autre que shadcn/ui.
- Tous les textes, espacements, couleurs doivent correspondre à la maquette.
- Garder une **cohérence parfaite** entre chaque section (mêmes marges verticales et latérales, même style de boutons, même arrondis, etc.).

---

## ✅ Objectif final
Le rendu final doit être :
- **Visuellement identique** à la maquette.
- **Entièrement construit avec shadcn/ui** (et Tailwind uniquement en complément).
- **Pixel-perfect**, fluide, cohérent et professionnel.

---

