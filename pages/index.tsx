import Editor from "@/components/Editor";
import React from "react";

const Index = () => {
  return (
    <div className="flex  justify-center">
      <input
        type="text"
        placeholder="Post title"
        className="mt-10 w-[550px] outline-none border-none text-4xl"
      />
      <Editor />
    </div>
  );
};

export default Index;
