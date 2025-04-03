"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaCaretLeft } from "react-icons/fa6";
import { RiFilePaperLine } from "react-icons/ri";

function Orders() {
  const [activeOrder, setActiveOrder] = useState("current");
  return (
    <div className="  flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit">
        سفارش های شما
      </span>
      <div className="flex gap-x-3 [&>button]:cursor-pointer [&>button]:p-2">
        <button
          onClick={() => setActiveOrder("current")}
          className={`${
            activeOrder === "current" ? "border-b-2 border-b-green-400" : null
          }`}
        >
          فعلی
        </button>
        <button
          onClick={() => setActiveOrder("delivered")}
          className={`${
            activeOrder === "delivered" ? "border-b-2 border-b-green-400" : null
          }`}
        >
          تحویل شده
        </button>
        <button
          onClick={() => setActiveOrder("canceled")}
          className={`${
            activeOrder === "canceled" ? "border-b-2 border-b-green-400" : null
          }`}
        >
          لغو شده
        </button>
        <button
          onClick={() => setActiveOrder("returned")}
          className={`${
            activeOrder === "returned" ? "border-b-2 border-b-green-400" : null
          }`}
        >
          مرجوع شده
        </button>
      </div>
      <div>
        {activeOrder === "current" && (
          <div className="flex flex-col gap-y-4 [&>div]:border [&>div]:rounded-lg [&>div]:p-2">
            <Link
              href="/"
              className="border rounded-lg p-2 flex flex-col gap-y-3 dark:border-green-300"
            >
              <div className="flex justify-between items-center text-green-400">
                <div className="flex gap-x-2 items-center ">
                  <span>تحویل شده</span>
                  <CiCircleCheck />
                </div>
                <FaCaretLeft />
              </div>
              <div className="flex gap-x-3">
                <div>
                  <span>۲۳ فروردین ۱۴۰۳</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>کد سفارش :</span>
                  <span>12131231</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>مبلغ :</span>
                  <span>۲۰۰۰۰تومان</span>
                </div>
              </div>
              <div className="flex gap-x-3">
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-x-1 items-center mr-auto w-fit">
                  <span>مشاهده فاکتور</span>
                  <RiFilePaperLine />
                </div>
              </div>
            </Link>
            <Link
              href="/"
              className="border rounded-lg p-2 flex flex-col gap-y-3 dark:border-green-300"
            >
              <div className="flex justify-between items-center text-green-400">
                <div className="flex gap-x-2 items-center ">
                  <span>تحویل شده</span>
                  <CiCircleCheck />
                </div>
                <FaCaretLeft />
              </div>
              <div className="flex gap-x-3">
                <div>
                  <span>۲۳ فروردین ۱۴۰۳</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>کد سفارش :</span>
                  <span>12131231</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>مبلغ :</span>
                  <span>۲۰۰۰۰تومان</span>
                </div>
              </div>
              <div className="flex gap-x-3">
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-x-1 items-center mr-auto w-fit">
                  <span>مشاهده فاکتور</span>
                  <RiFilePaperLine />
                </div>
              </div>
            </Link>
            <Link
              href="/"
              className="border rounded-lg p-2 flex flex-col gap-y-3 dark:border-green-300"
            >
              <div className="flex justify-between items-center text-green-400">
                <div className="flex gap-x-2 items-center ">
                  <span>تحویل شده</span>
                  <CiCircleCheck />
                </div>
                <FaCaretLeft />
              </div>
              <div className="flex gap-x-3">
                <div>
                  <span>۲۳ فروردین ۱۴۰۳</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>کد سفارش :</span>
                  <span>12131231</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>مبلغ :</span>
                  <span>۲۰۰۰۰تومان</span>
                </div>
              </div>
              <div className="flex gap-x-3">
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-x-1 items-center mr-auto w-fit">
                  <span>مشاهده فاکتور</span>
                  <RiFilePaperLine />
                </div>
              </div>
            </Link>
            <Link
              href="/"
              className="border rounded-lg p-2 flex flex-col gap-y-3 dark:border-green-300"
            >
              <div className="flex justify-between items-center text-green-400">
                <div className="flex gap-x-2 items-center ">
                  <span>تحویل شده</span>
                  <CiCircleCheck />
                </div>
                <FaCaretLeft />
              </div>
              <div className="flex gap-x-3">
                <div>
                  <span>۲۳ فروردین ۱۴۰۳</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>کد سفارش :</span>
                  <span>12131231</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <span>مبلغ :</span>
                  <span>۲۰۰۰۰تومان</span>
                </div>
              </div>
              <div className="flex gap-x-3">
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
                <div className="w-20 h-20 border px-1 rounded-2xl border-gray-300">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://ik.imagekit.io/bflkztneat/p3.png?updatedAt=1741102746152"
                    }
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-x-1 items-center mr-auto w-fit">
                  <span>مشاهده فاکتور</span>
                  <RiFilePaperLine />
                </div>
              </div>
            </Link>
          </div>
        )}
        {activeOrder === "delivered" && <h1>محصولات2</h1>}
        {activeOrder === "canceled" && <h1>محصولات3</h1>}
        {activeOrder === "returned" && <h1>محصولات4</h1>}
      </div>
    </div>
  );
}

export default Orders;
