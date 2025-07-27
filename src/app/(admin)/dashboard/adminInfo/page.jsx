"use client";
import Image from "next/image";
import React, { useState } from "react";
import adminPic from "@/assets/adminProfile.jpg";
import s1 from "@/assets/s1.jpg";
import Link from "next/link";
import { FaGithub, FaNewspaper, FaRegUserCircle } from "react-icons/fa";
function page() {
  const [status, setStatus] = useState("aboutme");
  return (
    <div className="p-12">
      <div>پروفایل شما </div>

      <div className=" gap-x-6 [&>div]:rounded-sm  [&>div]: mt-6 flex">
        <div
          className="w-[500px]  flex flex-col items-center gap-y-4  bg-white p-3 rounded-lg  overflow-hidden"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image src={adminPic} width={500} height={500} alt="adminPic" />
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <span className="text-xl">پریسا توکلی</span>
            <span className="text-sm">توسعه دهنده فرانت اند</span>
            <span className="text-sm">ایران، تهران</span>
          </div>

          <div className="text-sm text-gray-600 ">
            <p>بیوگرافی</p>
            <p className="mt-2">
              سارا نادری یکی از طراحان موفق در حوزه طراحی رابط کاربری است که با
              بیش از ۷ سال تجربه در شرکت‌های نوآور ایرانی، توانسته پروژه‌های
              بزرگی مانند اپلیکیشن‌های مالی، فروشگاه‌های اینترنتی و سامانه‌های
              دولتی را طراحی کند. او به خاطر توجه بالا به جزئیات و درک عمیق از
              تجربه کاربری، بارها از سوی مشتریان مورد تقدیر قرار گرفته است.
            </p>
          </div>

          <div className=" flex justify-around w-full [&>div]:text-center">
            <div>
              <p>2</p>
              <p>سال فعالیت</p>
            </div>
            <div>
              <p>2</p>
              <p>بلاگ ها</p>
            </div>
            <div>
              <p>1</p>
              <p>نوشته ها</p>
            </div>
          </div>
          <div className=" w-full">
            <span>سوشال مدیا :</span>
            <div className="flex flex-col gap-y-2 [&>div]:flex [&>div]:gap-x-4 [&>div]:items-center [&>div>svg]:text-3xl [&>div>div]:text-sm">
              <div>
                <FaGithub className="" />
                <div>
                  <p>githun</p>
                  <Link href="/">github.com/spruko</Link>
                </div>
              </div>{" "}
              <div>
                <FaGithub />
                <div>
                  <p>githun</p>
                  <Link href="/">github.com/spruko</Link>
                </div>
              </div>{" "}
              <div>
                <FaGithub />
                <div>
                  <p>githun</p>
                  <Link href="/">github.com/spruko</Link>
                </div>
              </div>{" "}
              <div>
                <FaGithub />
                <div>
                  <p>githun</p>
                  <Link href="/">github.com/spruko</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <span>مهارت ها :</span>
            <div className="flex flex-col gap-y-6">
              <div>
                <span>html :</span>
                <div className="w-full h-2 rounded-sm bg-gray-200 relative overflow-hidden p-0.5">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-red-500"></div>
                </div>
              </div>
              <div>
                <span>html :</span>
                <div className="w-full h-2 rounded-sm bg-gray-200 relative overflow-hidden p-0.5">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-red-500"></div>
                </div>
              </div>
              <div>
                <span>html :</span>
                <div className="w-full h-2 rounded-sm bg-gray-200 relative overflow-hidden p-0.5">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-red-500"></div>
                </div>
              </div>
              <div>
                <span>html :</span>
                <div className="w-full h-2 rounded-sm bg-gray-200 relative overflow-hidden p-0.5">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-red-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  flex flex-col gap-y-6 ">
          <div className=" flex items-center gap-x-6 [&>button]:flex  [&>button]:cursor-pointer [&>button]:items-center [&>button]:gap-x-2 [&>button]:p-2 [&>button]:rounded-sm">
            <button
              className={`${
                status === "aboutme" && "  border-b-green-400 border-b-2"
              }`}
              onClick={() => setStatus("aboutme")}
            >
              درباره من <FaRegUserCircle />
            </button>
            <button
              className={`${
                status === "blogs" && "  border-b-green-400 border-b-2"
              }`}
              onClick={() => setStatus("blogs")}
            >
              پست ها <FaNewspaper />
            </button>
          </div>
          {status === "aboutme" ? (
            <>
              <div
                className="bg-white grid grid-cols-2 w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-y-3 p-3 rounded-lg overflow-hidden"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <div>
                  <span>نام کامل :</span>
                  <span>ایمیل :</span>
                  <span>شماره تماس :</span>
                  <span>ادرس کامل :</span>
                  <span>کدملی :</span>
                  <span>تاریخ تولد :</span>
                  <span>تحصیلات: </span>
                  <span>سمت :</span>
                </div>
                <div>
                  <span>پریسا توکلی</span>
                  <span>توکلی@gmail.com</span>
                  <span>09123456789</span>
                  <span>میدان یامنی، پلاستیک، تهران</span>
                  <span>4124124124</span>
                  <span>1382/1/15</span>
                  <span> کارشناسی ارشد طراحی تعاملی از دانشگاه هنر تهران</span>
                  <span>مدیراصلی </span>
                </div>
              </div>
              <div
                className="p-3 bg-white flex flex-col gap-y-3 [&>div]:border-b [&>div]:border-b-gray-200 [&>div]:p-2 rounded-lg overflow-hidden"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <span>سوابق :</span>
                <div>
                  <p>سازنده اپلیکیشن های مالی</p>
                  <span>www.xxdaf.com</span>
                  <p>2014-2016</p>
                </div>{" "}
                <div>
                  <p>سازنده اپلیکیشن های مالی</p>
                  <span>www.xxdaf.com</span>
                  <p>2014-2016</p>
                </div>{" "}
                <div>
                  <p>سازنده اپلیکیشن های مالی</p>
                  <span>www.xxdaf.com</span>
                  <p>2014-2016</p>
                </div>
              </div>
            </>
          ) : (
            <div className="p-3 [&>div]:bg-white flex flex-col gap-y-5 [&>div]:p-6  [&>div]:flex  [&>div]:flex-col  [&>div]:gap-y-4   [&>div]:rounded-lg">
              <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <div className="flex items-center gap-x-3 ">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={adminPic}
                      width={400}
                      height={400}
                      alt="adninpuc"
                    />
                  </div>
                  <div>
                    <p>امیرحسین کیوانی </p>
                    <p>۱سال پیش</p>
                  </div>
                </div>
                <p>
                  Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he
                  nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap labkez
                  eddu suk. Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik
                  disan he nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap
                  labkez eddu suk. Nu kek vuzkibsu mooruno ejepogojo uzjon gag
                  fa ezik disan he nah. Wij wo pevhij tumbug rohsa ahpi ujisapse
                  lo vap labkez eddu suk.
                </p>
                <div className="w-[800px] mx-auto">
                  <Image width={1000} height={1000} src={s1} alt="postPic" />
                </div>
                <p>
                  Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he
                  nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap labkez
                  eddu suk. Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik
                  disan he nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap
                  labkez eddu suk. Nu kek vuzkibsu mooruno ejepogojo uzjon gag
                  fa ezik disan he nah. Wij wo pevhij tumbug rohsa ahpi ujisapse
                  lo vap labkez eddu suk.
                </p>
              </div>
              <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <div className="flex items-center gap-x-3 ">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={adminPic}
                      width={400}
                      height={400}
                      alt="adninpuc"
                    />
                  </div>
                  <div>
                    <p>امیرحسین کیوانی </p>
                    <p>۱سال پیش</p>
                  </div>
                </div>
                <p>
                  Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he
                  nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap labkez
                  eddu suk. Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik
                  disan he nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap
                  labkez eddu suk. Nu kek vuzkibsu mooruno ejepogojo uzjon gag
                  fa ezik disan he nah. Wij wo pevhij tumbug rohsa ahpi ujisapse
                  lo vap labkez eddu suk.
                </p>
                <div className="w-[800px] mx-auto">
                  <Image width={1000} height={1000} src={s1} alt="postPic" />
                </div>{" "}
                <p>
                  Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he
                  nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap labkez
                  eddu suk. Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik
                  disan he nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap
                  labkez eddu suk. Nu kek vuzkibsu mooruno ejepogojo uzjon gag
                  fa ezik disan he nah. Wij wo pevhij tumbug rohsa ahpi ujisapse
                  lo vap labkez eddu suk.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
