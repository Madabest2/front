/**
 * Auth Utils
 */

export const tokenStorage = {
  set(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  },

  get(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  },

  remove(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
    }
  },
};
