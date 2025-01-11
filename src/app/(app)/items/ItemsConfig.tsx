import { type FormatSvgMode } from "@/actions/format-svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function ItemsConfig({
  mode,
  setMode,
}: {
  mode: FormatSvgMode;
  setMode: (mode: FormatSvgMode) => void;
}) {
  return (
    <div className="min-h-16 border-b border-border">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={mode.addSizeProps}
            onCheckedChange={(checked) => {
              setMode({
                ...mode,
                addSizeProps: checked === "indeterminate" ? undefined : checked,
              });
            }}
            id={`size-props`}
          />
          <Label htmlFor={`size-props`}>Add size props</Label>
          <Checkbox
            checked={mode.retainBrandColors}
            onCheckedChange={(checked) => {
              setMode({
                ...mode,
                retainBrandColors: checked === "indeterminate" ? true : checked,
              });
            }}
            id={`brand-colors`}
          />
          <Label htmlFor={`brand-colors`}>Persist brand colors</Label>
        </div>
      </div>
    </div>
  );
}

export { ItemsConfig };
