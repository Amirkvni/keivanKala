import Image from "next/image";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import productPic from "@/assets/adminProfile.jpg";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
export default function page() {
  return (
    <div className="p-12">
      <div className="bg-white p-3 dashboard-box-shadow rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">کاربران </span>
          <div className="flex items-center gap-x-5">
            <Link
              href="/dashboard/add-user"
              className="p-2 rounded-sm text-white bg-green-400 cursor-pointer"
            >
              افزودن کاربر
            </Link>
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

          <select className="px-4 py-2 focus:ring-0 rounded-lg border border-gray-300 bg-white focus:outline-none  cursor-pointer ">
            <option value="-1">همه</option>
            <option value="paid">مسدود شده</option>
            <option value="canceled">فعال </option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-0  cursor-pointer">
            <option value="-1">همه</option>
            <option value="paid">مدیر</option>
            <option value="canceled">کاربر معمولی </option>
          </select>
        </div>

        <div>
          <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-sm text-gray-700">
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">نام</th>
                <th className="p-3">ایمیل </th>
                <th className="p-3">تلفن</th>
                <th className="p-3">شهر</th>
                <th className="p-3">آخرین ورود</th>
                <th className="p-3">نقش</th>
                <th className="p-3">وضعیت</th>
                <th className="p-3">پرداخت</th>
                <th className="p-3">اقدام</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[1, 2, 3].map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">امیرحسین</td>
                  <td className="p-3">کیوانی</td>
                  <td className="p-3">۰۹۱۶۲۰۴۱۹۴۵۶ </td>
                  <td className="p-3">اصفهان-شاهین شهر</td>
                  <td className="p-3 text-green-600">1 روز قبل</td>
                  <td className="p-3 text-emerald-500"> مدیر</td>
                  <td>فعال</td>
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
        <div className="border rounded-sm border-gray-200 w-16 flex items-center justify-between p-1">
          <FaAngleRight />
          <span>1</span>
          <FaAngleLeft />
        </div>
      </div>
    </div>
  );
}
