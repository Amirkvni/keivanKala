"use client";
import React from "react";
import Link from "next/link";
import { TbLockPassword, TbUserEdit } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { FaMobileAlt } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { MdOutlineEditLocation } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";
function AdminInfoSideBar() {
  const pathname = usePathname();
  return (
    <div className="w-[350px]  flex flex-col  gap-y-3  bg-white p-8 [&>a]:flex [&>a]:items-center [&>a]:gap-x-2  [&>a]:p-2 [&>a]:text-lg [&>a]:rounded-sm">
      <Link
        href="/dashboard/editAdmininfo"
        className={`${
          pathname == "/dashboard/editAdmininfo"
            ? "bg-[#d0f4de] text-green-600"
            : null
        }`}
      >
        <TbUserEdit />
        پروفایل
      </Link>
      <Link
        href="/dashboard/editAdmininfo/address"
        className={`${
          pathname == "/dashboard/editAdmininfo/address"
            ? "bg-[#d0f4de] text-green-600"
            : null
        }`}
      >
        <MdOutlineEditLocation />
        آدرس
      </Link>
      <Link
        href="/dashboard/editAdmininfo/password"
        className={`${
          pathname == "/dashboard/editAdmininfo/password"
            ? "bg-[#d0f4de] text-green-600"
            : null
        }`}
      >
        <TbLockPassword />
        امنیت
      </Link>
      <Link
        href="/dashboard/editAdmininfo/socials"
        className={`${
          pathname == "/dashboard/editAdmininfo/socials"
            ? "bg-[#d0f4de] text-green-600"
            : null
        }`}
      >
        <FaMobileAlt />
        سوشال مدیا
      </Link>
      <Link
        href="/dashboard/editAdmininfo/skills"
        className={`${
          pathname == "/dashboard/editAdmininfo/skills"
            ? "bg-[#d0f4de] text-green-600"
            : null
        }`}
      >
        <FaMobileAlt />
        مهارت ها
      </Link>
      <Link href="/">
        <GiSpanner />
        سوابق
      </Link>
    </div>
  );
}

export default AdminInfoSideBar;
