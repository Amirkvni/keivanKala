import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
function UserBiography() {
  return (
    <div className="w-[500px] h-[600px] flex flex-col  gap-y-4  bg-white p-3 rounded-lg  overflow-hidden dashboard-box-shadow">
      <div className="w-18 h-18 rounded-full  relative mx-auto border flex justify-center items-center z-1 border-gray-300">
        <FaRegUser className="text-2xl" />
        <Link
          href="/dashboard/edit-user/67cdbc493596672ce3d2ba3d"
          className="absolute  -top-2 -right-1 text-3xl z-50 hover:text-green-700"
        >
          <TiEdit />
        </Link>
      </div>
      <p className="text-center">امیرحسین کیوانی</p>
      <div className="[&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 flex flex-col gap-y-2">
        <div>
          <span>ایمیل</span>
          <span>carolyn_h@hotmail.com</span>
        </div>
        <div>
          <span>تلفن</span>
          <span>+12-123-1234</span>
        </div>
        <div>
          <span>تاریخ تولد</span>
          <span>10/10/1992</span>
        </div>
        <div>
          <span>آخرین ورود</span>
          <span>12 Aug 2024 06:10 AM</span>
        </div>
        <div>
          <span>سوشال مدیا</span>
          <div className="flex items-center gap-x-3 [&>div]:w-9 [&>div]:h-9 [&>div]:border [&>div]:border-gray-400 [&>div]:flex [&>div]:justify-center [&>div]:items-center  [&>div]:rounded-xl">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
        <Link
          className="block text-white rounded-lg p-3  text-center bg-green-600"
          href="/"
        >
          ارسال پیام
        </Link>
        <button className="flex gap-x-1 cursor-pointer items-center border w-full p-3 text-center justify-center text-red-600 hover:border-red-400 border-gray-400 rounded-lg">
          حذف
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default UserBiography;
