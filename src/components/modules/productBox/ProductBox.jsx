import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";

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
      <div className="rounded-lg p-3 overflow-hidden xl:mx-2 bg-white dark:bg-zinc-800 dark:text-white   w-[150px] xl:w-[220px] group-hover:border-l-green-300 group-hover:border-l-1 group-hover:border-t-1 group-hover:border-t-green-300">
        <div className="h-[120px] ">
          <Image
            src={product.mainImage}
            width={500}
            height={400}
            className="w-full h-full mx-auto object-contain "
            alt="productImage"
          />
        </div>
        <div className="text-xs xl:text-base text-right h-[70px]">
          {product.persianName}
        </div>
        <div className="flex gap-x-1 items-center justify-end">
          <span>۳.۵</span>
          <MdOutlineStar className="text-yellow-400" />
        </div>
        <div className=" pt-4">
          <div
            className={`flex  ${
              product.secondPrice ? "justify-between " : "justify-end"
            } items-center`}
          >
            {product.secondPrice && (
              <span
                className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                dir="ltr"
              >
                {product.discount}%
              </span>
            )}

            <div className="flex flex-col ">
              <span
                className={`text-xs   ${
                  product.secondPrice
                    ? "line-through  decoration-red-300 decoration-2 text-gray-500 xl:text-sm dark:text-white"
                    : "text-green-400 xl:text-base "
                } `}
              >
                {product.price.toLocaleString()}تومان
              </span>
              {product.secondPrice && (
                <span className="text-green-400 text-xs  xl:text-base ">
                  {product.secondPrice.toLocaleString()}
                  تومان
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
