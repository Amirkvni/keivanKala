import React from "react";

import CommentItem from "./CommentItem";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";

function Comments({ comments }) {
  return (
    <div className=" profile-content-box  ">
      <SectionHeader title="نظرات شما" />
      <div className="flex flex-col gap-y-5  [&>div]:p-2  [&>div]:border-t-1 [&>div]:border-t-gray-200 ">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id}>
              <CommentItem comment={comment} />
            </div>
          ))
        ) : (
          <p className="text-center">نظری وجود ندارد !!</p>
        )}
      </div>
    </div>
  );
}

export default Comments;
