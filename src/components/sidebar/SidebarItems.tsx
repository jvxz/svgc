"use client";
import { getImageUrl } from "@/lib/utils";
import autoAnimate from "@formkit/auto-animate";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { ScrollArea } from "../ui/scroll-area";

function SidebarItems() {
  const parent = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    parent.current &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      autoAnimate(parent.current, {
        duration: 125,
      });
  }, []);

  return (
    <ScrollArea className="motion-preset-fade-sm h-full">
      <div className="flex flex-col gap-2">
        <div className="flex flex-1 flex-col gap-2 p-4" ref={parent}>
          <ContextMenu key="logo">
            <ContextMenuTrigger className="flex items-center">
              <Button
                asChild
                className="flex w-full items-center justify-start rounded-r-none from-transparent from-20% to-muted-foreground/5 dark:bg-gradient-to-l"
                variant="outline"
              >
                <Link href={`/items`} className="flex items-center gap-2">
                  <Image
                    src={getImageUrl("logo.svg")}
                    alt="logo"
                    width={20}
                    height={20}
                    className="size-4"
                  />
                  <p className="truncate">logo</p>
                </Link>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-l-none border-l-0 px-4"
              >
                <Trash className="size-4" />
              </Button>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>
    </ScrollArea>
  );
}

export { SidebarItems };
