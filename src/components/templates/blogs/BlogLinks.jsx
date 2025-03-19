import React from "react";
import BlogBox from "./BlogBox";

function BlogLinks({ blogLinks }) {
  return (
    <div className="w-3/12 border rounded-lg p-4 flex flex-col gap-y-5 h-fit">
      <h1>مطالب بیشتر</h1>
      {blogLinks.map((link) => (
        <BlogBox key={link._id} mag={link} />
      ))}
    </div>
  );
}

export default BlogLinks;
