import React, { useState, useEffect } from "react";
import Image from "next/image";
import discounBanner from "@/../public/images/bg-timer.webp";

import { PiFireSimple } from "react-icons/pi";
import { BiSolidTimer } from "react-icons/bi";

function SpecialBanner() {
  const targetTime = new Date("2025-03-22").getTime();
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(targetTime - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, targetTime]);

  if (timeLeft <= 0) {
    return <div className="text-lg font-bold text-gray-500">مهلت تمام شد!</div>;
  }

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} :${seconds.toString().padStart(2, "0")}`;
  };

  console.log(timeLeft);

  return (
    <div className="container mx-auto h-[100px] bg-red-400 mt-[130px] rounded-2xl relative">
      <Image
        width={2000}
        height={2080}
        src={discounBanner}
        className="h-full w-full"
      />
      <div className="absolute  flex justify-between items-center top-0 left-0 w-full h-full px-5">
        <div className="flex items-center gap-x-2 text-white">
          <PiFireSimple className="w-9 h-9" />
          <span className="text-3xl font-semibold">
            شگفت‌انگـــــیز‌های روز
          </span>
        </div>
        <div className="border rounded-lg p-3 flex justify-between items-center w-[350px] text-white">
          <div className="flex items-center gap-x-2">
            <BiSolidTimer className="w-8 h-8"/>
            <span className="text-lg font-semibold">زمان تا پایان شگفت‌انگیز</span>
          </div>
          <div dir="ltr" className="text-lg">{formatTime(timeLeft)}</div>
        </div>
      </div>
    </div>
  );
}

export default SpecialBanner;
