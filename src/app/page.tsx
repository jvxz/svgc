import { SVGDisplay } from "@/components/index/SVGDisplay";
import { SVGDisplaySuspense } from "@/components/index/SVGDisplaySuspense";
import { SVGNavbar } from "@/components/index/SVGNavbar";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex flex-1 overflow-y-auto">
      <Suspense fallback={<SVGDisplaySuspense />}>
        <Sidebar />
        <section className="relative flex w-full flex-col">
          <SVGNavbar />
          <SVGDisplay />
        </section>
      </Suspense>
    </main>
  );
}
