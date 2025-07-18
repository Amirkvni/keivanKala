import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

export default function SectionHeader({ title, link }) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <span className="text-lg xl:text-2xl font-semibold dark:text-white">
          {title}
        </span>
        <Link
          href={link}
          className=" flex xl:gap-x-2  items-center text-green-500"
        >
          <span className="text-sm xl:text-xl font-semibold">مشاهده همه</span>
          <FaChevronLeft />
        </Link>
      </div>
    </section>
  );
}
