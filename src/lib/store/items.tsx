import { type Logo, type LogoList } from "@/actions/get-svgs";
import { create } from "zustand";

interface ItemsStore {
  items: LogoList;
  removeItem: (item: Logo) => void;
  clearItems: () => void;
  selectedItemIndex: number;
  addItem: (item: Logo) => void;
  setSelectedItemIndex: (index: number) => void;
}
export const useItemsStore = create<ItemsStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      if (state.items.find((i) => i.name === item.name)) {
        return state;
      }
      return { items: [...state.items, item] };
    }),
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== item.name),
    })),
  selectedItemIndex: 0,
  setSelectedItemIndex: (index) => set({ selectedItemIndex: index }),
  clearItems: () => set({ items: [] }),
}));
