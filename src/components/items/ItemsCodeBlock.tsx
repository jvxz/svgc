"use client";
import { useSelectedItemsStore } from "@/lib/store/selected-items";
import { ArchiveX } from "lucide-react";
import { CodeBlock } from "react-code-block";

function ItemsCodeBlock() {
  const { selectedItems } = useSelectedItemsStore();
  const noItems = selectedItems.length === 0;

  const code = `console.log('Hello World!')`;

  return (
    <div className="h-2/3">
      <CodeBlock code={code} language="ts">
        <CodeBlock.Code className="h-full bg-black p-4">
          {noItems && (
            <div className="grid h-full place-items-center">
              <ArchiveX size={75} className="text-muted" />
            </div>
          )}
          {!noItems && (
            <div className="flex items-center gap-4 tracking-tight">
              <CodeBlock.LineNumber className="text-sm text-foreground/40" />
              <CodeBlock.LineContent>
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          )}
        </CodeBlock.Code>
      </CodeBlock>
    </div>
  );
}

export { ItemsCodeBlock };
