import Editor from "@/components/Editor";

const Index = () => {
  return (
    <div className="flex flex-col w-[50%] mx-auto">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Hey{" "}
          <a href="https://twitter.com/FarzaTV?ref_src=twsrc%5Etfw">@FarzaTV</a>{" "}
          I gtfol last night. 🎉
        </p>
        &mdash; Akinkunmi ♦ N&amp;W s3 (@xing0x){" "}
        <a href="https://twitter.com/xing0x/status/1646262950267695105?ref_src=twsrc%5Etfw">
          April 12, 2023
        </a>
      </blockquote>
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
