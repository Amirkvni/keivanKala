"use client";
import { priceFormatter } from "@/utils/priceFormatter";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";

function FreshOffersBox({ product }) {
  const targetTime = new Date(product.expireTime).getTime();
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(targetTime - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, targetTime]);
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} :${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Link href={`/product/${slugify(product.englishFullName)}`}>
      <div className="  flex flex-col text-xs gap-y-2  ">
        <p className="text-red-500 text-sm font-semibold">پیشنهاد شگفت انگیز</p>
        <div className="w-32 h-38 mx-auto">
          <Image
            width={500}
            height={500}
            src={product.mainImage}
            alt={product.englishFullName}
          />
        </div>
        <span className=" element">{product.persianName}</span>
        <div className="flex gap-x-2 items-center ">
          <span className="text-gray-600">ارسال امروز</span>
          <FaShippingFast className="text-blue-600" />
        </div>
        <div className="flex justify-between items-center ">
          <span className="bg-red-700 text-white  rounded-full flex justify-center items-center px-1 py-0.5">
            %50
          </span>
          <span className="line-through text-gray-400">
            {priceFormatter(product.price)}{" "}
          </span>
        </div>
        <span className=" text-left ">
          {priceFormatter(product.secondPrice)}
        </span>
        <span className="text-left text-red-600" dir="ltr">
          {formatTime(timeLeft)}
        </span>
      </div>
    </Link>
  );
}

export default FreshOffersBox;
