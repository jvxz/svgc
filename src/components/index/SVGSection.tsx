import { SVGDisplay } from "./SVGDisplay";
import { SVGNavbar } from "./SVGNavbar";

function SVGSection() {
  return (
    <section className="relative flex w-full flex-col">
      <SVGNavbar />
      <SVGDisplay />
    </section>
  );
}

export { SVGSection };
