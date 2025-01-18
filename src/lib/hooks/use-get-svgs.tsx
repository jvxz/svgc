import { useQuery } from "@tanstack/react-query";
import { getAllSvgs } from "../../actions/get-svgs";

function useGetSvgs() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["svgs"],
    queryFn: getAllSvgs,
  });

  return { data, isLoading, error };
}

export { useGetSvgs };
