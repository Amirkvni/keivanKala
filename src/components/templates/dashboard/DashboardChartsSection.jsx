import OrderBox from "./OrderBox";
import RevenueBox from "./RevenueBox";
import PaymentModel from "@/models/Payment";
import OrderModel from "@/models/Order";

export default async function DashboardChartsSection() {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const persianWeekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  async function getIncomeStats() {
    const now = new Date();
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(now.getMonth() - 1);
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(now.getDate() - 7);

    const [result] = await PaymentModel.aggregate([
      {
        $facet: {
          total: [
            {
              $group: { _id: null, revenue: { $sum: { $toDouble: "$paid" } } },
            },
          ],
          year: [
            { $match: { orderDate: { $gte: oneYearAgo } } },
            {
              $group: { _id: null, revenue: { $sum: { $toDouble: "$paid" } } },
            },
          ],
          month: [
            { $match: { orderDate: { $gte: oneMonthAgo } } },
            {
              $group: { _id: null, revenue: { $sum: { $toDouble: "$paid" } } },
            },
          ],
          week: [
            { $match: { orderDate: { $gte: oneWeekAgo } } },
            {
              $group: { _id: null, revenue: { $sum: { $toDouble: "$paid" } } },
            },
          ],
          monthlyData: [
            { $match: { orderDate: { $gte: oneYearAgo } } },
            {
              $group: {
                _id: { month: { $month: "$orderDate" } }, // 1-12
                revenue: { $sum: { $toDouble: "$paid" } },
              },
            },
          ],
          weeklyData: [
            { $match: { orderDate: { $gte: oneWeekAgo } } },
            {
              $group: {
                _id: { day: { $isoDayOfWeek: "$orderDate" } }, // 1=شنبه ... 7=جمعه
                revenue: { $sum: { $toDouble: "$paid" } },
              },
            },
          ],
        },
      },
    ]);

    const total = result.total[0]?.revenue || 0;
    const year = result.year[0]?.revenue || 0;
    const month = result.month[0]?.revenue || 0;
    const week = result.week[0]?.revenue || 0;

    // آرایه ماه‌ها
    const monthData = Array(12)
      .fill(0)
      .map((_, idx) => {
        const monthRevenue =
          result.monthlyData.find((m) => m._id.month === idx + 1)?.revenue || 0;
        return { name: persianMonths[idx], revenue: monthRevenue };
      });

    // آرایه هفته
    const weekData = Array(7)
      .fill(0)
      .map((_, idx) => {
        const dayRevenue =
          result.weeklyData.find((d) => d._id.day === idx + 1)?.revenue || 0;
        return { name: persianWeekDays[idx], revenue: dayRevenue };
      });

    const incomeStats = [
      { title: "کل درآمد", value: total },
      { title: "درآمد یک سال اخیر", value: year },
      { title: "درآمد یک ماه اخیر", value: month },
      { title: "درآمد یک هفته اخیر", value: week },
    ];

    return { incomeStats, monthData, weekData };
  }
  async function getOrdersStats() {
    const now = new Date();
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(now.getMonth() - 1);
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(now.getDate() - 7);

    const [result] = await OrderModel.aggregate([
      {
        $facet: {
          monthlyData: [
            { $match: { orderDate: { $gte: oneYearAgo } } },
            {
              $group: {
                _id: { month: { $month: "$orderDate" } },
                orders: { $sum: 1 },
              },
            },
          ],
          weeklyData: [
            { $match: { orderDate: { $gte: oneWeekAgo } } },
            {
              $group: {
                _id: { day: { $isoDayOfWeek: "$orderDate" } },
                orders: { $sum: 1 },
              },
            },
          ],
        },
      },
    ]);

    const allData = Array(12)
      .fill(0)
      .map((_, idx) => {
        const monthOrders =
          result.monthlyData.find((m) => m._id.month === idx + 1)?.orders || 0;
        return {
          name: persianMonths[idx],
          orders: monthOrders,
          monthIndex: idx + 1,
        };
      });

    const weeksData = Array(7)
      .fill(0)
      .map((_, idx) => {
        const dayOrders =
          result.weeklyData.find((d) => d._id.day === idx + 1)?.orders || 0;
        return { name: persianWeekDays[idx], orders: dayOrders };
      });

    return { allData, weeksData };
  }
  const { incomeStats, monthData, weekData } = await getIncomeStats();
  const { allData, weeksData } = await getOrdersStats();
  return (
    <div className="grid grid-cols-2 gap-4 [&>div]:p-3 [&>div]:rounded-sm [&>div]:bg-white ">
      <RevenueBox
        incomes={JSON.parse(JSON.stringify(incomeStats))}
        monthData={JSON.parse(JSON.stringify(monthData))}
        weekData={JSON.parse(JSON.stringify(weekData))}
      />
      <OrderBox
        allData={JSON.parse(JSON.stringify(allData))}
        weeksData={JSON.parse(JSON.stringify(weeksData))}
      />
    </div>
  );
}
