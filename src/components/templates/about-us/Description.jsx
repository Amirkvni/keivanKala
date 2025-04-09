import React from "react";

function Description() {
  return (
    <div className="contianer mt-[130px] mx-auto 2xl:w-[1000px] [&>p]:text-sm w-10/12 flex flex-col [&>span]:text-lg [&>span]:text-green-600 gap-y-4 bg-white 2xl:p-6 p-1 rounded-lg dark:bg-zinc-800 dark:text-white [&>ul]:text-red-600 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:text-sm">
      <h2 className=" border-b-green-500 border-b-2 w-fit text-2xl">مقدمه </h2>
      <h4 className="text-lg">
        سلام . به سایت کیوان کالا خوش اومدی. این وبسایت یه سایت فروشگاهیه که
        قراره توی رزومه من باشه. من امیرحسین کیوانی دانشجوی مهندسی نرم افزار و
        برنامه نویس فرانت اند هستم و این وبسایت رو جهت قرار دادن در رزومه خودم
        توسعه دادم.
      </h4>
      <span>از چه تکنولوژی ها و زبان هایی در این وبسایت استفاده شده ؟</span>
      <p>
        این وبسایت با استفاده از <span className="text-red-600 ">ری اکت </span>،
        <span className="text-red-600 "> تیلویند </span>و
        <span className="text-red-600 "> فریم ورک نکست جی اس </span>
        نوشته شده و از پایگاه داده
        <span className="text-red-600 "> مونگو دی بی </span> استفاده شده است.
      </p>
      <span>از چه کتابخانه های در این پروژه استفاده کردی؟</span>
      <p>در حال حاضر از لایبری های زیر در توسعه این وبسایت استفاده شده :</p>
      <ul>
        <li>bcryptjs</li>
        <li>jsonwebtoken</li>
        <li>moment-jalaali</li>
        <li>mongoose</li>
        <li>react-icons</li>
        <li>sweetalert2</li>
        <li>swiper</li>
        <li>....</li>
      </ul>
      <span>چه زمانی توسعه این سایت شروع و کی تموم شد؟</span>
      <p>
        استارت توسعه این وبسایت از
        <span className="text-lg text-red-600"> یک اسفند 1403 </span> بوده و
        همچنان در حال تکامل و بزرگ تر شدن هست و هنوز تکمیل نشده است.
      </p>
      <span>
        از کدام نسخه نکست جی اس و تیلویند در این پروژه استفاده شده؟
      </span>
      <p>
        در حال حاضر از اخرین نسخه نکست جی اس
        <span className="text-red-600"> (app router) (15)</span> و تیلویند
        <span className="text-red-600"> 4 </span> استفاده شده است.
      </p>
      <span>قابلیت های این سایت در یک نگاه :</span>
      <ul>
        <li> ثبت نام و ورود کاربر با شماره تماس ، اس ام اس و ایمیل</li>
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
