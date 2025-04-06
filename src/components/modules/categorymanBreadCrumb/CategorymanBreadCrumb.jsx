import Link from "next/link";
import React from "react";

export default function CategorymanBreadCrumb({ name }) {
  return (
    <div className="mt-[140px] container  flex items-center gap-x-2  bg-white w-fit rounded-lg p-3 mr-4 2xl:mr-58 text-xs xl:text-base">
      <Link href="/">کیوان کالا</Link>
      <span>/</span>
      <Link href="/mens-category-shop">مردانه</Link>
      <span>/</span>
      <Link href="/category-men-clothing"> {name} مردانه </Link>
    </div>
  );
}
