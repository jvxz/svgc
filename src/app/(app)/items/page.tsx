import { ItemsCodeBlock } from "@/components/items/ItemsCodeBlock";
import { ItemsConfig } from "@/components/items/ItemsConfig";
import { ItemsDisplay } from "@/components/items/ItemsDisplay";
import { ItemsNav } from "@/components/items/ItemsNav";

export default function Page() {
  return (
    <div className="motion-preset-fade-sm flex w-full flex-col">
      <ItemsNav />
      <div className="flex h-full w-full">
        <ItemsConfig />
        <div className="flex h-full w-1/3 flex-col">
          <ItemsDisplay />
          <ItemsCodeBlock />
        </div>
      </div>
    </div>
  );
}
