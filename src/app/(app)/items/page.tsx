import { ItemsDisplay } from "@/components/items/ItemsDisplay";
import { ItemsExport } from "@/components/items/ItemsExport";

export default function Page() {
  return (
    <div className="flex flex-1 overflow-y-auto">
      <ItemsDisplay />
      <ItemsExport />
    </div>
  );
}
