import { SVGSection } from "@/components/index/SVGSection";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Page() {
  return (
    <main className="flex flex-1 overflow-y-auto">
      <Sidebar />
      <SVGSection />
    </main>
  );
}
