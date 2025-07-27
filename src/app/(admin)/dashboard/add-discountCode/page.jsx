// AddDiscountCode.jsx
"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function AddDiscountCode({ onSubmit }) {
  const [form, setForm] = useState({
    code: "",
    discount: "",
    usageLimit: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    console.log("📦 داده‌ها:", form);
  };

  return (
    <div className="p-12 ">
      <div className="bg-white p-4 dashboard-box-shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">افزودن کد تخفیف جدید</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
        >
          <div>
            <label className="block mb-1">کد تخفیف</label>
            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              className="w-full edit-profile-input p-2 rounded"
              placeholder="مثلاً: OFF50"
              required
            />
          </div>

          <div>
            <label className="block mb-1">درصد یا مبلغ تخفیف</label>
            <input
              type="number"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              className="w-full edit-profile-input p-2 rounded"
              placeholder="مثلاً: 20"
              required
            />
          </div>

          <div>
            <label className="block mb-1">محدودیت تعداد استفاده</label>
            <input
              type="number"
              name="usageLimit"
              value={form.usageLimit}
              onChange={handleChange}
              className="w-full edit-profile-input p-2 rounded"
              placeholder="مثلاً: 100"
              required
            />
          </div>

          <div>
            <label className="block mb-1">تاریخ شروع</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full edit-profile-input p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">تاریخ پایان</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="w-full edit-profile-input p-2 rounded"
              required
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded flex items-center gap-2"
            >
              <FaCheck /> ثبت کد تخفیف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
