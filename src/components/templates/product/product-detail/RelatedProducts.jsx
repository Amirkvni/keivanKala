"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductBox from "@/components/modules/productBox/ProductBox";
export default function RelatedProducts({ category }) {
  const [specialProducts, setSpecialProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`/api/relatedproducts/${category}`);
      const data = await res.json();
      setSpecialProducts([...data]);
    };
    getProducts();
  }, []);

  return (
    <div className="container mx-auto mt-7 ">
      <section>
        <span className="text-sm 2xl:text-xl font-semibold dark:text-white ">
          کالاهای مرتبط
        </span>
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
            319: { slidesPerView: 2, spaceBetween: 5 },
            480: { slidesPerView: 3, spaceBetween: 5 },
            769: { slidesPerView: 3, spaceBetween: 14 },
            1024: {
              slidesPerView: 4,
              spaceBetween: 2,
            },
            1281: {
              slidesPerView: 6,
              spaceBetween: 4,
            },
          }}
          className=" swiper2 "
        >
          {specialProducts?.map((product) => (
            <SwiperSlide>
              <ProductBox product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <div></div>
    </div>
  );
}
