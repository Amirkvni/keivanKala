"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import Image from "next/image";
import FreshOffersBox from "@/components/modules/freshOffersBox/FreshOffersBox";
export default function SelectedProducts({ selectedProducts }) {
  return (
    <>
      <Swiper
       
        className="selectedSlider container rounded-lg  mt-[130px]"
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 7,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 8,
          },
        }}
      >
        <SwiperSlide className="flex flex-col iconSlider justify-center ">
          <div className="flex flex-col gap-y-1 text-white font-bold text-2xl items-center">
            <span>شگفت</span>
            <span>انگیزهای</span>
            <span>منتخب</span>
          </div>

          <div>
            <Image
              width={500}
              height={500}
              src="https://ik.imagekit.io/bflkztneat/selectedIcon.png?updatedAt=1742990975376"
            />
          </div>
        </SwiperSlide>
        {selectedProducts?.map((product) => (
          <SwiperSlide>
            <FreshOffersBox product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
