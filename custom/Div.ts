import { Node } from "@tiptap/core";

export const Div = Node.create({
  name: "div",

  group: "block",

  content: "inline*",

  parseHTML() {
    return [{ tag: "div" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", HTMLAttributes, 0];
  },
});
