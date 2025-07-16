import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category({ address, name, link }) {
  return (
    <Link
      href={link}
      className="flex flex-col justify-center items-center bg-white rounded-xl p-0.5"
    >
      <div className="w-12 h-12 xl:w-16 xl:h-16">
        <Image width={500} height={500} src={address} alt={name} />
      </div>
      <span className="text-xs text-gray-500 ">{name}</span>
    </Link>
  );
}

export default Category;
