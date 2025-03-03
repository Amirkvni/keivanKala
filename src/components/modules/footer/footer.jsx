"use client";
import Image from "next/image";
import React from "react";
import { FaAngleUp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import namadPicture from "@/../public/images/namad.png";
import samandehiPicture from "@/../public/images/samandehi.png";
import { SiGmail } from "react-icons/si";
export default function Footer() {
  const scrollHandler = () => {
    document.documentElement.classList.add("scroll-smooth");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="dark:bg-zinc-800  ">
      <div className="container mx-auto flex flex-col px-3  dark:text-white">
        <div className="flex md:flex-row flex-col-reverse justify-between items-center">
          <div className="flex gap-x-2 sm:gap-x-8 font-extrabold	text-xs sm:text-sm lg:text-base py-8	">
            <p>تلفن پشتیبانی 0000000 - 021</p>
            <span>|</span>
            <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
          </div>
          <button
            className="flex w-fit my-3 sm:my-0 mx-auto sm:mx-0  border p-2 items-center gap-x-1 dark:text-white"
            onClick={scrollHandler}
          >
            برگشت به بالا
            <FaAngleUp />
          </button>
        </div>
        <div className="flex flex-col gap-y-4 sm:flex-row justify-around my-5 bg-gray-100 items-center p-5 dark:bg-black rounded-xl">
          <p>از جدیدترین تخفیف ها با خبر شوید</p>
          <div className=" p-2 w-full sm:w-[400px] flex justify-between bg-white rounded-lg dark:bg-zinc-800">
            <input
              type="text"
              className="outline-none pr-2 w-full bg-transparent e"
              placeholder="ایمیل شما"
            />
            <button className="bg-green-600 px-5 py-1 text-white rounded-lg">
              ثبت
            </button>
          </div>
          <div className="flex gap-x-5 [&>*]:text-xl ">
            <FaInstagram className="hover:text-red-600" />
            <FaTelegramPlane className="hover:text-blue-500" />
            <SiGmail className="hover:text-red-500" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-4 text-gray-500  justify-between ">
          <div className="flex justify-around sm:gap-x-64 [&>div>h3]:text-xl [&>div>h3]:font-medium [&>div>ul]:flex [&>div>ul]:flex-col [&>div>ul]:mt-4 [&>div>ul]:gap-y-3">
            <div>
              <h3>روتی کالا</h3>
              <ul>
                <li className="hover:text-green-500">
                  <a href="#">شرایط مرجوعی</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="#">راهنمای خرید</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="#">قوانین و مقررات</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="#">چرا روتی کالا</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>دسترسی سریع</h3>
              <ul>
                <li className="hover:text-green-500">
                  <a href="#">پیگیری سفارشات</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="#">تماس با ما</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="#">سوالات متداول</a>
                </li>
                <li className="hover:text-green-500">
                  <a href="#">درباره ما</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-evenly [&>div]:w-24">
            <div>
              <Image src={samandehiPicture} />
            </div>
            <div>
              <Image src={namadPicture} />
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-center my-3">
          کلیه حقوق این سایت متعلق به فروشگاه روتی کالا می‌باشد.
        </div>
      </div>
    </div>
  );
}
