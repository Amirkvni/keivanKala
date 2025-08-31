"use client";
import React from "react";
import { useState } from "react";
import OrderChart from "./OrderChart";
import FilterButtons from "./FilterButtons";
export default function OrderBox({ allData, weeksData }) {
  const [orderFilter, setOrderFilter] = useState("۱ سال");

  return (
    <div className="dashboard-box-shadow">
      <div className="flex justify-between items-center">
        <span className="dashboard-header-box">سفارش ها</span>
        <FilterButtons
          selectedFilter={orderFilter}
          onFilterChange={setOrderFilter}
        />
      </div>
      <div className="w-full h-64 mt-24" dir="ltr">
        <OrderChart
          filter={orderFilter}
          allData={allData}
          weeksData={weeksData}
        />
      </div>
    </div>
  );
}
