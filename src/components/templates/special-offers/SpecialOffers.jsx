"use client";
import React, { Suspense, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProductFilter from "@/components/modules/productfilter/ProductFilter";
import ProductBox from "@/components/modules/productBox/ProductBox";
import SpecialBanner from "./SpecialBanner";
import { VscFilterFilled } from "react-icons/vsc";
import SelectedProducts from "./SelectedProducts";
import { GoSortDesc } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
function SpecialOffers() {
  const [specialProducts, setspecialProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("newest");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isMobileFiltersActive, setIsMobileFiltersActive] = useState(false);
  const [isMobileSortActive, setIsMobileSortActive] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/products/specialoffers");
      const data = await res.json();
      const filteredData = data.filter(
        (product) => new Date(product.expireTime) > new Date()
      );
      setSelectedProducts([...filteredData]);
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
      {/* <SpecialBanner /> */}
      <SelectedProducts selectedProducts={selectedProducts} />
      <div className="container mx-auto my-10">
        <div className=" flex 2xl:flex-row flex-col gap-y-3 2xl:gap-x-4">
          {/* right */}
          <ProductFilter />
          {/* mobile filters: */}
          <div
            className={`fixed bg-white transition-all duration-300 z-99 w-full h-screen p-3 ${
              isMobileFiltersActive ? "top-0 left-0" : "top-[100vh]"
            }  `}
          >
            <div className="flex justify-between items-center text-xl ">
              <span>فیلتر محصولات</span>
              <IoCloseCircleOutline
                onClick={() => setIsMobileFiltersActive(false)}
              />
            </div>
            <div className="flex flex-col gap-y-6">
              <input type="text" placeholder="جستجو در بین نتایح" />
              <div>محصدوده </div>
              <div className="flex justify-between items-center">
                <span>دسته بندی ها</span>
                <FaAngleLeft />
              </div>
              <div className="flex justify-between items-center">
                <span>دسته بندی ها</span>
                <FaAngleLeft />
              </div>
              <div className="flex justify-between items-center">
                <span>دسته بندی ها</span>
                <FaAngleLeft />
              </div>
              <div>فقثط موجوذ</div>
              <div>فقثط موجوذ</div>
              <button className="bg-green-400 text-white py-2 rounded-xl">
                اعمال فیلتر
              </button>
            </div>
          </div>
          {/* mobile sorts : */}
          <div
            className={`fixed backdrop transition-all duration-300 z-99 w-full h-screen p-3 ${
              isMobileSortActive ? "top-0 left-0" : "top-[100vh]"
            }  `}
          >
            <div className="bg-red-200 bottom-0 absolute w-full p-3 left-0 rounded-2xl">
              <div className="flex justify-between items-center text-xl ">
                <span>مرتب سازی بر اساس</span>
                <IoCloseCircleOutline
                  onClick={() => setIsMobileSortActive(false)}
                />
              </div>
              <div className="flex flex-col gap-y-6 items-center mt-3">
                <div>جدیدترین</div>
                <div>پرفروش ترین</div>
                <div>گرانترین</div>
                <div>ارزانترین</div>
              </div>
            </div>
          </div>
          <div className=" 2xl:hidden flex gap-x-2 items-center [&>div]:w-1/2 [&>div]:flex [&>div]:gap-x-2 [&>div]:items-center [&>div]:bg-white [&>div]:p-3 [&>div]:text-sm ">
            <div onClick={() => setIsMobileFiltersActive(true)}>
              <VscFilterFilled />
              <span>فیلترها</span>
            </div>
            <div onClick={() => setIsMobileSortActive(true)}>
              <GoSortDesc />
              <span>مرتب سازی</span>
            </div>
          </div>
          {/* left */}
          <div className="w-full 2xl:w-3/4 flex flex-col gap-y-3 xl:p-2 bg-gray-100">
            {/* top : */}
            <div className=" gap-x-7 text-xl  items-center [&>button]:cursor-pointer bg-white rounded-lg p-4 hidden 2xl:flex">
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
            <div className="flex flex-wrap  gap-2 xl:gap-4 ">
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
