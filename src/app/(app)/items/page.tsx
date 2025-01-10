import { ItemsDisplay } from "@/components/items/ItemsDisplay";

export default function Page() {
  return (
    <div className="flex flex-1 overflow-y-auto">
      <ItemsDisplay />
      <div className="size-1/2 h-full"></div>
    </div>
  );
}
