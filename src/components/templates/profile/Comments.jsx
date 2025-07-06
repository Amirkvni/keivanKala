import React from "react";

import CommentItem from "./CommentItem";

function Comments({ comments }) {
  return (
    <div className="  flex flex-col gap-y-8 2xl:p-3 p-0.5 w-full 2xl:w-3/4 rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit text-sm 2xl:text-lg">
        دیدگاه های شما
      </span>
      <div className="flex flex-col gap-y-5  [&>div]:p-2  [&>div]:border-t-1 [&>div]:border-t-gray-200">
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
