import { getItemCode } from "@/actions/get-item-code";
import { useSelectedItemStore } from "@/lib/store/selected-item";
import { useQuery } from "@tanstack/react-query";

function useItemCodeQuery() {
  const { selectedItem } = useSelectedItemStore();

  const {
    data: itemCode,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["item-query", selectedItem?.name],
    queryFn: () => getItemCode(selectedItem?.files[0] ?? ""),
  });

  return { itemCode, isLoading, error };
}

export { useItemCodeQuery };
