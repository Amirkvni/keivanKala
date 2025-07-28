import React from "react";
import { FaRegEdit } from "react-icons/fa";
import imagepic from "@/assets/adminProfile.jpg";
import Image from "next/image";
import rolePic from "@/assets/new-role.png";
import { FaRegChessKing } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import RoleBox from "@/components/templates/dashboard/all-roles/RoleBox";
function page() {
  const users = [
    { name: "علی رضایی", avatar: "/avatars/ali.jpg" },
    { name: "مینا مرادی", avatar: "/avatars/mina.jpg" },
    { name: "سعید کاظمی", avatar: "/avatars/saeed.jpg" },
    { name: "نگار احمدی", avatar: "/avatars/negar.jpg" },
  ];
  return (
    <div className="p-12">
      <span className="text-xl font-bold">لیست نقش ها</span>
      <div className="grid grid-cols-3 gap-6 [&>div]:bg-white [&>div]:p-4 [&>div]:rounded-lg mt-4 [&>div>div]:flex [&>div>div]:justify-between [&>div>div]:items-center ">
        <RoleBox role="مدیرکل" />
        <RoleBox role="مدیر" />
        <RoleBox role="پشتیبان" />
        <RoleBox role="ادمین" />
        <RoleBox role="بلاگز" />
        <div className="flex justify-between dashboard-box-shadow">
          <div className="w-20 h-20 mt-auto">
            <Image src={rolePic} width={700} height={700} alt="rolePic" />
          </div>
          <div className="flex flex-col">
            <button className="bg-green-500 text-white p-2 rounded-lg cursor-pointer">
              افزودن نقش جدید
            </button>
            <p className="text-sm text-gray-400 font-semibold">
              اگر نقشی وجود ندارد اضافه کنید
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 dashboard-box-shadow bg-white p-5">
        <div className="flex justify-between items-center">
          <input type="text" placeholder="جستجو" />
          <select name="" id="">
            <option value="-1">نفش</option>
            <option value="-1">نفش</option>
            <option value="-1">نفش</option>
          </select>
        </div>
        <table className="w-full mt-5 [&>tr>td]:p-2 [&>tr>td]:border-b [&>tr>td]:border-gray-200 border-collapse">
          <tr className="bg-gray-100 text-gray-600">
            <td>کاربر</td>
            <td>نقش</td>
            <td>مجوزها</td>
            <td>وضعیت</td>
            <td>اقدام</td>
          </tr>
          <tr>
            <td>علی رضایی</td>
            <td>مدیر کل</td>
            <td>دسترسی کامل</td>
            <td>همیسشه فعال</td>
            <td>
              <FaRegChessKing />
            </td>
          </tr>
          <tr>
            <td>مینا مرادی</td>
            <td>نویسنده</td>
            <td className="flex gap-x-1 item-center">
              <span className="bg-green-100 px-1 py-0.5 rounded-lg text-xs text-green-500">
                وبلاگ
              </span>
              <span className="bg-blue-100 px-1 py-0.5 rounded-lg text-xs text-blue-500">
                عمومی
              </span>
            </td>
            <td>فعال</td>
            <td>
              <div className="flex items-center gap-x-2">
                <AiOutlineEye />
                <FaRegEdit />
              </div>
            </td>
          </tr>
          <tr>
            <td>زهرا نجفی </td>
            <td>پشتیبان</td>
            <td className="flex gap-x-1 item-center">
              <span className="bg-amber-100 px-1 py-0.5 rounded-lg text-xs text-amber-500">
                تیکت
              </span>
              <span className="bg-blue-100 px-1 py-0.5 rounded-lg text-xs text-blue-500">
                عمومی
              </span>
            </td>
            <td>غیرفعال</td>
            <td>
              <div className="flex items-center gap-x-2">
                <AiOutlineEye />
                <FaRegEdit />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default page;
