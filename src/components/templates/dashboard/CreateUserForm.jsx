"use client";

import { useState } from "react";

function CreateUserForm() {
  const [acrtiveTab, setActiveTab] = useState("userAccount");
  const inputs = [
    { id: 1, label: "نام کوچک", required: true },
    { id: 2, label: "نام خانوادگی", required: true },
    { id: 3, label: "ایمیل", required: true },
    { id: 4, label: "پسورد", required: true },
    { id: 5, label: "تکرار پسورد", required: true },
  ];

  return (
    <div className="rounded-lg bg-white p-8 mt-4 dashboard-box-shadow">
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
          <div className="flex flex-col gap-y-4">
            <p className="font-extrabold text-lg">جزئیات حساب</p>
            {inputs.map((item) => (
              <div key={item.id}>
                <label className="text-red-500">* {item.label} :</label>
                <input
                  type="text"
                  className="edit-profile-input mr-5 p-2 outline-none rounded-sm"
                />
              </div>
            ))}
            <div>
              <label className="text-red-500">* نقش :</label>
              <select className="mr-12 edit-profile-input px-2 py-0.5">
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
