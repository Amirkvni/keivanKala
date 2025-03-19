import moment from "moment-jalaali";
import Image from "next/image";
import React from "react";

function BlogBox({ blog }) {
  moment.loadPersian({ dialect: "persian-modern" });
  const isoDate = blog.updatedAt;
  const jalaliDate = moment(isoDate).format("jDD / jMMMM / jYYYY");
  return (
    <div className="w-[310px] h-[300px] bg-white rounded-lg overflow-hidden p-3 group-hover:border-t-1 group-hover:border-t-green-400 group-hover:border-l-1 group-hover:border-l-green-400">
      <div className="rounded-lg rounded-bl-3xl overflow-hidden">
        <Image width={500} height={500} src={blog.mainImage} />
      </div>
      <p className="py-3">{blog.title}</p>
      <p className="text-green-400 text-sm">{jalaliDate}</p>
    </div>
  );
}

export default BlogBox;
