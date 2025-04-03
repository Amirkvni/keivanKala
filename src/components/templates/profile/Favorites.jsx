"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

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
  return (
    <div className="  flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit">
        علاقه مندی های شما
      </span>
      <div className="flex gap-x-3 [&>button]:cursor-pointer [&>button]:p-2">
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
      <div className="flex gap-2 flex-wrap  ">
        {products.map((product) => (
          <div
            className="border p-3 border-gray-400 rounded-lg w-52 h-72 flex flex-col gap-y-3 "
            key={product._id}
          >
            <div className="w-32 h-32 mx-auto">
              <Image width={500} height={500} src={product.product.mainImage} />
            </div>
            <p className="h-40 overflow-y-hidden  text-xs font-bold">
              {product.product.persianName}
            </p>
            <div className="flex justify-between items-center h-8 ">
              <FaRegTrashCan
                className="text-red-500 tesx-lg"
                onClick={() => deleteProduct(product._id)}
              />
              <span>{product.product.price.toLocaleString()}</span>
            </div>
            <button className="h-12 bg-green-400 text-white  rounded-lg py-2">
              افزودن به سبد خرید
            </button>
          </div>
        ))}
      </div>
      <div>pagination</div>
    </div>
  );
}

export default Favorites;
