"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

function Comments() {
  const [isLogin, SetIsLogin] = useState(false);
  return (
    <div className="mt-8 ">
      <p className=" border-b-2 gap-y-5 w-fit my-6">امتیاز و دیدگاه کاربران</p>
      <div className="  flex gap-x-2">
        {/* Write  comment section */}
        <div className=" w-1/4 ">
          <div className="sticky top-28 flex flex-col gap-y-6">
            <div className="flex items-center gap-x-1">
              <span>۳.۶</span>
              <span>از </span>
              <span>۵</span>
            </div>
            <div className="flex items-center gap-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf className="-scale-x-[1]" />
              <FaStar className="text-gray-200" />
            </div>
            {!isLogin && (
              <div>
                <p>شما هم درباره این کالا دیدگاه ثبت کنید</p>
                <Link
                  className=" border-red-400 border-2 text-red-500 bg-white w-full p-2 rounded-lg mt-4 block text-center"
                  href="/"
                >
                  ثبت دیدگاه
                </Link>
              </div>
            )}

            {isLogin && <div></div>}
          </div>
        </div>
        {/* Comments section */}
        <div className=" w-3/4">
          <div className="border-b-2 border-b-gray-500 py-3 my-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <span>کاربر دیجی‌کالا</span>
                <span>خریدار</span>
                <span>۲۷ بهمن</span>
              </div>
              <FiMoreVertical />
            </div>
            <div className="flex gap-x-2 items-center [&>svg]:text-yellow-300 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              گوشی به شدت خوش دسته خوشرنگ و یه برق آبی داره پشتش پلاستیکه واسه
              همون خیلی سبکه اینترنت 5G روش فعاله و کارکرد خوبی داره من راضی
              بودم و تنها نقصش اینه که برای این قیمت دوربین راضی کننده ای نداره
              متاسفانه
            </p>
            <div className="flex gap-x-2 justify-start items-center" dir="ltr">
              <AiOutlineLike className="cursor-pointer hover:text-green-800" />
              <span>5</span>
              <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
              <span>3</span>
            </div>
          </div>
          <div className="border-b-2 border-b-gray-500 py-3 my-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <span>کاربر دیجی‌کالا</span>
                <span>خریدار</span>
                <span>۲۷ بهمن</span>
              </div>
              <FiMoreVertical />
            </div>
            <div className="flex gap-x-2 items-center [&>svg]:text-yellow-300 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              گوشی به شدت خوش دسته خوشرنگ و یه برق آبی داره پشتش پلاستیکه واسه
              همون خیلی سبکه اینترنت 5G روش فعاله و کارکرد خوبی داره من راضی
              بودم و تنها نقصش اینه که برای این قیمت دوربین راضی کننده ای نداره
              متاسفانه
            </p>
            <div className="flex gap-x-2 justify-start items-center" dir="ltr">
              <AiOutlineLike className="cursor-pointer hover:text-green-800" />
              <span>5</span>
              <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
              <span>3</span>
            </div>
          </div>
          <div className="border-b-2 border-b-gray-500 py-3 my-4 flex flex-col gap-y-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <span>کاربر دیجی‌کالا</span>
                <span>خریدار</span>
                <span>۲۷ بهمن</span>
              </div>
              <FiMoreVertical />
            </div>
            <div className="flex gap-x-2 items-center [&>svg]:text-yellow-300 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              گوشی به شدت خوش دسته خوشرنگ و یه برق آبی داره پشتش پلاستیکه واسه
              همون خیلی سبکه اینترنت 5G روش فعاله و کارکرد خوبی داره من راضی
              بودم و تنها نقصش اینه که برای این قیمت دوربین راضی کننده ای نداره
              متاسفانه
            </p>
            <div className="flex gap-x-2 justify-start items-center" dir="ltr">
              <AiOutlineLike className="cursor-pointer hover:text-green-800" />
              <span>5</span>
              <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
              <span>3</span>
            </div>
          </div>
          <div className="border-b-2 border-b-gray-500 py-3 my-4 flex flex-col gap-y-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <span>کاربر دیجی‌کالا</span>
                <span>خریدار</span>
                <span>۲۷ بهمن</span>
              </div>
              <FiMoreVertical />
            </div>
            <div className="flex gap-x-2 items-center [&>svg]:text-yellow-300 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              گوشی به شدت خوش دسته خوشرنگ و یه برق آبی داره پشتش پلاستیکه واسه
              همون خیلی سبکه اینترنت 5G روش فعاله و کارکرد خوبی داره من راضی
              بودم و تنها نقصش اینه که برای این قیمت دوربین راضی کننده ای نداره
              متاسفانه
            </p>
            <div className="flex gap-x-2 justify-start items-center" dir="ltr">
              <AiOutlineLike className="cursor-pointer hover:text-green-800" />
              <span>5</span>
              <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
              <span>3</span>
            </div>
          </div>
          <div className="border-b-2 border-b-gray-500 py-3 my-4 flex flex-col gap-y-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <span>کاربر دیجی‌کالا</span>
                <span>خریدار</span>
                <span>۲۷ بهمن</span>
              </div>
              <FiMoreVertical />
            </div>
            <div className="flex gap-x-2 items-center [&>svg]:text-yellow-300 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              گوشی به شدت خوش دسته خوشرنگ و یه برق آبی داره پشتش پلاستیکه واسه
              همون خیلی سبکه اینترنت 5G روش فعاله و کارکرد خوبی داره من راضی
              بودم و تنها نقصش اینه که برای این قیمت دوربین راضی کننده ای نداره
              متاسفانه
            </p>
            <div className="flex gap-x-2 justify-start items-center" dir="ltr">
              <AiOutlineLike className="cursor-pointer hover:text-green-800" />
              <span>5</span>
              <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
              <span>3</span>
            </div>
          </div>
          <div className="border-b-2 border-b-gray-500 py-3 my-4 flex flex-col gap-y-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <span>کاربر دیجی‌کالا</span>
                <span>خریدار</span>
                <span>۲۷ بهمن</span>
              </div>
              <FiMoreVertical />
            </div>
            <div className="flex gap-x-2 items-center [&>svg]:text-yellow-300 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              گوشی به شدت خوش دسته خوشرنگ و یه برق آبی داره پشتش پلاستیکه واسه
              همون خیلی سبکه اینترنت 5G روش فعاله و کارکرد خوبی داره من راضی
              بودم و تنها نقصش اینه که برای این قیمت دوربین راضی کننده ای نداره
              متاسفانه
            </p>
            <div className="flex gap-x-2 justify-start items-center" dir="ltr">
              <AiOutlineLike className="cursor-pointer hover:text-green-800" />
              <span>5</span>
              <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
              <span>3</span>
            </div>
          </div>
          <div className="border-b-2 border-b-gray-500 py-3 my-4 flex flex-col gap-y-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <span>کاربر دیجی‌کالا</span>
                <span>خریدار</span>
                <span>۲۷ بهمن</span>
              </div>
              <FiMoreVertical />
            </div>
            <div className="flex gap-x-2 items-center [&>svg]:text-yellow-300 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              گوشی به شدت خوش دسته خوشرنگ و یه برق آبی داره پشتش پلاستیکه واسه
              همون خیلی سبکه اینترنت 5G روش فعاله و کارکرد خوبی داره من راضی
              بودم و تنها نقصش اینه که برای این قیمت دوربین راضی کننده ای نداره
              متاسفانه
            </p>
            <div className="flex gap-x-2 justify-start items-center" dir="ltr">
              <AiOutlineLike className="cursor-pointer hover:text-green-800" />
              <span>5</span>
              <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
              <span>3</span>
            </div>
          </div>
          <div className="border-b-2 border-b-gray-500 py-3 my-4 flex flex-col gap-y-3">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <span>کاربر دیجی‌کالا</span>
                <span>خریدار</span>
                <span>۲۷ بهمن</span>
              </div>
              <FiMoreVertical />
            </div>
            <div className="flex gap-x-2 items-center [&>svg]:text-yellow-300 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              گوشی به شدت خوش دسته خوشرنگ و یه برق آبی داره پشتش پلاستیکه واسه
              همون خیلی سبکه اینترنت 5G روش فعاله و کارکرد خوبی داره من راضی
              بودم و تنها نقصش اینه که برای این قیمت دوربین راضی کننده ای نداره
              متاسفانه
            </p>
            <div className="flex gap-x-2 justify-start items-center" dir="ltr">
              <AiOutlineLike className="cursor-pointer hover:text-green-800" />
              <span>5</span>
              <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
