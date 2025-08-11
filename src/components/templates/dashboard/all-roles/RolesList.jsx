import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegChessKing } from "react-icons/fa6";

import { LuEye } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

function RolesList({ allRoles }) {

  return (
    <div className="mt-4 dashboard-box-shadow bg-white p-5">
      <div className="flex justify-between items-center">
        <input type="text" placeholder="جستجو" />
        <select name="" id="">
          <option value="-1">نقش</option>
          <option value="-1">نقش</option>
          <option value="-1">نقش</option>
        </select>
      </div>
      <table className="w-full mt-5 [&>tr>td]:p-2 [&>tr>td]:border-b [&>tr>td]:border-gray-200 border-collapse text-center">
        <tr className="bg-gray-100 text-gray-600">
          <td>نقش</td>
          <td>تعداد کاربران</td>
          <td>مجوزها</td>
          <td>تاریخ ایجاد</td>
          <td>وضعیت</td>
          <td>اقدام</td>
        </tr>
        {allRoles.map((role) => (
          <tr key={role._id}>
            <td>
              {role.name === "SUPERADMIN"
                ? "سوپر ادمین"
                : role.name === "ADMIN"
                ? "ادمین"
                : role.name === "USER"
                ? "کاربر عادی"
                : role.name === "AUTHOR"
                ? "نویسنده"
                : role.name === "SUPPORTER"
                ? "پشتیبان"
                : role.name}
            </td>
            <td></td>
            <td>
              {role.permissions.map((per) => (
                <span key={per._id}>{per.name}</span>
              ))}
            </td>
            <td>{new Date(role.createdAt).toLocaleDateString("fa-IR")}</td>
            <td>فعال</td>
            <td>
              <div className="flex gap-x-1 items-center [&>svg]:cursor-pointer [&>svg]:text-xl justify-center">
                <LuEye className="hover:text-blue-600" />
                <FaRegEdit className="hover:text-green-600" />
                <MdDeleteOutline className="hover:text-red-700" />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RolesList;
