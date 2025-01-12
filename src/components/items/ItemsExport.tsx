import { ItemsConfig } from "@/app/(app)/items/ItemsConfig";
import { ItemsCodeBlock } from "./ItemsCodeBlock";

function ItemsExport() {
  return (
    <section className="flex h-full w-1/3 flex-col lg:w-1/2">
      <ItemsConfig />
      <ItemsCodeBlock />
    </section>
  );
}

export { ItemsExport };
