import { type Item } from "@/actions/get-svgs";
import { create } from "zustand";

type SelectedItemsState = {
  selectedItems: Item[];
};

export const useSelectedItemsStore = create<SelectedItemsState>((_) => ({
  selectedItems: [],
}));

export function setSelectedItem(item: Item) {
  const state = useSelectedItemsStore.getState();
  if (state.selectedItems.includes(item)) return;

  useSelectedItemsStore.setState(() => ({
    selectedItems: [item],
  }));
}

export function addSelectedItem(item: Item) {
  const state = useSelectedItemsStore.getState();
  if (state.selectedItems.includes(item)) return;

  useSelectedItemsStore.setState((state) => ({
    selectedItems: state.selectedItems.concat(item),
  }));
}

export function removeSelectedItem(item: Item) {
  const state = useSelectedItemsStore.getState();
  const targetItem = state.selectedItems.find((i) => i.name === item.name);
  if (!targetItem) return;

  useSelectedItemsStore.setState((state) => ({
    selectedItems: state.selectedItems.filter(
      (i) => i.name !== targetItem.name,
    ),
  }));
}
