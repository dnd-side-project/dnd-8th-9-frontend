/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface UserState {
  userName: string | null;
  email?: string | null;
  profileImage: string | null;
  phoneNumber?: string | null;
  doneOnboard: boolean;
}

interface UserActionState {
  loginUser: (userName: string, profileImage: string, email?: string, phoneNumber?: string) => void;
  logoutUser: () => void;
}

const initialState: UserState = {
  userName: null,
  email: null,
  profileImage: null,
  phoneNumber: "01027392833",
  doneOnboard: false,
};

const useUserStore = create<UserState & UserActionState>()(
  devtools(
    immer(set => ({
      ...initialState,

      loginUser: (userName, profileImage, email, phoneNumber) => {
        set(state => {
          state.userName = userName;
          state.profileImage = profileImage;
          if (email) {
            state.email = email;
          }
          if (phoneNumber) {
            state.phoneNumber = phoneNumber;
          }
        });
      },
      logoutUser: () => {
        set(initialState);
      },
    })),
  ),
);

export default useUserStore;
