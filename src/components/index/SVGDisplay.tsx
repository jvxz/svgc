import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";
import { getAllSvgs } from "@/actions/get-svgs";

async function SVGDisplay() {
  const svgs = await getAllSvgs();

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-wrap justify-evenly gap-6 p-6">
        {svgs ? (
          svgs.map((svg) => {
            return <SVGCard key={svg.id} svg={svg} />;
          })
        ) : (
          <p>No svgs found</p>
        )}
      </div>
    </ScrollArea>
  );
}

export { SVGDisplay };
