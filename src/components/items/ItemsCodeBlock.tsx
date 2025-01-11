"use client";
import { getItemsCode } from "@/actions/get-items-code";
import { useItemsStore } from "@/lib/store/items";
import { useQuery } from "@tanstack/react-query";
import { CodeBlock } from "react-code-block";
import { ScrollArea } from "../ui/scroll-area";

function ItemsCodeBlock() {
  const { items } = useItemsStore();

  const { data, status } = useQuery({
    queryKey: ["items", items],
    queryFn: () => getItemsCode(items),
  });

  console.log("data", JSON.stringify(data, null, 2));
  console.log("status", JSON.stringify(status, null, 2));

  return (
    <CodeBlock code={data ?? ""} language="typescript">
      <ScrollArea className="h-full w-full">
        <CodeBlock.Code className="rounded bg-black/90 p-4 text-sm leading-6 tracking-wide dark:bg-black/50">
          <div className="flex items-center gap-4">
            {/* <CodeBlock.LineNumber className="pointer-events-none text-xs text-muted-foreground/50" /> */}
            <CodeBlock.LineContent>
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>
      </ScrollArea>
    </CodeBlock>
  );
}

export { ItemsCodeBlock };
