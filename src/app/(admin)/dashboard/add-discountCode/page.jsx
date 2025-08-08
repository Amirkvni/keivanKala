"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const products = [
  { value: "محصول۱", label: "محصول۱" },
  { value: "محصول2", label: "محصول2" },
  { value: "محصول3", label: "محصول3" },
];
const users = [
  { value: "کاربر۱", label: "کاربر۱" },
  { value: "کاربر2", label: "کاربر2" },
  { value: "کاربر3", label: "کاربر3" },
  { value: "کاربر4", label: "کاربر4" },
];
export default function AddDiscountCode({}) {
  const [form, setForm] = useState({
    code: "",
    discountType: "",
    discountValue: "",
    usageLimit: "",
    startDate: "",
    endDate: "",
  });
  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");

  const [endDay, setEndDay] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createCodeHandler = () => {
    console.log("📦 داده‌ها:", form);
  };
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const years = Array.from({ length: 1404 - 1300 + 1 }, (_, i) => 1404 - i);
  const handleDateChange = (type, day, month, year) => {
    if (day && month && year) {
      const date = new Date(year, month - 1, day);
      setForm((prev) => ({
        ...prev,
        [type]: date.toISOString(),
      }));
    }
  };
  return (
    <div className="p-12 ">
      <div className="bg-white p-4 dashboard-box-shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">افزودن کد تخفیف جدید</h2>
        <div className="grid grid-cols-2 gap-4 text-sm [&>div>label]:block [&>div>label]:mb-1  [&>div>input]:w-full  [&>div>input]:p-2  [&>div>input]:rounded ">
          <div>
            <label>کد تخفیف</label>
            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              className="edit-profile-input"
              placeholder="مثلاً: OFF50"
              required
            />
          </div>

          <div>
            <label>نوع تخفیف</label>
            <select
              name="discountType"
              className="w-[100px] edit-profile-input p-1 rounded"
              value={form.discountType}
              onChange={handleChange}
              required
            >
              <option value="percentage">درصدی</option>
              <option value="fixed">ثابت</option>
            </select>
          </div>
          <div>
            <label>مقدار تخفیف</label>
            <input
              type="number"
              name="discountValue"
              value={form.discountValue}
              onChange={handleChange}
              className="edit-profile-input"
              placeholder="مثلاً: 20"
              required
            />
          </div>
          <div>
            <label>محدودیت تعداد استفاده</label>
            <input
              type="number"
              name="usageLimit"
              value={form.usageLimit}
              onChange={handleChange}
              className=" edit-profile-input"
              placeholder="مثلاً: 100"
              required
            />
          </div>
          <div className="[&>div>div>select]:border-gray-300 [&>div>div>select]:text-sm [&>div>div>select]:border [&>div>div>select]:rounded-md [&>div>duv>select]:p-1">
            <label>تاریخ شروع</label>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:gap-x-1 [&>div]:items-center">
              <div>
                <label>روز</label>
                <select
                  value={startDay}
                  onChange={(e) => {
                    setStartDay(e.target.value);
                    handleDateChange(
                      "startDate",
                      e.target.value,
                      startMonth,
                      startYear
                    );
                  }}
                >
                  <option value="">انتخاب کنید</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>ماه</label>
                <select
                  value={startMonth}
                  onChange={(e) => {
                    setStartMonth(e.target.value);
                    handleDateChange(
                      "startDate",
                      startDay,
                      e.target.value,
                      startYear
                    );
                  }}
                >
                  <option value="">انتخاب کنید</option>
                  {months.map((month, index) => (
                    <option key={month} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>سال</label>
                <select
                  value={startYear}
                  onChange={(e) => {
                    setStartYear(e.target.value);
                    handleDateChange(
                      "startDate",
                      startDay,
                      startMonth,
                      e.target.value
                    );
                  }}
                >
                  <option value="">انتخاب کنید</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="[&>div>div>select]:border-gray-300 [&>div>div>select]:text-sm [&>div>div>select]:border [&>div>div>select]:rounded-md [&>div>duv>select]:p-1">
            <label>تاریخ پایان</label>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:gap-x-1 [&>div]:items-center">
              <div>
                <label>روز</label>
                <select
                  value={endDay}
                  onChange={(e) => {
                    setEndDay(e.target.value);
                    handleDateChange(
                      "endDate",
                      e.target.value,
                      endMonth,
                      endYear
                    );
                  }}
                >
                  <option value="">انتخاب کنید</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>ماه</label>
                <select
                  value={endMonth}
                  onChange={(e) => {
                    setEndMonth(e.target.value);
                    handleDateChange(
                      "endDate",
                      endDay,
                      e.target.value,
                      endYear
                    );
                  }}
                >
                  <option value="">انتخاب کنید</option>
                  {months.map((month, index) => (
                    <option key={month} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>سال</label>
                <select
                  value={endYear}
                  onChange={(e) => {
                    setEndYear(e.target.value);
                    handleDateChange(
                      "endDate",
                      endDay,
                      endMonth,
                      e.target.value
                    );
                  }}
                >
                  <option value="">انتخاب کنید</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1">انتخاب کاربران</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={users}
              onChange={(selected) =>
                setForm({
                  ...form,
                  applicableUsers: selected.map((u) => u.value),
                })
              }
            />
          </div>
          <div>
            <label className="block mb-1">انتخاب محصولات</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={products}
              onChange={(selected) =>
                setForm({
                  ...form,
                  applicableProducts: selected.map((p) => p.value),
                })
              }
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <button
              onClick={createCodeHandler}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded flex items-center gap-2"
            >
              <FaCheck /> ثبت کد تخفیف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
