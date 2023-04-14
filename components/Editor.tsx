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
import { useEffect, useRef } from "react";
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

    `,

    // onUpdate: ({ editor }) => {
    //   console.log(editor.getHTML());
    // },
  });
  const iframeButton = useRef(null);

  const onInsertIframe = () => {
    if (editor) {
      editor.chain().focus().insertContent(iframeContent).run();
    }
  };

  const iframeContent = `
  <iframe src="https://player.vimeo.com/video/806024932?h=291ee36184&title=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/806024932">GAUCHO (el buen amigo)</a> from <a href="https://vimeo.com/tompeyrat">Tom Peyrat</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
    `;

  return (
    <div className="mt-5 mb-24">
      <button
        ref={iframeButton}
        onClick={onInsertIframe}
        className="your-button-class"
      >
        Add iframe
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
