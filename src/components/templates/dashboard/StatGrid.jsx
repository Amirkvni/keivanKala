import { priceFormatter } from "@/utils/priceFormatter";
import React from "react";

function StatGrid({ incomes }) {
  console.log(incomes);

  return (
    <div className="bg-zinc-100 divide-x divide-gray-400 py-3 grid grid-cols-4 gap-4 [&>div>span]:text-xs [&>div>p]:text-sm [&>div]:text-center [&>div>span]:text-gray-500">
      {incomes.map((item, i) => (
        <div key={i}>
          <p>{priceFormatter(item.value)}</p>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default StatGrid;
