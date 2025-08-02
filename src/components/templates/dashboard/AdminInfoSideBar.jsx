"use client";
import React from "react";
import Link from "next/link";
import { TbUserEdit } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { SlSocialGithub } from "react-icons/sl";
import { MdOutlineEditLocation, MdOutlineWorkHistory } from "react-icons/md";
import { GiSpanner } from "react-icons/gi";
import { BsPersonLock } from "react-icons/bs";
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
        <BsPersonLock />
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
        <SlSocialGithub />
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
        <GiSpanner />
        مهارت ها
      </Link>
      <Link
        href="/dashboard/editAdmininfo/work-experiences"
        className={`${
          pathname == "/dashboard/editAdmininfo/work-experiences"
            ? "bg-[#d0f4de] text-green-600"
            : null
        }`}
      >
        <MdOutlineWorkHistory />
        سوابق
      </Link>
    </div>
  );
}

export default AdminInfoSideBar;
