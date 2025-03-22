"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import myGif from "@/../public/gifs/main-bot.gif";
import myPicture from "@/../public/images/main-banner-top.jpg";
import mainSliderOne from "@/../public/images/main-slider-1.jpg";
import mainSliderTwo from "@/../public/images/main-slider-2.jpg";
import mainSliderThree from "@/../public/images/main-slider-3.jpg";
import Link from "next/link";
function Slider() {
  return (
    <div className="container mx-auto mt-[140px] flex flex-col 2xl:flex-row  ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper1 rounded-lg overflow-hidden "
      >
        <SwiperSlide>
          <Link href="/">
            <Image
              src={mainSliderOne}
              alt="mainSliderOne"
              width={10000}
              height={10000}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/special-offers/shoes">
            <Image
              src={mainSliderTwo}
              alt="mainSliderTwo"
              width={10000}
              height={10000}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/special-offers/shirts">
            <Image
              src={mainSliderThree}
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
            src={myPicture}
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
