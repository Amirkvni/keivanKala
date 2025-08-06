import AccountStatus from "@/components/templates/dashboard/user/AccountStatus";
import AddressInformation from "@/components/templates/dashboard/user/AddressInformation";
import Overview from "@/components/templates/dashboard/user/Overview";
import UserProfile from "@/components/templates/dashboard/user/UserProfile";
import React from "react";

function page() {
  return (
    <div className="p-12">
      <p className="text-lg font-bold">ویرایش کاربر</p>
      <div className="flex gap-x-2 mt-5 [&>div]:p-4 [&>div]:rounded-lg">
        <div className="w-8/12  flex flex-col gap-y-4  [&>div]:p-6">
          <Overview />
          <AddressInformation />
        </div>
        <div className="w-4/12  flex flex-col gap-y-4  [&>div]:p-4  [&>div]:rounded-lg ">
          <UserProfile />
          <AccountStatus />
          <button className="p-2 rounded-lg cursor-pointer bg-green-700  text-white w-fit mr-auto">
            ویرایش
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
