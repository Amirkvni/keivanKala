// AddSpecialOffer.jsx
"use client";
import React, { useState } from "react";

export default function AddSpecialOffer() {
  const [form, setForm] = useState({
    title: "",
    discount: "",
    startDate: "",
    endDate: "",
    status: "active",
    products: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📤 ارسال کمپین:", form);
    // ارسال به API
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow max-w-2xl mx-auto mt-12 dashboard-box-shadow">
      <h2 className="text-xl font-bold mb-6">ایجاد فروش ویژه جدید</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">عنوان کمپین</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full edit-profile-input rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">درصد تخفیف</label>
          <input
            type="number"
            name="discount"
            value={form.discount}
            onChange={handleChange}
            required
            min="1"
            max="100"
            className="w-full edit-profile-input rounded px-4 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">تاریخ شروع</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
              className="w-full edit-profile-input rounded px-4 py-2 outline-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">تاریخ پایان</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
              className="w-full edit-profile-input rounded px-4 py-2 outline-none cursor-pointer"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">وضعیت کمپین</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full edit-profile-input rounded px-4 py-2 focus:outline-none focus:ring-0"
          >
            <option value="active">فعال</option>
            <option value="inactive">غیرفعال</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">انتخاب محصولات</label>
          <input
            type="text"
            placeholder="(مثلاً: گوشی سامسونگ، لپتاپ دل...)"
            className="w-full edit-profile-input rounded px-4 py-2 text-gray-400"
            disabled
          />
          <small className="text-gray-500 mt-2 block">
            * انتخاب محصول واقعی را در نسخه نهایی از لیست یا مولتی‌سلکت
            پیاده‌سازی کن.
          </small>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition cursor-pointer"
        >
          ثبت کمپین
        </button>
      </form>
    </div>
  );
}
