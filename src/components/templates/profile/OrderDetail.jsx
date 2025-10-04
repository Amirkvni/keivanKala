import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import moment from "moment-jalaali";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { priceFormatter } from "@/utils/priceFormatter";
moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
export default function OrderDetail({ order, address }) {
 

  const formatted = moment(order.orderDate).format("jD jMMMM jYYYY");
  return (
    <div className="flex flex-col gap-y-8 p-2 2xl:p-3 2xl:w-3/4 w-full rounded-sm  bg-white dark:bg-zinc-800 dark:text-white  divide-y divide-gray-300 [&>*]:pb-4 text-sm">
      <Link
        href="/profile/orders"
        className="flex gap-x-2 items-center 2xl:text-base text-sm hover:text-green-400"
      >
        <FaArrowRight />
        <span>بازگشت</span>
      </Link>
      <div className="orderDetails">
        <div>
          <span className="order-detail__label-text">کد پیگیری سفارش:</span>
          <span>#{order._id.slice(0, 6)}</span>
        </div>
        <div>
          <span className="order-detail__label-text">تاریخ ثبت سفارش:</span>
          <span>{formatted}</span>
        </div>
      </div>
      <div className="orderDetails flex-wrap gap-y-4">
        <div>
          <span className="order-detail__label-text">تحویل گیرنده :</span>
          <span>
            {order.user.firstname} {order.user.lastname}
          </span>
        </div>
        <div>
          <span className="order-detail__label-text">شماره موبایل :</span>
          <span>{order.user.phone}</span>
        </div>
        <div>
          <span className="order-detail__label-text">آدرس : </span>
          <span>{address.fullAddress}</span>
        </div>
      </div>
      <div className="orderDetails ">
        <div>
          <span className="order-detail__label-text">تاریخ ارسال :</span>
          <span>{order.delivery.day}</span>
        </div>
        <div>
          <span className="order-detail__label-text">هزینه ارسال :</span>
          <span>{priceFormatter(order.delivery.price)}</span>
        </div>
      </div>
      {order.products.map((product) => (
        <div className="flex gap-x-2" key={product._id}>
          <Link
            href={`/product/${slugify(product.englishFullName)}`}
            className="2xl:w-24 2xl:h-24 w-20 h-20"
          >
            <Image
              src={product.mainImage}
              alt={product.mainImage}
              width={1200}
              height={1200}
              loading="lazy"
            />
          </Link>
          <div className="flex flex-col gap-y-3 ">
            <p className="text-sm 2xl:text-base">{product.persianName}</p>
            <div className="flex flex-col gap-y-2 [&>div]:flex [&>div]:items-center [&>div]:gap-x-2 [&>*]:text-gray-500 [&>*]:dark:text-gray-300 text-xs">
              <div>
                <span className="w-3 h-3 bg-black rounded-full"></span>
                <span>بی رنگ</span>
              </div>
              <div>
                <LuShieldCheck /> <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
              </div>
            </div>
            {product.secondPrice && (
              <p className="text-red-400 text-[12px] ">
                {priceFormatter(product.price - product.secondPrice)} تخفیف
              </p>
            )}

            <p className="text-sm 2xl:text-lg">
              {product.secondPrice
                ? priceFormatter(product.secondPrice)
                : priceFormatter(product.price)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
