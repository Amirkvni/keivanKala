import React from "react";

function ColorSelector({ colors, setMainProduct, mainProduct }) {
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
        {Object.entries(colors).map(([key, value], index) => (
          <div key={key}>
            <label htmlFor="">
              {index === 0
                ? "رنگ اول"
                : index === 1
                ? "رنگ دوم"
                : index === 2
                ? "رنگ سوم"
                : index === 3
                ? "رنگ چهارم"
                : index === 4
                ? "رنگ پنجم"
                : index === 5
                ? "رنگ ششم"
                : "رنگ"}
            </label>
            <span>:</span>
            <select
              className="dashboard-box-shadow"
              value={value}
              onChange={(e) => changeColor(key, e.target.value)}
            >
              <option value={value}>{key}</option>
              {tailwindColors.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
