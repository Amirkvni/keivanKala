import Link from "next/link";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

import { RiSendPlaneFill } from "react-icons/ri";
function TicketsTable({ tickets }) {
  console.log(tickets);

  return (
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
              <th className="p-3">کد تیکت</th>
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
            {tickets.map((ticket) => (
              <tr key={ticket._id} className="border-t border-gray-300">
                <td className="p-3">{ticket._id.slice(0, 6)}# </td>

                <td className="p-3">{ticket.user.email}</td>
                <td>{ticket.title}</td>
                <td>{ticket.department.title}</td>
                <td>{ticket.subDepartment.title}</td>
                <td className="p-3">
                  {new Date(ticket.createdAt).toLocaleDateString("fa-IR")}
                </td>
                <td>
                  {ticket.priority === 3
                    ? "بالا"
                    : ticket.priority === 2
                    ? "متوسط"
                    : "پایین"}
                </td>
                <td className="p-3 ">
                  <span className="font-semibold text-green-800  rounded-lg w-fit py-1 px-2 bg-green-100">
                    {ticket.status === "new"
                      ? "جدید"
                      : ticket.status === "answered"
                      ? "پاسخ داده شده"
                      : ticket.status === "closed"
                      ? "بسته شده"
                      : ticket.status === "review"
                      ? "درحال بررسی"
                      : ticket.status}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex justify-center gap-2 text-gray-600 text-xl">
                    <Link href={`/dashboard/all-tickets/${ticket._id}`}>
                      <RiSendPlaneFill className="cursor-pointer hover:text-blue-600" />
                    </Link>
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
  );
}

export default TicketsTable;
