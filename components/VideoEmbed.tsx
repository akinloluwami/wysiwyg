import React, { useState, createRef } from "react";
import Modal from "./Modal";
import useVideoEmbedModal from "@/stores/useVideoEmbedModal";
import { MdClose } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";

const EmbedVideo = ({ editor }: any) => {
  const { isVideoModalOpen, closeVideoModal } = useVideoEmbedModal();

  const [platform, setPlatform] = useState<string>("YouTube");
  const [videoUrl, setVideoUrl] = useState<string>("");

  const embedYouTubeVideo = () => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    if (!youtubeRegex.test(videoUrl)) {
      toast.error("Invalid YouTube video URL", {
        duration: 1500,
      });
      return;
    }

    editor.commands.setYoutubeVideo({
      src: videoUrl,
      width: 640,
      height: 480,
    });
    editor.commands.focus();
    closeVideoModal();
  };

  const embedVimeoVideo = () => {
    console.log("Vimeo");
  };

  const embedVideo = () => {
    platform === "YouTube" && embedYouTubeVideo();
    platform === "Vimeo" && embedVimeoVideo();
  };

  return (
    <Modal isOpen={isVideoModalOpen} onClose={closeVideoModal}>
      <Toaster />
      <div className="bg-white w-[550px] p-5">
        <div className="flex justify-between items-center mb-4">
          <h3>Embed Video</h3>
          <button onClick={closeVideoModal}>
            <MdClose />
          </button>
        </div>
        <div className="">
          <select
            className="w-full border-2 border-gray-300 p-2 mt-3 mb-5"
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="YouTube">YouTube</option>
            <option value="Vimeo">Vimeo</option>
          </select>
          {platform === "YouTube" && (
            <input
              type="text"
              placeholder="Enter URL"
              className="w-full border-2 border-gray-300 p-2 mt-3"
              onChange={(e) => setVideoUrl(e.target.value)}
              autoFocus={true}
            />
          )}
          {platform === "Vimeo" && (
            <textarea
              autoFocus={true}
              placeholder="Paste Vimeo iframe code"
              className="w-full "
            ></textarea>
          )}
          <div className="flex gap-3 mt-5">
            <button
              className="bg-green-400 py-2 px-8 rounded-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                embedVideo();
                // closeVideoModal();
              }}
              disabled={!videoUrl}
            >
              Embed
            </button>
            <button
              className="py-2 px-8 rounded-sm bg-gray-200"
              onClick={closeVideoModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EmbedVideo;
