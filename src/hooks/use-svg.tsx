import { getSvgData } from "@/actions/get-svgs";
import { type ItemOptions } from "@/lib/config";
import { useQuery } from "@tanstack/react-query";

function useSvg(name: string | undefined, options: ItemOptions | undefined) {
  const {
    data: svg,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["svg", name, options],
    queryFn: () => getSvgData(name, options),
    enabled: !!name,
  });

  return { svg, isLoading, error };
}

export { useSvg };
