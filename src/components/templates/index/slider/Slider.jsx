"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import myGif from "@/../public/gifs/main-bot.gif";

import Link from "next/link";
function Slider() {
  return (
    <div className="container mx-auto mt-[140px] flex flex-col 2xl:flex-row  ">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper1 rounded-lg overflow-hidden "
      >
        <SwiperSlide>
          <Link href="/category-men-clothing">
            <Image
              src="https://ik.imagekit.io/bflkztneat/main-slider-1.jpg?updatedAt=1752513740379"
              alt="mainSliderOne"
              width={10000}
              height={10000}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/category-men-shoes">
            <Image
              src="https://ik.imagekit.io/bflkztneat/main-slider-2.jpg?updatedAt=1752513731056"
              alt="mainSliderTwo"
              width={10000}
              height={10000}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/search/men-shirts">
            <Image
              src="https://ik.imagekit.io/bflkztneat/main-slider-3.jpg?updatedAt=1752513743070"
              alt="mainSliderThree"
              width={10000}
              height={10000}
            />
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className=" 2xl:flex-col gap-y-2  rounded-lg overflow-hidden hidden md:flex p-5 2xl:p-0 gap-x-1 ">
        <Link href="/special-offers/bags" className="w-2/4 2xl:w-[440px]">
          <Image
            src="https://ik.imagekit.io/bflkztneat/main-banner-top.jpg?updatedAt=1752513729501"
            alt="GIF Animation"
            className="2xl:w-[450px] w-2/4rounded-lg overflow-hidden"
            width={10000}
            height={10000}
          />
        </Link>
        <Link
          href="/"
          className="2xl:w-[440px] w-2/4 rounded-lg overflow-hidden "
        >
          <Image src={myGif} alt="GIF Animation" width={10000} height={10000} />
        </Link>
      </div>
    </div>
  );
}

export default Slider;
