import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Tweet from "./Tweet";

export default Node.create({
  name: "tweetNode",

  group: "block",

  atom: true,

  attributes: {
    tweetId: {
      default: "",
    },
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="tweetNode"]',
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    const { tweetId } = node.attrs;

    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "tweetNode",
        "data-tweet-id": tweetId,
      }),
      0,
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Tweet);
  },
});
