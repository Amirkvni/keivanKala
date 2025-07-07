import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function SectionHeader({ title }) {
  return (
    <div className="text-sm 2xl:text-base flex justify-between items-center">
      <span className="border-b-green-400 pb-2 border-b-3">{title} </span>
      <Link
        href="/profile"
        className="flex gap-x-2 items-center 2xl:text-base text-sm 2xl:hidden"
      >
        <FaArrowRight />
        <span>بازگشت</span>
      </Link>
    </div>
  );
}

export default SectionHeader;
