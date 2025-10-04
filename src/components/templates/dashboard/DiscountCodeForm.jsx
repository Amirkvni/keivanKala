"use client";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

const animatedComponents = makeAnimated();

export default function DiscountCodeForm({
  products,
  users,
  initialData = {},
  onSubmit,
}) {
  const [form, setForm] = useState({
    code: "",
    discountType: "",
    discountValue: "",
    usageLimit: "",
    startDate: "",
    endDate: "",
    applicableUsers: [],
    applicableProducts: [],
    ...initialData, 
  });

  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");

  const [endDay, setEndDay] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

  // به محض mount کامپوننت، اگر initialData تاریخ داشت آن را به قسمت های روز/ماه/سال جدا کن
  useEffect(() => {
    if (form.startDate) {
      const m = moment(form.startDate);
      setStartDay(m.jDate().toString());
      setStartMonth((m.jMonth() + 1).toString());
      setStartYear(m.jYear().toString());
    }
    if (form.endDate) {
      const m = moment(form.endDate);
      setEndDay(m.jDate().toString());
      setEndMonth((m.jMonth() + 1).toString());
      setEndYear(m.jYear().toString());
    }
  }, []);

  // وقتی day/month/year تغییر کرد، تاریخ ISO جدید محاسبه و در فرم ذخیره شود
  const handleDateChange = (type, day, month, year) => {
    if (day && month && year) {
      const date = moment(`${year}/${month}/${day}`, "jYYYY/jM/jD").toDate();
      setForm((prev) => ({
        ...prev,
        [type]: date.toISOString(),
      }));
    }
  };

  // هر بار تغییر startDate یا قسمت‌های روز/ماه/سال آن، مقدار فرم به‌روز شود
  useEffect(() => {
    handleDateChange("startDate", startDay, startMonth, startYear);
  }, [startDay, startMonth, startYear]);

  // هر بار تغییر endDate یا قسمت‌های روز/ماه/سال آن، مقدار فرم به‌روز شود
  useEffect(() => {
    handleDateChange("endDate", endDay, endMonth, endYear);
  }, [endDay, endMonth, endYear]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // تابع پیش‌فرض ارسال فرم اگر onSubmit پاس داده نشده بود
  const defaultSubmitHandler = async () => {
    const requiredFields = [
      "code",
      "discountType",
      "discountValue",
      "usageLimit",
      "startDate",
      "endDate",
      "applicableUsers",
      "applicableProducts",
    ];
    for (let field of requiredFields) {
      if (
        form[field] === undefined ||
        form[field] === "" ||
        (Array.isArray(form[field]) && form[field].length === 0)
      ) {
        alert("لطفا تمام فیلد ها را پر کنید");
        return;
      }
    }

    const res = await fetch("/api/discountcode", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.status === 201) {
      alert("کد تخفیف با موفقیت ایجاد شد");
      // در حالت افزودن فرم را ریست کن
      if (!initialData.code) {
        setForm({
          code: "",
          discountType: "",
          discountValue: "",
          usageLimit: "",
          startDate: "",
          endDate: "",
          applicableUsers: [],
          applicableProducts: [],
        });
        setStartDay("");
        setStartMonth("");
        setStartYear("");
        setEndDay("");
        setEndMonth("");
        setEndYear("");
      }
    } else {
      alert("خطا در ایجاد کد تخفیف");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    } else {
      defaultSubmitHandler();
    }
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

  return (
    <form onSubmit={handleSubmit} className="p-12">
      <div className="bg-white p-4 dashboard-box-shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          {initialData.code ? "ویرایش کد تخفیف" : "افزودن کد تخفیف جدید"}
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm [&>div>label]:block [&>div>label]:mb-1  [&>div>input]:w-full  [&>div>input]:p-2  [&>div>input]:rounded ">
          {/* کد تخفیف */}
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
              disabled={!!initialData.code} // اگر در حالت ویرایش، غیر فعال کن
            />
          </div>

          {/* نوع تخفیف */}
          <div>
            <label>نوع تخفیف</label>
            <select
              name="discountType"
              className="w-[100px] edit-profile-input p-1 rounded"
              value={form.discountType}
              onChange={handleChange}
              required
            >
              <option value="">انتخاب کنید</option>
              <option value="percentage">درصدی</option>
              <option value="fixed">ثابت</option>
            </select>
          </div>

          {/* مقدار تخفیف */}
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

          {/* محدودیت تعداد استفاده */}
          <div>
            <label>محدودیت تعداد استفاده</label>
            <input
              type="number"
              name="usageLimit"
              value={form.usageLimit}
              onChange={handleChange}
              className="edit-profile-input"
              placeholder="مثلاً: 100"
              required
            />
          </div>

          {/* تاریخ شروع */}
          <div className="[&>div>div>select]:border-gray-300 [&>div>div>select]:text-sm [&>div>div>select]:border [&>div>div>select]:rounded-md [&>div>duv>select]:p-1">
            <label>تاریخ شروع</label>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:gap-x-1 [&>div]:items-center">
              <div>
                <label>روز</label>
                <select
                  value={startDay}
                  onChange={(e) => setStartDay(e.target.value)}
                  required
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
                  onChange={(e) => setStartMonth(e.target.value)}
                  required
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
                  onChange={(e) => setStartYear(e.target.value)}
                  required
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

          {/* تاریخ پایان */}
          <div className="[&>div>div>select]:border-gray-300 [&>div>div>select]:text-sm [&>div>div>select]:border [&>div>div>select]:rounded-md [&>div>duv>select]:p-1">
            <label>تاریخ پایان</label>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:gap-x-1 [&>div]:items-center">
              <div>
                <label>روز</label>
                <select
                  value={endDay}
                  onChange={(e) => setEndDay(e.target.value)}
                  required
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
                  onChange={(e) => setEndMonth(e.target.value)}
                  required
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
                  onChange={(e) => setEndYear(e.target.value)}
                  required
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

          {/* انتخاب کاربران */}
          <div>
            <label className="block mb-1">انتخاب کاربران</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={users}
              getOptionLabel={(option) => option.email}
              getOptionValue={(option) => option._id}
              onChange={(selected) =>
                setForm((prev) => ({
                  ...prev,
                  applicableUsers: selected.map((p) => p._id),
                }))
              }
              value={users.filter((u) => form.applicableUsers?.includes(u._id))}
            />
          </div>

          {/* انتخاب محصولات */}
          <div>
            <label className="block mb-1">انتخاب محصولات</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={products}
              getOptionLabel={(option) => option.persianName}
              getOptionValue={(option) => option._id}
              onChange={(selected) =>
                setForm((prev) => ({
                  ...prev,
                  applicableProducts: selected.map((p) => p._id),
                }))
              }
              value={products.filter((p) =>
                form.applicableProducts?.includes(p._id)
              )}
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded flex items-center gap-2"
            >
              <FaCheck />
              {initialData.code ? "ویرایش کد تخفیف" : "ثبت کد تخفیف"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
