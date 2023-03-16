import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  logoutModalOpen: boolean;
  welcomeModalOpen: boolean;
  orderFormModalOpen: boolean;
  toggleLogoutModal: () => void;
  toggleWelcomeModal: () => void;
  toggleOrderFormModal: () => void;
}

const useModalStore = create<ModalState>()(
  devtools(set => ({
    logoutModalOpen: false,
    welcomeModalOpen: false,
    orderFormModalOpen: false,
    toggleLogoutModal: () => set(state => ({ logoutModalOpen: !state.logoutModalOpen })),
    toggleWelcomeModal: () => set(state => ({ welcomeModalOpen: !state.welcomeModalOpen })),
    toggleOrderFormModal: () => set(state => ({ orderFormModalOpen: !state.orderFormModalOpen })),
  })),
);

export default useModalStore;
