import Editor from "@/components/Editor";

const Index = () => {
  return (
    <div className="flex flex-col w-[50%] mx-auto">
      <input
        type="text"
        placeholder="Post title"
        className="mt-10 w-full outline-none border-none text-4xl"
        defaultValue={"Is this a cool title?"}
      />
      <Editor />
    </div>
  );
};

export default Index;
