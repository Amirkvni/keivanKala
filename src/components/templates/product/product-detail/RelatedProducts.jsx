"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import Image from "next/image";
export default function RelatedProducts({ category }) {
  console.log(category);

  const [specialProducts, setSpecialProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`/api/relatedproducts/${category}`);
      const data = await res.json();
      setSpecialProducts([...data]);
    };
    getProducts();
  }, []);
  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };
  return (
    <div className="container mx-auto mt-7">
      <section>
        <div className="flex justify-between items-center">
          <span className="text-lg">کالاهای مرتبط</span>
          <Link href="/" className=" flex gap-x-2 items-center text-green-500">
            <span className="text-lg">مشاهده همه</span>
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
          className=" swiper5 "
        >
          {specialProducts?.map((product) => (
            <SwiperSlide>
              <Link href={`/product/${slugify(product.englishFullName)}`}>
                <div className="rounded-lg p-3 overflow-hidden mx-2 bg-white ">
                  <Image
                    src={product.mainImage}
                    width={500}
                    height={400}
                    className="w-32 h-32 mx-auto"
                    alt="productImage"
                  />
                  <div className="text-right">{product.persianName}</div>
                  <div className="text-xs text-left pl-3 line-through decoration-red-300 decoration-2 text-gray-400">
                    {product.price}
                  </div>
                  <div className="flex items-center justify-around">
                    <span
                      className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white"
                      dir="ltr"
                    >
                      60%
                    </span>

                    <div className="flex items-center text-green-400 gap-x-1 text-base">
                      <span> {product.secondPrice}</span>
                      <span>تومان</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      <div></div>
    </div>
  );
}
