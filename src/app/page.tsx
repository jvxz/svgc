import { getAllSvgs } from "@/actions/get-svgs";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Suspense } from "react";

export default async function Page() {
  "use cache";
  const svgs = await getAllSvgs({
    cache: "force-cache",
  });

  return (
    <main className="flex flex-1 overflow-y-auto">
      <Suspense fallback={<div>Loading...</div>}>
        {svgs ? <Sidebar svgs={svgs} /> : <div>No svgs found</div>}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {svgs ? <SVGDisplay svgs={svgs} /> : <div>No svgs found</div>}
      </Suspense>
    </main>
  );
}
