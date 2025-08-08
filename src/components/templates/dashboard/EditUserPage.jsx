"use client";

import React, { useState } from "react";
import AccountStatus from "@/components/templates/dashboard/edit-user/AccountStatus";
import AddressInformation from "@/components/templates/dashboard/edit-user/AddressInformation";
import Overview from "@/components/templates/dashboard/edit-user/Overview";
import UserProfile from "@/components/templates/dashboard/edit-user/UserProfile";
import Swal from "sweetalert2";
export default function EditUserPage({ user, userAddress }) {
  const [mainUser, setMainUser] = useState(user);
  const [mainAddress, setMainAddress] = useState(userAddress);
  const editUserHandler = async () => {
    const res = await fetch(`/api/user/edit/${mainUser._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mainUser }),
    });
    if (res.status === 200) {
      Swal.fire("موفق !", "حساب کاربر ویرایش شد.", "success").then(() => {
        router.refresh();
      });
    }
  };
  return (
    <div className="p-12">
      <p className="text-lg font-bold">ویرایش کاربر</p>
      <div className="flex gap-x-2 mt-5 [&>div]:p-4 [&>div]:rounded-lg">
        <div className="w-8/12  flex flex-col gap-y-4  [&>div]:p-6">
          <Overview setMainUser={setMainUser} mainUser={mainUser} />
          <AddressInformation
            mainAddress={mainAddress}
            setMainAddress={setMainAddress}
          />
        </div>
        <div className="w-4/12  flex flex-col gap-y-4  [&>div]:p-4  [&>div]:rounded-lg ">
          <UserProfile profile={mainUser.profileUrl} />
          {user.role !== "ADMIN" && (
            <AccountStatus status={user.accountStatus} userId={mainUser._id} />
          )}
          <button
            className="p-2 rounded-lg cursor-pointer bg-green-700  text-white w-fit mr-auto"
            onClick={editUserHandler}
          >
            ویرایش
          </button>
        </div>
      </div>
    </div>
  );
}
