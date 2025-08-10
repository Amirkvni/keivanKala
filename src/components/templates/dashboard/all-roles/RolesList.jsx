import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegChessKing } from "react-icons/fa6";

import { AiOutlineEye } from "react-icons/ai";

function RolesList({ allRoles }) {
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
        {allRoles.map((role) => (
          <tr>
            <td>
              {role.firstname} {role.lastname}
            </td>
            <td>
              {role.role.name === "SUPERADMIN"
                ? "سوپر ادمین"
                : role.role.name === "ADMIN"
                ? "ادمین"
                : role.role.name === "USER"
                ? "کاربر عادی"
                : role.role.name === "AUTHOR"
                ? "نویسنده"
                : role.role.name === "SUPPORTER"
                ? "پشتیبان"
                : role.role.name}
            </td>
            <td>
              {role.role.permissions.map((per) => (
                <span>{per.name}</span>
              ))}
            </td>
            <td>{role.accountStatus === "active" ? "فعال" : "غیرفعال"}</td>
            <td>
              {role.role.name === "SUPERADMIN" ? (
                <FaRegChessKing className="text-xl" />
              ) : (
                <div className="flex gap-x-2 [&>svg]:text-xl [&>svg]:cursor-pointer">
                  <FaRegEdit className="text-blue-400" />
                  <AiOutlineEye className="text-green-400" />
                </div>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RolesList;
