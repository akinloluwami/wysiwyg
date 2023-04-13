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
// import TweetEmbed from "@/custom/twitter/TweetNode";
import { useEffect } from "react";

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
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Youtube,
      //   new TweetEmbed(),
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
