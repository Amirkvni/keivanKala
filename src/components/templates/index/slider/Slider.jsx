"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import myGif from "@/../public/gifs/main-bot.gif";
import myPicture from "@/../public/images/main-banner-top.jpg";
import mainSliderOne from "@/../public/images/main-slider-1.jpg";
import mainSliderTwo from "@/../public/images/main-slider-2.jpg";
import mainSliderThree from "@/../public/images/main-slider-3.jpg";
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
          <Image
            src={mainSliderOne}
            alt="mainSliderOne"
            width={600}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={mainSliderTwo}
            alt="mainSliderTwo"
            width={600}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={mainSliderThree}
            alt="mainSliderThree"
            width={600}
            height={200}
          />
        </SwiperSlide>
      </Swiper>

      <div className=" 2xl:flex-col gap-y-2  rounded-lg overflow-hidden hidden md:flex p-5 2xl:p-0 gap-x-1 ">
        <div className="w-2/4 2xl:w-[440px]">
          <Image
            src={myPicture}
            alt="GIF Animation"
            className="2xl:w-[450px] w-2/4rounded-lg overflow-hidden"
            width={500}
            height={200}
          />
        </div>
        <div className="2xl:w-[440px] w-2/4 rounded-lg overflow-hidden ">
          <Image src={myGif} alt="GIF Animation" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
