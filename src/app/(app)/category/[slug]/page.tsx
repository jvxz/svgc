import { getAllSvgs } from "@/actions/get-svgs";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const svgs = await getAllSvgs();

  const svgsInCategory = svgs?.filter((svg) =>
    typeof svg.category === "string"
      ? svg.category === slug
      : svg.category.includes(slug),
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {svgsInCategory && svgs && <SVGDisplay svgs={svgsInCategory} />}
    </Suspense>
  );
}
