import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SVGViewMode {
  viewMode: string;
  setViewMode: (val: string) => void;
}

export const useSVGViewMode = create<SVGViewMode>()(
  persist(
    (set) => ({
      viewMode: "grid",
      setViewMode: (val) => set(() => ({ viewMode: val })),
    }),
    {
      name: "svg-view-mode",
    },
  ),
);
