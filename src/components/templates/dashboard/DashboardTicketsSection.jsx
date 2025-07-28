import React from "react";
import TicketStatusPieChart from "@/components/templates/dashboard/TicketStatusPieChart";
import { LuEye } from "react-icons/lu";
import DashboardTicketCard from "./DashboardTicketCard";

function DashboardTicketsSection() {
  const tickets = [
    {
      title: "مشکل در پرداخت",
      status: "باز",
      statusColor: "bg-blue-100 text-blue-700",
      user: "محمدرضا جلالی",
      date: "۱۴۰۳/۰۵/۰۲",
      priority: "بالا",
      priorityColor: "text-red-500",
      icon: <LuEye className="text-blue-500 text-xl" />,
    },
    {
      title: "درخواست بازگشت وجه",
      status: "بسته",
      statusColor: "bg-green-100 text-green-700",
      user: "فاطمه سادات حسینی",
      date: "۱۴۰۳/۰۴/۲۸",
      priority: "متوسط",
      priorityColor: "text-yellow-600",
      icon: <LuEye className="text-green-500 text-xl" />,
    },
    {
      title: "عدم دریافت ایمیل تأیید",
      status: "پاسخ داده نشده",
      statusColor: "bg-yellow-100 text-yellow-800",
      user: "علی احمدی",
      date: "۱۴۰۳/۰۵/۰۱",
      priority: "کم",
      priorityColor: "text-gray-500",
      icon: <LuEye className="text-yellow-500 text-xl" />,
    },
  ];
  return (
    <div className=" flex gap-x-4">
      <div className="bg-white p-5 rounded-xl shadow-md w-8/12 dashboard-box-shadow">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h2 className="dashboard-header-box ">تیکت‌های اخیر</h2>
          <div className="flex gap-2 [&>select]:focus:outline-none [&>select]:focus:ring-0 [&>select]:cursor-pointer [&>select]:border [&>select]:border-gray-300 [&>select]:rounded-md [&>select]:px-3 [&>select]:py-1 [&>select]:text-sm [&>select]:text-gray-700">
            <select>
              <option value="all">وضعیت: همه</option>
              <option value="open">باز</option>
              <option value="closed">بسته</option>
              <option value="unanswered">پاسخ داده نشده</option>
            </select>
            <select>
              <option value="all">اولویت: همه</option>
              <option value="high">بالا</option>
              <option value="medium">متوسط</option>
              <option value="low">کم</option>
            </select>
          </div>
        </div>

        <ul className="space-y-5">
          {tickets.map((item, index) => (
            <DashboardTicketCard {...item} key={index} />
          ))}
        </ul>
      </div>
      <div className="w-4/12 bg-white p-4 rounded-lg dashboard-box-shadow">
        <h2 className="dashboard-header-box">وضعیت تیکت ها</h2>
        <TicketStatusPieChart />
      </div>
    </div>
  );
}

export default DashboardTicketsSection;
