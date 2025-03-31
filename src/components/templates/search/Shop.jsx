"use client";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import ProductBox from "@/components/modules/productBox/ProductBox";
import ProductFilter from "@/components/modules/productfilter/ProductFilter";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";

function Shop({ products }) {
  const [activeTab, setActiveTab] = useState("newest");
  const [items, setItems] = useState(products);
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
    <div className="container mx-auto  mt-[140px] ">
      {/* <Breadcrumb /> */}
      <div className=" flex gap-x-4">
        <ProductFilter />
        <div className="w-3/4 flex flex-col gap-y-3 p-4 ">
          <div className="flex gap-x-7 text-xl  items-center [&>button]:cursor-pointer bg-white dark:bg-zinc-800 dark:text-white rounded-lg p-4 ">
            <div className="flex gap-x-2.5 items-center ">
              <FaFilter />
              <span>مرتب سازی بر اساس</span>
            </div>
            <button
              onClick={() => {
                setActiveTab("newest");
              }}
              className={`${
                activeTab === "newest"
                  ? "bg-gray-100 text-green-600 p-2 rounded-sm"
                  : null
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
                activeTab === "bestSeller"
                  ? "bg-gray-100 text-green-600 p-2 rounded-sm"
                  : null
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
                activeTab === "expensive"
                  ? "bg-gray-100 text-green-600 p-2 rounded-sm"
                  : null
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
                activeTab === "cheap"
                  ? "bg-gray-100 text-green-600 p-2 rounded-sm"
                  : null
              }`}
            >
              ارزانترین
            </button>
          </div>
          {/* bottom : */}
          <div className="flex flex-wrap gap-7.5">
            {items.map((product) => (
              <ProductBox product={product} key={product._id} />
            ))}
          </div>
          <div>pagination</div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
