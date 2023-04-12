import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="mt-5">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
