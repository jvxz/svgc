import { create } from "zustand";

interface SVGViewMode {
  viewMode: string;
  setViewMode: (val: string) => void;
}

export const useSVGViewMode = create<SVGViewMode>((set) => ({
  viewMode: "grid",
  setViewMode: (val) => set(() => ({ viewMode: val })),
}));
