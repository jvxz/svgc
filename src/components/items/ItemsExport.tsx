"use client";
import { type FormatSvgMode } from "@/actions/format-svg";
import { ItemsConfig } from "@/app/(app)/items/ItemsConfig";
import { useState } from "react";
import { ItemsCodeBlock } from "./ItemsCodeBlock";

function ItemsExport() {
  const [mode, setMode] = useState<FormatSvgMode>({
    addSizeProps: true,
    retainBrandColors: true,
  });

  return (
    <section className="flex h-full w-1/2 flex-col">
      <ItemsConfig mode={mode} setMode={setMode} />
      <ItemsCodeBlock mode={mode} />
    </section>
  );
}

export { ItemsExport };
