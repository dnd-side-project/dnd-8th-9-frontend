import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface OnboardState {
  location: string[];
  setLocation: (newLocation: string) => void;
}

const useOnboardStore = create<OnboardState>()(
  devtools(
    immer(set => ({
      location: [],
      setLocation: (newLocation: string) =>
        set(state => {
          const index = state.location.findIndex(locationItem => locationItem === newLocation);
          if (index === -1) {
            if (state.location.length === 2) return;
            state.location.push(newLocation);
          } else {
            state.location.splice(index, 1);
          }
        }),
    })),
  ),
);
export default useOnboardStore;
