import { type Logo, type LogoList } from "@/actions/get-svgs";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ItemsStore {
  items: LogoList;
  removeItem: (item: Logo) => void;
  clearItems: () => void;
  addItem: (item: Logo) => void;
  selectedItemIndex: number;
  setSelectedItemIndex: (index: number) => void;
  selectedItemIndexes: number[] | null;
  setSelectedItemIndexes: (indexes: number[] | null) => void;
}
export const useItemsStore = create<ItemsStore>()(
  persist(
    (set) => ({
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
      selectedItemIndexes: null,
      setSelectedItemIndexes: (indexes) =>
        set({ selectedItemIndexes: indexes }),
    }),
    {
      name: "items",
    },
  ),
);
