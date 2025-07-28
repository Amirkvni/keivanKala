import React from "react";
import Link from "next/link";
import adminPic from "@/assets/adminProfile.jpg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
function AdminBiography() {
  return (
    <div className="w-[500px]  flex flex-col items-center gap-y-4  bg-white p-3 rounded-lg  overflow-hidden dashboard-box-shadow">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <Image src={adminPic} width={500} height={500} alt="adminPic" />
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <span className="text-xl">پریسا توکلی</span>
        <span className="text-sm">توسعه دهنده فرانت اند</span>
        <span className="text-sm">ایران، تهران</span>
      </div>

      <div className="text-sm text-gray-600 ">
        <p>بیوگرافی</p>
        <p className="mt-2">
          سارا نادری یکی از طراحان موفق در حوزه طراحی رابط کاربری است که با بیش
          از ۷ سال تجربه در شرکت‌های نوآور ایرانی، توانسته پروژه‌های بزرگی مانند
          اپلیکیشن‌های مالی، فروشگاه‌های اینترنتی و سامانه‌های دولتی را طراحی
          کند. او به خاطر توجه بالا به جزئیات و درک عمیق از تجربه کاربری، بارها
          از سوی مشتریان مورد تقدیر قرار گرفته است.
        </p>
      </div>

      <div className=" flex justify-around w-full [&>div]:text-center">
        <div>
          <p>2</p>
          <p>سال فعالیت</p>
        </div>
        <div>
          <p>2</p>
          <p>بلاگ ها</p>
        </div>
        <div>
          <p>1</p>
          <p>نوشته ها</p>
        </div>
      </div>
      <div className=" w-full">
        <span>سوشال مدیا :</span>
        <div className="mt-3 flex flex-col gap-y-2 [&>div]:flex [&>div]:gap-x-4 [&>div]:items-center [&>div>svg]:text-3xl [&>div>div]:text-sm">
          <div>
            <FaGithub className="" />
            <div>
              <p>githun</p>
              <Link href="/">github.com/spruko</Link>
            </div>
          </div>{" "}
          <div>
            <FaGithub />
            <div>
              <p>githun</p>
              <Link href="/">github.com/spruko</Link>
            </div>
          </div>{" "}
          <div>
            <FaGithub />
            <div>
              <p>githun</p>
              <Link href="/">github.com/spruko</Link>
            </div>
          </div>{" "}
          <div>
            <FaGithub />
            <div>
              <p>githun</p>
              <Link href="/">github.com/spruko</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <span>مهارت ها :</span>
        <div className="mt-3 flex flex-col gap-y-6 [&>div>div]:w-full [&>div>div]:h-2 [&>div>div]:rounded-sm [&>div>div]:bg-gray-200 [&>div>div]:relative [&>div>div]:overflow-hidden [&>div>div]:p-0 [&>div>div>div]:absolute [&>div>div>div]:top-0 [&>div>div>div]:left-0 [&>div>div>div]:h-full">
          <div>
            <span>html :</span>
            <div>
              <div className=" w-1/4 bg-red-500"></div>
            </div>
          </div>
          <div>
            <span>html :</span>
            <div>
              <div className="w-1/4 bg-red-500"></div>
            </div>
          </div>
          <div>
            <span>html :</span>
            <div>
              <div className=" w-1/4 bg-red-500"></div>
            </div>
          </div>
          <div>
            <span>html :</span>
            <div>
              <div className=" w-1/4 bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBiography;
