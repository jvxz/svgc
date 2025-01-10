import { ItemsDisplay } from "@/components/items/ItemsDisplay";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <ItemsDisplay />
    </div>
  );
}
