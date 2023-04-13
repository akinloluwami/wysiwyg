import React, { useState } from "react";
import Modal from "./Modal";
import useImageEmbedModal from "@/stores/useImageEmbedModal";

const EmbedImage = () => {
  const { isOpen, close } = useImageEmbedModal();

  const handleCloseModal = () => {
    close();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <h1>Embed image</h1>
    </Modal>
  );
};

export default EmbedImage;
