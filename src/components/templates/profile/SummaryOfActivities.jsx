import Link from "next/link";
import React from "react";
import TicketModel from "@/models/Ticket";
import { BiBasket } from "react-icons/bi";
import { FaAngleLeft, FaRegCommentDots, FaRegHeart } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import {
  IoIosNotificationsOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import {
  LuTicket,
  LuTicketCheck,
  LuTicketPlus,
  LuTickets,
  LuUserCog,
  LuTicketX,
} from "react-icons/lu";
import LogoutBtn from "./LogoutBtn";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";

export default async function SummaryOfActivities({
  orders,
  userAddressesCount,
  userNotifications,
  userWishlistsCount,
  userTickets,
}) {
  connectToDB();
  const user = await authUser();
  const userTicketsCount = await TicketModel.countDocuments({
    user: user._id,
    mainTicket: { $exists: false },
  });
  const userAnsweredTicketsCount = await TicketModel.countDocuments({
    user: user._id,
    status: "answered",
  });
  const userClosedTicketsCount = await TicketModel.countDocuments({
    user: user._id,
    status: "closed",
  });
  const userRewiTicketsCount = await TicketModel.countDocuments({
    user: user._id,
    status: "review",
  });
  const ordersStatusCount = orders.reduce((acc, order) => {
    const status = order.status || "unknown";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      {/* desktop profile */}
      <div className="hidden 2xl:flex flex-col gap-y-8 p-3 w-3/4 rounded-lg bg-white dark:bg-zinc-800 dark:text-white ">
        <div className="flex justify-between items-center ">
          <span className=" border-b-green-400 pb-2 border-b-3 relative">
            <span className="absolute bg-green-600 -left-5 -top-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">
              {orders.length}
            </span>
            سفارش‌های من
          </span>
          <Link
            href="/profile/orders"
            className="flex gap-x-2 items-center text-green-400"
          >
            <span> مشاهده همه </span>
            <FaAngleLeft />
          </Link>
        </div>
        <div className="flex gap-x-3 justify-between [&>div]:w-[200px] ">
          <div className="bg-blue-400 flex gap-x-5  rounded-2xl p-2 text-white">
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FiShoppingBag />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span>{ordersStatusCount["pending"] || 0} سفارش</span>
              <span>درحال پردازش</span>
            </div>
          </div>
          <div className="bg-green-400 flex gap-x-5  rounded-2xl p-2 text-white">
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FiShoppingBag />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span>{ordersStatusCount["delivered"] || 0} سفارش</span>
              <span>تحویل شده</span>
            </div>
          </div>
          <div className="bg-red-400 flex gap-x-5  rounded-2xl p-2 text-white">
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FiShoppingBag />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span>{ordersStatusCount["canceled"] || 0} سفارش</span>
              <span>لغو شده</span>
            </div>
          </div>
          <div className="bg-yellow-400 flex gap-x-5  rounded-2xl p-2 text-white">
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FiShoppingBag />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span>{ordersStatusCount["returned"] || 0} سفارش</span>
              <span>مرجوع شده</span>
            </div>
          </div>
        </div>
        <div>
          <span className=" border-b-green-400 pb-2 border-b-3">
            حساب کاربری
          </span>
        </div>
        <div className="flex gap-x-3 justify-between [&>a]:w-[200px]">
          <Link
            href="/profile/personal-info"
            className="bg-blue-400 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <LuUserCog />
            </div>

            <span>تکمیل مشخصات</span>
          </Link>
          <Link
            href="/profile/addresses"
            className="bg-red-400 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <IoLocationOutline />
            </div>
            <div className="flex gap-x-2 ">
              <span>{userAddressesCount}</span>
              <span>آدرس </span>
            </div>
          </Link>
          <Link
            href="/profile/favorites"
            className="bg-pink-600 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FaRegHeart />
            </div>
            <div className="flex gap-x-2 ">
              <span>{userWishlistsCount}</span>
              <span>علاقه مندی</span>
            </div>
          </Link>
          <Link
            href="/profile/messages"
            className="bg-green-600 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <IoMdNotificationsOutline />
            </div>
            <div className="flex gap-x-2 ">
              <span>{userNotifications}</span>
              <span>اعلان جدید</span>
            </div>
          </Link>
        </div>
        <div>
          <span className=" border-b-green-400 pb-2 border-b-3">
            وضعیت تیکت‌ها
          </span>
        </div>
        <div className="flex gap-x-3 justify-between [&>a]:w-[200px]">
          <Link
            href="/profile/tickets"
            className="bg-green-600 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <LuTicketPlus />
            </div>
            <div className="flex gap-x-2 items-center">
              <span>0</span>
              <span>جدید</span>
            </div>
          </Link>
          <Link
            href="/profile/tickets"
            className="bg-yellow-600 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <LuTicket />
            </div>
            <div className="flex gap-x-2 items-center">
              <span>{userRewiTicketsCount}</span>
              <span>درحال بررسی</span>
            </div>
          </Link>
          <Link
            href="/profile/tickets"
            className="bg-red-600 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <LuTicketX />
            </div>
            <div className="flex gap-x-2 items-center">
              <span>{userClosedTicketsCount}</span>
              <span>بسته شده</span>
            </div>
          </Link>
          <Link
            href="/profile/tickets"
            className="bg-blue-600 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <LuTicketCheck />
            </div>
            <div className="flex gap-x-2 items-center text-sm">
              <span>{userAnsweredTicketsCount}</span>
              <span>پاسخ داده شده</span>
            </div>
          </Link>
          <Link
            href="/profile/tickets"
            className="bg-amber-600 flex gap-x-5  rounded-2xl p-2 text-white items-center"
          >
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <LuTickets />
            </div>
            <div className="flex gap-x-2 items-center">
              <span>{userTicketsCount}</span>
              <span>همه</span>
            </div>
          </Link>
        </div>
      </div>
      {/* mobile profile */}
      <div className="2xl:hidden w-full flex flex-col gap-y-6 ">
        <div className="flex justify-between items-center text-xs ">
          <span className=" border-b-green-400 pb-2 border-b-3 relative dark:text-white">
            <span className="absolute bg-green-600 -left-5 -top-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ">
              {orders.length}
            </span>
            سفارش‌های من
          </span>
          <Link href="/" className="flex gap-x-2 items-center text-green-400">
            <span> مشاهده همه </span>
            <FaAngleLeft />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 [&>div]:text-white [&>div]:p-2 [&>div]:text-xs [&>div]:flex [&>div]:text-center [&>div]:items-center [&>div]:gap-x-2 [&>div]:rounded-lg  [&>div]:gap-y-0.5">
          <div className="bg-blue-600  ">
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FiShoppingBag />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span>{ordersStatusCount["pending"] || 0} سفارش</span>
              <span>درحال پردازش</span>
            </div>
          </div>
          <div className="bg-green-600 ">
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FiShoppingBag />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span>{ordersStatusCount["delivered"] || 0} سفارش</span>
              <span>تحویل شده</span>
            </div>
          </div>
          <div className="bg-red-600 ">
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FiShoppingBag />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span>{ordersStatusCount["canceled"] || 0} سفارش</span>
              <span>لغو شده</span>
            </div>
          </div>
          <div className="bg-yellow-600 ">
            <div className="shadow-lg w-12 h-12 flex items-center justify-center  text-2xl rounded-lg">
              <FiShoppingBag />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span>{ordersStatusCount["returned"] || 0} سفارش</span>
              <span>مرجوع شده</span>
            </div>
          </div>
        </div>
        <div className="links flex flex-col gap-y-3 divide-y divide-gray-300 [&>a]:p-2 [&>a]:flex [&>a]:justify-between [&>a]:items-center [&>a]:dark:text-white">
          <Link href="/profile/orders">
            <div className="flex gap-x-3 items-center">
              <BiBasket />
              <span> سفارش ها</span>
            </div>
            <FaAngleLeft />
          </Link>
          <Link href="/profile/favorites">
            <div className="flex gap-x-3 items-center">
              <FaRegHeart />
              <span>علاقه مندی ها</span>
            </div>
            <FaAngleLeft />
          </Link>
          <Link href="/profile/comments">
            <div className="flex gap-x-3 items-center">
              <FaRegCommentDots />
              <span> کامنت ها</span>
            </div>
            <FaAngleLeft />
          </Link>
          <Link href="/profile/recentVisits">
            <div className="flex gap-x-3 items-center">
              <GiBackwardTime /> <span> بازدید های اخیر</span>
            </div>
            <FaAngleLeft />
          </Link>
          <Link href="/profile/messages">
            <div className="flex gap-x-3 items-center">
              <IoIosNotificationsOutline />
              <span> پیام ها</span>
            </div>
            <FaAngleLeft />
          </Link>
          <Link href="/profile/addresses">
            <div className="flex gap-x-3 items-center">
              <IoLocationOutline />
              <span> آدرس ها</span>
            </div>
            <FaAngleLeft />
          </Link>
          <Link href="/profile/personal-info">
            <div className="flex gap-x-3 items-center">
              <LuUserCog />
              <span> اطلاعات حساب کاربری</span>
            </div>
            <FaAngleLeft />
          </Link>
          <LogoutBtn />
        </div>
        <div>
          <span className=" border-b-green-400 pb-1 border-b-3  dark:text-white">
            حساب کاربری
          </span>
        </div>
        <div className=" grid grid-cols-2 gap-2 [&>a]:flex [&>a]:gap-x-2 [&>a]:items-center [&>a]:rounded-lg [&>a]:p-4 [&>a]:text-white [&>a>span]:text-xs">
          <Link href="/profile/personal-info" className="bg-blue-500">
            <LuUserCog />
            <span>تکمیل مشخصات</span>
          </Link>
          <Link href="/profile/addresses" className="bg-red-500">
            <IoLocationOutline />
            <span>آدرس </span>
          </Link>
          <Link href="/profile/favorites" className="bg-pink-500">
            <FaRegHeart />
            <span>علاقه مندی</span>
          </Link>
          <Link href="/profile/messages" className="bg-green-500">
            <IoMdNotificationsOutline />
            <span>اعلان جدید</span>
          </Link>
        </div>
        <div>
          <span className=" border-b-green-400 pb-1 border-b-3 dark:text-white">
            وضعیت تیکت‌ها
          </span>
        </div>
        <div className=" grid grid-cols-2 gap-2 [&>div]:flex [&>div]:gap-x-2 [&>div]:items-center [&>div]:rounded-lg [&>div]:p-4 [&>div]:text-white [&>div>span]:text-xs">
          <div className="bg-green-600 ">
            <LuTicketPlus />
            <span>جدید 0</span>
          </div>
          <div className="bg-yellow-600">
            <LuTicket />
            <span>درحال بررسی 0</span>
          </div>
          <div className="bg-red-600">
            <LuTicketX />
            <span>بسته شده 0</span>
          </div>
          <div className="bg-blue-600">
            <LuTicketCheck />
            <span>پاسخ داده شده 0</span>
          </div>
          <div className="bg-amber-600">
            <LuTickets />
            <span>همه</span>
          </div>
        </div>
      </div>
    </>
  );
}
