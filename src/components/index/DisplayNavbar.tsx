"use client";
import { AnimatePresence } from "motion/react";
import { useQueryState } from "nuqs";
import { NavbarSearch } from "../navbar_temp/NavbarSearch";
import { NavbarViewAll } from "./NavbarViewAll";

function DisplayNavbar() {
  const slug = useQueryState("category");

  return (
    <div className="flex h-full flex-1 items-center justify-center gap-2 px-4">
      <AnimatePresence>
        {slug[0] && <NavbarViewAll key={"view-all"} />}
      </AnimatePresence>
      <NavbarSearch />
    </div>
  );
}

export { DisplayNavbar };
