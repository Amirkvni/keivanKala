import React from "react";

function ColorSelector({ colors }) {
  console.log(colors);
  const tailwindColors = [
    { label: "قرمز", value: "bg-red-500" },
    { label: "آبی", value: "bg-blue-400" },
    { label: "زرد", value: "bg-yellow-300" },
    { label: "سبز", value: "bg-green-400" },
    { label: "مشکی", value: "bg-black" },
    { label: "خاکستری", value: "bg-gray-300" },
  ];

  return (
    <div className="dashboard-box-shadow">
      <div className="flex justify-between items-center ">
        <span className="font-extrabold text-lg">رنگ ها</span>
        <button className="bg-green-400 rounded-lg p-2 cursor-pointer text-white">
          افزودن
        </button>
      </div>
      <div className="mt-3 [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center flex flex-col gap-y-3 ">
        {Object.entries(colors).map(([key, value]) => (
          <div key={key}>
            <label htmlFor="">رنگ اول</label>
            <span>:</span>
            <select className="dashboard-box-shadow" value={key}>
              <option value={value}>{key}</option>
              {tailwindColors.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}{" "}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
