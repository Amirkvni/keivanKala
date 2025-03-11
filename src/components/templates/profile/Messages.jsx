import Image from "next/image";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";

function Messages() {
  return (
    <div className="flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl">
      <div className="flex justify-between items-center">
        <span className=" border-b-green-400 pb-2 border-b-3 w-fit">
          سفارش های شما
        </span>
        <div className="flex gap-x-3 items-center [&>div]:flex [&>div]:gap-x-1 [&>div]:items-center [&>div]:cursor-pointer">
          <div className="hover:text-green-700">
            <span>خواندن همه</span>
            <IoCheckmarkDoneSharp />
          </div>
          <div className="hover:text-red-700">
            <span>حذف همه</span>
            <FaRegTrashCan />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="border p-2 flex justify-between">
          <div className=" flex gap-x-4 items-center">
            <IoMdNotificationsOutline className="w-12 h-12 border rounded-full flex items-center justify-center p-2" />
            <div className="flex flex-col gap-y-2">
              <span>تا ۶۰٪ تخفیف محصولات بومی محلی 🧿</span>
              <p>از عسل و ادویه تا صنایع دستی🏺👘</p>
              <span> تا ۳۰ خرداد </span>
            </div>
          </div>

          <div className="bg-green-400  w-fit mr-auto h-fit p-2 rounded-lg cursor-pointer">
            بزن بریم
          </div>
        </div>
        <div className="border p-2 flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center text-green-500">
            <FaShippingFast />
            <span>سفارش شما ارسال شد</span>
          </div>
          <p>
            سفارش #200221 شما پردازش و ارسال شد. لطفا قبل از دریافت محصول به پیک
            کون بدید
          </p>
          <div className="flex [&>div]:border gap-x-1">
            <div className="flex items-center">
              <div className="w-32 h-32  rounded-lg">
                <Image
                  src={
                    "https://ik.imagekit.io/bflkztneat/p6.png?updatedAt=1741102746005"
                  }
                  width={500}
                  height={500}
                />
              </div>
              <p>لورم ایسپسوم دولار کیر خر کسکش نز جنده باز</p>
            </div>
            <div className="flex items-center">
              <div className="w-32 h-32  rounded-lg">
                <Image
                  src={
                    "https://ik.imagekit.io/bflkztneat/p6.png?updatedAt=1741102746005"
                  }
                  width={500}
                  height={500}
                />
              </div>
              <p>لورم ایسپسوم دولار کیر خر کسکش نز جنده باز</p>
            </div>
            <div className="flex items-center">
              <div className="w-32 h-32  rounded-lg">
                <Image
                  src={
                    "https://ik.imagekit.io/bflkztneat/p6.png?updatedAt=1741102746005"
                  }
                  width={500}
                  height={500}
                />
              </div>
              <p>لورم ایسپسوم دولار کیر خر کسکش نز جنده باز</p>
            </div>
          </div>
          <div className="bg-green-400  w-fit mr-auto">مشاهده جزییات سفارش</div>
        </div>
        <div className="border p-2 flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center text-blue-500">
            <RiShoppingBag3Line />
            <span>سفارش شما ثبت و درحال پردازش است</span>
          </div>
          <p>وضعیت سفارش خود را از اینجا میتوانید پیگیری کنید</p>
          <div className="flex [&>div]:border gap-x-1">
            <div className="flex items-center">
              <div className="w-32 h-32  rounded-lg">
                <Image
                  src={
                    "https://ik.imagekit.io/bflkztneat/p6.png?updatedAt=1741102746005"
                  }
                  width={500}
                  height={500}
                />
              </div>
              <p>لورم ایسپسوم دولار کیر خر کسکش نز جنده باز</p>
            </div>
            <div className="flex items-center">
              <div className="w-32 h-32  rounded-lg">
                <Image
                  src={
                    "https://ik.imagekit.io/bflkztneat/p6.png?updatedAt=1741102746005"
                  }
                  width={500}
                  height={500}
                />
              </div>
              <p>لورم ایسپسوم دولار کیر خر کسکش نز جنده باز</p>
            </div>
            <div className="flex items-center">
              <div className="w-32 h-32  rounded-lg">
                <Image
                  src={
                    "https://ik.imagekit.io/bflkztneat/p6.png?updatedAt=1741102746005"
                  }
                  width={500}
                  height={500}
                />
              </div>
              <p>لورم ایسپسوم دولار کیر خر کسکش نز جنده باز</p>
            </div>
          </div>
          <div className="bg-green-400  w-fit mr-auto">پیگیری سفارش</div>
        </div>
      </div>

      <div className="w-fit mr-auto">pagination</div>
    </div>
  );
}

export default Messages;
