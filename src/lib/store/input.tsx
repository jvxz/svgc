import { create } from "zustand";

interface InputStore {
  searchInput: string;
  setSearchInput: (val: string) => void;
  itemInput: string;
  setItemInput: (val: string) => void;
}
export const useInputStore = create<InputStore>((set) => ({
  searchInput: "",
  setSearchInput: (val) => set(() => ({ searchInput: val })),
  itemInput: "",
  setItemInput: (val) => set(() => ({ itemInput: val })),
}));
