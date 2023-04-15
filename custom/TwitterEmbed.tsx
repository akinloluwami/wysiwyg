import { Node, mergeAttributes } from "@tiptap/core";
import { createEmbed } from "./Embeds";

export interface TwitterEmbedOptions {
  HTMLAttributes: Record<string, any>;
}

export const TwitterEmbed = Node.create<TwitterEmbedOptions>({
  name: "twitterEmbed",

  defaultOptions: {
    HTMLAttributes: {},
  },

  group: "block",

  content: "text*", // Allow text inside this custom node

  addAttributes() {
    return {
      tweetContent: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "blockquote.twitter-tweet",
      },
    ];
  },

  renderHTML({ node }) {
    // Create the embed with tweet
    const embedElement = createEmbed(node.attrs.tweetContent);

    if (!embedElement) {
      return ["blockquote", "Failed to render tweet."];
    }

    return ["div", mergeAttributes(this.options.HTMLAttributes), embedElement];
  },
});
