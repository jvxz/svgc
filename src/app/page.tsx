import { SVGDisplay } from "@/components/index/SVGDisplay";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="flex flex-1 overflow-y-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SVGDisplay />
      </Suspense>
    </main>
  );
}
