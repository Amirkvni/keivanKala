"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { CartContext } from "@/contexts/CartContext";
function Favorites({ wishlists }) {
  let [activeSort, setActiveSort] = useState("bestSeller");
  let [products, setProducts] = useState([...wishlists]);

  const deleteProduct = async (productID) => {
    const res = await fetch(`/api/wishlist/${productID}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      Swal.fire({
        title: "محصول از علاقه مندی های شما پاک شد",
        icon: "success",
        timer: "1200",
      }).then(() => {
        location.reload();
      });
    }
  };
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
  let { addToCart } = useContext(CartContext);
  return (
    <div className=" flex flex-col gap-y-8 p-3 w-full 2xl:w-3/4 rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit text-sm 2xl:text-base">
        علاقه مندی های شما
      </span>
      <div className="flex gap-x-3 [&>button]:cursor-pointer [&>button]:p-2 [&>button]:text-sm">
        <button
          onClick={() => bestSellerHandler()}
          className={`${
            activeSort === "bestSeller" ? "border-b-2 border-b-green-400" : null
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
      <div className="flex gap-2 flex-wrap items-center ">
        {products.length ? (
          products.map((product) => (
            <div
              className="border p-3 border-gray-400 rounded-lg 2xl:w-52 2xl:h-[300px] w-32 h-52 flex flex-col 2xl:gap-y-3 gap-y-1 "
              key={product._id}
            >
              <div className="2xl:w-32 w-22 2xl:h-44 h-22 mx-auto">
                <Image
                  width={500}
                  height={500}
                  src={product.product.mainImage}
                />
              </div>
              <p className="2xl:h-40 h-20 overflow-y-hidden  text-[8px] 2xl:text-sm font-bold ">
                {product.product.persianName}
              </p>
              <div className="flex justify-between items-center h-8 ">
                <FaRegTrashCan
                  className="text-red-500 tesx-lg hover:text-red-700 cursor-pointer"
                  onClick={() => deleteProduct(product._id)}
                />
                <span className="text-[10px] 2xl:text-lg">
                  {product.product.price.toLocaleString()}
                </span>
              </div>
              <button
                className="2xl:h-12 h-9 py-1  bg-green-400 text-white  rounded-lg 2xl:py-2 text-[10px] 2xl:text-lg cursor-pointer"
                onClick={() => addToCart(product)}
              >
                افزودن به سبد خرید
              </button>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center  w-full h-full">
            <span className="2xl:text-lg text-sm">
              {" "}
              لیست علاقه‌مندی‌های شما خالی است !!
            </span>
          </div>
        )}
      </div>
      <div>pagination</div>
    </div>
  );
}

export default Favorites;
