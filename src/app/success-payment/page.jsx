"use client";
import Header from "@/components/modules/header/Header";
import moment from "moment-jalaali";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaCheck } from "react-icons/fa6";

function page() {
  const searchParams = useSearchParams();

  const trackingCode = searchParams.get("trackingCode");
  const orderDate = searchParams.get("orderDate");
  const persianDate = moment(orderDate).format("jYYYY/jMM/jDD HH:mm:ss");
  return (
    <>
      <Header />
      <div className="mt-[220px] mx-auto w-60 xl:w-96 xl:h-72 h-64  bg-white rounded-xl dark:bg-zinc-700 text-xs xl:text-base">
        <div className="flex flex-col gap-y-5 items-center  p-4 ">
          <FaCheck className="text-green-600 text-5xl" />
          <span className="text-green-400 font-bold">
            پرداخت سفارش موفق بود !
          </span>
          <span className="dark:text-white">جزییات پرداخت</span>
          <div className="flex justify-between items-center  w-full text-gray-600 dark:text-white">
            <p> شماره پیگیری : {trackingCode}</p>
            <p> تاریخ :‌ {persianDate}</p>
          </div>
          <div className="flex [&>a]:w-1/2 w-full [&>a]:p-2  [&>a]:rounded-lg gap-x-1  [&>a]:text-center  [&>a]:text-white ">
            <Link href="/" className="bg-green-700">
              پیگیری سفارش
            </Link>
            <Link href="/" className="bg-blue-700">
              بازگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
