import Image from "next/image";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import productPic from "@/assets/ex.jpg";
import Link from "next/link";
import Paginations from "@/components/templates/dashboard/Paginations";
function page() {
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

          <input
            type="date"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none "
          />

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">همه</option>
            <option value="paid">پرداخت شده</option>
            <option value="canceled">لغو پرداخت</option>
            <option value="processing">درحال پرداخت</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">همه</option>
            <option value="paid">پرداخت شده</option>
            <option value="canceled">لغو پرداخت</option>
            <option value="processing">درحال پرداخت</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">همه</option>
            <option value="cheap">ارزان‌ترین</option>
            <option value="expensive">گران‌ترین</option>
            <option value="newest">جدیدترین</option>
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
                <th className="p-3">تاریخ</th>
                <th className="p-3">وضعیت سفارش</th>
                <th className="p-3">وضعیت پرداخت</th>
                <th className="p-3">مجموع</th>
                <th className="p-3">اقدام</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[1, 2, 3].map((item, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">425253</td>
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
                  <td className="p-3 text-emerald-500">پرداخت شده</td>
                  <td className="p-3 font-semibold">151,000,000 تومان</td>
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

export default page;
