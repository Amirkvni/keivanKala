import Link from "next/link";
import React from "react";
import { FaAngleLeft, FaRegHeart } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  LuTicket,
  LuTicketCheck,
  LuTicketPlus,
  LuTickets,
  LuUserCog,
} from "react-icons/lu";
import { LuTicketX } from "react-icons/lu";

import { RiLockPasswordLine } from "react-icons/ri";

function SummaryOfActivities() {
  return (
    <div className=" flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl">
      <div className="flex justify-between items-center ">
        <span className=" border-b-green-400 pb-2 border-b-3">
          سفارش‌های من
        </span>
        <Link href="/" className="flex gap-x-2 items-center text-green-400">
          <span> مشاهده همه </span>
          <FaAngleLeft />
        </Link>
      </div>
      <div className="flex gap-x-3 justify-between [&>div]:w-[200px]">
        <div className="bg-blue-400 flex gap-x-5  rounded-2xl p-2 text-white">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <FiShoppingBag />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <span>0 سفارش</span>
            <span>فعلی</span>
          </div>
        </div>
        <div className="bg-green-400 flex gap-x-5  rounded-2xl p-2 text-white">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <FiShoppingBag />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <span>0 سفارش</span>
            <span>تحویل شده</span>
          </div>
        </div>
        <div className="bg-red-400 flex gap-x-5  rounded-2xl p-2 text-white">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <FiShoppingBag />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <span>0 سفارش</span>
            <span>لغو شده</span>
          </div>
        </div>
        <div className="bg-yellow-400 flex gap-x-5  rounded-2xl p-2 text-white">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <FiShoppingBag />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <span>0 سفارش</span>
            <span>مرجوع شده</span>
          </div>
        </div>
      </div>
      <div>
        <span className=" border-b-green-400 pb-2 border-b-3">حساب کاربری</span>
      </div>
      <div className="flex gap-x-3 justify-between [&>div]:w-[200px]">
        <div className="bg-blue-400 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <LuUserCog />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <span>تکمیل مشخصات</span>
          </div>
        </div>
        <div className="bg-red-400 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <RiLockPasswordLine />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <span>ثبت کلمه عبور</span>
          </div>
        </div>
        <div className="bg-pink-600 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <FaRegHeart />
          </div>
          <div className="flex gap-x-2 ">
            <span>0</span>
            <span>علاقه مندی</span>
          </div>
        </div>
        <div className="bg-green-600 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <IoMdNotificationsOutline />
          </div>
          <div className="flex gap-x-2 ">
            <span>0</span>
            <span>اعلان جدید</span>
          </div>
        </div>
      </div>
      <div>
        <span className=" border-b-green-400 pb-2 border-b-3">
          وضعیت تیکت‌ها
        </span>
      </div>
      <div className="flex gap-x-3 justify-between [&>div]:w-[200px]">
        <div className="bg-green-600 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <LuTicketPlus />
          </div>
          <div className="flex gap-x-2 items-center">
            <span>0</span>
            <span>جدید</span>
          </div>
        </div>
        <div className="bg-yellow-600 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <LuTicket />
          </div>
          <div className="flex gap-x-2 items-center">
            <span>0</span>
            <span>درحال بررسی</span>
          </div>
        </div>
        <div className="bg-red-600 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <LuTicketX />
          </div>
          <div className="flex gap-x-2 items-center">
            <span>0</span>
            <span>بسته شده</span>
          </div>
        </div>
        <div className="bg-blue-600 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <LuTicketCheck />
          </div>
          <div className="flex gap-x-2 items-center text-sm">
            <span>0</span>
            <span>پاسخ داده شده</span>
          </div>
        </div>
        <div className="bg-amber-600 flex gap-x-5  rounded-2xl p-2 text-white items-center">
          <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
            <LuTickets />
          </div>
          <div className="flex gap-x-2 items-center">
            <span>0</span>
            <span>همه</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryOfActivities;
