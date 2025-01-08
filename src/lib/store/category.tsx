import { create } from "zustand";

interface CategoryStore {
  category: string;
  setCategory: (val: string) => void;
}
export const useCategoryStore = create<CategoryStore>((set) => ({
  category: "Software",
  setCategory: (val) => set(() => ({ category: val })),
}));
