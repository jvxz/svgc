import { AdvancedItemsCodeBlock } from "@/components/advanced-items/AdvancedItemsCodeBlock";
import { AdvancedItemsDisplay } from "@/components/advanced-items/AdvancedItemsDisplay";
import { AdvancedItemsList } from "@/components/advanced-items/AdvancedItemsList";
import { AdvancedItemsSelection } from "@/components/advanced-items/AdvancedItemsSelection";
import { NAVBARS_HEIGHT_VALUE } from "@/lib/config";

export default function Page() {
  return (
    <main
      className={`overflow-y-hidden h-[calc(100%-${NAVBARS_HEIGHT_VALUE}rem)] `}
    >
      <div className="flex h-full">
        <section className="flex h-full w-2/3 border-x border-border">
          <AdvancedItemsList />
          <AdvancedItemsSelection />
        </section>
        <section className="flex max-h-full w-1/3 flex-col border-r border-border">
          <article className="min-h-[300px] flex-shrink-0 border-b border-border">
            <AdvancedItemsDisplay />
          </article>
          <article className="flex-grow overflow-auto">
            <AdvancedItemsCodeBlock />
          </article>
        </section>
      </div>
    </main>
  );
}
