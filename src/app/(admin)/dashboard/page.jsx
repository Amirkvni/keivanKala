import OrderChart from "@/components/templates/dashboard/OrderChart";
import RevenueChart from "@/components/templates/dashboard/RevenueChart";
import TicketStatusPieChart from "@/components/templates/dashboard/TicketStatusPieChart";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuEye, LuTicket } from "react-icons/lu";
import { PiShoppingBagBold } from "react-icons/pi";

function page() {
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
    <div className="p-12">
      <div className="grid grid-cols-4 gap-x-4 [&>div]:p-3 [&>div]:rounded-sm [&>div]:bg-white">
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div className="flex justify-between items-center text-sm">
            <span className=" text-gray-600">درامد امروز</span>
            <span className="text-green-500"> % 16.24+</span>
          </div>
          <div className="my-4 font-black">۶۰۷۶۵۹۶ تومان </div>
          <div
            className="flex items-center justify-between
          "
          >
            <span className="text-xs border-b border-b-blue-500 text-blue-800">
              مشاهده کل درامد
            </span>
            <div className="p-4 rounded-lg text-blue-200 bg-blue-500 ">
              <FaMoneyBillTrendUp />
            </div>
          </div>
        </div>
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div className="flex justify-between items-center text-sm">
            <span className=" text-gray-600">سفارشات امروز</span>
            <span className="text-green-500"> % 32-</span>
          </div>
          <div className="my-4 font-black">647215</div>
          <div
            className="flex items-center justify-between
          "
          >
            <span className="text-xs border-b border-b-blue-500 text-blue-800">
              مشاهده همه سفارش ها
            </span>
            <div className="p-4 rounded-lg text-green-200 bg-green-500">
              <PiShoppingBagBold />
            </div>
          </div>
        </div>
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div className="flex justify-between items-center text-sm">
            <span className=" text-gray-600">کل کاربران</span>
            <span className="text-green-500"> 2+</span>
          </div>
          <div className="my-4 font-black">6782255 نفر </div>
          <div
            className="flex items-center justify-between
          "
          >
            <span className="text-xs border-b border-b-blue-500 text-blue-800">
              مشاهده همه کاربران
            </span>
            <div className="p-4 rounded-lg text-amber-100 bg-amber-400">
              <FiUsers />
            </div>
          </div>
        </div>
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div className="flex justify-between items-center text-sm">
            <span className=" text-gray-600">تیکت ها</span>
            <span className="text-green-500"> 6+</span>
          </div>
          <div className="my-4 font-black">558323</div>
          <div
            className="flex items-center justify-between
          "
          >
            <span className="text-xs border-b border-b-blue-500 text-blue-800">
              مشاهده همه تیکت ها
            </span>
            <div className="p-4 rounded-lg text-purple-300 bg-purple-500">
              <LuTicket />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 [&>div]:p-3 [&>div]:rounded-sm [&>div]:bg-white my-12">
        <div
          className="flex flex-col gap-y-4"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-lg font-semibold">درآمد</span>
            <div className="flex items-center gap-x-2 [&>button]:text-xs [&>button]:rounded-lg [&>button]:px-1.5 [&>button]:cursor-pointer [&>button]:py-1 [&>button]:bg-blue-100 [&>button]:text-blue-700">
              <button>همه</button>
              <button>سال ۱</button>
              <button>۶ماه</button>
              <button>۱ هفته</button>
            </div>
          </div>
          <div className="bg-zinc-100 divide-x divide-gray-400 py-3 grid grid-cols-4 gap-4 [&>div>span]:text-xs [&>div>p]:text-sm [&>div]:text-center  [&>div>span]:text-gray-500">
            <div>
              <p>۶۰۷۶۵۹۶ تومان</p>
              <span>کل درآمد</span>
            </div>
            <div>
              <p>۵۳۶۲۳ تومان</p>
              <span>درامد یک هفته اخیر</span>
            </div>
            <div>
              <p>۵۳۶۲۳ تومان</p>
              <span>درامد یک ماه اخیر</span>
            </div>
            <div>
              <p>درامد یک سال اخیر</p>
              <span>۵۳۶۲۳ تومان</span>
            </div>
          </div>

          <div className="w-full h-64" dir="ltr">
            <RevenueChart />
          </div>
        </div>
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-lg font-semibold">
              سفارش ها
            </span>
            <div className="flex items-center gap-x-2 [&>button]:text-xs [&>button]:rounded-lg [&>button]:px-1.5 [&>button]:cursor-pointer [&>button]:py-1 [&>button]:bg-blue-100 [&>button]:text-blue-700">
              <button>همه</button>
              <button>سال ۱</button>
              <button>۶ماه</button>
              <button>۱ هفته</button>
            </div>
          </div>
          <div className="w-full h-64 mt-24" dir="ltr">
            <OrderChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4  rounded-lg">
        <div
          className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <h3 className="text-gray-600 text-lg font-semibold mb-4 border-b pb-4">
            کاربران جدید
          </h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-center table-auto border-collapse">
              <thead className="bg-indigo-100 text-indigo-800 font-semibold">
                <tr>
                  <th className="p-3 border border-indigo-200">نام</th>
                  <th className="p-3 border border-indigo-200">نقش</th>
                  <th className="p-3 border border-indigo-200">وضعیت</th>
                  <th className="p-3 border border-indigo-200">اقدام</th>
                </tr>
              </thead>
              <tbody>
                {["امیرحسین کیوانی", "فاطمه رضایی", "علیرضا محمدی"].map(
                  (name, i) => (
                    <tr
                      key={i}
                      className="odd:bg-white even:bg-green-50 hover:bg-green-100 transition-colors text-xs"
                    >
                      <td className="p-3 border border-pink-200 overflow-hidden whitespace-nowrap text-ellipsis max-w-[110px]">
                        {name}
                      </td>
                      <td className="p-3 border border-indigo-200">
                        کاربر عادی
                      </td>
                      <td className="p-3 border border-indigo-200 text-green-600 font-medium">
                        فعال
                      </td>
                      <td className="p-3 border border-indigo-200 ">
                        <BiEdit className="text-indigo-600 hover:text-indigo-900 font-semibold transition mx-auto text-xl cursor-pointer" />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          {/* صفحه بندی */}
          <div className="mt-auto flex justify-center space-x-2">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className="px-3 py-1 rounded border border-indigo-300 bg-indigo-50 hover:bg-indigo-200 transition"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* نظرات اخیر */}
        <div
          className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <h3 className="text-gray-600 text-lg font-semibold mb-4 border-b pb-4">
            نظرات اخیر
          </h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-center table-auto border-collapse">
              <thead className="bg-green-100 text-green-800 font-semibold">
                <tr>
                  <th className="p-3 border border-green-200">محصول</th>
                  <th className="p-3 border border-green-200">کاربر</th>
                  <th className="p-3 border border-green-200">تاریخ</th>
                  <th className="p-3 border border-green-200">وضعیت</th>
                  <th className="p-3 border border-green-200">اقدام</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    product: "کیف درسا مدل یبسب",
                    user: "امیرحسین کیوانی",
                    date: "۲۰۱۹/۰۵/۰۸",
                    status: "تایید شده",
                  },
                  {
                    product: "کفش اسپرت مدل X",
                    user: "فاطمه رضایی",
                    date: "۲۰۱۹/۰۶/۱۲",
                    status: "در انتظار",
                  },
                ].map((item, i) => (
                  <tr className="odd:bg-white even:bg-green-50 hover:bg-green-100 transition-colors text-xs">
                    <td className="p-3 border border-pink-200 overflow-hidden whitespace-nowrap text-ellipsis max-w-[110px]">
                      {item.product}
                    </td>
                    <td className="p-3 border border-green-200">{item.user}</td>
                    <td className="p-3 border border-green-200">{item.date}</td>
                    <td className="p-3 border border-green-200 text-green-600 font-medium">
                      {item.status}
                    </td>
                    <td className="p-3 border border-green-200">
                      <LuEye className="text-green-600 hover:text-green-900 font-semibold transition mx-auto text-xl cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* صفحه بندی */}
          <div className="mt-auto flex justify-center space-x-2">
            {[1, 2].map((p) => (
              <button
                key={p}
                className="px-3 py-1 rounded border border-green-300 bg-green-50 hover:bg-green-200 transition"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* پرفروش‌ترین محصولات */}
        <div
          className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <h3 className="text-gray-600 text-lg font-semibold mb-4 border-b pb-4">
            پرفروش‌ترین محصولات
          </h3>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-center table-auto border-collapse">
              <thead className="bg-pink-100 text-pink-800 font-semibold">
                <tr>
                  <th className="p-3 border border-pink-200">محصول</th>
                  <th className="p-3 border border-pink-200">مشتری</th>
                  <th className="p-3 border border-pink-200">تاریخ</th>
                  <th className="p-3 border border-pink-200">وضعیت</th>
                  <th className="p-3 border border-pink-200">اقدام</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    product: "کیف درسا مدل یبسب",
                    customer: "امیرحسین کیوانی",
                    date: "۲۰۱۹/۰۵/۰۸",
                    status: "تایید شده",
                  },
                  {
                    product: "لباس مردانه مدل A",
                    customer: "علیرضا محمدی",
                    date: "۲۰۱۹/۰۶/۱۵",
                    status: "در انتظار",
                  },
                ].map((item, i) => (
                  <tr
                    key={i}
                    className="odd:bg-white even:bg-pink-50 hover:bg-pink-100 transition-colors text-xs"
                  >
                    <td className="p-3 border border-pink-200 overflow-hidden whitespace-nowrap text-ellipsis max-w-[110px]">
                      {item.product}
                    </td>
                    <td className="p-3 border border-pink-200">
                      {item.customer}
                    </td>
                    <td className="p-3 border border-pink-200">{item.date}</td>
                    <td className="p-3 border border-pink-200 text-pink-600 font-medium">
                      {item.status}
                    </td>
                    <td className="p-3 border border-pink-200">
                      <LuEye className="text-pink-600 hover:text-pink-900 font-semibold transition mx-auto text-xl cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* صفحه بندی */}
          <div className="mt-auto flex justify-center space-x-2">
            {[1, 2].map((p) => (
              <button
                key={p}
                className="px-3 py-1 rounded border border-pink-300 bg-pink-50 hover:bg-pink-200 transition "
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 flex gap-x-4">
        <div
          className="bg-white p-5 rounded-xl shadow-md w-8/12"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-gray-600 text-lg font-semibold ">
              تیکت‌های اخیر
            </h2>
            <div className="flex gap-2 [&>select]:focus:outline-none [&>select]:focus:ring-0 [&>select]:cursor-pointer">
              <select className=" border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 ">
                <option value="all">وضعیت: همه</option>
                <option value="open">باز</option>
                <option value="closed">بسته</option>
                <option value="unanswered">پاسخ داده نشده</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700  ">
                <option value="all">اولویت: همه</option>
                <option value="high">بالا</option>
                <option value="medium">متوسط</option>
                <option value="low">کم</option>
              </select>
            </div>
          </div>

          <ul className="space-y-5">
            {tickets.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 flex flex-wrap gap-3">
                    <span>👤 {item.user}</span>
                    <span>📅 {item.date}</span>
                    <span>
                      ⚠️ اولویت:{" "}
                      <span className={`font-semibold ${item.priorityColor}`}>
                        {item.priority}
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-4/12 bg-white p-4 rounded-lg"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <h2 className="text-gray-600 text-lg font-semibold">وضعیت تیکت ها</h2>
          <TicketStatusPieChart />
        </div>
      </div>
    </div>
  );
}

export default page;
