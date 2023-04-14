import React from "react";
import ReactDOM from "react-dom";
import { NodeView } from "@tiptap/core";
import { TwitterTweetEmbed } from "react-twitter-embed";

export const tweetNodeViewRenderer = (nodeView: NodeView) => {
  const onUpdate = () => {
    const contentDOM = nodeView.contentDOM as Element;
    const tweetId = nodeView.node.attrs.tweetId;

    if (!contentDOM || !tweetId) {
      return;
    }

    ReactDOM.render(
      <TwitterTweetEmbed
        tweetId={tweetId}
        onLoad={() => {
          nodeView.editor.view.update();
        }}
      />,
      contentDOM
    );
  };

  onUpdate();
};
