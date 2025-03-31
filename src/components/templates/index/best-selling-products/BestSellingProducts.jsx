"use client";
import Link from "next/link";
import ProductBox from "@/components/modules/productBox/ProductBox";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
function BestSellingProducts() {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/products/bestsellings");
      const data = await res.json();
      setBestSellingProducts([...data]);
    };
    getProducts();
  }, []);
  return (
    <div className="container mx-auto mt-7">
      <section>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold dark:text-white">
            پرفروش ترین محصولات
          </span>
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
              spaceBetween: 100,
            },
          }}
          className="swiper2"
        >
          {bestSellingProducts?.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductBox product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}

export default BestSellingProducts;
