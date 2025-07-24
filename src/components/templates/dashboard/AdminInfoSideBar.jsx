"use client";
import React from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { FaMobileAlt } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { FiPercent } from "react-icons/fi";
function AdminInfoSideBar() {
  const pathname = usePathname();
  return (
    <div className="w-[350px]  flex flex-col  gap-y-3  bg-white p-8 [&>a]:flex [&>a]:items-center [&>a]:gap-x-2  [&>a]:p-2 [&>a]:rounded-sm">
      <Link
        href="/dashboard/editAdmininfo"
        className={`${
          pathname == "/dashboard/editAdmininfo" ? "bg-zinc-200" : null
        }`}
      >
        <CgProfile />
        پروفایل
      </Link>
      <Link
        href="/dashboard/editAdmininfo/password"
        className={`${
          pathname == "/dashboard/editAdmininfo/password" ? "bg-zinc-200" : null
        }`}
      >
        <TbLockPassword />
        امنیت
      </Link>
      <Link href="/">
        <FaMobileAlt />
        سوشال مدیا
      </Link>
      <Link href="/">
        <RiNewspaperLine />
        سوابق
      </Link>
    </div>
  );
}

export default AdminInfoSideBar;
