import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import productPic from "@/assets/ex.jpg";
function DashboardRecentOrdersTable() {
  return (
    <div className="bg-white p-4 rounded-lg dashboard-box-shadow">
      <h3 className="dashboard-header-box">سفارشات اخیر</h3>
      <div>
        <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden mt-4">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700">
              <th className="p-3">کد سفارش</th>
              <th className="p-3">تصویر محصول</th>
              <th className="p-3">مشتری</th>
              <th className="p-3">تاریخ</th>
              <th className="p-3">وضعیت سفارش</th>
              <th className="p-3">وضعیت پرداخت</th>
              <th className="p-3">مجموع</th>
              <th className="p-3">اقدام</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[1, 2, 3].map((item, index) => (
              <tr key={index} className="border-t border-t-gray-300">
                <td className="p-3">425253# </td>
                <td className="p-3">
                  <div className="flex justify-center gap-1">
                    <div className="w-12 h-12 overflow-hidden rounded-md ">
                      <Image
                        src={productPic}
                        alt="product image"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="w-12 h-12 overflow-hidden rounded-md ">
                      <Image
                        src={productPic}
                        alt="product image"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-3">امیرحسین کیوانی</td>
                <td className="p-3">1403/04/01</td>
                <td className="p-3 text-green-600">در حال ارسال</td>
                <td className="p-3 text-emerald-500 ">
                  <span className="bg-green-100 p-1 rounded-lg text-green-600">
                    پرداخت شده
                  </span>
                </td>
                <td className="p-3 font-semibold">151,000,000 تومان</td>
                <td className="p-3">
                  <div className="flex justify-center gap-2 text-gray-600 [&>svg]:text-xl">
                    <FaRegEdit className="cursor-pointer hover:text-blue-600" />
                    <MdDeleteOutline className="cursor-pointer hover:text-red-600" />
                    <Link
                      href="/dashboard/all-orders/123"
                      className="cursor-pointer hover:text-green-800 text-xl"
                    >
                      <MdOutlineRemoveRedEye />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardRecentOrdersTable;
