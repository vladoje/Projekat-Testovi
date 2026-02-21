import { create } from "zustand";
export interface User {
  id: number;
  username: string;
  email: string;
  category: string;
  rijesio_testova: number;
}
interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,

  setUser: (user) => set(() => ({ user })),

  resetUser: () => set(() => ({ user: null })),
}));
