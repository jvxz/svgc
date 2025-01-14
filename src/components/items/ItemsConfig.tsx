"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { NAVBARS_HEIGHT } from "@/lib/config";
import { useIconConfigStore } from "@/lib/store/icon-config";
import { useItemsStore } from "@/lib/store/items";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

function ItemsConfig() {
  const { items } = useItemsStore();
  const { mode, setMode } = useIconConfigStore();

  return (
    <div className={`border-b border-border ${NAVBARS_HEIGHT}`}>
      <div className="flex h-full items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              aria-label="Add size props"
              disabled={items.length === 0}
              checked={mode.addSizeProps}
              onCheckedChange={(checked) => {
                setMode({
                  ...mode,
                  addSizeProps:
                    checked === "indeterminate" ? undefined : checked,
                });
              }}
              id={`size-props`}
            />
            <Label htmlFor={`size-props`} aria-label="Add size props">
              Add size props
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              aria-label="Persist brand colors"
              checked={mode.retainBrandColors}
              disabled={items.length === 0}
              onCheckedChange={(checked) => {
                setMode({
                  ...mode,
                  retainBrandColors:
                    checked === "indeterminate" ? true : checked,
                });
              }}
              id={`brand-colors`}
            />
            <Label htmlFor={`brand-colors`} aria-label="Persist brand colors">
              Persist brand colors
            </Label>
          </div>
        </div>
        <Button asChild variant="link">
          <Link href="/items/advanced">
            Advanced <ExternalLink />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export { ItemsConfig };
