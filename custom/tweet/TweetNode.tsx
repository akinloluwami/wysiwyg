import { Node, mergeAttributes } from "@tiptap/core";
import TweetNodeView from "./TweetNodeView";

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
    return (props) => new TweetNodeView(props);
  },
});
