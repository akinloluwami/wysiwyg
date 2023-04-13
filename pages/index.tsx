import Editor from "@/components/Editor";
import EmbedImage from "@/components/EmbedImage";
import React, { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Index = () => {
  return (
    <div className="flex flex-col w-[50%] mx-auto">
      <TwitterTweetEmbed tweetId="1609348650395648000" />

      <input
        type="text"
        placeholder="Post title"
        className="mt-10 w-full outline-none border-none text-4xl"
      />
      <Editor />
    </div>
  );
};

export default Index;
