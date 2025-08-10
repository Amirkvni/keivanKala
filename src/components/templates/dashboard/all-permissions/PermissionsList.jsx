import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
function PermissionsList({ setAction }) {
  return (
    <div className="p-12 ">
      <span className="text-xl font-bold">لیست مجوزها </span>
      <div className="mt-4 dashboard-box-shadow bg-white p-5 rounded-lg">
        <div className="flex justify-between items-center">
          <input type="text" placeholder="جستجو" />
          <button
            className="bg-green-500 text-white p-2 rounded-lg cursor-pointer"
            onClick={() => setAction("add")}
          >
            افزودن مجوز
          </button>
        </div>
        <table className="w-full mt-5 [&>tr>td]:p-2 [&>tr>td]:border-b [&>tr>td]:border-gray-200 border-collapse">
          <tr className="bg-gray-100 text-gray-600">
            <td>نام</td>
            <td>اختصاص یافته به</td>
            <td>تاریخ ایجاد</td>
            <td>اقدام</td>
          </tr>
          <tr>
            <td>مدیریت</td>
            <td className="flex gap-x-1 item-center">
              <span className="bg-green-100 px-1 py-0.5 rounded-lg text-xs text-green-500">
                سرپرست
              </span>
              <span className="bg-blue-100 px-1 py-0.5 rounded-lg text-xs text-blue-500">
                مدسر
              </span>
            </td>
            <td>14 فروردین 1401، 8:43 ب.ظ</td>
            <td>
              <div className="flex items-center gap-x-2 [&>svg]:cursor-pointer [&>svg]:text-lg">
                <MdDeleteOutline />
                <FaRegEdit onClick={() => setAction("edit")} />
              </div>
            </td>
          </tr>
          <tr>
            <td>مدیریت</td>
            <td className="flex gap-x-1 item-center">
              <span className="bg-green-100 px-1 py-0.5 rounded-lg text-xs text-green-500">
                سرپرست
              </span>
              <span className="bg-blue-100 px-1 py-0.5 rounded-lg text-xs text-blue-500">
                مدسر
              </span>
            </td>
            <td>14 فروردین 1401، 8:43 ب.ظ</td>
            <td>
              <div className="flex items-center gap-x-2 [&>svg]:cursor-pointer [&>svg]:text-lg">
                <MdDeleteOutline />
                <FaRegEdit onClick={() => setAction("edit")} />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default PermissionsList;
