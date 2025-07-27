"use client";

import { useState } from "react";

function CreateUserForm() {
  const [acrtiveTab, setActiveTab] = useState("userAccount");
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
          <div className="flex flex-col gap-y-4 [&>div>input]:mr-5 [&>div>input]:outline-none [&>div>input]:p-2  [&>div>label]:text-red-500  [&>div>input]:rounded-sm">
            <p className="font-extrabold text-lg">جزئیات حساب</p>
            <div>
              <label> * نام کوچک :</label>
              <input type="text" editAdmininfo />
            </div>
            <div>
              <label> * نام خانوادگی :</label>
              <input type="text" className="edit-profile-input" />
            </div>
            <div>
              <label> * ایمیل :</label>
              <input type="text" className="edit-profile-input" />
            </div>
            <div>
              <label> * پسورد : </label>
              <input type="text" className="edit-profile-input" />
            </div>
            <div>
              <label> * تکرار پسورد :</label>
              <input type="text" className="edit-profile-input" />
            </div>
            <div>
              <label> *نقش :</label>
              <select
                name=""
                id=""
                className="mr-12 edit-profile-input px-2 py-0.5"
              >
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
