import { create } from "zustand";

interface Store {
  isSocialModalOpen: boolean;
  openSocialModal: () => void;
  closeSocialModal: () => void;
}

const useSocialEmbedModal = create<Store>((set) => ({
  isSocialModalOpen: false,
  openSocialModal: () => set({ isSocialModalOpen: true }),
  closeSocialModal: () => set({ isSocialModalOpen: false }),
}));
export default useSocialEmbedModal;
