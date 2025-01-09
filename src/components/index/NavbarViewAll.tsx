import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";

const variants = {
  initial: { width: 0, transition: { duration: 0.15, ease: "easeOut" } },
  animate: { width: "auto", transition: { duration: 0.15, ease: "easeOut" } },
  exit: { width: 0, transition: { duration: 0.15, ease: "easeOut" } },
} as Variants;

function NavbarViewAll() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Button asChild className="group" variant="ghost">
        <Link replace href="/">
          <ArrowLeft
            className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          View all
        </Link>
      </Button>
    </motion.div>
  );
}

export { NavbarViewAll };
