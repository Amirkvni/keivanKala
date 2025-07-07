"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import ProfileProductCard from "@/components/modules/ProfileProductCard/ProfileProductCard";
import { FaRegEyeSlash } from "react-icons/fa6";
function Favorites({ wishlists }) {
  let [activeSort, setActiveSort] = useState("bestSeller");
  let [products, setProducts] = useState([...wishlists]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVisits = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const bestSellerHandler = () => {
    setActiveSort("bestSeller");
    const newProduct = products.sort(
      (a, b) => b.product.sales - a.product.sales
    );
    setProducts([...newProduct]);
    console.log("bestSellerHandler", newProduct);
  };
  const cheapestHandler = () => {
    setActiveSort("cheapest");
    const newProduct = products.sort(
      (a, b) => a.product.price - b.product.price
    );
    setProducts([...newProduct]);
    console.log("cheapestHandler", newProduct);
  };
  const mostExpensiveHandler = () => {
    setActiveSort("mostExpensive");
    const newProduct = products.sort(
      (a, b) => b.product.price - a.product.price
    );
    setProducts([...newProduct]);
    console.log("mostExpensiveHandler", newProduct);
  };
  return (
    <div className="profile-content-box ">
      <SectionHeader title="علاقه مندی های شما" />
      {products.length > 0 && (
        <div className="flex gap-x-3 [&>button]:cursor-pointer [&>button]:p-2 [&>button]:text-sm">
          <button
            onClick={() => bestSellerHandler()}
            className={`${
              activeSort === "bestSeller"
                ? "border-b-2 border-b-green-400"
                : null
            }`}
          >
            پرفروش ترین
          </button>
          <button
            onClick={() => mostExpensiveHandler()}
            className={`${
              activeSort === "mostExpensive"
                ? "border-b-2 border-b-green-400"
                : null
            }`}
          >
            گرانترین
          </button>
          <button
            onClick={() => cheapestHandler()}
            className={`${
              activeSort === "cheapest" ? "border-b-2 border-b-green-400" : null
            }`}
          >
            ارزانترین
          </button>
        </div>
      )}

      <div className="flex gap-2 flex-wrap items-center ">
        {products.length > 0 ? (
          paginatedVisits.map((product) => (
            <ProfileProductCard {...product.product} />
          ))
        ) : (
          <div className="flex justify-center items-center flex-col gap-y-5 text-3xl mx-auto border p-8 rounded-4xl border-gray-200">
            <FaRegEyeSlash />
            <span>هنوز محصولی را اضافه نکرده اید</span>
          </div>
        )}
      </div>

      {products.length > itemsPerPage && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1  rounded-full cursor-pointer ${
                currentPage === index + 1
                  ? "bg-green-400 text-white"
                  : "bg-white text-black dark:bg-zinc-700 dark:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
