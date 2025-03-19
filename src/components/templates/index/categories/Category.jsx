import Image from "next/image";
import React from "react";

export default function Category({ imageUrl, name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-[50%] overflow-hidden">
        <Image
          src={`/images/${imageUrl}.jpg`}
          width={500}
          height={500}
          alt={name}
        />
      </div>
      <p className="pt-3">{name}</p>
    </div>
  );
}
