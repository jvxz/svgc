import { type Item } from "@/actions/get-svgs";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { type ItemOptions } from "../config";

type ItemsState = {
  items: {
    data: Item;
    options: ItemOptions;
  }[];
};

const useItemsStore = create<ItemsState>()(
  persist(
    (_) => ({
      items: [],
    }),
    {
      name: "items-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

function addItem(item: Item, options: ItemOptions) {
  const state = useItemsStore.getState();
  if (state.items.find((i) => i.data.name === item.name)) return;

  useItemsStore.setState((state) => {
    return {
      items: [...state.items, { data: item, options }],
    };
  });
}

function removeItem(item: Item) {
  const state = useItemsStore.getState();
  const targetItem = state.items.find((i) => i.data.name === item.name);
  if (!targetItem) return;

  useItemsStore.setState((state) => {
    return {
      items: state.items.filter((i) => i.data.name !== targetItem.data.name),
    };
  });
}

function clearItems() {
  useItemsStore.setState(() => {
    return {
      items: [],
    };
  });
}

export { addItem, clearItems, removeItem, useItemsStore };
