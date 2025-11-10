# Conventions de Nommage - Madabest Frontend

## 📁 Fichiers et Dossiers

### Dossiers

- **kebab-case** pour tous les dossiers
  ```
  ✅ auth-provider/
  ✅ user-settings/
  ❌ AuthProvider/
  ❌ userSettings/
  ```

### Fichiers TypeScript/React

- **PascalCase** pour les composants React

  ```
  ✅ LoginForm.tsx
  ✅ UserCard.tsx
  ❌ loginForm.tsx
  ❌ user-card.tsx
  ```

- **camelCase** pour les autres fichiers

  ```
  ✅ authService.ts
  ✅ useUsers.ts
  ✅ apiClient.ts
  ❌ AuthService.ts
  ❌ api-client.ts
  ```

- **index.ts** pour les points d'entrée
  ```
  ✅ index.ts
  ❌ Index.ts
  ```

### Fichiers de Configuration

- **kebab-case** ou **dot notation**
  ```
  ✅ .prettierrc.json
  ✅ commitlint.config.js
  ✅ tailwind.config.ts
  ❌ PrettierConfig.json
  ```

## 🎯 TypeScript

### Interfaces et Types

- **PascalCase** avec suffixe descriptif

  ```typescript
  ✅ interface User { }
  ✅ interface LoginCredentials { }
  ✅ type AuthResponse = { }
  ✅ type SortOrder = "asc" | "desc"

  ❌ interface user { }
  ❌ interface IUser { }  // Pas de préfixe I
  ❌ type authresponse = { }
  ```

### Enums

- **PascalCase** pour le nom, **SCREAMING_SNAKE_CASE** pour les valeurs

  ```typescript
  ✅ enum UserRole {
    ADMIN = "admin",
    USER = "user",
  }

  ❌ enum userRole { }
  ❌ enum UserRole {
    Admin = "admin",  // Pas de PascalCase pour les valeurs
  }
  ```

### Constantes

- **SCREAMING_SNAKE_CASE** pour les vraies constantes

  ```typescript
  ✅ const API_BASE_URL = "https://api.example.com";
  ✅ const MAX_RETRY_ATTEMPTS = 3;

  ❌ const apiBaseUrl = "...";
  ```

- **camelCase** pour les objets de configuration

  ```typescript
  ✅ export const appConfig = {
    name: "Madabest",
    api: { ... }
  };

  ❌ const APP_CONFIG = { ... };  // Trop strict
  ```

### Variables et Fonctions

- **camelCase** toujours

  ```typescript
  ✅ const userId = "123";
  ✅ function getUserById() { }
  ✅ const handleSubmit = () => { };

  ❌ const UserID = "123";
  ❌ function GetUserById() { }
  ```

## ⚛️ React

### Composants

- **PascalCase** obligatoire

  ```tsx
  ✅ export const LoginForm = () => { };
  ✅ export default function UserProfile() { }

  ❌ export const loginForm = () => { };
  ❌ const user_profile = () => { };
  ```

### Props

- **camelCase** + interface suffixée par `Props`

  ```tsx
  ✅ interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
  }

  export const Button = ({ onClick, disabled }: ButtonProps) => { };

  ❌ interface IButtonProps { }  // Pas de préfixe I
  ❌ interface button_props { }
  ```

### Hooks Personnalisés

- **camelCase** avec préfixe `use`

  ```typescript
  ✅ export const useAuth = () => { };
  ✅ export const useLocalStorage = () => { };

  ❌ export const UseAuth = () => { };
  ❌ export const authHook = () => { };  // Manque "use"
  ```

### Event Handlers

- Préfixe `handle` pour les handlers

  ```tsx
  ✅ const handleClick = () => { };
  ✅ const handleSubmit = async () => { };
  ✅ const handleInputChange = (e: ChangeEvent) => { };

  ❌ const onClick = () => { };  // Pas assez descriptif
  ❌ const click = () => { };
  ```

- Préfixe `on` pour les props

  ```tsx
  ✅ interface ButtonProps {
    onClick: () => void;
    onSubmit?: () => void;
  }

  ❌ interface ButtonProps {
    handleClick: () => void;  // "handle" est pour l'implémentation
  }
  ```

## 🎨 CSS / Tailwind

### Classes CSS Personnalisées

- **kebab-case**

  ```css
  ✅ .primary-button {
  }
  ✅ .nav-item-active {
  }

  ❌ .primaryButton {
  }
  ❌ .nav_item_active {
  }
  ```

### Variables CSS

- **kebab-case** avec préfixe descriptif

  ```css
  ✅ --madabest-primary: oklch(...);
  ✅ --color-background: var(--background);
  ✅ --radius-lg: 0.5rem;

  ❌ --primary: ...;  // Pas assez spécifique
  ❌ --MadabestPrimary: ...;
  ```

## 📦 Features et Modules

### Nommage des Features

- **kebab-case** pour les dossiers
- Nom singulier ou pluriel selon le contexte

  ```
  ✅ features/auth/
  ✅ features/users/
  ✅ features/design-system/

  ❌ features/Auth/
  ❌ features/user-management/  // Trop long
  ```

### Services

- Suffixe `Service` + **camelCase**

  ```typescript
  ✅ export const authService = { };
  ✅ export const usersService = { };

  ❌ export const auth = { };  // Pas assez clair
  ❌ export const AuthService = { };  // PascalCase pour les classes
  ```

### Stores (si utilisés)

- Suffixe `Store` + **camelCase**

  ```typescript
  ✅ export const authStore = create(() => ({ }));
  ✅ export const userStore = create(() => ({ }));

  ❌ export const auth = create(() => ({ }));
  ```

## 🛣️ Routes et URLs

### Constantes de Routes

- **SCREAMING_SNAKE_CASE** pour les clés

  ```typescript
  ✅ export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    USER_PROFILE: "/profile/:id",
  };

  ❌ const routes = {
    home: "/",
    Login: "/login",
  };
  ```

### Segments d'URL

- **kebab-case** toujours

  ```
  ✅ /dashboard/user-settings
  ✅ /auth/reset-password

  ❌ /dashboard/userSettings
  ❌ /auth/ResetPassword
  ```

## 🔧 Utilitaires et Helpers

### Fonctions Utilitaires

- **camelCase** + verbe descriptif

  ```typescript
  ✅ export const formatDate = () => { };
  ✅ export const calculateTotal = () => { };
  ✅ export const validateEmail = () => { };

  ❌ export const date = () => { };  // Pas un verbe
  ❌ export const FormatDate = () => { };
  ```

### Prédicats / Validateurs

- Préfixe `is`, `has`, `can`, etc.

  ```typescript
  ✅ export const isAuthenticated = () => boolean;
  ✅ export const hasPermission = () => boolean;
  ✅ export const canEdit = () => boolean;

  ❌ export const authenticated = () => boolean;
  ❌ export const permission = () => boolean;
  ```

## 📝 Commentaires

### Commentaires JSDoc

```typescript
/**
 * Authentifie un utilisateur avec ses identifiants
 * @param credentials - Email et mot de passe
 * @returns Données utilisateur et token
 * @throws {ApiError} Si les identifiants sont invalides
 */
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // ...
};
```

### Commentaires de Section

```typescript
// ============================================
// Types
// ============================================

// ============================================
// Services
// ============================================
```

### TODOs

```typescript
// TODO: Implémenter la validation côté serveur
// FIXME: Bug avec les dates en UTC
// NOTE: Cette fonction sera dépréciée en v2
```

## 🧪 Tests

### Fichiers de Test

- Même nom que le fichier + `.test.ts` ou `.spec.ts`

  ```
  ✅ authService.test.ts
  ✅ LoginForm.test.tsx
  ✅ useAuth.spec.ts

  ❌ auth.test.ts  // Pas assez spécifique
  ❌ test-auth-service.ts
  ```

### Tests de Composants

```typescript
describe("LoginForm", () => {
  it("should render login form", () => {});
  it("should validate email format", () => {});
  it("should call onSubmit when valid", () => {});
});
```

## 🎯 Résumé Rapide

| Type          | Convention           | Exemple              |
| ------------- | -------------------- | -------------------- |
| Dossier       | kebab-case           | `user-settings/`     |
| Composant     | PascalCase           | `UserCard.tsx`       |
| Fonction      | camelCase            | `getUserById()`      |
| Hook          | camelCase + use      | `useAuth()`          |
| Interface     | PascalCase           | `User`, `LoginProps` |
| Type          | PascalCase           | `AuthResponse`       |
| Enum          | PascalCase           | `UserRole`           |
| Constante     | SCREAMING_SNAKE_CASE | `API_URL`            |
| Config Object | camelCase            | `appConfig`          |
| Service       | camelCase + Service  | `authService`        |
| CSS Class     | kebab-case           | `.primary-button`    |
| CSS Variable  | kebab-case           | `--madabest-primary` |
| Route Key     | SCREAMING_SNAKE_CASE | `USER_PROFILE`       |
| URL Segment   | kebab-case           | `/user-settings`     |

## ✨ Exemples Complets

### Feature Auth

```
features/auth/
├── components/
│   ├── LoginForm.tsx          # PascalCase
│   └── index.ts
├── hooks/
│   ├── useAuth.ts             # camelCase + use
│   └── index.ts
├── services/
│   ├── authService.ts         # camelCase + Service
│   └── index.ts
├── types/
│   ├── index.ts
│   │   ├── User               # PascalCase
│   │   └── LoginCredentials   # PascalCase
└── index.ts
```

### Composant avec Props

```tsx
// UserCard.tsx
interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
  isEditable?: boolean;
}

export const UserCard = ({ user, onEdit, isEditable = false }: UserCardProps) => {
  const handleEditClick = () => {
    onEdit(user.id);
  };

  return <div className="user-card">{/* ... */}</div>;
};
```
