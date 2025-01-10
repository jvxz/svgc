import { type iSVG } from "@/actions/get-svgs";
import { create } from "zustand";

interface ItemsStore {
  items: iSVG[];
  addItem: (item: iSVG) => void;
  removeItem: (item: iSVG) => void;
}
export const useItemsStore = create<ItemsStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== item.id) })),
}));
