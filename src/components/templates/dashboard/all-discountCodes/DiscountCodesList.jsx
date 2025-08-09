// DiscountCodesList.jsx
"use client";
import AddButton from "@/components/templates/dashboard/AddButton";
import { priceFormatter } from "@/utils/priceFormatter ";
import React from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

export default function DiscountCodesList({ discountCodes }) {
  return (
    <div className="p-12  ">
      <div className="bg-white p-4 dashboard-box-shadow rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">کدهای تخفیف</h2>
          <AddButton
            title="افزودن کد جدید"
            address="/dashboard/add-discountCode"
          />
        </div>

        <table className="w-full text-sm border rounded overflow-hidden text-right">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">کد</th>
              <th>نوع تخفیف</th>
              <th className="p-3">مقدار تخفیف</th>
              <th className="p-3">حداکثر استفاده</th>
              <th className="p-3"> تعداد استفاده</th>

              <th className="p-3">تاریخ شروع</th>
              <th className="p-3">تاریخ پایان</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {discountCodes.map((code) => (
              <tr
                key={code._id}
                className="border-t hover:bg-gray-50 transition border-gray-300"
              >
                <td className="p-3">{code.code}</td>
                <td className="p-3">
                  {code.discountType === "fixed" ? "ثابت" : "درصدی"}
                </td>
                <td className="p-3">
                  {code.discountType === "fixed"
                    ? priceFormatter(code.discountValue)
                    : code.discountValue + "٪"}
                </td>
                <td className="p-3">{code.usageLimit}</td>
                <td className="p-3">{code.usedCount}</td>
                <td className="p-3" dir="rtl">
                  {new Date(code.startDate).toLocaleString("fa-IR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="p-3" dir="ltr">
                  {new Date(code.endDate).toLocaleString("fa-IR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      code.isActive === true ? "bg-green-500" : "bg-gray-500"
                    }`}
                  >
                    {code.isActive === true ? "فعال" : "منقضی"}
                  </span>
                </td>
                <td className="p-3 text-center flex justify-center gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
