"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

function BlogFilter() {
  const [isSwitchToggleActive, setIsSwitchToggleActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="relative w-1/4 hidden 2xl:block  p-4">
      <div className="sticky top-28 flex flex-col gap-y-4 bg-white p-2 rounded-lg text-xl dark:bg-zinc-800 dark:text-white">
        <div className="flex justify-between items-center">
          <span>فیلترها</span>
          <button className="text-green-500 hover:text-green-600 cursor-pointer">
            حذف همه
          </button>
        </div>
        <div>
          <input
            type="text"
            className="w-full  outline-none p-3 rounded-xl  bg-gray-100 placeholder:text-gray-600 placeholder:text-lg"
            placeholder="جستجو در بین نتایج ..."
            value={searchValue}
          />
        </div>

        <div className="flex justify-between items-center cursor-pointer">
          <span>دسته بندی ها</span>
          <FaAngleLeft />
        </div>

        <div className="flex justify-between items-center ">
          <span>داغ ترین ها</span>
          <div dir="ltr">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isSwitchToggleActive}
                onChange={() => {
                  setIsSwitchToggleActive((prev) => !prev);
                }}
              />
              <div
                className={`w-12 h-6 bg-gray-200 rounded-full ${
                  isSwitchToggleActive ? "bg-green-500" : ""
                } transition-colors`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                    isSwitchToggleActive ? "transform translate-x-6" : ""
                  }`}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogFilter;
