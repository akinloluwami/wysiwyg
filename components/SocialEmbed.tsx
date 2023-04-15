import React, { useState, createRef } from "react";
import Modal from "./Modal";
import useSocialEmbedModal from "@/stores/useSocialEmbedModal";
import { MdClose } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";

const EmbedSocial = ({ editor }: any) => {
  const { isSocialModalOpen, closeSocialModal } = useSocialEmbedModal();

  const handleClose = () => {
    closeSocialModal();
  };

  const [platform, setPlatform] = useState<string>("Twitter");
  const [tweetUrl, setTweetUrl] = useState<string>("");
  const [fbCode, setFbCode] = useState<string>("");

  const embedTweet = () => {
    const tweetUrlRegex =
      /https?:\/\/(?:www\.)?twitter\.com\/(?:#!\/)?(\w+)\/status\/(\d+)/;

    if (!tweetUrlRegex.test(tweetUrl)) {
      toast.error("Invalid Tweet URL", {
        duration: 1500,
      });
      return;
    }
    const match: any = tweetUrl.match(tweetUrlRegex);
    const tweetId = match[2];
    const tweetIframe = `
<iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 448px; height: 226px; display: block; flex-grow: 1;" title="Twitter Tweet" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=${tweetId}&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2F%2FUsers%2Fakink%2FDesktop%2Flol%2Findex.html&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px" data-tweet-id="${tweetId}"></iframe>
`;
    editor?.chain()?.focus()?.insertContent(tweetIframe).run();
    closeSocialModal();
    setTweetUrl("");
    setPlatform("Twitter");
  };

  const embedFacebookPost = () => {
    const facebookPostRegex =
      /<iframe src="https:\/\/www\.facebook\.com\/plugins\/post\.php\?(?:.*?)<\/iframe>/i;

    if (!facebookPostRegex.test(fbCode)) {
      toast.error("Invalid Facebook iframe code", {
        duration: 1500,
      });
      return;
    }
    editor?.chain()?.focus()?.insertContent(fbCode).run();
    closeSocialModal();
    setFbCode("");
    setPlatform("Twitter");
  };

  const embedSocialPost = () => {
    platform === "Twitter" && embedTweet();
    platform === "Facebook" && embedFacebookPost();
  };
  return (
    <Modal isOpen={isSocialModalOpen}>
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
            <option value="Twitter">Twitter</option>
            <option value="Facebook">Facebook</option>
          </select>
          {platform === "Twitter" && (
            <input
              type="text"
              placeholder="Enter Tweet URL"
              className="w-full border-2 border-gray-300 p-2 mt-3"
              onChange={(e) => setTweetUrl(e.target.value)}
              autoFocus={true}
              value={tweetUrl.trim()}
            />
          )}
          {platform === "Facebook" && (
            <textarea
              autoFocus={true}
              placeholder="Paste Facebook iframe code"
              className="w-full"
              onChange={(e) => setFbCode(e.target.value)}
              value={fbCode}
            ></textarea>
          )}
          <div className="flex gap-3 mt-5">
            <button
              className="bg-green-400 py-2 px-8 rounded-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                embedSocialPost();
              }}
              disabled={
                (platform === "Twitter" && !tweetUrl) ||
                (platform === "Facebook" && !fbCode)
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

export default EmbedSocial;
