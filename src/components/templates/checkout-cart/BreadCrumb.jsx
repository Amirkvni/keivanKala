"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";

function BreadCrumb() {
  const path = usePathname();

  return (
    <div className="container mx-auto flex gap-x-0.5  mt-[140px]  rounded-xl overflow-hidden [&>div]:w-1/3 [&>div]:text-center [&>div]:flex  [&>div]:flex-col [&>div]:gap-y-2  [&>div]:items-center [&>div]:p-3 ">
      <div
        className={
          path == "/checkout-cart" ? "bg-green-100 text-green-500" : null
        }
      >
        <span>سبد خرید</span>
        <LuShoppingCart />
      </div>

      <div
        className={
          path == "/checkout-cart/shipping-method"
            ? "bg-green-100 text-green-500"
            : null
        }
      >
        <FaTruckFast />
        <span>شیوه ارسال</span>
      </div>

      <div
        className={
          path == "/checkout-cart/payment"
            ? "bg-green-100 text-green-500"
            : null
        }
      >
        <MdOutlinePayments />
        <span>پرداخت</span>
      </div>
    </div>
  );
}

export default BreadCrumb;
