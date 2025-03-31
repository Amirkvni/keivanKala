import React from "react";

function Description() {
  return (
    <div className="contianer mt-[130px] mx-auto 2xl:w-[1000px] w-10/12 flex flex-col gap-y-4 bg-white 2xl:p-6 p-1 rounded-lg">
      <h2 className=" border-b-green-500 border-b-2 w-fit text-2xl">مقدمه </h2>
      <p className="text-lg">
        سلام . به سایت کیوان کالا خوش اومدی. این وبسایت یه سایت فروشگاهیه که
        قراره توی رزومه من باشه. من امیرحسین کیوانی دانشجوی مهندسی نرم افزار و
        برنامه نویس فرانت اند هستم و این وبسایت رو جهت قرار دادن در رزومه خودم
        توسعه دادم.
      </p>
      <span className="text-lg text-green-600">
        از چه تکنولوژی ها و زبان هایی در این وبسایت استفاده شده ؟
      </span>
      <p className="text-sm ">
        این وبسایت با استفاده از <span className="text-red-300 ">ری اکت </span>،
        <span className="text-red-300 "> تیلویند </span>و
        <span className="text-red-300 "> فریم ورک نکست جی اس </span>
        نوشته شده و از پایگاه داده
        <span className="text-red-300 "> مونگو دی بی </span> استفاده شده است.
      </p>
      <span className="text-lg text-green-600">
        از چه کتابخانه های در این پروژه استفاده کردی؟
      </span>
      <p className="text-sm ">
        در حال حاضر از لایبری های زیر در توسعه این وبسایت استفاده شده :
      </p>
      <ul className="text-red-300 list-disc list-inside text-sm ">
        <li>bcryptjs</li>
        <li>jsonwebtoken</li>
        <li>moment-jalaali</li>
        <li>mongoose</li>
        <li>react-icons</li>
        <li>sweetalert2</li>
        <li>swiper</li>
        <li>....</li>
      </ul>
      <span className="text-lg text-green-600">
        چه زمانی توسعه این سایت شروع و کی تموم شد؟
      </span>
      <p className="text-sm ">
        استارت توسعه این وبسایت از
        <span className="text-lg text-red-300"> یک اسفند 1403 </span> بوده و
        همچنان در حال تکامل و بزرگ تر شدن هست و هنوز تکمیل نشده است.
      </p>
      <span className="text-green-600 text-lg">
        از کدام نسخه نکست جی اس و تیلویند در این پروژه استفاده شده؟
      </span>
      <p className="text-sm ">
        در حال حاضر از اخرین نسخه نکست جی اس
        <span className="text-red-300"> (app router) (12)</span> و تیلویند
        <span className="text-red-300"> 4 </span> استفاده شده است.
      </p>
      <span className="text-lg text-green-600">
        قابلیت های این سایت در یک نگاه :
      </span>
      <ul className="text-red-300 list-disc list-inside text-sm ">
        <li>قابلیت ثبت نام و ورود کاربر با شماره تماس ، اس ام اس و ایمیل</li>
        <li>پنل ادمین پیشرفته</li>
        <li>پنل کاربری پیشرفته</li>
        <li>سبد خرید پیشرفته و درگاه پرداخت</li>
        <li>امکان چت با پشتیبانی و ثبت تیکت</li>
        <li>پایگاه داده ، api و بک اند پیشرفته </li>
        <li>....</li>
      </ul>
    </div>
  );
}

export default Description;
