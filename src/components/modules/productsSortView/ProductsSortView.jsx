"use client";
import { FaFilter } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import ProductBox from "@/components/modules/productBox/ProductBox";
import { VscFilterFilled } from "react-icons/vsc";
import { GoSortDesc } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useMemo, useState } from "react";
import { BiMessageRoundedError } from "react-icons/bi";
import normalizeText from "@/utils/normalizeText";
function ProductsSortView({
  allProducts,
  setAllProducts,
  setIsMobileFiltersActive,
}) {
  const [activeTab, setActiveTab] = useState("newest");
  const [isMobileSortActive, setIsMobileSortActive] = useState(false);
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender")?.split(",") || [];
  const inStockFilter = searchParams.get("inStock") === "true";
  const colors = searchParams.get("colors")?.split(",") || [];
  const searchedProduct = searchParams.get("search") || "";
  const minPrice = parseInt(searchParams.get("min-price") || "0", 10);
  const maxPrice = parseInt(
    searchParams.get("max-price") || "100000000000",
    10
  );

  const normalizedSearch = normalizeText(searchedProduct);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const normalizedTitle = normalizeText(product.persianName);
      const productPrice = parseInt(product.price, 10);

      return (
        (gender.length === 0 || gender.includes(product.gender)) &&
        (!inStockFilter || Number(product.stock) > 0) &&
        (colors.length === 0 || colors.includes(product.colors)) &&
        (normalizedSearch === "" ||
          normalizedTitle.includes(normalizedSearch)) &&
        productPrice >= minPrice &&
        productPrice <= maxPrice
      );
    });
  }, [
    allProducts,
    gender,
    inStockFilter,
    colors,
    normalizedSearch,
    minPrice,
    maxPrice,
  ]);
  const sortByHighPrice = () => {
    const sortedItems = [...allProducts].sort((a, b) => b.price - a.price);
    setAllProducts(sortedItems);
    setIsMobileSortActive(false);
  };
  const sortBylowtPrice = () => {
    const sortedItems = [...allProducts].sort((a, b) => a.price - b.price);
    setAllProducts(sortedItems);
    setIsMobileSortActive(false);
  };
  const sortBySaleCount = () => {
    const sortedItems = [...allProducts].sort((a, b) => b.sales - a.sales);
    setAllProducts(sortedItems);
    setIsMobileSortActive(false);
  };
  return (
    <>
      {/* mobile sorts : */}
      <div
        className={`fixed backdrop transition-all duration-300 z-99 w-full h-screen p-3   ${
          isMobileSortActive ? "top-0 left-0" : "top-[100vh]"
        }  `}
      >
        <div className="dark:bg-zinc-800 dark:text-white bottom-0 absolute w-full p-3 left-0 rounded-2xl">
          <div className="flex justify-between items-center text-xl ">
            <span>مرتب سازی بر اساس</span>
            <IoCloseCircleOutline
              onClick={() => setIsMobileSortActive(false)}
            />
          </div>
          <div className="flex flex-col gap-y-6 items-center mt-3  [&>button]:border-gray-200 [&>button]:p-2 [&>button]:rounded-lg [&>button]:w-full [&>button]:border-[0.1px]">
            <button onClick={() => setIsMobileSortActive(false)}>
              جدیدترین
            </button>
            <button
              onClick={() => {
                sortBySaleCount();
                setIsMobileSortActive(false);
              }}
            >
              پرفروش ترین
            </button>
            <button
              onClick={() => {
                sortByHighPrice();
                setIsMobileSortActive(false);
              }}
            >
              گرانترین
            </button>
            <button
              onClick={() => {
                sortBylowtPrice();
                setIsMobileSortActive(false);
              }}
            >
              ارزانترین
            </button>
          </div>
        </div>
      </div>
      <div className=" 2xl:hidden flex gap-x-2 items-center [&>div]:w-1/2 [&>div]:flex [&>div]:gap-x-2 [&>div]:items-center [&>div]:bg-white [&>div]:p-3 [&>div]:text-sm  [&>div]:dark:bg-zinc-800 dark:text-white [&>div]:rounded-lg">
        <div onClick={() => setIsMobileFiltersActive(true)}>
          <VscFilterFilled />
          <span>فیلترها</span>
        </div>
        <div onClick={() => setIsMobileSortActive(true)}>
          <GoSortDesc />
          <span>مرتب سازی</span>
        </div>
      </div>
      {/* desktop sorts : */}
      <div className="w-full 2xl:w-3/4 flex flex-col gap-y-3 xl:p-2 mx-auto  ">
        {/* top : */}
        <div className=" gap-x-7 text-xl  items-center [&>button]:cursor-pointer dark:bg-zinc-800 dark:text-white bg-white rounded-lg p-4 hidden 2xl:flex">
          <div className="flex gap-x-1 items-center">
            <FaFilter />
            <span>مرتب سازی بر اساس</span>
          </div>
          <button
            onClick={() => {
              setActiveTab("newest");
            }}
            className={`${
              activeTab === "newest"
                ? "bg-green-600 text-white p-2 rounded-lg "
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
                ? "bg-green-600 text-white p-2 rounded-lg "
                : null
            }`}
          >
            پرفروش ترین
          </button>
          <button
            onClick={() => {
              setActiveTab("expensive");
              sortByHighPrice();
            }}
            className={`${
              activeTab === "expensive"
                ? "bg-green-600 text-white p-2 rounded-lg "
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
                ? "bg-green-600 text-white p-2 rounded-lg "
                : null
            }`}
          >
            ارزانترین
          </button>
        </div>
        {/* bottom : */}
        <div className="flex flex-wrap  gap-2 xl:gap-4  ">
          {filteredProducts.length > 0 ? (
            filteredProducts?.map((product) => (
              <ProductBox product={product} key={product._id} />
            ))
          ) : (
            <div className=" mx-auto">
              <BiMessageRoundedError className="text-9xl text-green-400 mx-auto" />
              <div>
                <p className="text-sm">کالایی با این مشخصات پیدا نکردیم</p>
                <p className="text-gray-400 text-xs mt-2">
                  پیشنهاد می‌کنیم فیلترها را تغییر دهید
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsSortView;
