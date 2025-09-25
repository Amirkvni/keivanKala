import React from "react";

import AdminPost from "./AdminPost";
function AdminPosts({ userPosts }) {
  return (
    <div className="p-3  flex flex-col gap-y-5  ">
      {userPosts.map((post) => {
        return <AdminPost key={post._id} {...post} />;
      })}
    </div>
  );
}

export default AdminPosts;
