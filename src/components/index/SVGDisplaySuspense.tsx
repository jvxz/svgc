function SVGDisplaySuspense() {
  return Array.from({ length: 32 }).map((_, index) => (
    <SVGCardSkeleton key={index} />
  ));
}

function SVGCardSkeleton() {
  return (
    <div className="motion-preset-fade flex h-56 w-64 animate-pulse flex-col rounded-xl bg-muted"></div>
  );
}

export { SVGDisplaySuspense };
