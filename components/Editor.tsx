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
import iframe from "@/custom/iframe";

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
    ],
    content: `
    <p>Hello</p>
    <iframe
    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FNzakiCodes%2Fposts%2Fpfbid02ooSZW1NSG3piq6XkbF9pQVaP4yCs3iNku6XpyP2vNHyXUx5nwyzUckYjEDGusJTTl&show_text=true&width=500"
    width="500"
    height="690"
    style="border:none;overflow:hidden"
    scrolling="no"
    frameBorder="0"
    allowfullcreen={true}
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>
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
