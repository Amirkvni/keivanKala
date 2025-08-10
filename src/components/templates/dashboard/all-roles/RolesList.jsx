import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegChessKing } from "react-icons/fa6";

import { AiOutlineEye } from "react-icons/ai";

function RolesList() {
  return (
    <div className="mt-4 dashboard-box-shadow bg-white p-5">
      <div className="flex justify-between items-center">
        <input type="text" placeholder="جستجو" />
        <select name="" id="">
          <option value="-1">نفش</option>
          <option value="-1">نفش</option>
          <option value="-1">نفش</option>
        </select>
      </div>
      <table className="w-full mt-5 [&>tr>td]:p-2 [&>tr>td]:border-b [&>tr>td]:border-gray-200 border-collapse">
        <tr className="bg-gray-100 text-gray-600">
          <td>کاربر</td>
          <td>نقش</td>
          <td>مجوزها</td>
          <td>وضعیت</td>
          <td>اقدام</td>
        </tr>
        <tr>
          <td>علی رضایی</td>
          <td>مدیر کل</td>
          <td>دسترسی کامل</td>
          <td>همیسشه فعال</td>
          <td>
            <FaRegChessKing />
          </td>
        </tr>
        <tr>
          <td>مینا مرادی</td>
          <td>نویسنده</td>
          <td className="flex gap-x-1 item-center">
            <span className="bg-green-100 px-1 py-0.5 rounded-lg text-xs text-green-500">
              وبلاگ
            </span>
            <span className="bg-blue-100 px-1 py-0.5 rounded-lg text-xs text-blue-500">
              عمومی
            </span>
          </td>
          <td>فعال</td>
          <td>
            <div className="flex items-center gap-x-2">
              <AiOutlineEye />
              <FaRegEdit />
            </div>
          </td>
        </tr>
        <tr>
          <td>زهرا نجفی </td>
          <td>پشتیبان</td>
          <td className="flex gap-x-1 item-center">
            <span className="bg-amber-100 px-1 py-0.5 rounded-lg text-xs text-amber-500">
              تیکت
            </span>
            <span className="bg-blue-100 px-1 py-0.5 rounded-lg text-xs text-blue-500">
              عمومی
            </span>
          </td>
          <td>غیرفعال</td>
          <td>
            <div className="flex items-center gap-x-2">
              <AiOutlineEye />
              <FaRegEdit />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RolesList;
