import React from "react";

function AccountStatus() {
  return (
    <div className="bg-white dashboard-box-shadow [&>div]:flex [&>div]:justify-between [&>div]:items-center">
      <div>
        <p className="font-extrabold text-lg">وضعیت حساب </p>
        <span className="text-xs bg-green-100 rounded-lg text-green-900 py-1.5 px-3 ">
          فعال
        </span>
      </div>
      <div className="mt-4">
        <div>
          <p className="font-bold text-sm">مسدود کنید</p>
          <p className="text-xs text-gray-400 mt-1">این حساب را غیرفعال کنید</p>
        </div>

        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
        </label>
      </div>
    </div>
  );
}

export default AccountStatus;
