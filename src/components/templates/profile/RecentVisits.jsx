"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEyeSlash, FaRegTrashCan } from "react-icons/fa6";
import { priceFormatter } from "@/utils/priceFormatter ";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function RecentVisits({ recentVisits }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVisits = recentVisits.slice(startIndex, endIndex);
  const totalPages = Math.ceil(recentVisits.length / itemsPerPage);
  const deleteProduct = async (productID) => {
    const res = await fetch(`/api/visits/${productID}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      Swal.fire({
        title: "محصول از علاقه مندی های شما پاک شد",
        icon: "success",
        timer: "1200",
      }).then(() => {
        router.refresh();
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-8 p-3 2xl:w-3/4 w-full rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
      <span className="border-b-green-400 pb-2 border-b-3 w-fit">
        بازدید‌های اخیر
      </span>
      <div className="flex gap-2 flex-wrap">
        {recentVisits.length > 0 ? (
          paginatedVisits.map((product) => (
            <div
              className="border p-3 border-gray-400 rounded-lg 2xl:w-52 2xl:h-[300px] w-32 h-52 flex flex-col 2xl:gap-y-3 gap-y-1"
              key={product._id}
            >
              <div className="2xl:w-32 w-22 2xl:h-44 h-22 mx-auto">
                <Image width={500} height={500} src={product.image} />
              </div>
              <p className="2xl:h-40 h-20 overflow-y-hidden text-[8px] 2xl:text-sm font-bold">
                {product.productName}
              </p>
              <div className="flex justify-between items-center h-8">
                <FaRegTrashCan
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => deleteProduct(product._id)}
                />
                <span className="text-[10px] 2xl:text-lg">
                  {priceFormatter(product.price)}
                </span>
              </div>
              <button className="2xl:h-12 h-9 py-1 bg-green-400 text-white rounded-lg 2xl:py-2 text-[10px] 2xl:text-lg cursor-pointer">
                افزودن به سبد خرید
              </button>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center flex-col gap-y-5 text-3xl mx-auto border p-8 rounded-4xl border-gray-200">
            <FaRegEyeSlash />
            <span>هنوز محصولی را مشاهده نکرده‌اید</span>
          </div>
        )}
      </div>

      {recentVisits.length > itemsPerPage && (
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

export default RecentVisits;
