import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TotalPagesStore {
  totalPages: number;
  setTotalPages: (val: number) => void;
}
export const useTotalPagesStore = create<TotalPagesStore>()(
  persist(
    (set) => ({
      totalPages: 19,
      setTotalPages: (val) => set(() => ({ totalPages: val })),
    }),
    {
      name: "total-pages-storage",
    },
  ),
);
