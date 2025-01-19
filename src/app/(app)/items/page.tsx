import { ItemsCodeBlock } from "@/components/items/ItemsCodeBlock";
import { ItemsConfig } from "@/components/items/ItemsConfig";
import { ItemsDisplay } from "@/components/items/ItemsDisplay";
import { ItemsNav } from "@/components/items/ItemsNav";

export default function Page() {
  return (
    <div className="motion-preset-fade-sm flex w-full flex-col">
      <ItemsNav />
      <div className="grid h-full w-full grid-cols-3">
        <ItemsConfig />
        <div className="flex h-full w-full flex-col">
          <ItemsDisplay />
          <ItemsCodeBlock />
        </div>
      </div>
    </div>
  );
}
