import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import OrdersModel from "@/models/Order";
import { priceFormatter } from "@/utils/priceFormatter ";
export default async function DashboardRecentOrdersTable() {
  const recentOrders = JSON.parse(
    JSON.stringify(
      await OrdersModel.find({})
        .populate("user", "firstname lastname")
        .populate("products", "mainImage")
        .populate("payment", "status paid")
        .sort({ orderDate: -1 })
        .limit(5)
        .lean()
    )
  );

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
            {recentOrders.map((item) => (
              <tr key={item._id} className="border-t border-t-gray-300">
                <td className="p-3" dir="ltr">
                  {item._id.slice(0, 6)}#
                </td>
                <td className="p-3">
                  <div className="flex justify-center gap-1">
                    {item.products.slice(0, 4).map((product) => (
                      <div
                        className="w-12 h-12 overflow-hidden rounded-md "
                        key={product._id}
                      >
                        <Image
                          src={product.mainImage}
                          alt={product._id}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                    {item.products.length > 4 && (
                      <div className="w-12 h-12 flex justify-center items-center ">
                        ...
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-3">
                  {item.user.firstname} {item.user.lastname}
                </td>
                <td className="p-3">
                  {new Date(item.orderDate).toLocaleString("fa-IR")}
                </td>
                <td className="p-3">
                  {item.status === "pending"
                    ? "جاری"
                    : item.status === "delivered"
                    ? "تحویل شده"
                    : item.status === "returned"
                    ? "مرجوع شده"
                    : item.status === "canceled"
                    ? "لغو شده"
                    : item.status}
                </td>
                <td className="p-3 text-emerald-500 ">
                  <span className="bg-green-100 p-1 rounded-lg text-green-600">
                    {item.payment.status === "paid"
                      ? "پرداخت شده"
                      : "پرداخت نشده"}
                  </span>
                </td>
                <td className="p-3 font-semibold">
                  {priceFormatter(item.payment.paid)}
                </td>
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
