import Image from "next/image";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import Link from "next/link";
import Paginations from "@/components/templates/dashboard/Paginations";
function DashboardOrders({ allOredrs }) {
  return (
    <div className="p-12">
      <div className="bg-white p-3 rounded-lg dashboard-box-shadow">
        <div className="flex justify-between items-center">
          <span onClick="text-xl font-bold">تاریخچه سفارشات</span>
          <div className="flex items-center gap-x-5">
            <button className="p-2 rounded-sm text-white bg-green-400 cursor-pointer">
              افزودن سفارش
            </button>
            <button className="cursor-pointer text-red-600 border-red-600 border p-2 rounded-sm">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        <div className="my-6 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
          <input
            type="text"
            placeholder="جستجو"
            className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none "
          />

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">همه</option>
            <option value="pending">در انتظار بررسی</option>
            <option value="preparing">در حال آماده‌سازی</option>
            <option value="readytoship">آماده برای ارسال</option>
            <option value="shipped">ارسال شده</option>
            <option value="delivered">تحویل داده شده </option>
            <option value="canceled">لغو شده</option>
            <option value="returned">مرجوع شده </option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">همه</option>
            <option value="paid">پرداخت شده</option>
            <option value="pending">درانتظار پرداخت</option>
            <option value="failed">پرداخت ناموفق </option>
            <option value="refunded">بازگشت وجه</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">همه</option>
            <option value="highestpaid">بیشترین پرداختی</option>
            <option value="lowestpaid">کمترین پرداختی</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">همه</option>
            <option value="highestdiscount">بیشترین تخفیف</option>
            <option value="lowestdiscount">کمترین تخفیف</option>
          </select>
        </div>

        <div>
          <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-sm text-gray-700">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">#کد سفارش</th>
                <th className="p-3">تصویر محصول</th>
                <th className="p-3">مشتری</th>
                <th className="p-3">تاریخ سفارش</th>
                <th className="p-3">تاریخ تحویل</th>
                <th className="p-3">وضعیت سفارش</th>
                <th className="p-3">وضعیت پرداخت</th>
                <th className="p-3">مبلغ پرداختی </th>
                <th className="p-3">تخفیف</th>
                <th className="p-3">اقدام</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {allOredrs.map((order) => (
                <tr key={order._id} className="border-t border-gray-300">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{order._id.slice(-5)}</td>
                  <td className="p-3">
                    <div className="flex justify-center gap-1">
                      {order.products.map((product) => (
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
                    </div>
                  </td>
                  <td className="p-3">{order.user.email}</td>
                  <td className="p-3">
                    {new Date(order.createdAt).toLocaleString("fa-IR")}
                  </td>
                  <td className="p-3">1403/04/06</td>
                  <td className="p-3">
                    <span
                      className={
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                          : order.status === "preparing"
                          ? "bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          : order.status === "readytoship"
                          ? "bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full"
                          : order.status === "shipped"
                          ? "bg-orange-100 text-orange-800 px-2 py-1 rounded-full"
                          : order.status === "delivered"
                          ? "bg-green-100 text-green-800 px-2 py-1 rounded-full"
                          : order.status === "canceled"
                          ? "bg-red-100 text-red-800 px-2 py-1 rounded-full"
                          : order.status === "returned"
                          ? "bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                          : ""
                      }
                    >
                      {order.status === "pending" && "در انتظار بررسی"}
                      {order.status === "preparing" && "در حال آماده‌سازی"}
                      {order.status === "readytoship" && "آماده برای ارسال"}
                      {order.status === "shipped" && "ارسال شده"}
                      {order.status === "delivered" && "تحویل داده شده"}
                      {order.status === "canceled" && "لغو شده"}
                      {order.status === "returned" && "مرجوع شده"}
                    </span>
                  </td>
                  <td className="p-3 text-emerald-500">پرداخت شده</td>
                  <td className="p-3 font-semibold">151,000,000 تومان</td>
                  <td className="p-3 font-semibold">151,000 تومان</td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2 text-gray-600 [&>svg]:text-xl">
                      <FaRegEdit className="cursor-pointer hover:text-blue-600" />
                      <MdDeleteOutline className="cursor-pointer hover:text-red-600" />
                      <Link
                        href="/dashboard/all-orders/123"
                        className="cursor-pointer hover:text-green-800"
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
        <Paginations />
      </div>
    </div>
  );
}

export default DashboardOrders;
