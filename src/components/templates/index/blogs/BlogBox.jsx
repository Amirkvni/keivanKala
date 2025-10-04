import moment from "moment-jalaali";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function BlogBox({ blog }) {
  const router = useRouter();
  moment.loadPersian({ dialect: "persian-modern" });
  const isoDate = blog.updatedAt;
  const jalaliDate = moment(isoDate).format("jDD / jMMMM / jYYYY");
  return (
    <div
      className="w-[310px] h-[300px]  dark:bg-zinc-800 dark:text-white rounded-lg overflow-hidden p-3  hover:shadow-lg  bg-white cursor-pointer"
      onClick={() => router.push(`/blogs/${blog.link}`)}
    >
      <Image
        width={500}
        height={500}
        src={blog.mainImage}
        alt={blog.title}
        className="rounded-lg rounded-bl-3xl overflow-hidden"
      />
      <p className="py-3 h-[70px] ">{blog.title}</p>
      <p className="text-green-400 text-sm">{jalaliDate}</p>
    </div>
  );
}

export default BlogBox;
