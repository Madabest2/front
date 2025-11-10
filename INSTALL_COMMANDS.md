# 🚀 Commandes d'Installation - MADABEST Frontend

Ce fichier contient toutes les commandes à exécuter pour finaliser la configuration du projet.

---

## 📦 Étape 1 : Installer les dépendances NPM

### Dépendances principales

```bash
npm install @radix-ui/react-accordion @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-label
```

### Icônes et utilitaires

```bash
npm install @heroicons/react
```

### Formulaires et validation

```bash
npm install zod react-hook-form @hookform/resolvers
```

### HTTP Client et Maps

```bash
npm install axios mapbox-gl
```

### Types Mapbox

```bash
npm install -D @types/mapbox-gl
```

### OU Installer tout en une commande

```bash
npm install @radix-ui/react-accordion @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-label @heroicons/react zod react-hook-form @hookform/resolvers axios mapbox-gl && npm install -D @types/mapbox-gl
```

---

## 🎨 Étape 2 : Installer les composants Shadcn/ui

### Composants UI individuels

```bash
npx shadcn@latest add accordion
npx shadcn@latest add select
npx shadcn@latest add tabs
npx shadcn@latest add textarea
npx shadcn@latest add badge
npx shadcn@latest add carousel
```

### OU Installation multiple (si supporté)

```bash
npx shadcn@latest add accordion select tabs textarea badge carousel
```

---

## ⚙️ Étape 3 : Configuration des variables d'environnement

Créer le fichier `.env.local` à la racine du projet :

```bash
# .env.local

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Mapbox (optionnel pour la page contact)
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here

# Supabase (si utilisé)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🧪 Étape 4 : Vérifier l'installation

### Lancer le serveur de développement

```bash
npm run dev
```

### Vérifier les erreurs TypeScript

```bash
npm run type-check
```

### Vérifier les erreurs Lint

```bash
npm run lint
```

### Formater le code

```bash
npm run format
```

---

## 📁 Étape 5 : Créer les dossiers manquants

Si certains dossiers n'existent pas encore :

```bash
# Windows PowerShell
New-Item -Path "src\features\tours\components" -ItemType Directory -Force
New-Item -Path "src\features\tours\hooks" -ItemType Directory -Force
New-Item -Path "src\features\tours\services" -ItemType Directory -Force
New-Item -Path "src\features\tours\types" -ItemType Directory -Force

New-Item -Path "src\features\testimonials\components" -ItemType Directory -Force
New-Item -Path "src\features\testimonials\hooks" -ItemType Directory -Force
New-Item -Path "src\features\testimonials\services" -ItemType Directory -Force
New-Item -Path "src\features\testimonials\types" -ItemType Directory -Force

New-Item -Path "src\features\home\components" -ItemType Directory -Force
New-Item -Path "src\features\home\hooks" -ItemType Directory -Force
New-Item -Path "src\features\home\services" -ItemType Directory -Force
New-Item -Path "src\features\home\types" -ItemType Directory -Force

New-Item -Path "src\features\about\components" -ItemType Directory -Force
New-Item -Path "src\features\about\hooks" -ItemType Directory -Force
New-Item -Path "src\features\about\services" -ItemType Directory -Force
New-Item -Path "src\features\about\types" -ItemType Directory -Force

New-Item -Path "src\features\services-page\components" -ItemType Directory -Force
New-Item -Path "src\features\services-page\hooks" -ItemType Directory -Force
New-Item -Path "src\features\services-page\services" -ItemType Directory -Force
New-Item -Path "src\features\services-page\types" -ItemType Directory -Force

New-Item -Path "src\features\conditions\components" -ItemType Directory -Force
New-Item -Path "src\features\conditions\hooks" -ItemType Directory -Force
New-Item -Path "src\features\conditions\services" -ItemType Directory -Force
New-Item -Path "src\features\conditions\types" -ItemType Directory -Force

New-Item -Path "src\features\contact\components" -ItemType Directory -Force
New-Item -Path "src\features\contact\hooks" -ItemType Directory -Force
New-Item -Path "src\features\contact\services" -ItemType Directory -Force
New-Item -Path "src\features\contact\types" -ItemType Directory -Force
```

### Linux/Mac

```bash
mkdir -p src/features/tours/{components,hooks,services,types}
mkdir -p src/features/testimonials/{components,hooks,services,types}
mkdir -p src/features/home/{components,hooks,services,types}
mkdir -p src/features/about/{components,hooks,services,types}
mkdir -p src/features/services-page/{components,hooks,services,types}
mkdir -p src/features/conditions/{components,hooks,services,types}
mkdir -p src/features/contact/{components,hooks,services,types}
```

---

## ✅ Checklist de vérification

Après avoir exécuté toutes les commandes, vérifiez :

- [ ] `npm install` a réussi sans erreurs
- [ ] Tous les composants Shadcn/ui sont installés
- [ ] Le fichier `.env.local` est créé avec les bonnes variables
- [ ] `npm run dev` démarre le serveur sans erreur
- [ ] `npm run type-check` ne retourne pas d'erreurs TypeScript
- [ ] Les dossiers des features sont créés

---

## 🐛 Résolution de problèmes courants

### Erreur : "Cannot find module '@/lib/utils'"

**Solution :** Le fichier existe déjà dans `src/lib/utils.ts`, vérifiez votre `tsconfig.json`

### Erreur : "Module not found: Can't resolve 'axios'"

**Solution :** Exécutez `npm install axios`

### Erreur : Shadcn ne trouve pas `components.json`

**Solution :** Le fichier existe déjà, vérifiez qu'il contient bien la configuration

### Erreur TypeScript sur les imports de features

**Solution :** Redémarrez le serveur TypeScript dans VS Code (Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server")

---

## 📚 Prochaines étapes

Une fois toutes les dépendances installées, vous pouvez :

1. ✅ Commencer par créer la **feature `tours`** (voir planning détaillé)
2. ✅ Créer la **feature `testimonials`**
3. ✅ Créer la **feature `home`**
4. ✅ Créer les autres features (about, services, conditions, contact)
5. ✅ Créer les pages dans `src/app/(frontoffice)/`
6. ✅ Créer les API routes dans `src/app/api/`

Référez-vous au fichier **INTEGRATION_STATUS.md** pour suivre votre progression.
