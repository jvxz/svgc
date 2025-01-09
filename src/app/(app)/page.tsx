import { getAllSvgs } from "@/actions/get-svgs";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { SVGDisplaySuspense } from "@/components/index/SVGDisplaySuspense";
import { Suspense } from "react";

export default async function Page() {
  const svgs = await getAllSvgs();
  return (
    <div className="flex flex-col gap-2">
      <Suspense fallback={<SVGDisplaySuspense />}>
        {svgs && <SVGDisplay svgs={svgs} />}
      </Suspense>
    </div>
  );
}
