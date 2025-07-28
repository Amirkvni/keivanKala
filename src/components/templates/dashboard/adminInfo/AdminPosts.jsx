import React from "react";

import AdminPost from "./AdminPost";
function AdminPosts() {
  return (
    <div className="p-3  flex flex-col gap-y-5  ">
      <AdminPost />
      <AdminPost />
    </div>
  );
}

export default AdminPosts;
