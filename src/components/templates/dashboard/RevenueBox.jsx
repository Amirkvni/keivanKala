"use client";
import { useState } from "react";
import React from "react";
import FilterButtons from "./FilterButtons";
import RevenueChart from "./RevenueChart";
import StatGrid from "./StatGrid";

function RevenueBox({ incomes, monthData, weekData }) {
  const [revenueFilter, setRevenueFilter] = useState("۱ سال");

  return (
    <div className="flex flex-col gap-y-4 dashboard-box-shadow">
      <div className="flex justify-between items-center">
        <span className="dashboard-header-box">درآمد</span>
        <FilterButtons
          selectedFilter={revenueFilter}
          onFilterChange={setRevenueFilter}
        />
      </div>
      <StatGrid incomes={incomes} />
      <div className="w-full h-64" dir="ltr">
        <RevenueChart
          filter={revenueFilter}
          monthData={monthData}
          weekData={weekData}
        />
      </div>
    </div>
  );
}

export default RevenueBox;
