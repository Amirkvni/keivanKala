import Image from "next/image";
import React from "react";
import samanBankLogo from "@/../public/images/samanBankLogo.png";
import zarinPalLogo from "@/../public/images/zarinPal.svg";
function Payment() {
  return (
    <div className="mt-12 w-[500px] shadow-lg mx-auto flex flex-col justify-between [&>div]:flex [&>div]:justify-between [&>div]:items-center p-3 h-[500px]">
      <h2 className="text-center">پرداخت</h2>
      <div>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="کد تخفیف"
            className="outline-none border-none  w-10/12 "
          />
          <button className="cursor-pointer  w-2/12">اعمال</button>
        </div>
      </div>
      <div>
        <span>هزینه ارسال</span>
        <span>3900000 تومان</span>
      </div>
      <div>
        <span>تخفیف</span>
        <span>1900000 تومان</span>
      </div>
      <div>
        <span>مبلغ قابل پرداخت</span>
        <span>3900000 تومان</span>
      </div>
      <section className="flex justify-around  [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center  [&>div]:rounded-lg [&>div]:p-2 [&>div]:border ">
        <div className=" border-gray-400">
          <div className="w-12 h-12">
            <Image width={400} height={400} src={samanBankLogo} />
          </div>
          <span>بانک سامان</span>
        </div>
        <div className=" border-green-400">
          <div className="w-12 h-19">
            <Image width={400} height={400} src={zarinPalLogo} />
          </div>
          <span>زرین پال</span>
        </div>
      </section>
      <button className="bg-green-500 text-white rounded-lg p-3 cursor-pointer">
        پرداخت
      </button>
    </div>
  );
}

export default Payment;
