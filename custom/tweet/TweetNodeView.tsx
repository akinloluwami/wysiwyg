import { NodeView } from "@tiptap/core";
import { tweetNodeViewRenderer } from "./TweetNodeViewRenderer";

export default class TweetNodeView extends NodeView {
  mount() {
    super.mount();
    tweetNodeViewRenderer(this);
  }
}
