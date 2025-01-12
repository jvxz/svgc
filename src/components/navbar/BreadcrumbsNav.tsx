"use client";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

function BreadcrumbsNav() {
  const pathname = usePathname().split("/").slice(1);
  const isHome = pathname[0] === "";

  return (
    <>
      <div aria-hidden className="block lg:hidden"></div>
      <Breadcrumb className="mx-auto hidden lg:block">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="aria-disabled:pointer-events-none"
              aria-disabled={isHome}
              href="/"
            >
              <Home size={16} strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">Home</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {!isHome && <BreadcrumbSeparator> / </BreadcrumbSeparator>}
          {pathname.map((e, i) => {
            return (
              <div key={e}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${e}`}>
                    {e.charAt(0).toUpperCase() + e.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {i < pathname.length - 1 && (
                  <BreadcrumbSeparator> / </BreadcrumbSeparator>
                )}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}

export { BreadcrumbsNav };
