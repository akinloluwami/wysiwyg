import React, { useState } from "react";
import Modal from "./Modal";

const EmbedImage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }
  return (
    <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
      <button onClick={handleOpenModal}>Open Modal</button>
      <h1>Baa</h1>
    </Modal>
  );
};

export default EmbedImage;
