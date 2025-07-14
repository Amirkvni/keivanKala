"use client";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Category from "./Category";
import { Navigation } from "swiper/modules";

import "./styles.css";
export default function Subcategories({ subCategories }) {
  return (
    <div className="container mx-auto xl:mt-12 mt=4 ">
      <main className="mt-5 ">
        <Swiper
          slidesPerView={"auto"}
          navigation={true}
          modules={[Navigation]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            100: {
              slidesPerView: 2,
              spaceBetween: 5,
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
              slidesPerView: 8,
              spaceBetween: 50,
            },
          }}
          className="subcategory-slider"
        >
          {subCategories.map((subCategoriy) => (
            <SwiperSlide key={subCategoriy.id}>
              <Category
                name={subCategoriy.name}
                address={subCategoriy.address}
                link={subCategoriy.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}
