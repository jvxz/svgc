import { SVGDisplay } from "@/components/index/SVGDisplay";
import { SVGDisplaySuspense } from "@/components/index/SVGDisplaySuspense";
import { SVGNavbar } from "@/components/index/SVGNavbar";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<SVGDisplaySuspense />}>
      <section className="relative flex w-full flex-col">
        <SVGNavbar />
        <SVGDisplay />
      </section>
    </Suspense>
  );
}
