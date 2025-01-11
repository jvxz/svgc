"use client";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { ItemsCodeBlock } from "./ItemsCodeBlock";

function ItemsExport() {
  return (
    <section className="flex h-full w-1/2 flex-col">
      <div className="min-h-16 border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Checkbox id={`test-a`} />
            <Label htmlFor={`test-a`}>Persist brand colors</Label>
          </div>
        </div>
      </div>
      <ItemsCodeBlock />
    </section>
  );
}

export { ItemsExport };
