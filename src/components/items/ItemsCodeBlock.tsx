import { type FormatSvgMode } from "@/actions/format-svg";
import { getItemsCode } from "@/actions/get-items-code";
import { useItemsStore } from "@/lib/store/items";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "react-code-block";
import { Button } from "../ui/button";
import { Icon } from "../ui/logos";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";

function ItemsCodeBlock({ mode }: { mode: FormatSvgMode }) {
  const { items } = useItemsStore();
  const [copied, setCopied] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: [items, mode],
    queryFn: () => getItemsCode(items, mode),
  });
  console.log("mode", JSON.stringify(mode, null, 2));

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data!);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex h-[calc(100%-4rem)] flex-col bg-black/90 dark:bg-black/50">
      <div className="flex h-12 items-center justify-between border-b border-border p-4">
        <div className="flex items-center gap-2">
          <Icon.React size={20} />
          <p className="font-mono text-sm text-muted-foreground">icons.tsx</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy to clipboard"}
          disabled={!data}
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
      {isLoading ? (
        <CodeBlockSkeleton />
      ) : (
        <CodeBlock code={data ?? ""} language="typescript">
          <ScrollArea className="relative size-full">
            <div className="flex items-center gap-4">
              <CodeBlock.Code className="p-4 text-sm leading-6 tracking-wide">
                <CodeBlock.LineNumber className="pointer-events-none w-4 select-none text-xs text-muted-foreground/50" />
                <CodeBlock.LineContent>
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </CodeBlock.Code>
            </div>
          </ScrollArea>
        </CodeBlock>
      )}
    </div>
  );
}

function CodeBlockSkeleton() {
  return (
    <div className="flex size-full flex-col gap-2 p-4 *:h-4">
      {Array.from({ length: Math.random() * 10 + 1 }, (_, i) => (
        <Skeleton
          key={i}
          className="w-full"
          style={{ width: `${Math.random() * 10 + 24}%` }}
        />
      ))}
    </div>
  );
}

export { ItemsCodeBlock };
