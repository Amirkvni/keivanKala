import React from "react";

function ColorSelector() {
  return (
    <div className="dashboard-box-shadow">
      <div className="flex justify-between items-center ">
        <span className="font-extrabold text-lg">رنگ ها</span>
        <button className="bg-green-400 rounded-lg p-2 cursor-pointer text-white">
          افزودن
        </button>
      </div>
      <div className="mt-3 [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center flex flex-col gap-y-3 ">
        <div>
          <label htmlFor="">رنگ اول</label>
          <span>:</span>
          <select name="" id="" className="dashboard-box-shadow">
            <option value="">قرمز</option>
            <option value="">زرد</option>
            <option value="">نارنجی</option>
          </select>
        </div>
        <div>
          <label htmlFor="">رنگ دوم</label>
          <span>:</span>
          <select name="" id="" className="dashboard-box-shadow">
            <option value="">قرمز</option>
            <option value="">زرد</option>
            <option value="">نارنجی</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ColorSelector;
