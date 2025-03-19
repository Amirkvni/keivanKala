import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChevronUp, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="mt-12 border-t-1 pt-6 bg-white">
      <div className="flex flex-col gap-y-12 container mx-auto w-[1000px] ">
        <div className="flex justify-between">
          <div className="flex gap-x-4 items-center">
            <span>تلفن پشتیبانی 0000000 - 021</span>
            <span>|</span>
            <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
          </div>
          <div className="flex gap-x-2 items-center border rounded-lg p-2">
            <span>بازگشت به بالا</span>
            <FaChevronUp />
          </div>
        </div>
        <div className="rounded-xl  p-3 flex justify-between items-center bg-gray-100 shadow">
          <span>از جدیدترین تخفیف ها با خبر شوید</span>
          <div className=" p-2 rounded-xl w-[350px] bg-white">
            <input
              type="text"
              placeholder="ایمیل شما"
              className="w-10/12 outline-none"
            />
            <button className="w-2/12 bg-green-600 text-white p-1 rounded-lg">
              ثبت
            </button>
          </div>
          <div className="flex gap-x-3">
            <FaInstagram />
            <FaTelegramPlane />
            <FaWhatsapp />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-24 text-xl [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4 [&>div>a]:text-gray-400 ">
            <div>
              <span>کیوان کالا</span>
              <Link href="/">شرایط مرجوعی</Link>
              <Link href="/">شرایط مرجوعی</Link>
              <Link href="/">شرایط مرجوعی</Link>
              <Link href="/">شرایط مرجوعی</Link>
            </div>
            <div>
              <span>کیوان کالا</span>
              <Link href="/">شرایط مرجوعی</Link>
              <Link href="/">شرایط مرجوعی</Link>
              <Link href="/">شرایط مرجوعی</Link>
              <Link href="/">شرایط مرجوعی</Link>
            </div>
          </div>
          <div className="[&>div]:w-32 [&>div]:h-32 flex gap-x-3">
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
        <p className="text-center text-xl text-gray-400">
          نوشته شده با ❤️ توسط امیرحسین کیوانی
        </p>
      </div>
    </div>
  );
}
