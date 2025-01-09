import { ScrollArea } from "../ui/scroll-area";

function SVGDisplaySuspense() {
  return (
    <ScrollArea className="size-full">
      <div className="flex flex-wrap justify-around gap-6 p-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <SVGCardSkeleton key={index} />
        ))}
      </div>
    </ScrollArea>
  );
}

function SVGCardSkeleton() {
  return (
    <div className="motion-preset-fade flex h-60 w-64 animate-pulse flex-col rounded-xl bg-muted"></div>
  );
}

export { SVGDisplaySuspense };
