import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";

function UserProfile({ profile }) {
  return (
    <div className="flex flex-col gap-y-6  bg-white dashboard-box-shadow">
      <span className="font-extrabold text-lg">تصویر کاربر</span>
      <div className="w-full bg-zinc-100 flex justify-center items-center flex-col gap-y-4 py-8">
        {profile ? (
          <Image
            src={profile}
            alt="user-profile"
            width={300}
            height={300}
            className="w-22 h-22 rounded-full"
          />
        ) : (
          <FaRegUser className="text-2xl" />
        )}
        <button className="bg-green-500 rounded-lg p-3 text-xs text-white cursor-pointer">
          اپلود تصویر
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
