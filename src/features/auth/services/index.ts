/**
 * Auth Services
 */

import type { AuthResponse, LoginCredentials, RegisterData } from "../types";

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // TODO: Implémenter l'appel API
    throw new Error("Not implemented");
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    // TODO: Implémenter l'appel API
    throw new Error("Not implemented");
  },

  async logout(): Promise<void> {
    // TODO: Implémenter la déconnexion
    throw new Error("Not implemented");
  },

  async getCurrentUser(): Promise<AuthResponse["user"]> {
    // TODO: Implémenter la récupération de l'utilisateur actuel
    throw new Error("Not implemented");
  },
};
