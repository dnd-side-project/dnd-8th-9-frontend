import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface BearState {
  bears: number;
  increase: () => void;
  decrease: () => void;
}

const useBearStore = create<BearState>()(
  devtools(set => ({
    bears: 0,
    increase: () => set(state => ({ bears: state.bears + 1 })),
    decrease: () => set(state => ({ bears: state.bears - 1 })),
  })),
);

export default useBearStore;
