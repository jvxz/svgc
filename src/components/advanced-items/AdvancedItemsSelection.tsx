"use client";
import { useItemsStore } from "@/lib/store/items";
import { Scaling } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Icon } from "../ui/logos";
import { Switch } from "../ui/switch";

const CONFIG_OPTIONS = [
  {
    id: "persist-brand-colors",
    label: "Persist brand colors",
    description: "Persist brand colors regardless of text color",
    icons: {
      unchecked: Icon.Javascript,
      checked: Icon.JavascriptCustom,
    },
  },
  {
    id: "add-size-props",
    label: "Add size props",
    description:
      "Add size props to the items: width, height, and size (width and height)",
    icons: {
      unchecked: Scaling,
      checked: Scaling,
    },
  },
];

function AdvancedItemsSelection() {
  const { items, selectedItemIndex, selectedItemIndexes } = useItemsStore();
  const selectedItem = items[selectedItemIndex];

  return (
    <div className="flex h-full w-2/3 flex-col">
      <div className="flex min-h-16 w-full items-center justify-between border-b border-border px-4">
        {selectedItemIndexes ? (
          <p className="text-2xl underline-offset-4">
            {selectedItemIndexes.length} items selected
          </p>
        ) : (
          <Link
            href={selectedItem?.url ?? ""}
            className="text-2xl underline-offset-4 hover:underline"
            target="_blank"
          >
            {selectedItem?.name}
          </Link>
        )}
        <Button
          disabled={
            selectedItemIndexes !== null || !selectedItem || items.length === 0
          }
          variant="destructive"
          className="aspect-square"
        >
          Delete
        </Button>
      </div>
      <div className="flex h-full flex-col gap-4 p-4">
        {CONFIG_OPTIONS.map((option) => (
          <ConfigOptionCard key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
}

function ConfigOptionCard({
  option,
}: {
  option: (typeof CONFIG_OPTIONS)[number];
}) {
  return (
    <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
      <Switch
        id={option.id}
        className="peer order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 [&_span]:data-[state=checked]:translate-x-2 rtl:[&_span]:data-[state=checked]:-translate-x-2"
        aria-describedby={`${option.id}-description`}
      />
      <div className="flex grow items-center gap-3 text-muted-foreground peer-data-[state=checked]:text-foreground peer-data-[state=unchecked]:[&_svg]:grayscale">
        <div className="max-size-6">
          <option.icons.unchecked className="block size-6 group-has-[[data-state=checked]]:hidden" />
          <option.icons.checked className="hidden size-6 group-has-[[data-state=checked]]:block" />
        </div>
        <div className="grid grow gap-2">
          <Label htmlFor={option.id} className="text-foreground">
            {option.label}
          </Label>
          <p
            id={`${option.id}-description`}
            className="text-xs text-muted-foreground"
          >
            {option.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export { AdvancedItemsSelection };
