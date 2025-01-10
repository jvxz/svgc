import { getAllSvgs } from "@/actions/get-svgs";
import { IndexBar } from "@/components/index/IndexBar";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { SVGDisplaySuspense } from "@/components/index/SVGDisplaySuspense";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Suspense } from "react";

export default async function Page() {
  const svgs = await getAllSvgs();
  return (
    <>
      <IndexBar />
      <main className="flex flex-1 overflow-y-auto">
        <Suspense fallback={<SVGDisplaySuspense />}>
          <Sidebar />
          {svgs && <SVGDisplay svgs={svgs} />}
        </Suspense>
      </main>
    </>
  );
}
