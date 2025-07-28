import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiShoppingBagBold } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { LuTicket } from "react-icons/lu";

export const dashboardBoxes = [
  {
    id: 4,
    title: "درآمد امروز",
    value: "۶۰۷۶۵۹۶ تومان",
    percentage: "+16.24%",
    percentColor: "text-green-500",
    description: "مشاهده کل درآمد",
    icon: <FaMoneyBillTrendUp />,
    iconBg: "bg-blue-500 text-blue-200",
  },
  {
    id: 1,
    title: "سفارشات امروز",
    value: "647215",
    percentage: "-32%",
    percentColor: "text-red-500",
    description: "مشاهده همه سفارش‌ها",
    icon: <PiShoppingBagBold />,
    iconBg: "bg-green-500 text-green-200",
  },
  {
    id: 2,
    title: "کل کاربران",
    value: "6782255 نفر",
    percentage: "+2",
    percentColor: "text-green-500",
    description: "مشاهده همه کاربران",
    icon: <FiUsers />,
    iconBg: "bg-amber-400 text-amber-100",
  },
  {
    id: 3,
    title: "تیکت‌ها",
    value: "558323",
    percentage: "+6",
    percentColor: "text-green-500",
    description: "مشاهده همه تیکت‌ها",
    icon: <LuTicket />,
    iconBg: "bg-purple-500 text-purple-300",
  },
];
