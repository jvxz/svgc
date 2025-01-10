import { getAllSvgs } from "@/actions/get-svgs";
import { IndexBar } from "@/components/index/IndexBar";
import { SVGDisplay } from "@/components/index/SVGDisplay";
import { SVGDisplaySuspense } from "@/components/index/SVGDisplaySuspense";
import { Sidebar } from "@/components/sidebar/Sidebar";
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
    <>
      <IndexBar />
      <main className="flex flex-1 overflow-y-auto">
        <Sidebar />
        <Suspense fallback={<SVGDisplaySuspense />}>
          {svgsInCategory && svgs && <SVGDisplay svgs={svgsInCategory} />}
        </Suspense>
      </main>
    </>
  );
}
