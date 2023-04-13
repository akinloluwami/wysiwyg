import Editor from "@/components/Editor";
import Modal from "@/components/Modal";
import React, { useState } from "react";

const Index = () => {
  return (
    <div className="flex flex-col w-[50%] mx-auto">
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
