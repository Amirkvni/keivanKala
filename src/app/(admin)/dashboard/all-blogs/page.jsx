import AddButton from "@/components/templates/dashboard/AddButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineAdd } from "react-icons/md";
import { PiUserCircleLight } from "react-icons/pi";

function page() {
  const blogs = [
    {
      id: 1,
      img: "https://ik.imagekit.io/bflkztneat/History-of-the-Prada-brand-Banner.jpg?updatedAt=1742375231526",
      title: "هر آنچه که باید درباره تاریخچه‌ی برند پرادا بدانید",
      date: "05 / مرداد / 1404",
      author: "نوید کیوانی",
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/bflkztneat/History-of-the-Prada-brand-Banner.jpg?updatedAt=1742375231526",
      title: "انواع کفش جیر را چگونه باید تمیز کنیم؟",
      date: "28 / اسفند / 1403",
      author: "امیرجسین کیوانی",
    },
    {
      id: 3,
      img: "https://ik.imagekit.io/bflkztneat/Choose-clothes-with-research-1.jpg?updatedAt=1742376262506",
      title: "۱۰ نکته برای ساخت یک کمد لباس پایدار",
      date: "05 / مرداد / 1404",
      author: "امیرجسین کیوانی",
    },
    {
      id: 4,
      img: "https://ik.imagekit.io/bflkztneat/how-to-wear-converse.jpg?updatedAt=1742374653081",
      title: "چگونه کفش کتانی کانورس را در استایل خود ست کنیم؟",
      date: "05 / مرداد / 1404",
      author: "نوید کیوانی",
    },
  ];
  return (
    <div className="p-12">
      <div className="bg-white p-4 dashboard-box-shadow rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">وبلاگ ها</span>
          <AddButton address="/dashboard/add-blog" title="افزودن وبلاگ" />
        </div>
        <div className="my-6 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
          <input
            type="text"
            placeholder="جستجو"
            className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 "
          />

          <input
            type="date"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 "
          />

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-0 ">
            <option value="-1">همه</option>
            <option value="paid">وبلاگ های من</option>
          </select>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border p-2 w-[300px] flex flex-col gap-y-2 rounded-lg border-gray-300"
            >
              <div>
                <Image
                  src={blog.img}
                  alt={`blog-${blog.id}`}
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex gap-x-2 items-center">
                <PiUserCircleLight />

                <span className="text-xs">{blog.author}</span>
              </div>
              <p>{blog.title}</p>
              <div className="flex justify-between items-center">
                <span>{blog.date}</span>
                <div className="flex gap-x-2 items-center text-xl [&>svg]:cursor-pointer">
                  <FiEdit className="hover:text-green-400" />
                  <MdDeleteOutline className="hover:text-red-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
