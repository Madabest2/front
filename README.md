# Madabest Frontend

Application Next.js 15 avec Tailwind CSS v4, TypeScript et une architecture feature-based.

## 🚀 Stack Technique

- **Framework**: Next.js 15.5.0 avec App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui (dans `src/features/design-system/`)
- **Language**: TypeScript
- **Linting**: ESLint 9 + Prettier
- **Git Hooks**: Husky + lint-staged
- **Commits**: Commitlint (Conventional Commits)

## 📁 Structure du Projet

```
src/
├── app/                          # App Router Next.js 15
│   ├── (auth)/                  # Route group pour l'authentification
│   │   ├── login/               # Page de connexion
│   │   └── register/            # Page d'inscription
│   ├── (dashboard)/             # Route group pour le dashboard
│   │   ├── components/          # Composants du dashboard
│   │   ├── users/               # Gestion des utilisateurs
│   │   └── settings/            # Paramètres
│   ├── globals.css              # Styles globaux + Palette Madabest
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Page d'accueil
│
├── features/                     # 🆕 ARCHITECTURE FEATURE-BASED
│   ├── auth/                    # Feature: Authentification
│   │   ├── components/          # Composants React
│   │   ├── hooks/               # Hooks personnalisés
│   │   ├── services/            # Appels API et logique métier
│   │   ├── types/               # Types TypeScript
│   │   ├── utils/               # Utilitaires spécifiques
│   │   └── index.ts             # Point d'entrée public
│   │
│   ├── users/                   # Feature: Gestion des utilisateurs
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── design-system/           # Feature: Système de design Madabest
│   │   ├── components/
│   │   │   ├── ui/              # Composants de base (Shadcn/ui)
│   │   │   └── showcase/        # Composants de démonstration
│   │   ├── hooks/               # Hooks pour le thème
│   │   ├── services/            # Services de thème
│   │   ├── types/
│   │   ├── components.json      # Config Shadcn/ui
│   │   └── index.ts
│   │
│   ├── shared/                  # Feature: Éléments partagés
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   │
│   └── index.ts                 # Export centralisé de toutes les features
│
├── shared/                      # 🆕 CONFIGURATION CENTRALISÉE
│   ├── components/              # Composants partagés globaux
│   ├── config/
│   │   └── routes.ts            # Gestion des routes
│   ├── constants/
│   │   └── appConfig.ts         # Configuration de l'application
│   ├── types/
│   │   └── common.types.ts      # Types de base
│   ├── utils/
│   │   └── apiClient.ts         # Client API centralisé
│   └── index.ts
│
├── lib/                         # ⚠️ DEPRECATED - Utilisez @/shared
│   └── index.ts                 # Redirige vers @/shared
│
└── types/                       # ⚠️ DEPRECATED - Utilisez @/shared/types
```

## 🎨 Palette Madabest

La palette de couleurs est définie dans `src/app/globals.css` :

```css
--madabest-primary: oklch(0.45 0.25 260); /* Bleu/Violet principal */
--madabest-secondary: oklch(0.65 0.2 200); /* Bleu secondaire */
--madabest-accent: oklch(0.75 0.15 150); /* Accent cyan/turquoise */
--madabest-success: oklch(0.65 0.18 145); /* Vert succès */
--madabest-warning: oklch(0.75 0.2 80); /* Jaune/Orange attention */
--madabest-danger: oklch(0.6 0.24 25); /* Rouge danger */
```

## 🔧 Alias TypeScript

```typescript
@/*                 -> ./src/*
@/features/*        -> ./src/features/*
@/shared/*          -> ./src/shared/*
@/lib/*             -> ./src/lib/*
@/app/*             -> ./src/app/*
```

## 📝 Conventions de Code

### Commits (Commitlint)

Format: `type(scope): subject`

Types autorisés:

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage
- `refactor`: Refactoring
- `perf`: Performance
- `test`: Tests
- `build`: Build
- `ci`: CI/CD
- `chore`: Maintenance

Exemple: `feat(auth): add login form component`

### Linting

- **ESLint**: Vérification du code TypeScript/JavaScript
- **Prettier**: Formatage automatique du code
- **lint-staged**: Lint uniquement les fichiers modifiés

### Hooks Git

- `pre-commit`: Exécute lint-staged (ESLint + Prettier)
- `commit-msg`: Vérifie le format des messages de commit

## 🚦 Scripts Disponibles

```bash
# Développement
npm run dev              # Démarre le serveur de dev

# Build
npm run build            # Build de production
npm start                # Démarre le serveur de production

# Qualité du code
npm run lint             # Vérifie le code avec ESLint
npm run lint:fix         # Corrige automatiquement les erreurs
npm run format           # Formate le code avec Prettier
npm run format:check     # Vérifie le formatage
npm run type-check       # Vérifie les types TypeScript
```

## 🏗️ Installation et Setup

```bash
# Installer les dépendances
npm install

# Initialiser Husky (déjà fait via prepare script)
npm run prepare

# Lancer le projet en développement
npm run dev
```

## 🎯 Architecture Feature-Based

### Principe

Chaque feature est autonome et contient tout ce dont elle a besoin :

- **components/**: Composants React spécifiques
- **hooks/**: Hooks React personnalisés
- **services/**: Logique métier et appels API
- **types/**: Types TypeScript
- **utils/**: Utilitaires (si nécessaire)
- **index.ts**: Point d'entrée qui exporte l'API publique

### Imports

```typescript
// ✅ Bon - Import depuis l'index de la feature
import { authService, User } from "@/features/auth";

// ❌ Éviter - Import direct dans les internals
import { authService } from "@/features/auth/services";
```

### Ajout d'une nouvelle feature

1. Créer le dossier dans `src/features/ma-feature/`
2. Créer les sous-dossiers nécessaires
3. Créer `index.ts` pour exporter l'API publique
4. Ajouter l'export dans `src/features/index.ts`

## 🎨 Design System (Shadcn/ui)

Installation dans `src/features/design-system/`:

```bash
# Ajouter un composant
npx shadcn@latest add button

# Les composants seront ajoutés dans:
# src/features/design-system/components/ui/
```

## 🔐 Variables d'Environnement

Créer un fichier `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📚 Ressources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🤝 Contribution

1. Créer une branche: `git checkout -b feat/ma-feature`
2. Commits avec Conventional Commits
3. Push et créer une Pull Request

---

**Version**: 0.1.0  
**Dernière mise à jour**: November 10, 2025
