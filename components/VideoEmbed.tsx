import React, { useState, createRef } from "react";
import Modal from "./Modal";
import useVideoEmbedModal from "@/stores/useVideoEmbedModal";
import { MdClose } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";

const EmbedVideo = ({ editor }: any) => {
  const { isVideoModalOpen, closeVideoModal } = useVideoEmbedModal();

  const [platform, setPlatform] = useState<string>("YouTube");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [vimeoCode, setVimeoCode] = useState<string>("");

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
    setVideoUrl("");
    setPlatform("YouTube");
  };

  const embedVimeoVideo = () => {
    const vimeoRegex =
      /<iframe.*src="https:\/\/player\.vimeo\.com\/video\/\d+.*".*<\/iframe>/;

    if (!vimeoRegex.test(vimeoCode)) {
      toast.error("Invalid Vimeo iframe code", {
        duration: 1500,
      });
      return;
    }
    editor?.chain()?.focus()?.insertContent(vimeoCode).run();
    closeVideoModal();
    setVimeoCode("");
    setPlatform("YouTube");
  };

  const embedVideo = () => {
    platform === "YouTube" && embedYouTubeVideo();
    platform === "Vimeo" && embedVimeoVideo();
  };
  const handleClose = () => {
    closeVideoModal();
    setPlatform("YouTube");
  };

  return (
    <Modal isOpen={isVideoModalOpen} onClose={closeVideoModal}>
      <Toaster />
      <div className="bg-white w-[550px] p-5">
        <div className="flex justify-between items-center mb-4">
          <h3>Embed Video</h3>
          <button onClick={handleClose}>
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
              value={videoUrl.trim()}
            />
          )}
          {platform === "Vimeo" && (
            <textarea
              autoFocus={true}
              placeholder="Paste Vimeo iframe code"
              className="w-full"
              onChange={(e) => setVimeoCode(e.target.value)}
              value={vimeoCode}
            ></textarea>
          )}
          <div className="flex gap-3 mt-5">
            <button
              className="bg-green-400 py-2 px-8 rounded-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                embedVideo();
                // closeVideoModal();
              }}
              disabled={
                (platform === "YouTube" && !videoUrl) ||
                (platform === "Vimeo" && !vimeoCode)
              }
            >
              Embed
            </button>
            <button
              className="py-2 px-8 rounded-sm bg-gray-200"
              onClick={handleClose}
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
