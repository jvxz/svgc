"use client";
import { useSVGViewModeStore } from "@/lib/store/svg-view-mode";
import { Grid3x3, LayoutList } from "lucide-react";
import { Button } from "../ui/button";

function SVGViewAs() {
  const { viewMode, setViewMode } = useSVGViewModeStore();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setViewMode(viewMode === "grid" ? "list" : "grid");
      }}
    >
      {viewMode === "grid" ? <Grid3x3 size={16} /> : <LayoutList size={16} />}
    </Button>
  );
}

export { SVGViewAs };
