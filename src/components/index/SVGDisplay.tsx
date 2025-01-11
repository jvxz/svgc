"use client";
import { getAllSvgs } from "@/actions/get-svgs";
import { useInputStore } from "@/lib/store/input";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";
import { SVGDisplaySuspense } from "./SVGDisplaySuspense";

function SVGDisplay() {
  const { searchInput } = useInputStore();
  const [svgsSection, setSvgSection] = useState(32);

  const { data, isLoading, error } = useQuery({
    queryKey: ["svgs"],
    queryFn: getAllSvgs,
  });

  useEffect(() => {
    setSvgSection(32);
  }, [searchInput]);

  const filteredSvgs = data?.filter((svg) => {
    return svg.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-1 flex-wrap justify-evenly gap-6 p-6">
        {isLoading && <SVGDisplaySuspense />}
        {data ? (
          data
            .filter((svg) => svg.name.includes(searchInput))
            .slice(0, svgsSection)
            .map((svg) => {
              return <SVGCard key={svg.name} svg={svg} />;
            })
        ) : (
          <div>No data</div>
        )}
        {error && <div>{error.message}</div>}
      </div>

      {svgsSection < (filteredSvgs?.length ?? 0) && (
        <ShowMoreButton
          svgsSection={svgsSection}
          setSvgSection={setSvgSection}
        />
      )}
    </ScrollArea>
  );
}

function ShowMoreButton({
  svgsSection,
  setSvgSection,
}: {
  svgsSection: number;
  setSvgSection: (svgsSection: number) => void;
}) {
  return (
    <div className="flex justify-center pb-4">
      <Button variant="ghost" onClick={() => setSvgSection(svgsSection + 32)}>
        Show more
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}

export { SVGDisplay };
