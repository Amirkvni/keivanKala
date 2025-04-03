import Link from "next/link";
import React from "react";

export default function CategorymanBreadCrumb({ name }) {
  return (
    <div className="mt-[140px] container mx-38 flex items-center gap-x-2">
      <Link href="/">کیوان کالا</Link>
      <span>/</span>
      <Link href="/mens-category-shop">مردانه</Link>
      <span>/</span>
      <Link href="/category-men-clothing"> {name} مردانه </Link>
    </div>
  );
}
