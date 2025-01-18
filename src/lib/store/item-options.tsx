import { type Item } from "@/actions/get-svgs";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type ItemOptions } from "../config";

interface ItemOptionsStore {
  itemOptions:
    | {
        item: Item;
        options: ItemOptions;
      }[]
    | null;
  setItemOptions: (item: Item, options: ItemOptions) => void;
}
export const useItemOptionsStore = create<ItemOptionsStore>()(
  persist(
    (set) => ({
      itemOptions: null,
      setItemOptions: (item, options) =>
        set({ itemOptions: [{ item, options }] }),
    }),
    {
      name: "item-options",
    },
  ),
);

export function addItemOptions(item: Item, options: ItemOptions) {}
