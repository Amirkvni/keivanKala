"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import Link from "next/link";
function Slider() {
  return (
    <div className=" mt-[140px] 2xl:w-full w-3/4  mx-auto 2xl:h-[500px] h-[150px] lg:h-[250px] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mensCategorySlider rounded-lg overflow-hidden "
      >
        <SwiperSlide>
          <Link href="/search/men-belts">
            <Image
              src="https://ik.imagekit.io/bflkztneat/men-gold-accessories.jpg?updatedAt=1752514580199"
              alt="mainSliderOne"
              width={5000}
              height={5000}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/search/men-watches">
            <Image
              src="https://ik.imagekit.io/bflkztneat/men-watch.jpg?updatedAt=1752514587113"
              alt="mainSliderTwo"
              width={5000}
              height={5000}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/search/men-underwear">
            <Image
              src="https://ik.imagekit.io/bflkztneat/mens-under-ware.jpg?updatedAt=1752514596168"
              alt="mainSliderThree"
              width={5000}
              height={5000}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
