import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  logoutModalOpen: boolean;
  toggleLogoutModal: () => void;
}

const useModalStore = create<ModalState>()(
  devtools(set => ({
    logoutModalOpen: false,
    toggleLogoutModal: () => set(state => ({ logoutModalOpen: !state.logoutModalOpen })),
  })),
);

export default useModalStore;
