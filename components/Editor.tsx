import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Embeds from "./Embeds";
import EmbedImage from "./EmbedImage";
import Image from "@tiptap/extension-image";
import EmbedVideo from "./VideoEmbed";
import Youtube from "@tiptap/extension-youtube";
import iframe from "@/custom/iframe";
import Blockquote from "@tiptap/extension-blockquote";

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
      iframe,
      Blockquote,
    ],
    content: `
    <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">
      Hey{" "}
      <a href="https://twitter.com/FarzaTV?ref_src=twsrc%5Etfw">@FarzaTV</a>{" "}
      I gtfol last night. 🎉
    </p>
    &mdash; Akinkunmi ♦ N&amp;W s3 (@xing0x){" "}
    <a href="https://twitter.com/xing0x/status/1646262950267695105?ref_src=twsrc%5Etfw">
      April 12, 2023
    </a>
  </blockquote>

    `,

    // onUpdate: ({ editor }) => {
    //   console.log(editor.getHTML());
    // },
  });

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
