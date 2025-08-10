import React from "react";
import Image from "next/image";
import rolePic from "@/assets/new-role.png";
import RoleBox from "@/components/templates/dashboard/all-roles/RoleBox";

function RoleBoxes({ setAction }) {
  return (
    <>
      <span className="text-xl font-bold">لیست نقش ها</span>
      <div className="grid grid-cols-3 gap-6 [&>div]:bg-white [&>div]:p-4 [&>div]:rounded-lg mt-4 [&>div>div]:flex [&>div>div]:justify-between [&>div>div]:items-center ">
        <RoleBox role="سوپر ادمین" />
        <RoleBox role="ادمین" />
        <RoleBox role="نویسنده" />
        <RoleBox role="ادمین" />
        <div className="flex justify-between dashboard-box-shadow">
          <div className="w-20 h-20 mt-auto">
            <Image src={rolePic} width={700} height={700} alt="rolePic" />
          </div>
          <div className="flex flex-col">
            <button
              className="bg-green-500 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => setAction("addRole")}
            >
              افزودن نقش جدید
            </button>
            <p className="text-sm text-gray-400 font-semibold">
              اگر نقشی وجود ندارد اضافه کنید
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleBoxes;
