import React, { useState, createRef } from "react";
import Modal from "./Modal";
import useImageEmbedModal from "@/stores/useImageEmbedModal";
import { MdClose } from "react-icons/md";

const EmbedImage = ({ editor }: any) => {
  const { isImageModalOpen, closeImageModal } = useImageEmbedModal();

  const handleCloseModal = () => {
    closeImageModal();
  };

  const fileRef = createRef<HTMLInputElement>();

  const handleImageSelect = () => {
    fileRef.current?.click();
  };

  const [file, setFile] = useState(null);
  const handleImageUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result as string;
        editor.chain().focus().setImage({ src: image.src }).run();
      };
      reader.readAsDataURL(file);
      setFile(null);
    }
  };

  return (
    <Modal isOpen={isImageModalOpen} onClose={handleCloseModal}>
      <div className="bg-white w-[550px] p-5">
        <div className="flex justify-between items-center mb-4">
          <h3>Upload Image</h3>
          <button onClick={handleCloseModal}>
            <MdClose />
          </button>
        </div>
        <div className="w-full h-[150px] border-dashed border-green-400 border-2 flex items-center justify-center">
          <input
            type="file"
            ref={fileRef}
            className="hidden"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
          <button
            className="border border-green-400 p-2 bg-gray-200"
            onClick={handleImageSelect}
          >
            Upload from device
          </button>
        </div>
        <div className="flex gap-3 mt-5">
          <button
            className="bg-green-400 py-2 px-8 rounded-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              handleImageUpload();
              closeImageModal();
            }}
            disabled={!file}
          >
            Embed
          </button>
          <button
            className="py-2 px-8 rounded-sm bg-gray-200"
            onClick={closeImageModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EmbedImage;
