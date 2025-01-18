"use client";
import { Input } from "@/components/ui/input";
import { NAVBARS_HEIGHT } from "@/lib/config";
import { useInputStore } from "@/lib/store/input";
import { useEffect, useRef } from "react";
import { SVGSortBy } from "./SVGSortBy";
import { SVGViewAs } from "./SVGViewAs";

export function SVGNavbar() {
  return (
    <div
      className={`absolute top-0 z-10 flex w-full flex-1 items-center gap-2 border-b border-border bg-background/70 backdrop-blur-lg ${NAVBARS_HEIGHT} p-4`}
    >
      <SVGViewAs />
      <SVGSortBy />
      <SVGSearchInput />
    </div>
  );
}

function SVGSearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchInput, setSearchInput } = useInputStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && event.metaKey) {
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative flex-1">
      <Input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        ref={inputRef}
        className="pe-11"
        placeholder="Search..."
        type="search"
      />
      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
        <kbd className="inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
