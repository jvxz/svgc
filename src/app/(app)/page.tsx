import { IndexBar } from "@/components/index/IndexBar";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { SVGDisplaySuspense } from "@/components/index/SVGDisplaySuspense";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <IndexBar />
      <main className="flex flex-1 overflow-y-auto">
        <Suspense fallback={<SVGDisplaySuspense />}>
          <Sidebar />
          <SVGDisplay />
        </Suspense>
      </main>
    </>
  );
}
