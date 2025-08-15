import React from "react";
import TicketStatusPieChart from "@/components/templates/dashboard/TicketStatusPieChart";
import TicketModel from "@/models/Ticket";
import RecentTickets from "./RecentTickets";
export default async function DashboardTicketsSection() {
  const recentTickets = await TicketModel.find(
    {
      mainTicket: { $exists: false },
    },
    "createdAt priority status"
  )
    .populate("department", "title")
    .populate("user", "firstname lastname")
    .sort({ createdAt: -1 })
    .limit(3);
  const ticketCounts = await TicketModel.aggregate([
    {
      $match: {
        mainTicket: { $exists: false },
      },
    },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ]);

  const countsMap = ticketCounts.reduce((acc, item) => {
    acc[item._id] = item.count;
    return acc;
  }, {});

  const chartData = [
    { name: "بسته", value: countsMap["closed"] || 0 },
    { name: "پاسخ داده‌شده", value: countsMap["answered"] || 0 },
    { name: "جدید", value: countsMap["new"] || 0 },
  ];
  const simpleChartData = JSON.parse(JSON.stringify(chartData));

  return (
    <div className=" flex gap-x-4">
      <RecentTickets tickets={JSON.parse(JSON.stringify(recentTickets))} />
      <div className="w-4/12 bg-white p-4 rounded-lg dashboard-box-shadow">
        <h2 className="dashboard-header-box">وضعیت تیکت ها</h2>
        <TicketStatusPieChart data={simpleChartData} />
      </div>
    </div>
  );
}
