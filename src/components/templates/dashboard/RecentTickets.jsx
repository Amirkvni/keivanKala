"use client";

import { useMemo, useState } from "react";
import DashboardTicketCard from "./DashboardTicketCard";

function RecentTickets({ tickets }) {
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const statusMatch =
        statusFilter === "all" || ticket.status === statusFilter;
      const priorityMatch =
        priorityFilter === "all" || ticket.priority == priorityFilter;
      return statusMatch && priorityMatch;
    });
  }, [tickets, statusFilter, priorityFilter]);

  return (
    <div className="bg-white p-5 rounded-xl shadow-md w-8/12 dashboard-box-shadow">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2 className="dashboard-header-box ">تیکت‌های اخیر</h2>
        <div className="flex gap-2 [&>select]:focus:outline-none [&>select]:focus:ring-0 [&>select]:cursor-pointer [&>select]:border [&>select]:border-gray-300 [&>select]:rounded-md [&>select]:px-3 [&>select]:py-1 [&>select]:text-sm [&>select]:text-gray-700">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">وضعیت: همه</option>
            <option value="new">جدید</option>
            <option value="closed">بسته</option>
            <option value="answered">پاسخ داده شده</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">اولویت: همه</option>
            <option value={3}>بالا</option>
            <option value={2}>متوسط</option>
            <option value={1}>کم</option>
          </select>
        </div>
      </div>

      <ul className="space-y-5">
        {filteredTickets.map((item) => (
          <DashboardTicketCard item={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
}

export default RecentTickets;
