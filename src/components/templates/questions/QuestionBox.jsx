"use client";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { questions } from "@/constants/questions";
function QuestionBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("q") || "");
  const [openQuestions, setOpenQuestions] = useState([]);

  const [allQuestions, setAllQuestions] = useState([...questions]);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (searchText) {
      params.set("q", searchText);
    } else {
      params.delete("q");
    }
    router.replace(`?${params.toString()}`);

    if (searchText.trim()) {
      const filteredQa = questions
        .flatMap((section) => section.qa)
        .filter((item) =>
          item.question.toLowerCase().includes(searchText.toLowerCase())
        );

      setAllQuestions([{ id: "filtered", title: null, qa: filteredQa }]);
    } else {
      setAllQuestions([...questions]);
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
    <div className="flex 2xl:flex-row flex-col mt-[130px] mx-auto 2xl:w-[1000px] w-9/12  relative gap-x-2 [&>div]:rounded-lg ">
      {/* search section : */}
      <div
        className="w-full 2xl:w-4/12 bg-white flex flex-col gap-y-3 2xl:sticky 2xl:top-28 p-3 dark:bg-zinc-800 dark:text-white
      "
      >
        <h2 className="border-b-2 border-b-green-400 w-fit">سوالات متداول</h2>
        <div className="2xl:text-base ">
          <span className="text-xs 2xl:text-sm ">
            سوالات خود را پیدا نکردید ؟
            <Link href="/contact-us" className="text-green-400 pr-3">
              با ما تماس بگیرید
            </Link>
          </span>
        </div>
        <div className="relative ">
          <input
            type="text"
            className="w-full  outline-none p-3 rounded-xl dark:bg-zinc-700 dark:placeholder:text-white  bg-gray-100 placeholder:text-gray-600 text-xs 2xl:placeholder:text-sm 2xl:text-sm"
            placeholder="سوال خود را جستجو کنید ..."
            onChange={searchHandler}
            value={searchText}
          />
        </div>
      </div>

      <div className="w-full 2xl:w-8/12 flex flex-col gap-y-4 bg-white p-3 dark:bg-zinc-800 dark:text-white">
        {allQuestions.map((question, i) => (
          <div key={i} className="flex flex-col gap-y-3 ">
            {question.title && !searchText && (
              <span className="text-sm 2xl:text-lg pr-2 font-bold ">
                {question.title}
              </span>
            )}
            {question.qa.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleQuestion(item.id)}
                className="bg-gray-200 p-2 rounded-lg flex flex-col gap-y-2 cursor-pointer dark:bg-zinc-700"
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
                  className={`p-1 bg-gray-200 dark:bg-zinc-700 text-xs 2xl:text-base ${
                    openQuestions.includes(item.id) ? "block" : "hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        ))}
        {allQuestions[0]?.qa.length === 0 && searchText.trim() && (
          <p className="text-center text-gray-500">
            سوالی مطابق با جستجوی شما یافت نشد.
          </p>
        )}
      </div>
    </div>
  );
}

export default QuestionBox;
