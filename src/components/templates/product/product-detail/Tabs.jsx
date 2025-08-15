"use client";
import React, { useState } from "react";
import Description from "./Description";
import Details from "./Details";
import Comments from "./Comments";

function Tabs({ product, user }) {
  const [tab, setTab] = useState("description");
  return (
    <div className="container mx-auto mt-7 shadow-xl px-10 bg-white py-6 border-1 border-gray-200 rounded-xl dark:bg-zinc-800 dark:border-none dark:text-gray-300 ">
      <div className="flex gap-x-8 items-center [&>button]:cursor-pointer [&>button]:text-sm lg:[&>button]:text-xl [&>button]:font-medium pb-3 ">
        <button
          className={
            tab === "description" ? "border-b-3 border-green-300 " : ""
          }
          onClick={() => setTab("description")}
        >
          معرفی
        </button>
        <button
          className={tab === "details" ? "border-b-3 border-green-300 " : ""}
          onClick={() => setTab("details")}
        >
          مشخصات
        </button>
        <button
          className={
            tab === "comments"
              ? "border-b-3 border-green-300 relative"
              : "relative"
          }
          onClick={() => setTab("comments")}
        >
          دیدگاه ها
          <span className="absolute -top-1 right-full bg-green-300 w-2 h-2 rounded-full flex justify-center items-center p-2 text-sm dark:bg-green-700">
            {product.comments.filter((product) => product.isAccept).length}
          </span>
        </button>
      </div>
      <div>
        <section>
          {tab === "description" && <Description product={product} />}
          <section>
            {tab === "details" && <Details product={product} />}
          </section>
          <section>
            {tab === "comments" && <Comments product={product} user={user} />}
          </section>
        </section>
      </div>
    </div>
  );
}

export default Tabs;
