import React, { useState } from "react";
import Modal from "./Modal";
import useImageEmbedModal from "@/stores/useImageEmbedModal";
import { MdClose } from "react-icons/md";

const EmbedImage = () => {
  const { isOpen, close } = useImageEmbedModal();

  const handleCloseModal = () => {
    close();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className="bg-slate-200 w-[550px]">
        <div className="flex justify-between items-center p-4">
          <h3>Upload Image</h3>
          <button onClick={handleCloseModal}>
            <MdClose />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EmbedImage;
