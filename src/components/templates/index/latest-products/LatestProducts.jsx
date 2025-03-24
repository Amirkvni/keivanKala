"use client";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import productImage from "@/../public/images/product.png";
import Image from "next/image";
function LatestProducts() {
  return (
    <div className="container mx-auto mt-7">
      <section>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">جدیدترین محصولات</span>
          <Link
            href="/special-offers"
            className=" flex gap-x-2 items-center text-green-500"
          >
            <span className="text-xl font-semibold">مشاهده همه</span>
            <FaChevronLeft />
          </Link>
        </div>
      </section>
      <main className="mt-5">
        <Swiper
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          className=" swiper2 "
        >
          <SwiperSlide>
            <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
              <Image
                src={productImage}
                width={500}
                height={400}
                className="w-32 h-32 mx-auto"
                alt="productImageOne"
              />
              <div className="text-right">کیف دوشی زنانه درسا مدل 49787</div>
              <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                10,000,000
              </div>
              <div className="flex items-center justify-around">
                <span
                  className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                  dir="ltr"
                >
                  60%
                </span>

                <div className="flex items-center text-green-400 gap-x-1 text-base">
                  <span>4,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
              <Image
                src={productImage}
                width={500}
                height={400}
                className="w-32 h-32 mx-auto"
                alt="productImageTwo"
              />
              <div className="text-right">کیف دوشی زنانه درسا مدل 49787</div>
              <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                10,000,000
              </div>
              <div className="flex items-center justify-around">
                <span
                  className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                  dir="ltr"
                >
                  60%
                </span>

                <div className="flex items-center text-green-400 gap-x-1 text-base">
                  <span>4,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
              <Image
                src={productImage}
                width={500}
                height={400}
                className="w-32 h-32 mx-auto"
                alt="productImagethree"
              />
              <div className="text-right">کیف دوشی زنانه درسا مدل 49787</div>
              <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                10,000,000
              </div>
              <div className="flex items-center justify-around">
                <span
                  className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                  dir="ltr"
                >
                  60%
                </span>

                <div className="flex items-center text-green-400 gap-x-1 text-base">
                  <span>4,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
              <Image
                src={productImage}
                width={500}
                height={400}
                className="w-32 h-32 mx-auto"
                alt="productImageFour"
              />
              <div className="text-right">کیف دوشی زنانه درسا مدل 49787</div>
              <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                10,000,000
              </div>
              <div className="flex items-center justify-around">
                <span
                  className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                  dir="ltr"
                >
                  60%
                </span>

                <div className="flex items-center text-green-400 gap-x-1 text-base">
                  <span>4,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
              <Image
                src={productImage}
                width={500}
                height={400}
                className="w-32 h-32 mx-auto"
                alt="productImageFive"
              />
              <div className="text-right">کیف دوشی زنانه درسا مدل 49787</div>
              <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                10,000,000
              </div>
              <div className="flex items-center justify-around">
                <span
                  className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                  dir="ltr"
                >
                  60%
                </span>

                <div className="flex items-center text-green-400 gap-x-1 text-base">
                  <span>4,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
              <Image
                src={productImage}
                width={500}
                height={400}
                className="w-32 h-32 mx-auto"
                alt="productImageSix"
              />
              <div className="text-right">کیف دوشی زنانه درسا مدل 49787</div>
              <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                10,000,000
              </div>
              <div className="flex items-center justify-around">
                <span
                  className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                  dir="ltr"
                >
                  60%
                </span>

                <div className="flex items-center text-green-400 gap-x-1 text-base">
                  <span>4,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
              <Image
                src={productImage}
                width={500}
                height={400}
                className="w-32 h-32 mx-auto"
                alt="productImageSeven"
              />
              <div className="text-right">کیف دوشی زنانه درسا مدل 49787</div>
              <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                10,000,000
              </div>
              <div className="flex items-center justify-around">
                <span
                  className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                  dir="ltr"
                >
                  60%
                </span>

                <div className="flex items-center text-green-400 gap-x-1 text-base">
                  <span>4,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
              <Image
                src={productImage}
                width={500}
                height={400}
                className="w-32 h-32 mx-auto"
                alt="productImageEight"
              />
              <div className="text-right">کیف دوشی زنانه درسا مدل 49787</div>
              <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                10,000,000
              </div>
              <div className="flex items-center justify-around">
                <span
                  className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                  dir="ltr"
                >
                  60%
                </span>

                <div className="flex items-center text-green-400 gap-x-1 text-base">
                  <span>4,000,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}

export default LatestProducts;
