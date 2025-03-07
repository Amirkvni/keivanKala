import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductBox({ product }) {
  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };
  return (
    <Link href={`/product/${slugify(product.englishFullName)}`}>
      <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white h-[250px]">
        <Image
          src={product.mainImage}
          width={500}
          height={400}
          className="w-32 h-32 mx-auto"
          alt="productImage"
        />
        <div className="text-right">{product.persianName}</div>
        <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
          {product.price}
        </div>
        <div className="flex items-center justify-around">
          <span
            className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
            dir="ltr"
          >
            60%
          </span>

          <div className="flex items-center text-green-400 gap-x-1 text-base">
            <span> {product.secondPrice}</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
