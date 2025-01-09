import { create } from "zustand";

interface InputStore {
  searchInput: string;
  setSearchInput: (val: string) => void;
  categoryInput: string;
  setCategoryInput: (val: string) => void;
}
export const useInputStore = create<InputStore>((set) => ({
  searchInput: "",
  setSearchInput: (val) => set(() => ({ searchInput: val })),
  categoryInput: "",
  setCategoryInput: (val) => set(() => ({ categoryInput: val })),
}));
