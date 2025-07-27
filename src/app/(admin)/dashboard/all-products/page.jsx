"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";
import { GrFilter } from "react-icons/gr";
import ProductsTable from "@/components/templates/dashboard/ProductTable";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

function page() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="p-12 [&>div]:rounded-lg ">
      <div className="bg-white flex flex-col gap-y-4 p-3 dashboard-box-shadow rounded-lg ">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">محصولات</span>
          <Link
            href="/"
            className="flex items-center gap-x-2 p-2 rounded-lg bg-green-400 text-white cursor-pointer"
          >
            <MdOutlineAdd />
            افزودن محصول
          </Link>
        </div>
        <div className="flex justify-between  items-center">
          <div className="flex items-center w-[90%] bg-gray-200 p-3 rounded-lg">
            <input
              type="text"
              className="outline-none w-full"
              placeholder="جستجو ..."
            />
            <CiSearch />
          </div>
          <button className="flex gap-x-1 items-center p-2 rounded-lg border text-base cursor-pointer">
            <GrFilter />
            <span>فیلتر </span>
          </button>
        </div>
        <ProductsTable selected={selected} setSelected={setSelected} />
        <div className="border rounded-sm border-gray-200 w-16 flex items-center justify-between p-1">
          <FaAngleRight />
          <span>1</span>
          <FaAngleLeft />
        </div>
      </div>
      {selected.length > 0 && (
        <div className="sticky bottom-0 flex justify-between items-center bg-white p-4 mt-3">
          <div className="flex items-center gap-x-3">
            <IoCheckmarkDoneOutline className="text-blue-700 text-2xl" />
            <span>{selected.length} محصولات انتخاب شده</span>
          </div>
          <button className="border border-red-500 p-2 rounded-lg text-red-500 cursor-pointer">
            حذف
          </button>
        </div>
      )}
    </div>
  );
}

export default page;
