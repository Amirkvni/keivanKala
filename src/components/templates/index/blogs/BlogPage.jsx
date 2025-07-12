"use client";
import React, { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import BlogBox from "./BlogBox";
import BlogFilter from "../../blogs/BlogFilter";
import { useSearchParams } from "next/navigation";
import normalizeText from "@/utils/normalizeText";
import { BiMessageRoundedError } from "react-icons/bi";

function BlogPage({ blogs }) {
  const [activeTab, setActiveTab] = useState("newest");
  const searchParams = useSearchParams();
  const searchedProduct = searchParams.get("search") || "";
  const normalizedSearch = normalizeText(searchedProduct);
  const filtered = useMemo(() => {
    return blogs.filter((blog) => {
      const normalizedTitle = normalizeText(blog.title);
      return (
        normalizedSearch === "" || normalizedTitle.includes(normalizedSearch)
      );
    });
  }, [normalizedSearch, blogs]);
  return (
    <div className="container mx-auto  mt-[140px]">
      <h3 className="pr-5 dark:text-white">همه بلاگ ها</h3>
      <div className=" flex gap-x-4">
        <BlogFilter />
        <div className=" flex flex-col gap-y-3 p-2 2xl:w-3/4 w-full">
          <div className=" flex 2xl:gap-x-4 gap-x-2 items-center [&>button]:cursor-pointer dark:bg-zinc-800 bg-white p-4 text-[11px] 2xl:text-base rounded-xl dark:text-white">
            <div className="flex gap-x-1 items-center  ">
              <FaFilter />
              <span>مرتب سازی بر اساس</span>
            </div>
            <button
              onClick={() => {
                setActiveTab("newest");
              }}
              className={` ${
                activeTab === "newest"
                  ? "bg-gray-200  p-2 rounded-lg text-green-500"
                  : null
              }`}
            >
              جدید ترین
            </button>
            <button
              onClick={() => {
                setActiveTab("mostview");
              }}
              className={`${
                activeTab === "mostview"
                  ? "bg-gray-200  p-2 rounded-lg text-green-500"
                  : null
              }`}
            >
              پربازدید ترین
            </button>
          </div>
          {/* bottom : */}
          <div className="flex flex-wrap  gap-4 ">
            {filtered.length > 0 ? (
              filtered?.map((blog) => <BlogBox blog={blog} key={blog._id} />)
            ) : (
              <div className=" mx-auto">
                <BiMessageRoundedError className="text-9xl text-green-400 mx-auto" />
                <div>
                  <p className="text-sm">وبلاگی با این مشخصات پیدا نکردیم</p>
                  <p className="text-gray-400 text-xs mt-2">
                    پیشنهاد می‌کنیم فیلترها را تغییر دهید
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* <div>pagination</div> */}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
