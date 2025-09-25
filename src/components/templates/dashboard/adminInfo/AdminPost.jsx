import React from "react";
import Image from "next/image";
function AdminPost({ author, updatedAt, content }) {
  return (
    <div className="dashboard-box-shadow bg-white p-6 flex flex-col gap-y-4  rounded-lg">
      <div className="flex items-center gap-x-3 ">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={author.profileUrl}
            width={400}
            height={400}
            alt="adninpuc"
          />
        </div>
        <div>
          <p>
            {author.firstname} {author.lastname}
          </p>
          <p> {new Date(updatedAt).toLocaleDateString("fa")}</p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default AdminPost;
