"use client";
import ProductFilter from "@/components/modules/productfilter/ProductFilter";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import BlogBox from "./BlogBox";

function BlogPage({ blogs }) {
  const [activeTab, setActiveTab] = useState("newest");
  const [items, setItems] = useState(blogs);
  const sortByHightPrice = () => {
    const sortedItems = [...items].sort((a, b) => b.price - a.price);
    setItems(sortedItems);
  };
  const sortBylowtPrice = () => {
    const sortedItems = [...items].sort((a, b) => a.price - b.price);
    setItems(sortedItems);
  };
  const sortBySaleCount = () => {
    const sortedItems = [...items].sort((a, b) => b.sales - a.sales);
    setItems(sortedItems);
  };
  return (
    <div className="container mx-auto  mt-[140px]">
      <h3>همه بلاگ ها</h3>
      <div className=" flex gap-x-4">
        <ProductFilter />
        <div className="w-3/4 flex flex-col gap-y-3 p-2 bg-gray-100">
          <div className="flex gap-x-4 items-center [&>button]:cursor-pointer">
            <div className="flex gap-x-1 items-center">
              <FaFilter />
              <span>مرتب سازی بر اساس</span>
            </div>
            <button
              onClick={() => {
                setActiveTab("newest");
              }}
              className={`${
                activeTab === "newest" ? "bg-gray-200 text-greeb-400" : null
              }`}
            >
              جدیدترین
            </button>
            <button
              onClick={() => {
                setActiveTab("bestSeller");
                sortBySaleCount();
              }}
              className={`${
                activeTab === "bestSeller" ? "bg-gray-200 text-greeb-400" : null
              }`}
            >
              پرفروش ترین
            </button>
            <button
              onClick={() => {
                setActiveTab("expensive");
                sortByHightPrice();
              }}
              className={`${
                activeTab === "expensive" ? "bg-gray-200 text-greeb-400" : null
              }`}
            >
              گرانترین
            </button>
            <button
              onClick={() => {
                setActiveTab("cheap");
                sortBylowtPrice();
              }}
              className={`${
                activeTab === "cheap" ? "bg-gray-200 text-greeb-400" : null
              }`}
            >
              ارزانترین
            </button>
          </div>
          {/* bottom : */}
          <div className="flex flex-wrap  gap-4 ">
            {items.map((blog) => (
              <BlogBox blog={blog} key={blog._id} />
            ))}
          </div>
          <div>pagination</div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
