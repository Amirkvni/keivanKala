// DiscountCodesList.jsx
"use client";
import AddButton from "@/components/templates/dashboard/AddButton";
import React from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

const discountCodes = [
  {
    id: 1,
    code: "OFF20",
    discount: "20٪",
    usageLimit: 100,
    used: 45,
    startDate: "1403/05/01",
    endDate: "1403/05/10",
    status: "فعال",
  },
  {
    id: 2,
    code: "SUMMER15",
    discount: "15٪",
    usageLimit: 50,
    used: 50,
    startDate: "1403/04/15",
    endDate: "1403/04/25",
    status: "منقضی",
  },
];

export default function DiscountCodesList() {
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
              <th className="p-3">درصد تخفیف</th>
              <th className="p-3">دفعات استفاده / محدودیت</th>
              <th className="p-3">تاریخ شروع</th>
              <th className="p-3">تاریخ پایان</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {discountCodes.map((code) => (
              <tr
                key={code.id}
                className="border-t hover:bg-gray-50 transition border-gray-300"
              >
                <td className="p-3">{code.code}</td>
                <td className="p-3">{code.discount}</td>
                <td className="p-3">
                  {code.used} / {code.usageLimit}
                </td>
                <td className="p-3">{code.startDate}</td>
                <td className="p-3">{code.endDate}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      code.status === "فعال" ? "bg-green-500" : "bg-gray-500"
                    }`}
                  >
                    {code.status}
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
