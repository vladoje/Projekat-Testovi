import { create } from "zustand";
interface RjesenjaState {
  rjesenja: boolean[];
  choises: ChoisesState[];
  dodaj: (bool: boolean) => void;
  oduzmi: () => void;
  zapamtiOdgovor: (i: number, choisesMade?: string[]) => void;
  resetState: () => void;
}
export interface ChoisesState {
  i: number;
  checkedAnswers?: string[];
}
export const useRjesenja = create<RjesenjaState>()((set) => ({
  rjesenja: [],
  choises: [],
  dodaj: (bool: boolean) =>
    set((state) => ({ rjesenja: [...state.rjesenja, bool] })),
  oduzmi: () =>
    set((state) => ({
      rjesenja: state.rjesenja.slice(0, -1),
    })),
  zapamtiOdgovor: (i: number, choisesMade?: string[]) => {
    set((state) => {
      // 1. Filtriramo niz tako da izbacimo stari unos za to pitanje ako postoji
      // Ovo je najsigurniji način da izbjegnemo dupliranje
      const ostaliChoices = state.choises.filter((c) => c.i !== i);

      // 2. Kreiramo novi objekat odgovora
      const noviUnos = { i, checkedAnswers: choisesMade };

      // 3. Vraćamo novi niz koji sadrži sve stare plus ovaj novi/izmjenjeni
      // Dodajemo .sort() na kraju da bi niz uvijek bio u redu: 1, 2, 3...
      const sortiraniChoices = [...ostaliChoices, noviUnos].sort(
        (a, b) => a.i - b.i,
      );

      return { choises: sortiraniChoices };
    });
  },
  resetState: () =>
    set(() => {
      return { rjesenja: [], choises: [] };
    }),
}));
