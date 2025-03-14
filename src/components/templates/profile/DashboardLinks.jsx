"use client";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiBasket } from "react-icons/bi";
import {
  IoExitOutline,
  IoHomeOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUserCog } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";

function DashboardLinks({ phone, name = "کاربر جدید" }) {
  let router = useRouter();
  let pathname = usePathname();
  const logoutHandler = () => {
    Swal.fire({
      title: "آیا از خروج مطمئنی ?",
      icon: "question	",
      confirmButtonText: "بله",
      cancelButtonText: "نه",
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", {
          method: "POST",
        });
        if (res.status === 200) {
          Swal.fire({
            title: "با موفقیت خارج شدی",
            icon: "success",
            confirmButtonText: "اوکی",
          }).then(() => router.replace("/"));
        }
      }
    });
  };
  return (
    <div className="flex flex-col gap-y-2 p-3  w-1/4 rounded-sm shadow-lg">
      <div className="flex justify-between items-center  border-b-gray-400 pb-2 border-b-1">
        <div className="flex gap-x-2">
          <FaUserCircle className="w-10 h-10 rounded-full" />
          <div>
            <p>{phone}</p>
            <p>{name}</p>
          </div>
        </div>

        <FaEdit className="text-2xl text-green-300" />
      </div>
      <div className="flex flex-col  gap-y-1 [&>a]:p-4 [&>a]:rounded-lg [&>a]:flex [&>a]:items-center  [&>a]:gap-x-2 [&>a>svg]:text-2xl">
        <Link
          href="/profile"
          className={
            pathname == "/profile" ? "bg-green-100 text-green-700" : null
          }
        >
          <IoHomeOutline />
          <span>پیشخوان</span>
        </Link>
        <Link
          href="/profile/orders"
          className={
            pathname == "/profile/orders" ? "bg-green-100 text-green-700" : null
          }
        >
          <BiBasket />
          <span>سفارش ها</span>
        </Link>
        <Link
          href="/profile/favorites"
          className={
            pathname == "/profile/favorites"
              ? "bg-green-100 text-green-700"
              : null
          }
        >
          <FaRegHeart />
          <span>علاقه مندی ها</span>
        </Link>
        <Link
          href="/profile/comments"
          className={
            pathname == "/profile/comments"
              ? "bg-green-100 text-green-700"
              : null
          }
        >
          <FaRegCommentDots />
          <span>کامنت ها</span>
        </Link>
        <Link
          href="/profile/recentVisits"
          className={
            pathname == "/profile/recentVisits"
              ? "bg-green-100 text-green-700"
              : null
          }
        >
          <GiBackwardTime />
          <span>بازدید های اخیر</span>
        </Link>
        <Link
          href="/profile/messages"
          className={
            pathname == "/profile/messages"
              ? "bg-green-100 text-green-700"
              : null
          }
        >
          <IoIosNotificationsOutline />
          <span>پیام ها</span>
        </Link>
        <Link
          href="/profile/addresses"
          className={
            pathname == "/profile/addresses"
              ? "bg-green-100 text-green-700"
              : null
          }
        >
          <IoLocationOutline />
          <span>آدرس ها</span>
        </Link>
        <Link
          href="/profile/personal-info"
          className={
            pathname == "/profile/personal-info"
              ? "bg-green-100 text-green-700"
              : null
          }
        >
          <LuUserCog />
          <span>اطلاعات حساب کاربری</span>
        </Link>
        <div
          onClick={logoutHandler}
          className="p-4 rounded-lg flex items-center gap-x-2 hover:bg-red-500 hover:text-white cursor-pointer text-red-600 hover:font-bold"
        >
          <IoExitOutline className="text-2xl" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardLinks;
