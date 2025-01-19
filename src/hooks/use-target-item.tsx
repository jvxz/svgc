import { useItemsStore } from "@/lib/store/items";
import { useSelectedItemsStore } from "@/lib/store/selected-items";

export function useTargetItem() {
  const { selectedItems } = useSelectedItemsStore();
  const { items } = useItemsStore();

  const targetItem = items.find((i) => i.data.name === selectedItems[0]?.name);
  return targetItem;
}
