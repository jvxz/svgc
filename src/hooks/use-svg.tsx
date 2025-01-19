import { getSvgData } from "@/actions/get-svgs";
import { useQuery } from "@tanstack/react-query";

function useSvg(name: string | undefined) {
  const {
    data: svg,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["svg", name],
    queryFn: () => getSvgData(name),
    enabled: !!name,
  });

  return { svg, isLoading, error };
}

export { useSvg };
