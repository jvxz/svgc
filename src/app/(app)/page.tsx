import { getAllSvgs } from "@/actions/get-svgs";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { Suspense } from "react";

export default async function Page() {
  const svgs = await getAllSvgs();
  return (
    <div className="flex flex-col gap-2">
      <Suspense fallback={<div>Loading...</div>}>
        {svgs && <SVGDisplay svgs={svgs} />}
      </Suspense>
    </div>
  );
}
