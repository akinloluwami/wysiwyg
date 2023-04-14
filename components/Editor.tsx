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
import TweetNode from "@/custom/twitter/TweetNode";

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
      TweetNode,
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
        tweetId: "1609348650395648000",
      },
    });
  }, []);

  const insertTweet = () => {
    console.log("====================================");
    // console.log();
    console.log("====================================");
    const tweetId = "1609348650395648000";
    editor?.commands.insertContent(
      `<div data-type="tweetNode" data-tweet-id="${tweetId}"></div>`
    );
  };
  return (
    <div className="mt-5 mb-24">
      <button
        onClick={() => {
          insertTweet();
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
