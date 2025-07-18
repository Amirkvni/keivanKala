"use client";
import ProductBox from "@/components/modules/productBox/ProductBox";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../sectionHeader/SectionHeader";

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
      <SectionHeader title="پرفروش ترین محصولات" link="/special-offers" />

      <main className="mt-5">
        <Swiper
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
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
