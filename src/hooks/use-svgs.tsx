import { getAllSvgs } from "@/actions/get-svgs";
import { useQuery } from "@tanstack/react-query";

function useSvgs() {
  const {
    data: svgs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["svgs"],
    queryFn: getAllSvgs,
  });

  return { svgs, isLoading, error };
}

export { useSvgs };
