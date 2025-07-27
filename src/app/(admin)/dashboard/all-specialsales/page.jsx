"use client";
import React from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const specialOffers = [
  {
    id: 1,
    title: "فروش ویژه گوشی شیائومی",
    discount: 30,
    startDate: "1403/05/01",
    endDate: "1403/05/10",
    status: "فعال",
  },
  {
    id: 2,
    title: "تخفیف تابستانی لپتاپ‌ها",
    discount: 15,
    startDate: "1403/04/25",
    endDate: "1403/05/05",
    status: "منقضی‌شده",
  },
];

export default function page() {
  return (
    <div className="p-12  ">
      <div className="bg-white p-4 dashboard-box-shadow rounded-lg">
        {" "}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">فروش‌های ویژه</h2>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            <FaPlus /> افزودن فروش ویژه
          </button>
        </div>
        <table className="w-full text-sm border rounded overflow-hidden">
          <thead className="bg-gray-100 text-right">
            <tr className="text-gray-700">
              <th className="p-3">عنوان</th>
              <th className="p-3">درصد تخفیف</th>
              <th className="p-3">تاریخ شروع</th>
              <th className="p-3">تاریخ پایان</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {specialOffers.map((offer) => (
              <tr
                key={offer.id}
                className="border-t hover:bg-gray-50 transition text-right"
              >
                <td className="p-3">{offer.title}</td>
                <td className="p-3">{offer.discount}٪</td>
                <td className="p-3">{offer.startDate}</td>
                <td className="p-3">{offer.endDate}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      offer.status === "فعال" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {offer.status}
                  </span>
                </td>
                <td className="p-3 text-center flex gap-2 justify-center">
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
