import { create } from "zustand";

interface Store {
  isImageModalOpen: boolean;
  openImageModal: () => void;
  closeImageModal: () => void;
}

const useImageEmbedModal = create<Store>((set) => ({
  isImageModalOpen: false,
  openImageModal: () => set({ isImageModalOpen: true }),
  closeImageModal: () => set({ isImageModalOpen: false }),
}));
export default useImageEmbedModal;
