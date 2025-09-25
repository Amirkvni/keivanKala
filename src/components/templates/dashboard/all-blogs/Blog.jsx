import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineAdd } from "react-icons/md";
import { PiUserCircleLight } from "react-icons/pi";
function Blog({ mainImage, _id, author, updatedAt, title }) {
  return (
    <div
      key={_id}
      className="border p-2 w-[300px] flex flex-col gap-y-2 rounded-lg border-gray-300"
    >
      <div>
        <Image src={mainImage} alt={`blog-${_id}`} width={300} height={200} />
      </div>
      <div className="flex gap-x-2 items-center">
        <PiUserCircleLight />

        <span className="text-xs">
          {author.firstname} {author.lastname}
        </span>
      </div>
      <p>{title}</p>
      <div className="flex justify-between items-center">
        <span>{new Date(updatedAt).toLocaleDateString("fa")}</span>
        <div className="flex gap-x-2 items-center text-xl [&>svg]:cursor-pointer">
          <FiEdit className="hover:text-green-400" />
          <MdDeleteOutline className="hover:text-red-400" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
