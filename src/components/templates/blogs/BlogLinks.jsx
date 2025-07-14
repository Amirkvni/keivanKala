import React from "react";
import BlogBox from "./BlogBox";

function BlogLinks({ blogLinks }) {

  return (
    <div className="2xl:w-3/12 w-full rounded-lg p-4 flex flex-col gap-y-5 h-fit bg-white dark:bg-zinc-800 dark:text-white ">
      <h1 className="dark:text-green-400">مطالب بیشتر</h1>
      {blogLinks.map((link) => (
        <BlogBox key={link._id} mag={link} />
      ))}
    </div>
  );
}

export default BlogLinks;
