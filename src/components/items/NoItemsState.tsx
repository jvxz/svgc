import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";
import Link from "next/link";

function NoItemsState() {
  return (
    <div
      className={cn(
        "motion-preset-focus border-border bg-background text-center hover:border-border/80",
        "w-[40%] rounded-xl border-2 border-dashed p-14",
        "group transition duration-500 hover:bg-muted hover:duration-200",
      )}
    >
      <div className="isolate flex justify-center">
        <div className="relative left-2.5 top-1.5 grid size-12 -rotate-6 place-items-center rounded-xl bg-background shadow-lg ring-1 ring-border transition duration-500 group-hover:-translate-x-5 group-hover:-translate-y-0.5 group-hover:-rotate-12 group-hover:duration-200">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image />
        </div>
        <div className="relative z-10 grid size-12 place-items-center rounded-xl bg-background shadow-lg ring-1 ring-border transition duration-500 group-hover:-translate-y-0.5 group-hover:duration-200">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image />
        </div>
        <div className="relative right-2.5 top-1.5 grid size-12 rotate-6 place-items-center rounded-xl bg-background shadow-lg ring-1 ring-border transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-5 group-hover:rotate-12 group-hover:duration-200">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image />
        </div>
      </div>
      <h2 className="mt-6 font-medium text-foreground">No items selected</h2>
      <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">
        Select an item from the main page to display it here.
      </p>
      <Button asChild className={cn("mt-4", "shadow-sm active:shadow-none")}>
        <Link href="/">Browse items</Link>
      </Button>
    </div>
  );
}

export { NoItemsState };
