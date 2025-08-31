import DashboardStatCard from "./DashboardStatCard";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiShoppingBagBold } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { LuTicket } from "react-icons/lu";
import UserModel from "@/models/User";
import TicketModel from "@/models/Ticket";
import OrderModel from "@/models/Order";
import PaymentModel from "@/models/Payment";
export default async function DashboardStatsCards() {
  const usersCount = await UserModel.countDocuments();
  const ticketsCount = await TicketModel.countDocuments({
    mainTicket: { $exists: false },
  });
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const startOfYesterday = new Date(
    yesterday.getFullYear(),
    yesterday.getMonth(),
    yesterday.getDate(),
    0,
    0,
    0,
    0
  );
  const endOfYesterday = new Date(
    yesterday.getFullYear(),
    yesterday.getMonth(),
    yesterday.getDate(),
    23,
    59,
    59,
    999
  );
  const todayOrderCount = await OrderModel.countDocuments({
    createdAt: {
      $gte: startOfToday,
      $lt: endOfToday,
    },
  });
  const yesterdayOrderCount = await OrderModel.countDocuments({
    createdAt: {
      $gte: startOfYesterday,
      $lt: endOfYesterday,
    },
  });
  const todayUserCount = await UserModel.countDocuments({
    createdAt: {
      $gte: startOfToday,
      $lt: endOfToday,
    },
  });
  const yesterdayUserCount = await UserModel.countDocuments({
    createdAt: {
      $gte: startOfYesterday,
      $lt: endOfYesterday,
    },
  });
  const todayAgg = await PaymentModel.aggregate([
    {
      $match: {
        orderDate: { $gte: startOfToday, $lte: endOfToday },
      },
    },
    {
      $group: {
        _id: null,
        totalPaid: { $sum: { $toDouble: "$paid" } },
      },
    },
  ]);
  const yesterdayAgg = await PaymentModel.aggregate([
    { $match: { orderDate: { $gte: startOfYesterday, $lte: endOfYesterday } } },
    { $group: { _id: null, totalPaid: { $sum: { $toDouble: "$paid" } } } },
  ]);
  const todayTicketCount = await TicketModel.countDocuments({
    mainTicket: { $exists: false },
    createdAt: {
      $gte: startOfToday,
      $lt: endOfToday,
    },
  });
  const yesterdayTicketCount = await TicketModel.countDocuments({
    mainTicket: { $exists: false },
    createdAt: {
      $gte: startOfYesterday,
      $lt: endOfYesterday,
    },
  });
  const todayIncome = todayAgg[0]?.totalPaid || 0;
  const yesterdayIncome = yesterdayAgg[0]?.totalPaid || 0;

  let incomeGrowthPercent = 0;

  let orderGrowthCount = todayOrderCount - yesterdayOrderCount;

  let userGrowthCount = todayUserCount - yesterdayUserCount;
  let ticketGrowthCount = todayTicketCount - yesterdayTicketCount;
  if (yesterdayIncome > 0) {
    incomeGrowthPercent =
      ((todayIncome - yesterdayIncome) / yesterdayIncome) * 100;
  } else if (yesterdayIncome === 0) {
    incomeGrowthPercent = todayIncome > 0 ? 100 : 0;
  } else {
    incomeGrowthPercent =
      ((todayIncome - yesterdayIncome) / Math.abs(yesterdayIncome)) * 100;
  }

  return (
    <div className="grid grid-cols-4 gap-x-4 [&>div]:p-3 [&>div]:rounded-sm [&>div]:bg-white">
      <DashboardStatCard
        title="درآمد امروز"
        value={`${todayIncome.toLocaleString() || 0} تومان `}
        percentage={`${Math.trunc(incomeGrowthPercent)}% `}
        percentColor={`${
          incomeGrowthPercent > 0
            ? "text-green-500"
            : incomeGrowthPercent === 0
            ? "text-gray-500"
            : "text-red-500"
        }`}
        description="مشاهده کل درآمد"
        icon={<FaMoneyBillTrendUp />}
        iconBg="bg-blue-500 text-blue-200"
      />
      <DashboardStatCard
        title="سفارشات امروز"
        value={`${todayOrderCount.toLocaleString() || 0} تا `}
        percentage={`${orderGrowthCount} `}
        percentColor={`${
          orderGrowthCount > 0
            ? "text-green-500"
            : orderGrowthCount === 0
            ? "text-gray-500"
            : "text-red-500"
        }`}
        address="/dashboard/all-orders"
        description="مشاهده همه سفارش‌ها"
        icon={<PiShoppingBagBold />}
        iconBg="bg-green-500 text-green-200"
      />
      <DashboardStatCard
        title="کل کاربران"
        value={`${usersCount} نفر `}
        percentage={userGrowthCount}
        percentColor={`${
          userGrowthCount > 0
            ? "text-green-500"
            : userGrowthCount === 0
            ? "text-gray-500"
            : "text-red-500"
        }`}
        address="/dashboard/all-users"
        description="مشاهده همه کاربران"
        icon={<FiUsers />}
        iconBg="bg-amber-400 text-amber-100"
      />
      <DashboardStatCard
        title=" کل تیکت‌ها"
        value={`${ticketsCount} تا `}
        percentage={ticketGrowthCount}
        percentColor={`${
          ticketGrowthCount > 0
            ? "text-green-500"
            : ticketGrowthCount === 0
            ? "text-gray-500"
            : "text-red-500"
        }`}
        description="مشاهده همه تیکت‌ها"
        address="/dashboard/all-tickets"
        icon={<LuTicket />}
        iconBg="bg-purple-500 text-purple-300"
      />
    </div>
  );
}
