"use client";
import React, { useState } from "react";
import AddButton from "@/components/templates/dashboard/AddButton";

import Blog from "./Blog";
function DashboardBlogs({ blogs }) {
  const [search, setSearch] = useState("");
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );
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
            className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-0 ">
            <option value="-1">همه</option>
            <option value="paid">وبلاگ های من</option>
          </select>
        </div>
        {filteredBlogs.length === 0 ? (
          <div className="text-center text-gray-400 p-5 text-sm">
            هیچ نتیجه‌ای پیدا نشد!
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-3">
            {filteredBlogs.map((blog) => (
              <Blog key={blog._id} {...blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardBlogs;
