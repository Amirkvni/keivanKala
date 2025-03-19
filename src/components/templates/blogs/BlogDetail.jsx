import moment from "moment-jalaali";
import Image from "next/image";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";

function BlogDetail({ blog }) {
  moment.loadPersian({ dialect: "persian-modern" });
  const isoDate = blog.updatedAt;
  const jalaliDate = moment(isoDate).format("jDD / jMMMM / jYYYY");
  return (
    <div className="w-9/12 border rounded-lg p-4 flex flex-col gap-y-5">
      <h1>{blog.title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <div className="flex gap-x-2 items-center">
            <IoPersonOutline />
            <span>{blog.author}</span>
          </div>
          <span>{jalaliDate}</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span>اشتراک گذاری</span>
          <LuShare2 />
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden">
        <Image width={1500} height={1500} src={blog.mainImage} />
      </div>
      <p>{blog.introduction}</p>
      <div>
        {blog.content.map((contnet) => (
          <div key={contnet._id} className="flex flex-col gap-y-5 ">
            <h4 className="mt-6">{contnet.title}</h4>
            <p>{contnet.text}</p>
            <div className="rounded-2xl overflow-hidden">
              <Image width={1500} height={1500} src={contnet.image} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-x-3 items-center">
        <span>برچسب ها :</span>
        {blog.tags.map((tag) => (
          <span className="p-2 rounded-lg bg-gray-100 text-xs">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default BlogDetail;
