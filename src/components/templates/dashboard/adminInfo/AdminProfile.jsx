"use client";
import React, { useState } from "react";
import { FaNewspaper, FaRegUserCircle } from "react-icons/fa";
import AdminAbout from "./AdminAbout";
import AdminPosts from "./AdminPosts";
function AdminProfile({
  fullName,
  email,
  phone,
  nationalcode,
  role,
  birthday,
  education,
  experiences,
  fullAddress,
}) {
  const [status, setStatus] = useState("aboutme");
  return (
    <div className="flex-1  flex flex-col gap-y-6 ">
      <div className=" flex items-center gap-x-6 [&>button]:flex  [&>button]:cursor-pointer [&>button]:items-center [&>button]:gap-x-2 [&>button]:p-2 [&>button]:rounded-sm">
        <button
          className={`${
            status === "aboutme" && "border-b-green-400 border-b-2"
          }`}
          onClick={() => setStatus("aboutme")}
        >
          درباره من <FaRegUserCircle />
        </button>
        <button
          className={`${status === "blogs" && "border-b-green-400 border-b-2"}`}
          onClick={() => setStatus("blogs")}
        >
          پست ها <FaNewspaper />
        </button>
      </div>
      {status === "aboutme" ? (
        <AdminAbout
          fullName={fullName}
          email={email}
          phone={phone}
          nationalcode={nationalcode}
          role={role}
          birthday={birthday}
          education={education}
          experiences={experiences}
          fullAddress={fullAddress}
        />
      ) : (
        <AdminPosts />
      )}
    </div>
  );
}

export default AdminProfile;
