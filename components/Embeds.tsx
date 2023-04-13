import { Menu } from "@headlessui/react";
import React from "react";
import { HiOutlinePlus, HiVideoCamera } from "react-icons/hi";
import { BsImage } from "react-icons/bs";
import { RiBubbleChartFill } from "react-icons/ri";

const Embeds = () => {
  const embedOptions = [
    {
      name: "Picture",
      text: "jpg, png",
      icon: <BsImage />,
    },
    {
      name: "Video",
      text: "YouTube, Vimeo",
      icon: <HiVideoCamera />,
    },
    {
      name: "Social",
      text: "Facebook, Twitter",
      icon: <RiBubbleChartFill />,
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
