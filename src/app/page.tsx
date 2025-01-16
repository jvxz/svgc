import { SVGDisplay } from "@/components/index/SVGDisplay";
import { SVGNavbar } from "@/components/index/SVGNavbar";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Page() {
  return (
    <main className="flex flex-1 overflow-y-auto">
      <Sidebar />
      <section className="relative flex w-full flex-col">
        <SVGNavbar />
        <SVGDisplay />
      </section>
    </main>
  );
}
