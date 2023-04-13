import { Menu } from "@headlessui/react";
import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

const Embeds = () => {
  return (
    <Menu>
      <Menu.Button>
        <HiOutlinePlus />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Embeds;
