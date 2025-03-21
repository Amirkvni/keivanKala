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
    <Link
      href={`/product/${slugify(product.englishFullName)}`}
      className="group  "
    >
      <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white h-[280px] w-[220px] group-hover:border-l-green-300 group-hover:border-l-1 group-hover:border-t-1 group-hover:border-t-green-300">
        <div className="h-6/12 ">
          <Image
            src={product.mainImage}
            width={500}
            height={400}
            className="w-32 h-32 mx-auto"
            alt="productImage"
          />
        </div>
        <div className="text-right h-3/12 ">{product.persianName}</div>
        <div className="h-3/12  pt-4">
          <div className="flex justify-between items-center">
            <span
              className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
              dir="ltr"
            >
              ۶۰%
            </span>
            <div className="flex flex-col">
              <span className="text-sm text-left  line-through  decoration-red-300 decoration-2 text-gray-500">
                {product?.price
                  ? product.price.toLocaleString()
                  : "قیمت موجود نیست"}
                تومان
              </span>
              <span className="text-green-400">
                {product?.secondPrice
                  ? product.secondPrice.toLocaleString()
                  : "قیمت موجود نیست"}
                تومان
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
