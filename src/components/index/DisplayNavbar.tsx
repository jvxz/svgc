"use client";
import { AnimatePresence } from "motion/react";
import { useParams } from "next/navigation";
import { NavbarSearch } from "../navbar/NavbarSearch";
import { NavbarViewAll } from "./NavbarViewAll";

function DisplayNavbar() {
  const params = useParams();

  return (
    <div className="flex h-full flex-1 items-center justify-center gap-2 px-4">
      <AnimatePresence>
        {params.slug && <NavbarViewAll key={"view-all"} />}
      </AnimatePresence>
      <NavbarSearch />
    </div>
  );
}

export { DisplayNavbar };
