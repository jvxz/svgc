"use client";
import { getAllSvgs, type Logo } from "@/actions/get-svgs";
import { NAVBARS_HEIGHT_VALUE } from "@/lib/config";
import { useInputStore } from "@/lib/store/input";
import { useSVGViewMode } from "@/lib/store/svg-view-mode";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Toggle } from "../ui/toggle";
import { SVGDisplaySuspense } from "./SVGDisplaySuspense";

function SVGDisplay() {
  const { searchInput } = useInputStore();
  const [svgsSection, setSvgSection] = useState(32);
  const { viewMode } = useSVGViewMode();
  const { data, isLoading, error } = useQuery({
    queryKey: ["svgs"],
    queryFn: getAllSvgs,
  });

  useEffect(() => {
    setSvgSection(32);
  }, [searchInput]);

  const filteredSvgs = data
    // filter by search input
    ?.filter((svg) => {
      return svg.name.toLowerCase().includes(searchInput.toLowerCase());
    })
    // sort by name
    .sort((a, b) => a.name.localeCompare(b.name));

  // sections to display
  const slicedSvgs = filteredSvgs?.slice(0, svgsSection);

  return (
    <ScrollArea className="size-full">
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5"
            : "grid grid-cols-1 gap-4 p-4 lg:grid-cols-2"
        }
        style={{
          paddingTop: `${NAVBARS_HEIGHT_VALUE + 1}rem`,
        }}
      >
        {isLoading && <SVGDisplaySuspense />}

        {slicedSvgs?.map((svg) => {
          return viewMode === "grid" ? (
            <SVGCardGrid key={svg.name} svg={svg} />
          ) : (
            <SVGCardList key={svg.name} svg={svg} />
          );
        })}

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

function SVGCardGrid({ svg }: { svg: Logo }) {
  return (
    <div className="flex flex-col *:w-full">
      <Toggle className="relative flex h-48 cursor-pointer flex-col rounded-xl rounded-b-none border border-border text-center transition-all hover:bg-muted/30">
        <div className="absolute inset-0 size-full scale-[0.4] rounded-full bg-foreground opacity-10 blur-3xl dark:opacity-[10%]" />
        <Image
          loading="lazy"
          unoptimized
          src={`https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${"logo.svg"}`}
          alt="logo"
          // alt={svg.name + " logo"}
          width={48}
          height={48}
          className="size-20"
        />
      </Toggle>
      <Button
        asChild
        title="logo"
        className="rounded-t-none border-t-0"
        variant="outline"
      >
        <Link href="/" target="_blank">
          <p className="truncate">logo</p>
          <ExternalLink className="!size-3" />
        </Link>
      </Button>
    </div>
  );
}

function SVGCardList({ svg }: { svg: Logo }) {
  return (
    <div className="flex *:h-12">
      <Toggle
        variant="outline"
        className="w-full justify-start gap-2 rounded-r-none"
      >
        <Image
          loading="lazy"
          unoptimized
          src={`https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${"logo.svg"}`}
          alt="logo"
          // alt={svg.name + " logo"}
          width={48}
          height={48}
          className="size-8"
        />
        logo
      </Toggle>
      <Button asChild variant="outline" className="rounded-l-none border-l-0">
        <Link href="/" target="_blank">
          <ExternalLink />
        </Link>
      </Button>
    </div>
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
