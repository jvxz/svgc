"use client";
import { useTotalPagesStore } from "@/lib/store/total-pages";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQueryState } from "nuqs";
import { NavbarSearch } from "../navbar/NavbarSearch";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

function DisplayNavbar() {
  const { totalPages } = useTotalPagesStore();
  const [page] = useQueryState("page");

  const currentPage = page ? parseInt(page) : 1;

  return (
    <div className="flex h-full flex-1 items-center justify-center gap-2 px-4">
      <NavbarSearch />
      <Pagination className="w-fit">
        <PaginationContent className="gap-3">
          <PaginationItem>
            <PaginationLink
              className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
              href={currentPage === 1 ? undefined : `?page=${currentPage - 1}`}
              aria-label="Go to previous page"
              aria-disabled={currentPage === 1 ? true : undefined}
              role={currentPage === 1 ? "link" : undefined}
            >
              <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <p className="text-sm text-muted-foreground" aria-live="polite">
              Page <span className="text-foreground">{currentPage}</span> of{" "}
              <span className="text-foreground">{totalPages}</span>
            </p>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
              href={
                currentPage === totalPages
                  ? undefined
                  : `?page=${currentPage + 1}`
              }
              aria-label="Go to next page"
              aria-disabled={currentPage === totalPages ? true : undefined}
              role={currentPage === totalPages ? "link" : undefined}
            >
              <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export { DisplayNavbar };
