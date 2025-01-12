import { Suspense } from "react";

function IndexBar() {
  return (
    <div className="flex h-16 border-b border-border">
      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </div>
  );
}

export { IndexBar };
