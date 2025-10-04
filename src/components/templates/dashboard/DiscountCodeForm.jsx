"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import moment from "moment-jalaali";
import Swal from "sweetalert2";
moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

const animatedComponents = makeAnimated();

export default function DiscountCodeForm({
  products,
  users,
  initialData = {},
  onSubmit,
  mode,
}) {
  const router = useRouter();

  const [form, setForm] = useState({
    code: "",
    discountType: "",
    discountValue: "",
    usageLimit: "",
    startDate: "",
    endDate: "",
    applicableToAllUsers: false,
    applicableToAllProducts: false,
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

  const handleDateChange = (type, day, month, year) => {
    if (day && month && year) {
      const date = moment(`${year}/${month}/${day}`, "jYYYY/jM/jD").toDate();
      setForm((prev) => ({
        ...prev,
        [type]: date.toISOString(),
      }));
    }
  };

  useEffect(() => {
    handleDateChange("startDate", startDay, startMonth, startYear);
  }, [startDay, startMonth, startYear]);

  useEffect(() => {
    handleDateChange("endDate", endDay, endMonth, endYear);
  }, [endDay, endMonth, endYear]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

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
      const value = form[field];

      if (Array.isArray(value)) {
        if (
          (field === "applicableUsers" &&
            !form.applicableToAllUsers &&
            value.length === 0) ||
          (field === "applicableProducts" &&
            !form.applicableToAllProducts &&
            value.length === 0)
        ) {
          alert("لطفا تمام فیلدها را پر کنید");
          return;
        }
      } else {
        if (value === undefined || value === "") {
          alert("لطفا تمام فیلدها را پر کنید");
          return;
        }
      }
    }
    if (mode === "add") {
      const res = await fetch("/api/discountcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.status === 201) {
        Swal.fire("کدتخفیف با موفقیت ایجاد شد").then(() =>
          router.push("/dashboard/all-discountCodes")
        );
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
    } else if (mode === "edit") {
      const res = await fetch(`/api/discountcode/${initialData._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.status === 200) {
        Swal.fire("کدتخفیف با موفقیت ویرایش شد").then(() =>
          router.push("/dashboard/all-discountCodes")
        );
      } else {
        alert("خطا در ویرایش کد تخفیف");
      }
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
              disabled={!!initialData.code}
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
              <option value="">انتخاب کنید</option>
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
              className="edit-profile-input"
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

          <div>
            <label className="block mb-1">انتخاب کاربران</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={[{ _id: "all", email: "همه" }, ...users]}
              getOptionLabel={(option) => option.email}
              getOptionValue={(option) => option._id}
              onChange={(selected) => {
                if (!selected) return;

                if (selected.some((opt) => opt._id === "all")) {
                  setForm((prev) => ({
                    ...prev,
                    applicableToAllUsers: true,
                    applicableUsers: [],
                  }));
                } else {
                  setForm((prev) => ({
                    ...prev,
                    applicableToAllUsers: false,
                    applicableUsers: selected.map((u) => u._id),
                  }));
                }
              }}
              value={
                form.applicableToAllUsers
                  ? [{ _id: "all", email: "همه" }]
                  : users.filter((u) => form.applicableUsers?.includes(u._id))
              }
              menuIsOpen={form.applicableToAllUsers ? false : undefined}
            />
          </div>
          <div>
            <label className="block mb-1">انتخاب محصولات</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={[{ _id: "all", persianName: "همه" }, ...products]}
              getOptionLabel={(option) => option.persianName}
              getOptionValue={(option) => option._id}
              onChange={(selected) => {
                if (!selected) return;

                if (selected.some((opt) => opt._id === "all")) {
                  setForm((prev) => ({
                    ...prev,
                    applicableToAllProducts: true,
                    applicableProducts: [],
                  }));
                } else {
                  setForm((prev) => ({
                    ...prev,
                    applicableToAllProducts: false,
                    applicableProducts: selected.map((u) => u._id),
                  }));
                }
              }}
              value={
                form.applicableToAllProducts
                  ? [{ _id: "all", persianName: "همه" }]
                  : products.filter((u) =>
                      form.applicableProducts?.includes(u._id)
                    )
              }
              menuIsOpen={form.applicableToAllProducts ? false : undefined}
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
