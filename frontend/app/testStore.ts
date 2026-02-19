import { create } from "zustand";
import type { pitanje } from "./hooks/useTestData";

interface TestState {
  pitanja: pitanje[];
  setPitanja: (p: pitanje[]) => void;
}

export const useTestStore = create<TestState>((set) => ({
  pitanja: [],
  setPitanja: (p) => set({ pitanja: p }),
}));
