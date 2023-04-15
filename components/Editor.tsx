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
import EmbedSocial from "./SocialEmbed";

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
    <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 448px; height: 226px; display: block; flex-grow: 1;" title="Twitter Tweet" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=e30%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1646973525071208450&amp;lang=en&amp;origin=file%3A%2F%2F%2FC%3A%2F%2FUsers%2Fakink%2FDesktop%2Flol%2Findex.html&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=550px" data-tweet-id="1647028574250041344"></iframe>

    `,

    // onUpdate: ({ editor }) => {
    //   console.log(editor.getHTML());
    // },
  });

  return (
    <div className="mt-5 mb-24">
      <EmbedImage editor={editor} />
      <EmbedVideo editor={editor} />
      <EmbedSocial editor={editor} />
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
