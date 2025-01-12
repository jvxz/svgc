import { Grid3x3 } from "lucide-react";
import { Button } from "../ui/button";

function SVGViewAs() {
  return (
    <Button variant="outline" size="icon">
      <Grid3x3 size={16} />
      {/* <LayoutList size={16} /> */}
    </Button>
  );
}

export { SVGViewAs };
