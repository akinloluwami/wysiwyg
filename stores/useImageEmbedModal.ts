import { create } from "zustand";

interface Store {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useImageEmbedModal = create<Store>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
export default useImageEmbedModal;
