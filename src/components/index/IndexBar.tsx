import { Suspense } from "react";
import { SidebarSearch } from "../sidebar/SidebarSearch";
import { DisplayNavbar } from "./DisplayNavbar";

function IndexBar() {
  return (
    <div className="flex h-16 border-b border-border">
      <div className="flex h-full min-w-[20%] items-center justify-center border-r border-border px-4">
        <SidebarSearch />
      </div>
      <Suspense>
        <DisplayNavbar />
      </Suspense>
    </div>
  );
}

export { IndexBar };
