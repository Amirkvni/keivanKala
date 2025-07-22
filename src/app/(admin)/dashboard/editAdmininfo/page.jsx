import React from "react";
import adminPic from "@/assets/adminProfile.jpg";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { FiTrash2 } from "react-icons/fi";
function page() {
  return (
    <div className="flex flex-col gap-y-6 flex-1 p-3">
      <p className="text-lg font-bold">اطلاعات شخصی </p>
      <div className=" flex gap-x-3 items-center [&>button]:flex [&>button]:items-center [&>button]:gap-x-2 [&>button]:p-2  [&>button]:rounded-sm [&>button]:cursor-pointer">
        <div className="w-16 rounded-full overflow-hidden h-16">
          <Image alt="adminPic" src={adminPic} width={500} height={500} />
        </div>
        <button className="bg-green-700 text-white">
          آپلود تصویر
          <GoPlus />
        </button>
        <button className="border-gray-400 border">
          حذف <FiTrash2 />
        </button>
      </div>
      <div className="flex gap-x-3 [&>div>input]:outline-none [&>div>input]:p-2 [&>div>input]:rounded-md [&>div>input]:bg-gray-200 [&>div>input]:mr-3">
        <div>
          <span>نام :</span>
          <input type="text" />
        </div>
        <div>
          <span>فامیل :</span>
          <input type="text" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2  [&>input]:outline-none  [&>input]:rounded-md [&>input]:bg-gray-200 [&>input]:w-[500px] [&>input]:p-2">
        <p>ایمیل :</p>
        <input type="text" />
        <p>شماره تماس :</p>
        <input type="text" />
      </div>
      <p className="text-lg font-bold">اطلاعات ادرس </p>
      <div className=" grid grid-cols-2 gap-4 [&>div]:flex [&>div]:gap-x-3 [&>div>input]:p-2 [&>div>input]:rounded-md [&>div>input]:bg-gray-200 [&>div>input]:outline-none">
        <div>
          <p>شهر :</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          {" "}
          <p>شهر :</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          {" "}
          <p>شهر :</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          {" "}
          <p>شهر :</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          {" "}
          <p>کدپستی :</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          <p>یه چی :</p>
          <input type="text" />
        </div>
        <div className="flex flex-col gap-y-2  ">
          <p>ادرس کامل</p>
          <textarea
            rows={8}
            className="outline-none p-2 rounded-md bg-gray-200 resize-none "
          ></textarea>
        </div>
      </div>
      <button className="bg-emerald-400 w-fit mr-auto p-3 rounded-lg text-white cursor-pointer">
        ذخیره تغییرات
      </button>
    </div>
  );
}

export default page;
