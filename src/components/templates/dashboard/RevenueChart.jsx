"use client";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const monthData = [
  { name: "فروردین", revenue: 400000 },
  { name: "اردیبهشت", revenue: 380000 },
  { name: "خرداد", revenue: 420000 },
  { name: "تیر", revenue: 410000 },
  { name: "مرداد", revenue: 532451 },
  { name: "شهریور", revenue: 891213 },
  { name: "مهر", revenue: 6929471 },
  { name: "آبان", revenue: 1302924 },
  { name: "آذر", revenue: 4614214 },
  { name: "دی", revenue: 245151 },
  { name: "بهمن", revenue: 6579281 },
  { name: "اسفند", revenue: 52423 },
];

const weekData = [
  { name: "شنبه", revenue: 50000 },
  { name: "یکشنبه", revenue: 30000 },
  { name: "دوشنبه", revenue: 40000 },
  { name: "سه‌شنبه", revenue: 35000 },
  { name: "چهارشنبه", revenue: 45000 },
  { name: "پنجشنبه", revenue: 20000 },
  { name: "جمعه", revenue: 10000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        dir="rtl"
        style={{
          background: "#fff",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "6px",
          fontSize: "14px",
        }}
      >
        {` ${payload[0].value.toLocaleString()} تومان`}
      </div>
    );
  }

  return null;
};

export default function RevenueChart({ filter }) {
  let filteredData;

  switch (filter) {
    case "۱ هفته":
      filteredData = weekData;
      break;
    case "۶ ماه":
      filteredData = monthData.slice(0, 6);
      break;
    case "۱ سال":
      filteredData = monthData.slice(0, 12);
      break;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(v) => `${v / 1000}k`} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#52b69a"
          strokeWidth={3}
          dot={{ r: 5 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
