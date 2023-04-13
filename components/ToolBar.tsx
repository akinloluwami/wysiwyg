import { IoIosLink } from "react-icons/io";
import { BiImage } from "react-icons/bi";
import {
  FiAlignLeft,
  FiAlignRight,
  FiAlignCenter,
  FiAlignJustify,
} from "react-icons/fi";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdStrikethroughS,
} from "react-icons/md";

const ToolBar = ({ editor }: any) => {
  const toolbarButtons = [
    {
      name: "link",
      icon: <IoIosLink />,
      action: () => {
        // Add code for link tool action
      },
    },
    {
      name: "image",
      icon: <BiImage />,
      action: () => {
        // Add code for image tool action
      },
    },
    {
      name: "align-left",
      icon: <FiAlignLeft />,
      action: () => {
        editor.chain().focus().setTextAlign("left").run();
      },
    },
    {
      name: "align-center",
      icon: <FiAlignCenter />,
      action: () => {
        editor.chain().focus().setTextAlign("center").run();
      },
    },
    {
      name: "align-right",
      icon: <FiAlignRight />,
      action: () => {
        editor.chain().focus().setTextAlign("right").run();
      },
    },
    {
      name: "align-justify",
      icon: <FiAlignJustify />,
      action: () => {
        editor.chain().focus().setTextAlign("justify").run();
      },
    },
    {
      name: "bold",
      icon: <MdFormatBold />,
      action: () => {
        editor.chain().focus().toggleBold().run();
      },
    },
    {
      name: "italic",
      icon: <MdFormatItalic />,
      action: () => {
        editor.chain().focus().toggleItalic().run();
      },
    },
    {
      name: "strike",
      icon: <MdStrikethroughS />,
      action: () => {
        editor.chain().focus().toggleStrike().run();
      },
    },
    {
      name: "bullet-list",
      icon: <MdFormatListBulleted />,
      action: () => {
        editor.chain().focus().toggleBulletList().run();
      },
    },
    {
      name: "numbered-list",
      icon: <MdFormatListNumbered />,
      action: () => {
        editor.chain().focus().toggleOrderedList().run();
      },
    },
  ];

  const handleFormatSelect = (event: any) => {
    const format = event.target.value;
    switch (format) {
      case "paragraph":
        editor.chain().focus().setParagraph().run();
      case "heading1":
        editor.chain().focus().setHeading({ level: 1 }).run();
        break;
      case "heading2":
        editor.chain().focus().setHeading({ level: 2 }).run();
        break;
      case "heading3":
        editor.chain().focus().setHeading({ level: 3 }).run();
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-10 flex gap-3">
      <select onChange={handleFormatSelect}>
        <option value="paragraph">Paragraph</option>
        <option value="heading1">Heading 1</option>
        <option value="heading2">Heading 2</option>
        <option value="heading3">Heading 3</option>
      </select>
      <div className="flex gap-3">
        {toolbarButtons.map((button, i) => (
          <button
            key={i}
            onClick={button.action}
            className={`text-lg ${
              editor?.isActive(button.name) && "text-blue-500"
            }`}
          >
            {button.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToolBar;
