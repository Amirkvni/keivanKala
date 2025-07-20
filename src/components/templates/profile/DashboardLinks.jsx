"use client";
import Link from "next/link";
import React from "react";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import { BiBasket } from "react-icons/bi";
import { IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessagesSquare, LuUserCog } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import LogoutBtn from "./LogoutBtn";
function DashboardLinks({ phone, name = "کاربر جدید" }) {
  let router = useRouter();
  let pathname = usePathname();

  return (
    <div className="hidden 2xl:flex flex-col gap-y-2 p-3  w-1/4 rounded-lg  bg-white dark:text-white dark:bg-zinc-800 border border-gray-300 dark:border-none">
      <div className="flex justify-between items-center  border-b-gray-400 pb-2 border-b-1">
        <div className="flex gap-x-2">
          <FaUserCircle className="w-10 h-10 rounded-full" />
          <div>
            <p>{phone}</p>
            <p>{name}</p>
          </div>
        </div>

        <FaEdit
          className="text-2xl text-green-300 cursor-pointer hover:text-green-800"
          onClick={() => router.push("/profile/personal-info")}
        />
      </div>
      <div className="flex flex-col  gap-y-1 [&>a]:p-4 [&>a]:rounded-lg [&>a]:flex [&>a]:items-center  [&>a]:gap-x-2 [&>a>svg]:text-2xl">
        <Link
          href="/profile"
          className={pathname == "/profile" ? "activeUserDashboardLink" : null}
        >
          <IoHomeOutline />
          <span>پیشخوان</span>
        </Link>
        <Link
          href="/profile/orders"
          className={
            pathname.startsWith("/profile/orders")
              ? "activeUserDashboardLink"
              : undefined
          }
        >
          <BiBasket />
          <span>سفارش ها</span>
        </Link>
        <Link
          href="/profile/favorites"
          className={
            pathname == "/profile/favorites" ? "activeUserDashboardLink" : null
          }
        >
          <FaRegHeart />
          <span>علاقه مندی ها</span>
        </Link>
        <Link
          href="/profile/comments"
          className={
            pathname == "/profile/comments" ? "activeUserDashboardLink" : null
          }
        >
          <FaRegCommentDots />
          <span>کامنت ها</span>
        </Link>
        <Link
          href="/profile/tickets"
          className={
            pathname.startsWith("/profile/tickets")
              ? "activeUserDashboardLink"
              : undefined
          }
        >
          <LuMessagesSquare />
          <span>تیکت ها</span>
        </Link>
        <Link
          href="/profile/recentVisits"
          className={
            pathname == "/profile/recentVisits"
              ? "activeUserDashboardLink"
              : null
          }
        >
          <GiBackwardTime />
          <span>بازدید های اخیر</span>
        </Link>
        <Link
          href="/profile/messages"
          className={
            pathname == "/profile/messages" ? "activeUserDashboardLink" : null
          }
        >
          <IoIosNotificationsOutline />
          <span>پیام ها</span>
        </Link>
        <Link
          href="/profile/addresses"
          className={
            pathname == "/profile/addresses" ? "activeUserDashboardLink" : null
          }
        >
          <IoLocationOutline />
          <span>آدرس ها</span>
        </Link>
        <Link
          href="/profile/personal-info"
          className={
            pathname == "/profile/personal-info"
              ? "activeUserDashboardLink"
              : null
          }
        >
          <LuUserCog />
          <span>اطلاعات حساب کاربری</span>
        </Link>

        <LogoutBtn />
      </div>
    </div>
  );
}

export default DashboardLinks;
