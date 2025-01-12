"use client";
import { getItemsCode } from "@/actions/get-items-code";
import { useIconConfigStore } from "@/lib/store/icon-config";
import { useItemsStore } from "@/lib/store/items";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Check, Copy, Download, FileX2 } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "react-code-block";
import { Button } from "../ui/button";
import { Icon } from "../ui/logos";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";

function ItemsCodeBlock() {
  const { items } = useItemsStore();
  const { mode } = useIconConfigStore();
  const [copied, setCopied] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: [items, mode],
    queryFn: () => getItemsCode(items, mode),
  });

  const handleCopy = async () => {
    try {
      if (!data) return;
      await navigator.clipboard.writeText(data);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = () => {
    if (!data) return;
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "icons.tsx";
    a.click();
  };

  return (
    <div className="flex h-[calc(100%-4rem)] flex-col bg-black/90 dark:bg-black/50">
      <div className="flex h-12 items-center justify-between border-b border-border bg-background p-4">
        <div className="flex items-center gap-2 *:select-none">
          <Icon.React size={20} />
          <p className="font-mono text-sm text-muted-foreground">icons.tsx</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDownload}
            aria-label="Download"
            disabled={!data || items.length === 0}
          >
            <Download size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            disabled={!data || items.length === 0}
          >
            <div
              className={cn(
                "transition-all",
                copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
              )}
            >
              <Check
                className="stroke-emerald-500"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
            <div
              className={cn(
                "absolute transition-all",
                copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
              )}
            >
              <Copy size={16} strokeWidth={2} aria-hidden="true" />
            </div>
          </Button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="grid size-full place-items-center">
          <FileX2 className="size-32 text-muted" />
        </div>
      ) : (
        <>
          {isLoading && <CodeBlockSkeleton />}
          {data && !isLoading && (
            <CodeBlock code={data ?? ""} language="typescript">
              <ScrollArea className="relative size-full">
                <CodeBlock.Code className="p-4 text-sm leading-6 tracking-wide">
                  <div className="flex items-center gap-4">
                    <CodeBlock.LineNumber className="pointer-events-none w-4 select-none text-xs text-muted-foreground dark:text-muted-foreground/50" />
                    <CodeBlock.LineContent>
                      <CodeBlock.Token />
                    </CodeBlock.LineContent>
                  </div>
                </CodeBlock.Code>
              </ScrollArea>
            </CodeBlock>
          )}
        </>
      )}
    </div>
  );
}

function CodeBlockSkeleton() {
  return (
    <div className="flex size-full flex-col gap-4 p-4 *:h-4">
      {Array.from({ length: Math.random() * 10 + 8 }, (_, i) => (
        <Skeleton
          key={i}
          className="w-full"
          style={{ width: `${Math.random() * 10 + 24}rem` }}
        />
      ))}
    </div>
  );
}

export { ItemsCodeBlock };
