import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SVGViewModeStore {
  viewMode: string;
  setViewMode: (val: string) => void;
}

export const useSVGViewModeStore = create<SVGViewModeStore>()(
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
