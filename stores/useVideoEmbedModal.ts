import { create } from "zustand";

interface Store {
  isVideoModalOpen: boolean;
  openVideoModal: () => void;
  closeVideoModal: () => void;
}

const useVideoEmbedModal = create<Store>((set) => ({
  isVideoModalOpen: false,
  openVideoModal: () => set({ isVideoModalOpen: true }),
  closeVideoModal: () => set({ isVideoModalOpen: false }),
}));
export default useVideoEmbedModal;
