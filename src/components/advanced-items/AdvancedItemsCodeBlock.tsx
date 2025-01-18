"use client";
import { useItemsStore } from "@/lib/store/items";
import { useSelectedItemStore } from "@/lib/store/selected-item";
import { CodeBlock } from "react-code-block";
import { Icon } from "../ui/logos";
import { ScrollArea } from "../ui/scroll-area";

function AdvancedItemsCodeBlock() {
  return (
    <div className="flex h-full flex-col bg-black/90 dark:bg-black/50">
      <CodeBlockHeader />
      <CodeBlockDisplay />
    </div>
  );
}

function CodeBlockDisplay() {
  const { selectedItem } = useSelectedItemStore();
  const { items } = useItemsStore();

  const code = selectedItem?.name;
  const language = "typescript";

  return (
    selectedItem && (
      <CodeBlock code={code ?? "error"} language={language}>
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
    )
  );
}

function CodeBlockHeader() {
  return (
    <div className="flex h-12 items-center justify-between border-b border-border bg-background p-4">
      <div className="flex items-center gap-2 *:select-none">
        <Icon.React size={20} />
        <p className="font-mono text-sm text-muted-foreground">icons.tsx</p>
      </div>
    </div>
  );
}

export { AdvancedItemsCodeBlock };
