"use client";
import React, { Suspense, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProductFilter from "@/components/modules/productfilter/ProductFilter";
import ProductBox from "@/components/modules/productBox/ProductBox";
import SpecialBanner from "./SpecialBanner";
function SpecialOffers() {
  const [specialProducts, setspecialProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("newest");

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/products/specialoffers");
      const data = await res.json();
      setspecialProducts([...data]);
    };
    getProducts();
  }, []);
  const sortByHightPrice = () => {
    const sortedItems = [...specialProducts].sort((a, b) => b.price - a.price);
    setspecialProducts(sortedItems);
  };
  const sortBylowtPrice = () => {
    const sortedItems = [...specialProducts].sort((a, b) => a.price - b.price);
    setspecialProducts(sortedItems);
  };
  const sortBySaleCount = () => {
    const sortedItems = [...specialProducts].sort((a, b) => b.sales - a.sales);
    setspecialProducts(sortedItems);
  };

  return (
    <>
      <SpecialBanner />
      <div className="container mx-auto my-10">
        <div className=" flex gap-x-4">
          {/* right */}
          <ProductFilter />
          {/* left */}
          <div className="w-3/4 flex flex-col gap-y-3 p-2 bg-gray-100">
            {/* top : */}
            <div className="flex gap-x-7 text-xl  items-center [&>button]:cursor-pointer bg-white rounded-lg p-4">
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
                  activeTab === "bestSeller"
                    ? "bg-gray-200 text-greeb-400"
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
                    ? "bg-gray-200 text-greeb-400"
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
                  activeTab === "cheap" ? "bg-gray-200 text-greeb-400" : null
                }`}
              >
                ارزانترین
              </button>
            </div>
            {/* bottom : */}
            <div className="flex flex-wrap  gap-4 ">
              {specialProducts?.map((product) => (
                <ProductBox product={product} key={product._id} />
              ))}
            </div>

            <div>pagination</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialOffers;
