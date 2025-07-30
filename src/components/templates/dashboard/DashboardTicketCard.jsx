import React from "react";
import { LuEye } from "react-icons/lu";

function DashboardTicketCard({ statusColor, priorityColor, item }) {
  return (
    <li className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
        <LuEye />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-800">
            {item.department.title}
          </h3>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              item.status === "new"
                ? "bg-green-100 text-green-600"
                : item.status === "answered"
                ? "bg-amber-100 text-red-100"
                : item.status === "review"
                ? "bg-blue-100 text-blue-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {item.status === "new"
              ? "جدید"
              : item.status === "answered"
              ? "پاسخ داده شده"
              : item.status === "review"
              ? "در حال بررسی"
              : "بسته شده"}
          </span>
        </div>
        <div className="text-xs text-gray-600 flex flex-wrap gap-3">
          <span>
            👤 {item.user.firstname} {item.user.lastname}
          </span>
          <span>📅 {new Date(item.createdAt).toLocaleDateString("fa-IR")}</span>
          <span>
            ⚠️ اولویت:
            <span className={`font-semibold ${priorityColor}`}>
              {item.priority === 1
                ? " بالا"
                : item.priority === 2
                ? " متوسط"
                : " کم"}
            </span>
          </span>
        </div>
      </div>
    </li>
  );
}

export default DashboardTicketCard;
