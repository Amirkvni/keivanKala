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

export default function OrderChart({ filter, allData, weeksData }) {
  let filteredData;

  switch (filter) {
    case "۱ هفته":
      filteredData = weeksData;
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
