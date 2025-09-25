"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { RiSendPlaneFill } from "react-icons/ri";
import Paginations from "../Paginations";
function TicketsTable({ tickets }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("-1");
  const [statusFilter, setStatusFilter] = useState("-1");
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 10;

  const deleteHandler = async (id) => {
    Swal.fire({
      title: "حذف تیکت",
      text: "آیا از حذف این تیکت مطمئن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "انصراف",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`/api/tickets/${id}`, {
            method: "DELETE",
          });

          const data = await res.json();

          if (res.ok) {
            Swal.fire({
              title: "حذف شد!",
              text: data.message || "تیکت با موفقیت حذف شد.",
              icon: "success",
              confirmButtonText: "باشه",
            }).then(() => {
              router.refresh();
            });
          } else {
            Swal.fire({
              title: "خطا!",
              text: data.message || "مشکلی در حذف تیکت پیش آمد.",
              icon: "error",
              confirmButtonText: "باشه",
            });
          }
        } catch (err) {
          Swal.fire({
            title: "خطا!",
            text: "ارتباط با سرور برقرار نشد.",
            icon: "error",
            confirmButtonText: "باشه",
          });
        }
      }
    });
  };

  const filteredTickets = useMemo(() => {
    const query = search.toLowerCase();

    return tickets.filter((ticket) => {
      const matchesSearch =
        ticket.title.toLowerCase().includes(query) ||
        ticket.user.email.toLowerCase().includes(query) ||
        ticket._id.toLowerCase().includes(query) ||
        ticket.subDepartment.title.toLowerCase().includes(query) ||
        ticket.department.title.toLowerCase().includes(query);

      const matchesPriority =
        priorityFilter === "-1" ||
        (priorityFilter === "3" && ticket.priority === 3) ||
        (priorityFilter === "2" && ticket.priority === 2) ||
        (priorityFilter === "1" && ticket.priority === 1);

      const matchesStatus =
        statusFilter === "-1" ||
        (statusFilter === "new" && ticket.status === "new") ||
        (statusFilter === "answered" && ticket.status === "answered") ||
        (statusFilter === "closed" && ticket.status === "closed");

      return matchesSearch && matchesPriority && matchesStatus;
    });
  }, [tickets, search, priorityFilter, statusFilter]);
  const indexOfLast = currentPage * ticketsPerPage;
  const indexOfFirst = indexOfLast - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);
  return (
    <div className="bg-white p-4 mt-5 dashboard-box-shadow ">
      <div className="my-6 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8  [&>select]:py-2 [&>select]:rounded-lg [&>select]:border [&>select]:border-gray-300 [&>select]:bg-white [&>select]:focus:outline-none">
        <input
          type="text"
          placeholder="جستجو"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none "
        />

        <select onChange={(e) => setPriorityFilter(e.target.value)}>
          <option value="-1">الویت</option>
          <option value="3">بالا</option>
          <option value="2">متوسط</option>
          <option value="1">پایین</option>
        </select>

        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="-1">وضعیت</option>
          <option value="answered">پاسخ داده شده</option>
          <option value="new">جدید</option>
          <option value="closed">بسته شده</option>
        </select>
      </div>
      <div>
        <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700 [&>th]:p-3">
              <th>کد تیکت</th>
              <th>کاربر </th>
              <th>موضوع</th>
              <th>دپارتمان</th>
              <th>ساب دپارتمان</th>
              <th>تاریخ </th>
              <th>الویت</th>
              <th>وضعیت</th>
              <th>اقدام</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentTickets.length > 0 ? (
              currentTickets.map((ticket) => (
                <tr key={ticket._id} className="border-t border-gray-300">
                  <td className="p-3" dir="ltr">
                    {ticket._id.slice(0, 6)}#
                  </td>

                  <td className="p-3">{ticket.user.email}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.department.title}</td>
                  <td>{ticket.subDepartment.title}</td>
                  <td className="p-3">
                    {new Date(ticket.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td
                    className={
                      ticket.priority === 3
                        ? "text-red-600 font-semibold"
                        : ticket.priority === 2
                        ? "text-amber-500 font-semibold"
                        : "text-emerald-600 font-semibold"
                    }
                  >
                    {ticket.priority === 3
                      ? "بالا"
                      : ticket.priority === 2
                      ? "متوسط"
                      : "پایین"}
                  </td>
                  <td className="p-3 ">
                    <span
                      className={`font-semibold text-xs  rounded-lg w-fit py-1 px-2 
                      ${
                        ticket.status === "new"
                          ? "bg-green-100 text-green-600"
                          : ticket.status === "closed"
                          ? "bg-red-100 text-red-600"
                          : ticket.status === "answered"
                          ? "bg-blue-100 text-blue-600"
                          : ""
                      }`}
                    >
                      {ticket.status === "new"
                        ? "جدید"
                        : ticket.status === "answered"
                        ? "پاسخ داده شده"
                        : ticket.status === "closed"
                        ? "بسته شده"
                        : ticket.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2 text-gray-600 text-xl">
                      <Link href={`/dashboard/all-tickets/${ticket._id}`}>
                        <RiSendPlaneFill className="cursor-pointer hover:text-blue-600" />
                      </Link>
                      <MdDeleteOutline
                        className="cursor-pointer hover:text-red-600"
                        onClick={() => deleteHandler(ticket._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="p-4 text-gray-500">
                  هیچ نتیجه‌ای پیدا نشد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Paginations
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default TicketsTable;
