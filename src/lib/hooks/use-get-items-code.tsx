import { type FormatSvgMode } from "@/actions/format-svg";
import { getItemsCode } from "@/actions/get-items-code";
import { type Logo } from "@/actions/get-svgs";
import { useQuery } from "@tanstack/react-query";

function useGetItemsCode(items: Logo[], mode: FormatSvgMode) {
  const { data, isLoading, error } = useQuery({
    queryKey: [items, mode],
    queryFn: () => getItemsCode(items, mode),
  });

  return { data, isLoading, error };
}

export { useGetItemsCode };
