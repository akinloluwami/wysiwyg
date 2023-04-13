import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import { Placeholder } from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        // emptyEditorClass: "is-editor-empty",
        // emptyNodeClass: "is-empty",
        // emptyNodeText: "Enter text here",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="mt-5">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} data-placeholder="Start typing..." />
    </div>
  );
};

export default Editor;
