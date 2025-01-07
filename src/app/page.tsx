import { SVGDisplay } from "@/components/index/SVGDisplay";

export default async function Page() {
  "use cache";
  return (
    <main className="flex flex-1 overflow-y-auto">
      <aside className="w-1/6 border-r border-border">Sidebar</aside>
      <SVGDisplay />
    </main>
  );
}
