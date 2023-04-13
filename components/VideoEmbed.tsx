import React, { useState, createRef } from "react";
import Modal from "./Modal";
import useVideoEmbedModal from "@/stores/useVideoEmbedModal";
import { MdClose } from "react-icons/md";

const EmbedVideo = ({ editor }: any) => {
  const { isVideoModalOpen, closeVideoModal } = useVideoEmbedModal();

  const handleCloseModal = () => {
    closeVideoModal();
  };

  const [platform, setPlatform] = useState("YouTube");

  return (
    <Modal isOpen={isVideoModalOpen} onClose={handleCloseModal}>
      <div className="bg-white w-[550px] p-5">
        <div className="flex justify-between items-center mb-4">
          <h3>Embed Video</h3>
          <button onClick={handleCloseModal}>
            <MdClose />
          </button>
        </div>
        <div className="">
          <select name="" id="" onChange={(e) => setPlatform(e.target.value)}>
            <option value="YouTube">YouTube</option>
            <option value="Vimeo">Vimeo</option>
          </select>
        </div>
      </div>
    </Modal>
  );
};

export default EmbedVideo;
