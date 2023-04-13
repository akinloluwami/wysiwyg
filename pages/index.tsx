import Editor from "@/components/Editor";
import Modal from "@/components/Modal";
import React, { useState } from "react";

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="flex flex-col w-[50%] mx-auto">
      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <h1>Baa</h1>
      </Modal>
      <input
        type="text"
        placeholder="Post title"
        className="mt-10 w-full outline-none border-none text-4xl"
      />
      <Editor />
    </div>
  );
};

export default Index;
