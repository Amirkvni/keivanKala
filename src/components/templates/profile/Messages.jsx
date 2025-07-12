import Image from "next/image";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";

function Messages({
  discountMessages,
  orderProcessingMessages,
  orderRegistrationMessages,
}) {
  return (
    <div className="flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
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
        {discountMessages.map((message) => (
          <div
            className="border p-2 flex justify-between border-gray-300 "
            key={message._id}
          >
            <div className=" flex gap-x-4 items-center">
              <IoMdNotificationsOutline className="w-12 h-12 border rounded-full flex items-center justify-center p-2" />
              <div className="flex flex-col gap-y-2">
                <span>{message.title}</span>
                <p>{message.text}</p>
                <span>تا {message.endTime}</span>
              </div>
            </div>

            <div className="bg-green-400  w-fit mr-auto h-fit p-2 rounded-lg cursor-pointer text-white">
              بزن بریم
            </div>
          </div>
        ))}
        {orderProcessingMessages.map((message) => (
          <div
            className="border border-gray-300 p-2 flex flex-col gap-y-2"
            key={message._id}
          >
            <div className="flex gap-x-2 items-center text-blue-500">
              <RiShoppingBag3Line />
              <span>{message.title}</span>
            </div>
            <p>{message.text}</p>
            <div className="flex  gap-x-1">
              {message.products.map((product) => (
                <div className="flex items-center" key={product._id}>
                  <div className="w-32 h-32  rounded-lg">
                    <Image
                      src={product.image}
                      width={500}
                      height={500}
                      alt={product._id}
                    />
                  </div>
                  <p>لورم ایسپسوم دولار کیر خر کسکش نز جنده باز</p>
                </div>
              ))}
            </div>
            <div className="bg-green-400  w-fit mr-auto text-white p-2 rounded-lg cursor-pointer">
              پیگیری سفارش
            </div>
          </div>
        ))}
        {orderRegistrationMessages.map((message) => (
          <div
            className="border border-gray-300 p-2 flex flex-col gap-y-2"
            key={message._id}
          >
            <div className="flex gap-x-2 items-center text-green-500">
              <FaShippingFast />
              <span>{message.title}</span>
            </div>
            <p>{message.text}</p>
            <div className="flex gap-x-1">
              {message.products.map((product) => (
                <div className="flex items-center" key={product._id}>
                  <div className="w-32 h-32  rounded-lg">
                    <Image
                      src={product.image}
                      width={500}
                      height={500}
                      alt={product._id}
                    />
                  </div>
                  <p>{product.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-green-400  w-fit mr-auto text-white p-2 rounded-lg cursor-pointer">
              مشاهده جزییات سفارش
            </div>
          </div>
        ))}
      </div>

      <div className="w-fit mr-auto">pagination</div>
    </div>
  );
}

export default Messages;
