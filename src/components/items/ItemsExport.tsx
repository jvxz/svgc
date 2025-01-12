import { ItemsConfig } from "@/app/(app)/items/ItemsConfig";
import { ItemsCodeBlock } from "./ItemsCodeBlock";

function ItemsExport() {
  return (
    <section className="flex h-full w-1/2 flex-col">
      <ItemsConfig />
      <ItemsCodeBlock />
    </section>
  );
}

export { ItemsExport };
