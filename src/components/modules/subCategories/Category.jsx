import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category({ address, name, link }) {
  return (
    <Link
      href={link}
      className="flex flex-col justify-center items-center bg-white rounded-xl  "
    >
      <div className="w-16 h-16 bg-red-200">
        <Image width={500} height={500} src={address} />
      </div>
      <span className="text-xs text-gray-500 ">{name}</span>
    </Link>
  );
}

export default Category;
