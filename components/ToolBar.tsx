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
      node: (
        <button>
          <IoIosLink />
        </button>
      ),
    },
    {
      name: "image",
      node: (
        <button>
          <BiImage />
        </button>
      ),
    },
    {
      name: "align-left",
      node: (
        <button>
          <FiAlignLeft />
        </button>
      ),
    },
    {
      name: "align-center",
      node: (
        <button>
          <FiAlignCenter />
        </button>
      ),
    },
    {
      name: "align-right",
      node: (
        <button>
          <FiAlignRight />
        </button>
      ),
    },
    {
      name: "align-justify",
      node: (
        <button>
          <FiAlignJustify />
        </button>
      ),
    },
    {
      name: "bold",
      node: (
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          <MdFormatBold />
        </button>
      ),
    },
    {
      name: "italic",
      node: (
        <button>
          <MdFormatItalic />
        </button>
      ),
    },
    {
      name: "strikethrough",
      node: (
        <button>
          <MdStrikethroughS />
        </button>
      ),
    },
    {
      name: "bullet-list",
      node: (
        <button>
          <MdFormatListBulleted />
        </button>
      ),
    },
    {
      name: "numbered-list",
      node: (
        <button>
          <MdFormatListNumbered />
        </button>
      ),
    },
  ];

  const handleFormatSelect = (event: any) => {
    const format = event.target.value;
    switch (format) {
      case "paragraph":
        editor.chain().focus().setParagraph().run();
      case "bold":
        editor.chain().focus().toggleBold().run();
        break;
      case "italic":
        editor.chain().focus().toggleItalic().run();
        break;
      case "strike":
        editor.chain().focus().toggleStrike().run();
        break;
      case "heading1":
        editor.chain().focus().setHeading({ level: 1 }).run();
        break;
      case "heading2":
        editor.chain().focus().setHeading({ level: 2 }).run();
        break;
      case "heading3":
        editor.chain().focus().setHeading({ level: 3 }).run();
        break;
      case "bulletList":
        editor.chain().focus().toggleBulletList().run();
        break;
      case "orderedList":
        editor.chain().focus().toggleOrderedList().run();
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-10 flex gap-3">
      <select onChange={handleFormatSelect}>
        <option value="paragraph">Paragraph</option>
        <option value="bold">Bold</option>
        <option value="italic">Italic</option>
        <option value="strike">Strike</option>
        <option value="heading1">Heading 1</option>
        <option value="heading2">Heading 2</option>
        <option value="heading3">Heading 3</option>
        <option value="bulletList">Bullet List</option>
        <option value="orderedList">Ordered List</option>
      </select>
      <div className="flex gap-3">
        {toolbarButtons.map((button, i) => (
          <div key={i}>{button.node}</div>
        ))}
      </div>
    </div>
  );
};

export default ToolBar;
