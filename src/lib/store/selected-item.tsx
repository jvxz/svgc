import { type Logo } from "@/actions/get-svgs";
import { create } from "zustand";

interface SelectedItemStore {
  selectedItem: Logo | null;
  setSelectedItem: (item: Logo) => void;
  selectedItems: Logo[];
  setSelectedItems: (items: Logo[]) => void;
}
export const useSelectedItemStore = create<SelectedItemStore>()((set) => ({
  selectedItem: null,
  selectedItems: [],
  setSelectedItem: (item) => set({ selectedItem: item }),
  setSelectedItems: (items) => set({ selectedItems: items }),
}));
