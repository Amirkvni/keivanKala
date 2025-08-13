import React from "react";
import TableRow from "./TableRow";

function RolesList({ allRoles, setModalState }) {
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
      <table className="w-full mt-5 [&>tbody>tr>td]:p-2 [&>tbody>tr>td]:border-b [&>tbody>tr>td]:border-gray-200 border-collapse text-center">
        <tbody>
          <tr className="bg-gray-100 text-gray-600">
            <td>نقش</td>
            <td>تعداد کاربران</td>
            <td>مجوزها</td>
            <td>تاریخ ایجاد</td>
            <td>وضعیت</td>
            <td>اقدام</td>
          </tr>
          {allRoles.map((role) => (
            <TableRow key={role._id} {...role} setModalState={setModalState} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RolesList;
