import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import { Placeholder } from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Embeds from "./Embeds";
import EmbedImage from "./EmbedImage";
import Image from "@tiptap/extension-image";
import EmbedVideo from "./VideoEmbed";
import Youtube from "@tiptap/extension-youtube";
import { useEffect } from "react";
import { Button } from "@/custom/ButtonEmbed";
import { Div } from "@/custom/Div";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Youtube,
      Button,
      Div,
    ],
    content: "",
    // onUpdate: ({ editor }) => {
    //   console.log(editor.getHTML());
    // },
  });

  useEffect(() => {
    editor?.commands.insertContent({
      type: "tweet",
      attrs: {
        tweetId: "1234567890123456789",
      },
    });
  }, []);

  return (
    <div className="mt-5 mb-24">
      <button
        onClick={() => {
          editor?.commands.insertContent({
            type: "div",
            content: [{ type: "text", text: "Hello, world!" }],
          });
        }}
      >
        Click
      </button>
      <EmbedImage editor={editor} />
      <EmbedVideo editor={editor} />
      <ToolBar editor={editor} />
      <EditorContent
        editor={editor}
        data-placeholder="Start typing..."
        className="my-5 py-5"
      />
      <Embeds />
    </div>
  );
};

export default Editor;
