import React from "react";

function DashboardTicketCard({
  icon,
  title,
  statusColor,
  status,
  user,
  date,
  priorityColor,
  priority,
}) {
  return (
    <li className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="p-2 bg-gray-100 rounded-full cursor-pointer">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor}`}
          >
            {status}
          </span>
        </div>
        <div className="text-xs text-gray-600 flex flex-wrap gap-3">
          <span>👤 {user}</span>
          <span>📅 {date}</span>
          <span>
            ⚠️ اولویت:{" "}
            <span className={`font-semibold ${priorityColor}`}>{priority}</span>
          </span>
        </div>
      </div>
    </li>
  );
}

export default DashboardTicketCard;
