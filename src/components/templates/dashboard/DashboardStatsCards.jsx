import DashboardStatCard from "./DashboardStatCard";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiShoppingBagBold } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { LuTicket } from "react-icons/lu";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import TicketModel from "@/models/Ticket";
import OrderModel from "@/models/Order";
export default async function DashboardStatsCards() {
  connectToDB();
  const usersCount = await UserModel.countDocuments();
  const ticketsCount = await TicketModel.countDocuments();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0); // ساعت 00:00:00

  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999); // ساعت 23:59:59

  const todayOrderCount = await OrderModel.countDocuments({
    createdAt: {
      $gte: startOfToday,
      $lt: endOfToday,
    },
  });

  return (
    <div className="grid grid-cols-4 gap-x-4 [&>div]:p-3 [&>div]:rounded-sm [&>div]:bg-white">
      <DashboardStatCard
        title="درآمد امروز"
        value="۶۰۷۶۵۹۶ تومان"
        percentage="+16.24%"
        percentColor="text-green-500"
        description="مشاهده کل درآمد"
        icon={<FaMoneyBillTrendUp />}
        iconBg="bg-blue-500 text-blue-200"
      />
      <DashboardStatCard
        title="سفارشات امروز"
        value={`${todayOrderCount} تا `}
        percentage="-32%"
        percentColor="text-red-500"
        address="/dashboard/all-orders"
        description="مشاهده همه سفارش‌ها"
        icon={<PiShoppingBagBold />}
        iconBg="bg-green-500 text-green-200"
      />
      <DashboardStatCard
        title="کل کاربران"
        value={`${usersCount}نفر`}
        percentage="+2"
        percentColor="text-green-500"
        address="/dashboard/all-users"
        description="مشاهده همه کاربران"
        icon={<FiUsers />}
        iconBg="bg-amber-400 text-amber-100"
      />
      <DashboardStatCard
        title=" کل تیکت‌ها"
        value={`${ticketsCount} تا `}
        percentage="+6"
        percentColor="text-green-500"
        description="مشاهده همه تیکت‌ها"
        address="/dashboard/all-tickets"
        icon={<LuTicket />}
        iconBg="bg-purple-500 text-purple-300"
      />
    </div>
  );
}
