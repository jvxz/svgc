"use client";
import { Input } from "@/components/ui/input";
import { useInputStore } from "@/lib/store/input";
import { useEffect, useRef } from "react";

export function SVGNavbar() {
  const { searchInput, setSearchInput } = useInputStore();
  const inputRef = useRef<HTMLInputElement>(null);

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
    <div className="flex-1 space-y-2 border-b border-border p-4">
      <div className="relative">
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
    </div>
  );
}
