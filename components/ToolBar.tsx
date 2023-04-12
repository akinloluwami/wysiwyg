const ToolBar = ({ editor }: any) => {
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
      case "underline":
        editor.chain().focus().toggleUnderline().run();
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
    <div>
      <select onChange={handleFormatSelect}>
        <option value="paragraph">Paragraph</option>
        <option value="bold">Bold</option>
        <option value="italic">Italic</option>
        <option value="strike">Strike</option>
        <option value="underline">Underline</option>
        <option value="heading1">Heading 1</option>
        <option value="heading2">Heading 2</option>
        <option value="headging3">Heading 3</option>
        <option value="bulletList">Bullet List</option>
        <option value="orderedList">Ordered List</option>
      </select>
    </div>
  );
};

export default ToolBar;
