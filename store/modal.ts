import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  logoutModalOpen: boolean;
  welcomeModalOpen: boolean;
  toggleLogoutModal: () => void;
  toggleWelcomeModal: () => void;
}

const useModalStore = create<ModalState>()(
  devtools(set => ({
    logoutModalOpen: false,
    welcomeModalOpen: false,
    toggleLogoutModal: () => set(state => ({ logoutModalOpen: !state.logoutModalOpen })),
    toggleWelcomeModal: () => set(state => ({ welcomeModalOpen: !state.welcomeModalOpen })),
  })),
);

export default useModalStore;
