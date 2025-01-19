import { type Item } from "@/actions/get-svgs";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type ItemOptions } from "../config";
import { useSelectedItemsStore } from "./selected-items";

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
      name: "items",
    },
  ),
);

function addItem(item: Item, options: ItemOptions) {
  const state = useItemsStore.getState();
  if (state.items.find((i) => i.data.name === item.name)) return;

  useItemsStore.setState((state) => ({
    items: state.items.concat({ data: item, options }),
  }));
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

  useSelectedItemsStore.setState((state) => {
    return {
      selectedItems: state.selectedItems.filter(
        (i) => i.name !== targetItem.data.name,
      ),
    };
  });
}

function clearItems() {
  useItemsStore.setState(() => {
    return {
      items: [],
    };
  });

  useSelectedItemsStore.setState(() => {
    return {
      selectedItems: [],
    };
  });
}

export const useIsItemsEmpty = () =>
  useItemsStore((state) => state.items.length === 0);

export { addItem, clearItems, removeItem, useItemsStore };
