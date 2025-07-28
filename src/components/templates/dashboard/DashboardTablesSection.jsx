import React from "react";
import DashboardTable from "./DashboardTable";

function DashboardTablesSection() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <DashboardTable
        title="کاربران اخیر"
        columns={["نام", "نقش", "وضعیت", "اخرین ورود"]}
        data={[
          {
            نام: "امیرحسین کیوانی",
            نقش: "مدیر",
            "اخرین ورود": "۲۰۱۹/۰۵/۰۸",
            وضعیت: "تایید شده",
          },
          {
            نام: "امیرحسین کیوانی",
            نقش: "کاربر",
            "اخرین ورود": "۲۰۱۹/۰۵/۰۸",
            وضعیت: "تایید شده",
          },
        ]}
        bgColor="bg-blue-100"
        textColor="text-blue-800"
        borderColor="border-blue-200"
      />
      <DashboardTable
        title="نظرات اخیر"
        columns={["محصول", "کاربر", "تاریخ", "وضعیت"]}
        data={[
          {
            محصول: "کیف درسا مدل یبسب",
            کاربر: "امیرحسین کیوانی",
            تاریخ: "۲۰۱۹/۰۵/۰۸",
            وضعیت: "تایید شده",
          },
          {
            محصول: "کفش اسپرت مدل X",
            کاربر: "فاطمه رضایی",
            تاریخ: "۲۰۱۹/۰۶/۱۲",
            وضعیت: "در انتظار",
          },
        ]}
        bgColor="bg-green-100"
        textColor="text-green-800"
        borderColor="border-green-200"
      />

      <DashboardTable
        title="پرفروش‌ترین محصولات"
        columns={["محصول", "تعداد فروش", "موجودی", "قیمت"]}
        data={[
          {
            محصول: "کیف درسا مدل یبسب",
            "تعداد فروش": "64754",
            موجودی: "523",
            قیمت: "4242",
          },
          {
            محصول: "لباس مردانه مدل A",
            "تعداد فروش": "123213",
            موجودی: "432",
            قیمت: "4324",
          },
        ]}
        bgColor="bg-pink-100"
        textColor="text-pink-800"
        borderColor="border-pink-200"
      />
    </div>
  );
}

export default DashboardTablesSection;
