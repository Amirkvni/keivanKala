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

const data = [
  { name: "فروردین", orders: 120 },
  { name: "اردیبهشت", orders: 41 },
  { name: "خرداد", orders: 42 },
  { name: "تیر", orders: 56 },
  { name: "مرداد", orders: 12 },
  { name: "شهریور", orders: 56 },
  { name: "مهر", orders: 105 },
  { name: "ابان", orders: 120 },
  { name: "اذر", orders: 42 },
  { name: "دی", orders: 98 },
  { name: "بهمن", orders: 32 },
  { name: "اسفند", orders: 102 },
];

export default function OrdersChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" name="تعداد سفارش‌ها" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
