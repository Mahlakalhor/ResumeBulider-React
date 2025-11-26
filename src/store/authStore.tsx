import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  userName: string | null;
  setAuth: (name: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem("token"),
  userName: localStorage.getItem("userName"),

  setAuth: (name: string) =>
    set(() => ({
      isAuthenticated: true,
      userName: name,
    })),
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");

    set(() => ({
      isAuthenticated: false,
      userName: null,
    }));
  },
}));
