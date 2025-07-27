import React from "react";
import { FaRegEdit } from "react-icons/fa";
import imagepic from "@/assets/adminProfile.jpg";
import Image from "next/image";
import rolePic from "@/assets/new-role.png";
import { FaRegChessKing } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
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
        <div className="dashboard-box-shadow">
          <div>
            <span className="text-gray-600 text-sm">۴ کاربر</span>
            <div className="flex items-center">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="group relative z-10"
                  style={{ zIndex: users.length - index }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {user.name}
                  </div>

                  {/* Avatar */}
                  <Image
                    src={imagepic}
                    width={400}
                    height={400}
                    alt={user.name}
                    className="w-8 h-8 rounded-full  -ml-3 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-lg">
            <span className="font-bold  ">مدیر کل</span>
            <FaRegEdit className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
        <div className="dashboard-box-shadow">
          <div>
            <span className="text-gray-600 text-sm">۴ کاربر</span>
            <div className="flex items-center">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="group relative z-10"
                  style={{ zIndex: users.length - index }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {user.name}
                  </div>

                  {/* Avatar */}
                  <Image
                    src={imagepic}
                    width={400}
                    height={400}
                    alt={user.name}
                    className="w-8 h-8 rounded-full  -ml-3 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-lg">
            <span className="font-bold  ">مدیر </span>
            <FaRegEdit className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
        <div className="dashboard-box-shadow">
          <div>
            <span className="text-gray-600 text-sm">۴ کاربر</span>
            <div className="flex items-center">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="group relative z-10"
                  style={{ zIndex: users.length - index }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {user.name}
                  </div>

                  {/* Avatar */}
                  <Image
                    src={imagepic}
                    width={400}
                    height={400}
                    alt={user.name}
                    className="w-8 h-8 rounded-full  -ml-3 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-lg">
            <span className="font-bold  ">نویسنده </span>
            <FaRegEdit className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
        <div className="dashboard-box-shadow">
          <div>
            <span className="text-gray-600 text-sm">۴ کاربر</span>
            <div className="flex items-center">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="group relative z-10"
                  style={{ zIndex: users.length - index }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {user.name}
                  </div>

                  {/* Avatar */}
                  <Image
                    src={imagepic}
                    width={400}
                    height={400}
                    alt={user.name}
                    className="w-8 h-8 rounded-full  -ml-3 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-lg">
            <span className="font-bold  ">کاربرعادی</span>
            <FaRegEdit className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
        <div className="dashboard-box-shadow">
          <div>
            <span className="text-gray-600 text-sm">۴ کاربر</span>
            <div className="flex items-center">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="group relative z-10"
                  style={{ zIndex: users.length - index }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {user.name}
                  </div>

                  {/* Avatar */}
                  <Image
                    src={imagepic}
                    width={400}
                    height={400}
                    alt={user.name}
                    className="w-8 h-8 rounded-full  -ml-3 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-lg">
            <span className="font-bold  ">پشتیبان</span>
            <FaRegEdit className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
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
