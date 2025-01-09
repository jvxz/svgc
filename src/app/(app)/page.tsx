import { getAllSvgs } from "@/actions/get-svgs";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { SVGDisplaySuspense } from "@/components/index/SVGDisplaySuspense";
import { Suspense } from "react";

export default async function Page() {
  const svgs = await getAllSvgs();
  return (
    <div className="flex flex-col gap-2">
      {/* <div className="grid w-full place-items-center"> */}
      <Suspense fallback={<SVGDisplaySuspense />}>
        {svgs && <SVGDisplay svgs={svgs} />}
        {/* {svgs?.[0] && <SVGCard svg={svgs?.[0]} />} */}
      </Suspense>
    </div>
  );
}
