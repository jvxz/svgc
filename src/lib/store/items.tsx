import { type Logo, type LogoList } from "@/actions/get-svgs";
import { create } from "zustand";

interface ItemsStore {
  items: LogoList;
  removeItem: (item: Logo) => void;
  setSelectedItem: (item: Logo) => void;
  selectedItem: Logo | null;
  selectedItemIndex: number;
  addItem: (item: Logo) => void;
  setSelectedItemIndex: (index: number) => void;
}
export const useItemsStore = create<ItemsStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== item.name),
    })),
  setSelectedItem: (item) => set({ selectedItem: item }),
  selectedItem: null,
  selectedItemIndex: 0,
  setSelectedItemIndex: (index) => set({ selectedItemIndex: index }),
}));
