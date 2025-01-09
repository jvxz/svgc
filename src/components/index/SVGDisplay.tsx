"use client";
import { type iSVG } from "@/actions/get-svgs";
import { PAGE_SIZE } from "@/lib/config";
import { useTotalPagesStore } from "@/lib/store/total-pages";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";

function SVGDisplay({ svgs }: { svgs: iSVG[] }) {
  const { setTotalPages } = useTotalPagesStore();
  const [page] = useQueryState("page");

  const currentPage = page ? parseInt(page) : 1;
  const svgsSection = svgs.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  useEffect(() => {
    if (svgs) setTotalPages(Math.floor(svgs.length / PAGE_SIZE));
  }, [setTotalPages, svgs]);

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-wrap justify-around gap-6 p-6">
        {svgsSection ? (
          svgsSection.map((svg) => {
            return <SVGCard key={svg.id} svg={svg} />;
          })
        ) : (
          <p>No svgs found</p>
        )}
      </div>
    </ScrollArea>
  );
}

export { SVGDisplay };
