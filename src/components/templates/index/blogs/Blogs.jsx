"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import BlogBox from "./BlogBox";
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      console.log(data);

      setBlogs([...data]);
    };
    getBlogs();
  }, []);

  return (
    <div className="container mx-auto mt-7">
      <section>
        <div className="flex justify-between items-center">
          <span className="text-xl">مطالب خواندنی </span>
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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className=" swiper11"
        >
          {blogs?.map((blog) => (
            <SwiperSlide key={blog._id}>
              <Link href={`/blogs/${blog.link}`} className="group">
                <BlogBox blog={blog} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}

export default Blogs;
