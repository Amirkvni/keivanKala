"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrFilter } from "react-icons/gr";
import ProductsTable from "@/components/templates/dashboard/ProductTable";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import AddButton from "@/components/templates/dashboard/AddButton";
import Paginations from "@/components/templates/dashboard/Paginations";
function DashboardProducts({ allProducts }) {
  const [selected, setSelected] = useState([]);

  return (
    <div className="p-12 [&>div]:rounded-lg ">
      <div className="bg-white flex flex-col gap-y-4 p-3 dashboard-box-shadow rounded-lg ">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">محصولات</span>
          <AddButton
            title="افزودن محصول جدید"
            address="/dashboard/product-creation"
          />
        </div>

        <ProductsTable
          selected={selected}
          setSelected={setSelected}
          allProducts={allProducts}
        />
        <Paginations />
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

export default DashboardProducts;
