"use client";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const allData = [
  { name: "فروردین", orders: 120, monthIndex: 1 },
  { name: "اردیبهشت", orders: 41, monthIndex: 2 },
  { name: "خرداد", orders: 42, monthIndex: 3 },
  { name: "تیر", orders: 56, monthIndex: 4 },
  { name: "مرداد", orders: 12, monthIndex: 5 },
  { name: "شهریور", orders: 56, monthIndex: 6 },
  { name: "مهر", orders: 105, monthIndex: 7 },
  { name: "آبان", orders: 120, monthIndex: 8 },
  { name: "آذر", orders: 42, monthIndex: 9 },
  { name: "دی", orders: 98, monthIndex: 10 },
  { name: "بهمن", orders: 32, monthIndex: 11 },
  { name: "اسفند", orders: 102, monthIndex: 12 },
];

const weekData = [
  { name: "شنبه", orders: 15 },
  { name: "یکشنبه", orders: 30 },
  { name: "دوشنبه", orders: 25 },
  { name: "سه‌شنبه", orders: 40 },
  { name: "چهارشنبه", orders: 10 },
  { name: "پنجشنبه", orders: 20 },
  { name: "جمعه", orders: 5 },
];

export default function OrderChart({ filter }) {
  let filteredData;

  switch (filter) {
    case "۱ هفته":
      filteredData = weekData;
      break;
    case "۶ ماه":
      filteredData = allData.slice(0, 6);
      break;
    case "۱ سال":
      filteredData = allData.slice(0, 12);
      break;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={filteredData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" name="تعداد سفارش‌ها" fill="#52b69a" />
      </BarChart>
    </ResponsiveContainer>
  );
}
