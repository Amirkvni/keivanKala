import moment from "moment-jalaali";
import Image from "next/image";
import React from "react";

function BlogBox({ blog }) {
  moment.loadPersian({ dialect: "persian-modern" });
  const isoDate = blog.updatedAt;
  const jalaliDate = moment(isoDate).format("jDD / jMMMM / jYYYY");
  return (
    <div className="w-[300px] h-[270px] border rounded-lg overflow-hidden p-3">
      <div>
        <Image width={500} height={500} src={blog.mainImage} />
      </div>
      <p className="py-3">{blog.title}</p>
      <p>{jalaliDate}</p>
    </div>
  );
}

export default BlogBox;
