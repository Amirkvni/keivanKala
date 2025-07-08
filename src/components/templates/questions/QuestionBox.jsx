"use client";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
function QuestionBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("q") || "");
  const [openQuestions, setOpenQuestions] = useState([]);
  const q = [
    {
      id: 212131,
      title: "سوالات متداول درباره خرید",
      qa: [
        {
          id: 1,
          question: "چگونه می‌توانم محصولی را سفارش دهم؟",
          answer:
            "شما می‌توانید با انتخاب محصول مورد نظر و افزودن آن به سبد خرید، فرآیند خرید را تکمیل کنید.",
        },
        {
          id: 2,
          question: "آیا امکان پرداخت در محل وجود دارد؟",
          answer:
            "بله، ما امکان پرداخت در محل را برای سفارشات داخل شهر فراهم کرده‌ایم.",
        },
        {
          id: 3,
          question: "چگونه می‌توانم سفارش خود را پیگیری کنم؟",
          answer:
            "شما می‌توانید با مراجعه به بخش پیگیری سفارش و وارد کردن کد رهگیری، وضعیت سفارش خود را بررسی کنید.",
        },
        {
          id: 4,
          question: "آیا امکان بازگرداندن کالا وجود دارد؟",
          answer:
            "بله، در صورت وجود مشکل در کالا، شما می‌توانید تا ۷ روز پس از دریافت، کالا را بازگردانید.",
        },
        {
          id: 5,
          question: "هزینه ارسال چگونه محاسبه می‌شود؟",
          answer: "هزینه ارسال بر اساس وزن کالا و مسافت ارسال محاسبه می‌شود.",
        },
      ],
    },
    {
      id: 256231,
      title: "سوالات متداول درباره حساب کاربری",
      qa: [
        {
          id: 6,
          question: "چگونه می‌توانم حساب کاربری ایجاد کنم؟",
          answer:
            "شما می‌توانید با کلیک روی گزینه 'ثبت نام' و پر کردن فرم مربوطه، حساب کاربری خود را ایجاد کنید.",
        },
        {
          id: 7,
          question: "چگونه رمز عبور خود را تغییر دهم؟",
          answer:
            "شما می‌توانید از بخش 'فراموشی رمز عبور' در صفحه ورود، رمز عبور خود را تغییر دهید.",
        },
        {
          id: 8,
          question: "آیا امکان ویرایش اطلاعات حساب کاربری وجود دارد؟",
          answer:
            "بله، شما می‌توانید از بخش 'ویرایش پروفایل' اطلاعات حساب کاربری خود را به روز رسانی کنید.",
        },
        {
          id: 9,
          question: "چگونه می‌توانم آدرس خود را تغییر دهم؟",
          answer:
            "شما می‌توانید از بخش 'مدیریت آدرس‌ها' در حساب کاربری خود، آدرس‌های ثبت شده را ویرایش یا حذف کنید.",
        },
        {
          id: 10,
          question: "آیا امکان حذف حساب کاربری وجود دارد؟",
          answer:
            "بله، شما می‌توانید از بخش 'تنظیمات حساب' درخواست حذف حساب کاربری خود را ارسال کنید.",
        },
      ],
    },
  ];
  const [questions, setQuestions] = useState([...q]);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (searchText) {
      params.set("q", searchText);
    } else {
      params.delete("q");
    }
    router.replace(`?${params.toString()}`);

    if (searchText.trim()) {
      const filteredQa = q
        .flatMap((section) => section.qa)
        .filter((item) =>
          item.question.toLowerCase().includes(searchText.toLowerCase())
        );

      setQuestions([{ id: "filtered", title: null, qa: filteredQa }]);
    } else {
      setQuestions([...q]);
    }
  }, [searchText]);
  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };
  const toggleQuestion = (id) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((qid) => qid !== id) : [...prev, id]
    );
  };
  return (
    <div className="flex 2xl:flex-row flex-col mt-[130px] mx-auto 2xl:w-[1000px] w-9/12  relative gap-x-2 [&>div]:rounded-lg">
      {/* search section : */}
      <div className="w-full 2xl:w-4/12 bg-white flex flex-col gap-y-3 2xl:sticky 2xl:top-28 p-3">
        <h2 className="border-b-2 border-b-green-400 w-fit">سوالات متداول</h2>
        <div className="2xl:text-base ">
          <span className="text-xs 2xl:text-sm">
            سوالات خود را پیدا نکردید ؟
            <Link href="/contact-us" className="text-green-400 pr-3">
              با ما تماس بگیرید
            </Link>
          </span>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full  outline-none p-3 rounded-xl  bg-gray-100 placeholder:text-gray-600 text-xs 2xl:placeholder:text-sm 2xl:text-sm"
            placeholder="سوال خود را جستجو کنید ..."
            onChange={searchHandler}
            value={searchText}
          />
        </div>
      </div>

      <div className="w-full 2xl:w-8/12 flex flex-col gap-y-4 bg-white p-3">
        {questions.map((question, i) => (
          <div key={i} className="flex flex-col gap-y-3 ">
            {question.title && !searchText && (
              <span className="text-sm 2xl:text-lg pr-2 font-bold">
                {question.title}
              </span>
            )}
            {question.qa.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleQuestion(item.id)}
                className="bg-gray-200 p-2 rounded-lg flex flex-col gap-y-2 cursor-pointer"
              >
                <div className="flex justify-between items-center ">
                  <span className="text-xs font-semibold 2xl:text-base 2xl:font-normal">
                    {item.question}
                  </span>
                  {openQuestions.includes(item.id) ? (
                    <FaAngleDown />
                  ) : (
                    <FaAngleUp />
                  )}
                </div>
                <div
                  className={`p-1 bg-gray-200 text-xs 2xl:text-base ${
                    openQuestions.includes(item.id) ? "block" : "hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        ))}
        {questions[0]?.qa.length === 0 && searchText.trim() && (
          <p className="text-center text-gray-500">
            سوالی مطابق با جستجوی شما یافت نشد.
          </p>
        )}
      </div>
    </div>
  );
}

export default QuestionBox;
