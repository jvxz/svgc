import { getAllSvgs } from "@/actions/get-svgs";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { Suspense } from "react";

export default async function Page() {
  const svgs = await getAllSvgs();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {svgs && <SVGDisplay svgs={svgs} />}
    </Suspense>
  );
}
