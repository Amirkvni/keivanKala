"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChevronUp, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mt-12 border-t-1 border-t-gray-200 pt-6 bg-white dark:bg-zinc-800 dark:text-white">
      <div className="flex flex-col gap-y-12 container mx-auto w-[1000px] ">
        <div className="flex flex-col-reverse gap-y-6 xl:flex-row items-center justify-between">
          <div className="flex gap-x-4 items-center text-gray-500 dark:text-white">
            <span>تلفن پشتیبانی 0000000 - 021</span>
            <span>|</span>
            <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
          </div>
          <div
            onClick={scrollToTop}
            className="flex gap-x-2 items-center border dark:text-white border-gray-300 rounded-lg p-2 text-gray-500 hover:text-green-500 hover:border-green-300 cursor-pointer w-fit"
          >
            <span>بازگشت به بالا</span>
            <FaChevronUp />
          </div>
        </div>
        <div className="rounded-xl  p-3 flex flex-col xl:flex-row gap-y-5 justify-between items-center bg-gray-100 shadow dark:bg-black dark:text-white">
          <span className="text-gray-500">
            از جدیدترین تخفیف ها با خبر شوید
          </span>
          <div className=" p-2 rounded-xl w-[250px] xl:w-[350px] bg-white dark:bg-zinc-800 dark:text-white">
            <input
              type="text"
              placeholder="ایمیل شما"
              className="w-10/12 outline-none"
            />
            <button className="w-2/12 bg-green-600 text-white p-1 rounded-lg">
              ثبت
            </button>
          </div>
          <div className="flex gap-x-3  [&>svg]:w-7 [&>svg]:h-7 [&>svg]:cursor-pointer">
            <FaInstagram />
            <FaTelegramPlane />
            <FaWhatsapp />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between gap-y-3 items-center">
          <div className="  flex gap-x-20 text-lg [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4 [&>div>a]:text-gray-400 ">
            <div>
              <span>کیوان کالا</span>
              <Link href="/" className="hover:text-green-400">
                شرایط مرجوعی
              </Link>
              <Link href="/" className="hover:text-green-400">
                راهنمای خرید
              </Link>
              <Link href="/" className="hover:text-green-400">
                قوانین و مقررات
              </Link>
              <Link href="/" className="hover:text-green-400">
                چرا کیوان کالا
              </Link>
            </div>
            <div className="group">
              <span>دسترسی سریع</span>
              <Link href="/" className="hover:text-green-400">
                {" "}
                پیگیری سفارشات
              </Link>
              <Link href="/" className="hover:text-green-400">
                تماس با ما
              </Link>
              <Link href="/" className="hover:text-green-400">
                سوالات متداول{" "}
              </Link>
              <Link href="/" className="hover:text-green-400">
                درباره ما
              </Link>
            </div>
          </div>
          <div className="[&>div]:w-26 [&>div]:h-26 flex gap-x-3">
            <div>
              <Image
                src="https://ik.imagekit.io/bflkztneat/namad.png?updatedAt=1742396052826"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src="https://ik.imagekit.io/bflkztneat/samandehi.png?updatedAt=1742396053037"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <hr className="text-gray-200" />
        <p className="text-center text-lg text-gray-400">
          نوشته شده با ❤️ توسط امیرحسین کیوانی
        </p>
      </div>
    </div>
  );
}
