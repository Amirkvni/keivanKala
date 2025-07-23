"use client";

import { useState } from "react";

function CreateUserForm() {
  const [acrtiveTab, setActiveTab] = useState("userAccount");
  return (
    <div className="rounded-lg bg-white p-8 mt-3">
      <div className="text-sm [&>button]:cursor-pointer">
        <button
          className={`ml-6 ${
            acrtiveTab === "userAccount" &&
            "text-green-500  border-b-green-500 pb-2 border-b-2"
          }`}
          onClick={() => setActiveTab("userAccount")}
        >
          حساب کاربری
        </button>
        <button
          className={`${
            acrtiveTab === "access" &&
            "text-green-500  border-b-green-500 pb-2 border-b-2"
          }`}
          onClick={() => setActiveTab("access")}
        >
          دسترسی
        </button>
      </div>
      <div className="mt-9">
        {acrtiveTab === "userAccount" ? (
          <div className="flex flex-col gap-y-4 [&>div>input]:mr-5 [&>div>input]:outline-none [&>div>input]:p-2 [&>div>input]:bg-gray-200 [&>div>input]:rounded-sm">
            <p>جزئیات حساب</p>
            <div>
              <label> * نام کوچک </label>
              <input type="text" />
            </div>
            <div>
              <label> * نام خانوادگی</label>
              <input type="text" />
            </div>
            <div>
              <label> * ایمیل</label>
              <input type="text" />
            </div>
            <div>
              <label> * پسورد</label>
              <input type="text" />
            </div>
            <div>
              <label> * نکرار پسورد</label>
              <input type="text" />
            </div>
            <div>
              <label> *نقش</label>
              <select name="" id="" className="mr-12">
                <option value="">ادمین</option>
                <option value="">کاربر</option>
              </select>
            </div>
          </div>
        ) : (
          <div>salam</div>
        )}
        <button className="mt-5 mr-auto bg-green-400 p-2 rounded-sm text-white block">
          ذخیره
        </button>
      </div>
    </div>
  );
}

export default CreateUserForm;
