"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import BlogBox from "./BlogBox";
import SectionHeader from "../sectionHeader/SectionHeader";
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();

      setBlogs([...data]);
    };
    getBlogs();
  }, []);

  return (
    <div className="container mx-auto mt-7 ">
      <SectionHeader title="مطالب خواندنی" link="/blogs" />
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
