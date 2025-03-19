"use client";

import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaAngleLeft, FaTruckFast } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import moment from "moment-jalaali";
function ShippingMethod() {
  const router = useRouter();
  let { cart } = useContext(CartContext);
  let now = moment().locale("fa");
  let sendTimes = [];
  for (let i = 0; i < 4; i++) {
    let currentDay = now.clone().add(i, "days");
    let dayOfWeekName = currentDay.format("dddd");
    let dayOfMonth = currentDay.format("jD");

    sendTimes.push({
      id: i + 1,
      day: dayOfWeekName,
      date: dayOfMonth,
      price: Math.floor(Math.random() * (98000 - 58000 + 1)) + 58000,
    });
  }
  const [sendTime, setSendTime] = useState({
    id: 1,
    day: "شنبه ",
    date: 26,
    price: 69000,
  });

  const paymentHandler = async () => {
    const idsArray = cart.map((item) => ({ _id: item._id }));

    const newOrder = {
      products: idsArray,
      delivery: sendTime,
    };

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    if (res.status === 201) {
      router.push("/checkout-cart/payment");
    }
  };
  return (
    <div className="mt-12 container  flex gap-x-2 mx-auto  [&>div]:rounded-lg [&>div]:p-3 ">
      <div className="w-3/4 border flex flex-col gap-y-4">
        <div className="border border-blue-400 flex justify-between p-2 rounded-lg">
          <div className="flex gap-x-2 items-center">
            <FaTruckFast />
            <div>
              <p className="text-blue-400">رسال به آدرس انتخاب شده</p>
              <p>خبرنگار،بلوار مخابرات،ک. نه غربی,</p>
            </div>
          </div>
          <div className="flex gap-x-2 text-blue-400 items-center">
            <span> تغییر ادرس</span>
            <FaAngleLeft />
          </div>
        </div>
        <div className=" flex items-center gap-x-3 p-2 rounded-lg border border-gray-400">
          <IoMdTime />

          <div>
            <div>
              <span>هزینه ارسال :</span>
              <span>{sendTime.price} تومان </span>
            </div>
            <p>زمان : {sendTime.date} اردیبهشت</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center [&>div]:w-20 [&>div]:h-28 [&>div]:border  [&>div]:cursor-pointer [&>div]:rounded-lg [&>div]:text-center [&>div]:flex [&>div]:gap-y-2 [&>div]:flex-col">
          {sendTimes.map((time) => (
            <div
              onClick={() => setSendTime(time)}
              className={`${
                sendTime.id === time.id ? "border-green-400" : "border-gray-400"
              }`}
            >
              <p>{time.day}</p>
              <p>{time.date}</p>
              <span className="text-sm">
                {time.price.toLocaleString()} تومان
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4 h-fit  border [&>div]:flex  [&>div]:py-5 [&>div]:justify-between items-center">
        <div>
          <span>قیمت کالا ها (2)</span>
          <span className="text-green-400">
            {/* {getTotal().toLocaleString()} تومان */}
          </span>
        </div>
        <div className="border-y border-y-gray-400">
          <span>تخفیف</span>
          <span className="text-red-400">1,220,000 تومان</span>
        </div>
        <div>
          <span>مبلغ قابل پرداخت</span>
          <span className="text-green-500 font-bold">
            {/* {getTotal().toLocaleString()} تومان */}
          </span>
        </div>
        <button
          className="bg-green-500 text-white cursor-pointer p-3 rounded-lg w-full"
          onClick={() => paymentHandler()}
        >
          ادامه فرایند خرید
        </button>
      </div>
    </div>
  );
}

export default ShippingMethod;
