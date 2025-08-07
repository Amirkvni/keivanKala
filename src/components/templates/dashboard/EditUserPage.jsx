"use client";

import React from "react";
import AccountStatus from "@/components/templates/dashboard/edit-user/AccountStatus";
import AddressInformation from "@/components/templates/dashboard/edit-user/AddressInformation";
import Overview from "@/components/templates/dashboard/edit-user/Overview";
import UserProfile from "@/components/templates/dashboard/edit-user/UserProfile";
export default function EditUserPage({ user, userAddress }) {
  return (
    <div className="p-12">
      <p className="text-lg font-bold">ویرایش کاربر</p>
      <div className="flex gap-x-2 mt-5 [&>div]:p-4 [&>div]:rounded-lg">
        <div className="w-8/12  flex flex-col gap-y-4  [&>div]:p-6">
          <Overview
            name={user.firstname}
            family={user.lastname}
            email={user.email}
            phone={user.phone}
            natinalcode={user.nationalcode}
          />
          <AddressInformation userAddress={userAddress} />
        </div>
        <div className="w-4/12  flex flex-col gap-y-4  [&>div]:p-4  [&>div]:rounded-lg ">
          <UserProfile profile={user.profileUrl} />
          <AccountStatus status={user.accountStatus} userId={user._id} />
          <button className="p-2 rounded-lg cursor-pointer bg-green-700  text-white w-fit mr-auto">
            ویرایش
          </button>
        </div>
      </div>
    </div>
  );
}
