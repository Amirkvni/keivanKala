import React from "react";
import { dashboardBoxes } from "@/constants/dashboardStats";

function DashboardStatsCards() {
  return (
    <div className="grid grid-cols-4 gap-x-4 [&>div]:p-3 [&>div]:rounded-sm [&>div]:bg-white">
      {dashboardBoxes.map((box) => (
        <div className="dashboard-box-shadow" key={box.id}>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{box.title}</span>
            <span className={box.percentColor}>{box.percentage}</span>
          </div>
          <div className="my-4 font-black">{box.value}</div>
          <div className="flex items-center justify-between">
            <span className="text-xs border-b border-b-blue-500 text-blue-800">
              {box.description}
            </span>
            <div className={`p-4 rounded-lg ${box.iconBg}`}>{box.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStatsCards;
