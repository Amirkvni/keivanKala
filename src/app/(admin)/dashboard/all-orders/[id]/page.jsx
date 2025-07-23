import Image from "next/image";
import React from "react";
import productImg from "@/assets/ex.jpg";
import OrderStatusSteps from "@/components/templates/dashboard/OrderStatusSteps";
import Link from "next/link";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TfiCreditCard } from "react-icons/tfi";

function page() {
  return (
    <div className="p-12">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex gap-x-4 items-center">
            <span className="text-xl">سفارش #9595</span>
            <span className="bg-blue-100 text-blue-800 text-xs p-1 rounded-sm">
              پرداخت شده
            </span>
            <span className="bg-green-100 text-green-800 text-xs p-1 rounded-sm">
              انجام شده
            </span>
          </div>
          <div className="text-xs">جمعه 04 مارس 2022، 08:15 بعد از ظهر</div>
        </div>
        <button className="bg-green-400 p-2 rounded-lg cursor-pointer text-white">
          ویرایش
        </button>
      </div>

      <div className="flex gap-x-2 ">
        <div className="w-9/12  p-4 rounded-lg">
          <div className="bg-white">
            <table className="w-full border border-gray-200 rounded-md overflow-hidden">
              <thead className="bg-gray-100 text-right text-sm font-semibold text-gray-600">
                <tr>
                  <th className="p-4">محصول</th>
                  <th className="p-4">قیمت</th>
                  <th className="p-4">تعداد</th>
                  <th className="p-4">جمع</th>
                </tr>
              </thead>
              <tbody className="text-right text-sm">
                {[1, 2, 3].map((_, i) => (
                  <tr key={i} className="hover:bg-gray-50 border-t">
                    <td className="p-4">
                      <div className="flex gap-x-4 items-center">
                        <div className="w-16 h-16 rounded-md overflow-hidden">
                          <Image
                            width={64}
                            height={64}
                            alt="productImage"
                            src={productImg}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm text-gray-700 space-y-1">
                          <p className="font-medium">کوله‌پشتی سفید</p>
                          <p className="text-xs text-gray-500">رنگ: سفید</p>
                          <p className="text-xs text-gray-500">سایز: یک سایز</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">۲۵۲٫۰۰ دلار</td>
                    <td className="p-4 text-gray-700">۲</td>
                    <td className="p-4 font-semibold text-gray-900">
                      ۵۰۴٫۰۰ دلار
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white">
            <OrderStatusSteps />
          </div>
        </div>
        <div className="w-3/12  rounded-lg [&>div]:bg-white flex flex-col gap-y-6 [&>div]:rounded-lg [&>div]:p-4">
          <div>
            <div className="flex justify-between items-center text-sm">
              <span>جزئیات مشتری</span>
              <Link href="/">مشاهده نمایه</Link>
            </div>
            <div className="h-0.5 bg-zinc-500"></div>
            <div className="flex items-center gap-x-2 ">
              <div className="w-12 h-12 rounded-full overflow-hidden border">
                <Image width={500} height={500} src={productImg} />
              </div>
              <div className="text-xs">
                <p>جوزف پارکرز</p>
                <p>مشتری</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <MdOutlineEmail />
              <p>josephparker@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-3">
              <MdOutlinePhoneEnabled />
              <p>+(256) 245451 441</p>
            </div>
          </div>
          <div>
            <div className="flex gap-x-3 items-center text-sm">
              <IoLocationOutline />
              <span>آدرس حمل و نقل</span>
            </div>
            <div className="h-0.5 bg-zinc-500"></div>
            <p>جوزف پارکر</p>
            <p>+(256) 245451 451</p>
            <p>2186 جویس خیابان راکی ​​کوه</p>
            <p>نیویورک - 25645</p>
            <p>ایالات متحده</p>
          </div>
          <div>
            <div className="flex gap-x-3 items-center text-sm">
              <TfiCreditCard />
              <span>جزئیات پرداخت</span>
            </div>
            <div className="h-0.5 bg-zinc-500"></div>
            <p>معاملات: #VLZ124561278124</p>
            <p>روش پرداخت: کارت بدهی</p>
            <p>نام دارنده کارت: جوزف پارکر</p>
            <p>شماره کارت: xxxx xxxx xxxx 2456</p>
            <p>کل مبلغ: 415.96 دلار</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
