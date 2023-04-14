import React, { useRef, useEffect } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import { TwitterTweetEmbed } from "react-twitter-embed";

interface TweetProps {
  tweetId: string;
}

const Tweet: React.FC<TweetProps> = ({ tweetId }) => {
  return (
    <NodeViewWrapper className="Tweet">
      <TwitterTweetEmbed tweetId={tweetId} />
    </NodeViewWrapper>
  );
};

export default Tweet;
