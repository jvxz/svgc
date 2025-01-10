import { GridBackground } from "@/components/GridBackground";
import { ShoppingBag } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-1 overflow-y-auto">
      <div className="grid size-1/2 h-full place-items-center border-r border-border">
        <GridBackground>
          <ShoppingBag className="size-1/5" />
        </GridBackground>
      </div>
      <div className="size-1/2 h-full"></div>
    </div>
  );
}
