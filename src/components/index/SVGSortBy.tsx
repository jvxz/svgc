"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpAZ, ChevronDown } from "lucide-react";
import { useState } from "react";

function SVGSortBy() {
  const [framework, setFramework] = useState("nextjs");

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger disabled asChild>
          <Button className="rounded-r-none" variant="outline">
            Sort by
            <ChevronDown
              className="-me-1 ms-2 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={framework}
            onValueChange={setFramework}
          >
            <DropdownMenuRadioItem value="nextjs">Name</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="sveltekit">
              Popularity
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        disabled
        size="icon"
        className="rounded-l-none border-l-0"
        variant="outline"
      >
        {/* <ArrowUpZA size={16} /> */}
        <ArrowUpAZ size={16} />
      </Button>
    </div>
  );
}

export { SVGSortBy };
