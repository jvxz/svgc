import { type Logo, type LogoList } from "@/actions/get-svgs";
import { create } from "zustand";

interface ItemsStore {
  items: LogoList;
  addItem: (item: Logo) => void;
  removeItem: (item: Logo) => void;
}
export const useItemsStore = create<ItemsStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== item.name),
    })),
}));
