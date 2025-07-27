import {
  LuTicketCheck,
  LuTicketPlus,
  LuTicketSlash,
  LuTicketX,
} from "react-icons/lu";
import { TiLockClosedOutline } from "react-icons/ti";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

import { RiSendPlaneFill } from "react-icons/ri";
function page() {
  return (
    <div className="p-12">
      <div className="grid grid-cols-4 gap-x-3 [&>div]:flex [&>div]:justify-between [&>div]:items-center  [&>div]:p-4 [&>div]:rounded-lg  [&>div>svg]:text-3xl">
        <div className="bg-green-500 text-green-100   dashboard-box-shadow ">
          <div>
            <p>2</p>
            <p>جدید</p>
          </div>
          <LuTicketPlus />
        </div>
        <div className="bg-yellow-500 text-yellow-100   dashboard-box-shadow ">
          <div>
            <p>2,344</p>
            <p>پاسخ داده شده</p>
          </div>
          <LuTicketCheck />
        </div>
        <div className="bg-red-500 text-red-100 dashboard-box-shadow ">
          <div>
            <p>15</p>
            <p>بسته شده</p>
          </div>
          <LuTicketX />
        </div>
        <div className="bg-blue-500 text-blue-100  dashboard-box-shadow  ">
          <div>
            <p>2,365</p>
            <p>مجموع تیکت ها</p>
          </div>
          <LuTicketSlash />
        </div>
      </div>
      <div className="bg-white p-4 mt-5 dashboard-box-shadow ">
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
            <option value="-1">الویت</option>
            <option value="paid">بالا</option>
            <option value="canceled">متوسط</option>
            <option value="processing">پایین</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">موضوع</option>
            <option value="paid">پرداخت شده</option>
            <option value="canceled">لغو پرداخت</option>
            <option value="processing">درحال پرداخت</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none ">
            <option value="-1">وضعیت</option>
            <option value="cheap">پاسخ داده شده</option>
            <option value="expensive">جدید</option>
            <option value="newest">بسته شده</option>
          </select>
        </div>
        <div>
          <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-sm text-gray-700">
                <th className="p-3">#کد تیکت</th>
                <th className="p-3">کاربر </th>
                <th className="p-3">موضوع</th>
                <th className="p-3">دپارتمان</th>
                <th className="p-3">ساب دپارتمان</th>
                <th className="p-3">تاریخ </th>
                <th className="p-3">الویت</th>
                <th className="p-3">وضعیت</th>
                <th className="p-3">اقدام</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[1, 2, 3].map((item, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="p-3">425253</td>

                  <td className="p-3">امیرحسین کیوانی</td>
                  <td>ثبت نام</td>
                  <td>مدیریت</td>
                  <td>چگونه مدیر شوم ؟</td>
                  <td className="p-3">1403/04/01</td>
                  <td className="p-3 text-emerald-500">بالا</td>
                  <td className="p-3 ">
                    <span className="font-semibold text-green-800  rounded-lg w-fit py-1 px-2 bg-green-100">
                      پاسخ داده شده
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2 text-gray-600 [&>svg]:text-xl">
                      <RiSendPlaneFill className="cursor-pointer hover:text-blue-600" />
                      <TiLockClosedOutline />
                      <MdDeleteOutline className="cursor-pointer hover:text-red-600" />
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

export default page;
