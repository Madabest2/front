/**
 * Users Services
 */

import type { CreateUserData, UpdateUserData, User } from "../types";

export const usersService = {
  async getAll(): Promise<User[]> {
    // TODO: Implémenter l'appel API
    throw new Error("Not implemented");
  },

  async getById(id: string): Promise<User> {
    // TODO: Implémenter l'appel API
    throw new Error("Not implemented");
  },

  async create(data: CreateUserData): Promise<User> {
    // TODO: Implémenter l'appel API
    throw new Error("Not implemented");
  },

  async update(id: string, data: UpdateUserData): Promise<User> {
    // TODO: Implémenter l'appel API
    throw new Error("Not implemented");
  },

  async delete(id: string): Promise<void> {
    // TODO: Implémenter l'appel API
    throw new Error("Not implemented");
  },
};
