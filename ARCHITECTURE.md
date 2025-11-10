# Architecture Madabest Frontend

## 🏗️ Vue d'ensemble

L'application utilise une **architecture feature-based** qui organise le code par fonctionnalité métier plutôt que par type technique. Cette approche améliore la maintenabilité, la scalabilité et facilite le travail en équipe.

## 📐 Principes Architecturaux

### 1. Séparation des Responsabilités

```
features/           → Fonctionnalités métier (auth, users, etc.)
shared/             → Configuration et utilitaires centralisés
app/                → Routing et pages Next.js
```

### 2. Encapsulation

Chaque feature expose une **API publique** via son `index.ts` :

```typescript
// ✅ Correct - Import depuis l'API publique
import { authService, LoginCredentials } from "@/features/auth";

// ❌ Incorrect - Accès direct aux internals
import { authService } from "@/features/auth/services/authService";
```

### 3. Isolation

Les features sont **indépendantes** les unes des autres. Pour partager du code :

- Utiliser `@/shared` pour les utilitaires globaux
- Utiliser `@/features/shared` pour le code partagé entre features

## 📁 Structure Détaillée

### `/src/app` - Routing Next.js 15

```
app/
├── (auth)/              # Route group sans segment URL
│   ├── login/
│   │   └── page.tsx     # /login
│   ├── register/
│   │   └── page.tsx     # /register
│   └── layout.tsx       # Layout commun pour auth
│
├── (dashboard)/         # Route group pour le dashboard
│   ├── page.tsx         # /dashboard
│   ├── users/
│   │   └── page.tsx     # /dashboard/users
│   ├── settings/
│   │   └── page.tsx     # /dashboard/settings
│   └── layout.tsx       # Layout avec sidebar
│
├── layout.tsx           # Root layout
├── page.tsx             # Page d'accueil (/)
└── globals.css          # Styles globaux + Tailwind
```

**Route Groups** : Les dossiers `(auth)` et `(dashboard)` n'affectent pas l'URL mais permettent d'organiser les layouts.

### `/src/features` - Features Métier

Chaque feature suit cette structure :

```
features/
├── auth/
│   ├── components/      # Composants UI spécifiques
│   │   ├── LoginForm.tsx
│   │   └── index.ts
│   ├── hooks/           # Hooks React
│   │   ├── useAuth.ts
│   │   └── index.ts
│   ├── services/        # Logique métier + API calls
│   │   ├── authService.ts
│   │   └── index.ts
│   ├── types/           # Types TypeScript
│   │   └── index.ts
│   ├── utils/           # Utilitaires (optionnel)
│   │   └── index.ts
│   └── index.ts         # 🎯 API publique de la feature
```

#### Règles pour les Features

1. **Chaque sous-dossier a un `index.ts`** qui exporte ce qui doit être public
2. **Le `index.ts` racine** de la feature réexporte tout
3. **Imports relatifs** uniquement à l'intérieur d'une feature
4. **Pas d'imports directs** entre features (utiliser `@/features/shared`)

### `/src/features/design-system` - Design System

```
design-system/
├── components/
│   ├── ui/              # Composants Shadcn/ui
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── showcase/        # Composants de démo
│   └── index.ts
├── hooks/
│   ├── useTheme.ts
│   └── index.ts
├── services/
│   ├── themeService.ts
│   └── index.ts
├── types/
│   └── index.ts
├── components.json      # Config Shadcn/ui
└── index.ts
```

**Installation Shadcn/ui** :

```bash
npx shadcn@latest add button
# Sera installé dans: src/features/design-system/components/ui/
```

### `/src/shared` - Configuration Centralisée

```
shared/
├── config/
│   └── routes.ts        # Constantes des routes
├── constants/
│   └── appConfig.ts     # Config de l'app
├── types/
│   └── common.types.ts  # Types partagés
├── utils/
│   └── apiClient.ts     # Client HTTP
├── components/          # Composants globaux
└── index.ts
```

**Usage** :

```typescript
import { ROUTES, appConfig, apiClient } from "@/shared";
```

### `/src/features/shared` - Code Partagé entre Features

Pour le code partagé entre features mais non global :

```typescript
// Dans une feature
import { commonValidation } from "@/features/shared";
```

## 🔄 Flux de Données

### 1. Appel API Standard

```typescript
// 1. Component appelle le service
const LoginForm = () => {
  const handleLogin = async (data: LoginCredentials) => {
    const result = await authService.login(data);
  };
};

// 2. Service utilise apiClient
export const authService = {
  async login(credentials: LoginCredentials) {
    return apiClient.post<AuthResponse>("/auth/login", credentials);
  },
};

// 3. apiClient gère l'authentification et les erreurs
class ApiClient {
  async post<T>(endpoint: string, data: unknown) {
    // Ajoute le token
    // Gère les erreurs
    // Parse la réponse
  }
}
```

### 2. Gestion d'État (futur)

Pour la gestion d'état complexe, ajouter dans la feature :

```
features/auth/
├── store/              # État global de la feature
│   ├── authStore.ts
│   └── index.ts
└── index.ts
```

## 🎯 Patterns de Code

### Pattern Service

```typescript
// features/users/services/usersService.ts
export const usersService = {
  async getAll(): Promise<User[]> {
    const response = await apiClient.get<User[]>("/users");
    return response.data;
  },

  async getById(id: string): Promise<User> {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  },
};
```

### Pattern Hook

```typescript
// features/users/hooks/useUsers.ts
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    usersService
      .getAll()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
};
```

### Pattern Component

```typescript
// features/users/components/UserList.tsx
import { useUsers } from '../hooks';

export const UserList = () => {
  const { users, loading } = useUsers();

  if (loading) return <Spinner />;

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
```

## 🚀 Workflow de Développement

### Ajouter une Nouvelle Feature

1. **Créer la structure**

```bash
mkdir -p src/features/ma-feature/{components,hooks,services,types}
```

2. **Créer les fichiers de base**

```typescript
// src/features/ma-feature/types/index.ts
export interface MyType { ... }

// src/features/ma-feature/services/index.ts
export const myService = { ... }

// src/features/ma-feature/index.ts
export * from './types';
export * from './services';
```

3. **Ajouter à l'index global**

```typescript
// src/features/index.ts
export * as MaFeature from "./ma-feature";
```

### Ajouter un Composant UI

```bash
# Avec Shadcn/ui
npx shadcn@latest add dialog

# Le composant sera dans:
# src/features/design-system/components/ui/dialog.tsx
```

### Ajouter une Route

1. **Créer la page**

```typescript
// src/app/(dashboard)/ma-page/page.tsx
export default function MaPage() { ... }
```

2. **Ajouter la route**

```typescript
// src/shared/config/routes.ts
export const ROUTES = {
  ...
  MA_PAGE: "/dashboard/ma-page",
};
```

## 📊 Diagramme de Dépendances

```
┌─────────────────────────────────────┐
│           app/ (Pages)              │
│   ┌─────────────────────────────┐   │
│   │     Route Groups            │   │
│   └─────────────────────────────┘   │
└─────────────┬───────────────────────┘
              │ imports
              ▼
┌─────────────────────────────────────┐
│      features/ (Business Logic)     │
│   ┌──────────┬──────────┬────────┐  │
│   │  auth    │  users   │  ...   │  │
│   └──────────┴──────────┴────────┘  │
└─────────────┬───────────────────────┘
              │ imports
              ▼
┌─────────────────────────────────────┐
│    shared/ (Core Infrastructure)    │
│   ┌─────────────────────────────┐   │
│   │  config, utils, types       │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

## 🔒 Règles Strictes

### ✅ À FAIRE

- Importer depuis les `index.ts` de features
- Utiliser les alias TypeScript (`@/features`, `@/shared`)
- Chaque feature est autonome
- Partager via `@/shared` ou `@/features/shared`

### ❌ À ÉVITER

- Imports directs dans les sous-dossiers de features
- Dépendances circulaires entre features
- Code métier dans `/src/shared`
- Logique dans les composants de page (`app/`)

## 📚 Références

- [Next.js App Router](https://nextjs.org/docs/app)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
