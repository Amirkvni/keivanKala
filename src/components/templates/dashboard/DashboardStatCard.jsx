import Link from "next/link";
import React from "react";

function DashboardStatCard({
  title,
  percentColor,
  percentage,
  value,
  description,
  iconBg,
  icon,
  address = "",
}) {
  return (
    <div className="dashboard-box-shadow">
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600">{title}</span>
        <span className={percentColor} dir="ltr">
          {percentage}
        </span>
      </div>
      <div className="my-4 font-black">{value}</div>
      <div className="flex items-center justify-between">
        <Link
          href={address}
          className="text-xs border-b border-b-blue-500 text-blue-800"
        >
          {description}
        </Link>
        <div className={`p-4 rounded-lg ${iconBg}`}>{icon}</div>
      </div>
    </div>
  );
}

export default DashboardStatCard;
