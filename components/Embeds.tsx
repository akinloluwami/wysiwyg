import { Menu } from "@headlessui/react";
import React from "react";
import { HiOutlinePlus, HiVideoCamera } from "react-icons/hi";
import { BsImage } from "react-icons/bs";
import { RiBubbleChartFill } from "react-icons/ri";
import useImageEmbedModal from "@/stores/useImageEmbedModal";
import useVideoEmbedModal from "@/stores/useVideoEmbedModal";
import useSocialEmbedModal from "@/stores/useSocialEmbedModal";

const Embeds = () => {
  const { openImageModal } = useImageEmbedModal();
  const { openVideoModal } = useVideoEmbedModal();
  const { openSocialModal } = useSocialEmbedModal();
  const embedOptions = [
    {
      name: "Picture",
      text: "jpg, png",
      icon: <BsImage />,
      action: openImageModal,
    },
    {
      name: "Video",
      text: "YouTube, Vimeo",
      icon: <HiVideoCamera />,
      action: openVideoModal,
    },
    {
      name: "Social",
      text: "Facebook, Twitter",
      icon: <RiBubbleChartFill />,
      action: openSocialModal,
    },
  ];
  return (
    <Menu as="div" className="mt-5">
      <Menu.Button className="bg-gray-200 text-gray-600 p-2 rounded-full">
        <HiOutlinePlus />
      </Menu.Button>
      <Menu.Items className={"flex flex-col mt-4 bg-white shadow-md py-3"}>
        {embedOptions.map((embed, i) => (
          <Menu.Item key={i}>
            {({ active }) => (
              <button
                className={`flex my-1 items-center gap-2 p-2 ${
                  active ? "bg-gray-100" : ""
                }`}
                onClick={embed.action}
              >
                <div className="flex justify-start">
                  <p className="text-xl mr-3">{embed.icon}</p>
                  <div className="flex flex-col items-start">
                    <h4>{embed.name}</h4>
                    <small>{embed.text}</small>
                  </div>
                </div>
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Embeds;
