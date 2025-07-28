import React from "react";

function StatGrid() {
  const incomeStats = [
    { title: "کل درآمد", value: "۶۰۷۶۵۹۶ تومان" },
    { title: "درآمد یک هفته اخیر", value: "۵۳۶۲۳ تومان" },
    { title: "درآمد یک ماه اخیر", value: "۵۳۶۲۳ تومان" },
    { title: "درآمد یک سال اخیر", value: "۵۳۶۲۳ تومان" },
  ];
  return (
    <div className="bg-zinc-100 divide-x divide-gray-400 py-3 grid grid-cols-4 gap-4 [&>div>span]:text-xs [&>div>p]:text-sm [&>div]:text-center [&>div>span]:text-gray-500">
      {incomeStats.map((item, i) => (
        <div key={i}>
          <p>{item.value}</p>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default StatGrid;
