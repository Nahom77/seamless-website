import { create } from "zustand";

export type User =
  | {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      email: string;
      emailVerified: boolean;
      name: string;
      image?: string | null | undefined;
      banned: boolean | null | undefined;
      role?: string | null | undefined;
      banReason?: string | null | undefined;
      banExpires?: Date | null | undefined;
    }
  | undefined;

interface UserState {
  user: User;
  setUser: (user: any | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: undefined }),
}));
