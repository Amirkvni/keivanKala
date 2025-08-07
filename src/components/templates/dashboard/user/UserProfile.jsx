"use client";
import React, { useState } from "react";
import { FaStreetView } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import UserBilling from "./UserBilling";
import UserActivities from "./UserActivities";
function UserProfile() {
  const [status, setStatus] = useState("invoice");
  return (
    <div className="flex-1  flex flex-col gap-y-6 bg-white p-5 rounded-xl dashboard-box-shadow">
      <div className=" flex items-center gap-x-6 [&>button]:flex  [&>button]:cursor-pointer [&>button]:items-center [&>button]:gap-x-2 [&>button]:p-2 [&>button]:rounded-sm">
        <button
          className={`${
            status === "invoice" && "border-b-green-400 border-b-2"
          }`}
          onClick={() => setStatus("invoice")}
        >
          صورتحساب <MdPayment />
        </button>
        <button
          className={`${
            status === "activities" && "border-b-green-400 border-b-2"
          }`}
          onClick={() => setStatus("activities")}
        >
          فعالیت ها <FaStreetView />
        </button>
      </div>
      {status === "invoice" ? <UserBilling /> : <UserActivities />}
    </div>
  );
}

export default UserProfile;
