"use client";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import ProfileProductCard from "@/components/modules/ProfileProductCard/ProfileProductCard";

function RecentVisits({ recentVisits }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVisits = recentVisits.slice(startIndex, endIndex);
  const totalPages = Math.ceil(recentVisits.length / itemsPerPage);
 

  return (
    <div className="profile-content-box">
      <SectionHeader title="بازدید‌های اخیر" />
      <div className="flex gap-2 flex-wrap">
        {recentVisits.length > 0 ? (
          paginatedVisits.map((product) => <ProfileProductCard  {...product} />)
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
