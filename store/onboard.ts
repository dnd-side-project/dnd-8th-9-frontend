import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface OnboardState {
  location: string[];
  cakeStyle: string[];
  setLocation: (newLocation: string) => void;
  setCakeStyle: (newCakeStyle: string) => void;
}

const useOnboardStore = create<OnboardState>()(
  devtools(
    immer(set => ({
      location: [],
      cakeStyle: [],
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
      setCakeStyle: (newCakeStyle: string) =>
        set(state => {
          const index = state.cakeStyle.findIndex(cakeStyleItem => cakeStyleItem === newCakeStyle);
          if (index === -1) {
            state.cakeStyle.push(newCakeStyle);
          } else {
            state.cakeStyle.splice(index, 1);
          }
        }),
    })),
  ),
);
export default useOnboardStore;
