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
      <div className="bg-white w-[550px] p-5">
        <div className="flex justify-between items-center p-4">
          <h3>Upload Image</h3>
          <button onClick={handleCloseModal}>
            <MdClose />
          </button>
        </div>
        <div className="w-full h-[150px] border-dashed border-green-400 border-2 flex items-center justify-center">
          <button className="border border-green-400 p-2 bg-gray-200">
            Upload from device
          </button>
        </div>
        <div className="flex gap-3 mt-5">
          <button className="bg-green-400 py-2 px-8 rounded-sm text-white">
            Embed
          </button>
          <button className="py-2 px-8 rounded-sm bg-gray-200">Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default EmbedImage;
