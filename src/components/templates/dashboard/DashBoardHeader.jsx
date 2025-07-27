"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import adminPic from "@/assets/adminProfile.jpg";
import Link from "next/link";

export default function DashBoardHeader() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-white p-4 sticky top-0 z-10 flex justify-between items-center shadow-sm">
      <div className="text-lg font-bold"> سلام امیرحسین عزیز - خوش آمدی</div>

      <div ref={ref} className="relative">
        <div
          className="w-9 h-9 rounded-full  overflow-hidden cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Image src={adminPic} width={36} height={36} alt="adminPicture" />
        </div>

        {open && (
          <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-md p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden ">
                <Image src={adminPic} width={40} height={40} alt="Admin" />
              </div>
              <div>
                <p className="text-sm font-medium">امیرحسین کیوانی</p>
                <p className="text-xs text-gray-500">ادمین</p>
              </div>
            </div>
            <ul className="text-sm space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">
                <Link href="/dashboard/adminInfo"> مشخصات</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                <Link href="/dashboard/editAdmininfo"> ویرایش مشخصات</Link>
              </li>
              <li className="text-red-500 hover:text-red-700 cursor-pointer">
                خروج
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
