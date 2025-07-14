import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category({ imageUrl, name, link }) {
  return (
    <Link href={link} className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-[50%] overflow-hidden">
        <Image src={imageUrl} width={500} height={500} alt={name} />
      </div>
      <p className="pt-3  dark:text-white">{name}</p>
    </Link>
  );
}
