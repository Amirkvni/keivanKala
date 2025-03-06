import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import CartProduct from "./CartProduct";
function Cart() {
  return (
    <div className="absolute left-0 top-12 w-[400px]  max-h-[350px] overflow-y-auto rounded-xl border-t-green-400 border-t-3 bg-white ">
      <div className="flex items-center justify-between p-3 ">
        <div className="flex gap-x-2 items-center text-lg ">
          <span>۴</span>
          <span>مورد</span>
        </div>
        <Link
          className="flex gap-x-2 items-center text-lg text-green-300"
          href="/"
        >
          <span href="/">مشاهده سبد خرید</span>
          <FaChevronLeft />
        </Link>
      </div>
      <div className="p-3  flex flex-col gap-y-2 ">
        {/* product : */}
        <CartProduct />
        <CartProduct />
      </div>
      {/* bottom : */}
      <div className="sticky bottom-0 left-0 right-0 bg-white flex justify-between items-center p-2">
        <div>
          <p className="py-3 font-bold">مبلغ قابل پرداخت</p>
          <p>1,200,000 تومان</p>
        </div>
        <Link
          href="/"
          className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg"
        >
          ثبت سفارش
        </Link>
      </div>
    </div>
  );
}

export default Cart;
