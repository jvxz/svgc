"use client";
import { useSvg } from "@/hooks/use-svg";
import { useTargetItem } from "@/hooks/use-target-item";
import { useSelectedItemsStore } from "@/lib/store/selected-items";
import { ArchiveX } from "lucide-react";
import { CodeBlock } from "react-code-block";

function ItemsCodeBlock() {
  const { selectedItems } = useSelectedItemsStore();
  const targetItem = useTargetItem();
  const noItems = selectedItems.length === 0;

  const { svg } = useSvg(targetItem?.data.files[0], targetItem?.options);

  return (
    <div className="h-2/3 w-full">
      <CodeBlock code={svg ?? "error"} language="ts">
        <CodeBlock.Code className="h-full bg-black p-4">
          {noItems && (
            <div className="grid h-full place-items-center">
              <ArchiveX size={75} className="text-muted" />
            </div>
          )}
          {!noItems && (
            <div className="flex items-center gap-4 overflow-x-hidden text-sm tracking-tight">
              <CodeBlock.LineNumber className="w-4 select-none text-xs text-foreground/40" />
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
