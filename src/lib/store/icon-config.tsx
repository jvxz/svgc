import { type FormatSvgMode } from "@/actions/format-svg";
import { create } from "zustand";

interface IconConfigStore {
  mode: FormatSvgMode;
  setMode: (mode: FormatSvgMode) => void;
}
export const useIconConfigStore = create<IconConfigStore>((set) => ({
  mode: {
    addSizeProps: true,
    retainBrandColors: true,
  },
  setMode: (mode) => set({ mode }),
}));
