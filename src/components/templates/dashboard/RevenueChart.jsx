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

export default function RevenueChart({ filter, monthData, weekData }) {

  let filteredData;

  switch (filter) {
    case "۱ هفته":
      filteredData = weekData;
      break;
    case "۶ ماه":
      filteredData = monthData.slice(6, 12);
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
