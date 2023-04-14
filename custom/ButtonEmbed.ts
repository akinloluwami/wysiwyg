import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";

export interface ButtonOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    button: {
      /**
       * Add a button
       */
      setButton: (options: { value: string; title?: string }) => ReturnType;
    };
  }
}

export const Button = Node.create<ButtonOptions>({
  name: "button",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  group() {
    return "block";
  },

  draggable: true,

  addAttributes() {
    return {
      value: {
        default: "",
      },
      title: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [{ tag: "button" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "button",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      this.options.HTMLAttributes.value,
    ];
  },

  addCommands() {
    return {
      setButton:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /(?:^|\s)(\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,
        type: this.type,
        getAttributes: (match) => {
          const [, , value, title] = match;
          return { value, title };
        },
      }),
    ];
  },
});
