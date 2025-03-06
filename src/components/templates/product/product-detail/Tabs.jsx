"use client";
import React, { useState } from "react";
import Description from "./Description";
import Details from "./Details";
import Comments from "./Comments";

function Tabs({ product }) {
  const [tab, setTab] = useState("description");
  return (
    <div className="container mx-auto mt-7 shadow-xl px-3 bg-white py-3 border-1 border-gray-200 rounded-xl">
      <div className="flex gap-x-8 items-center [&>button]:cursor-pointer [&>button]:text-lg border-b-2 pb-3 border-gray-100">
        <button
          className={
            tab === "description" ? "border-b-2 border-green-300 " : ""
          }
          onClick={() => setTab("description")}
        >
          معرفی
        </button>
        <button
          className={tab === "details" ? "border-b-2 border-green-300 " : ""}
          onClick={() => setTab("details")}
        >
          مشخصات
        </button>
        <button className="relative" onClick={() => setTab("comments")}>
          دیدگاه ها
          <span className="absolute -top-1 right-full bg-green-300 w-2 h-2 rounded-full flex justify-center items-center p-2 text-sm">
            {product.comments.filter((product) => product.isAccept).length}
          </span>
        </button>
      </div>
      {/* contents : */}
      <div>
        <section>
          {tab === "description" && <Description product={product} />}
          <section>
            {tab === "details" && <Details product={product} />}
          </section>
          <section>
            {tab === "comments" && <Comments product={product} />}
          </section>
        </section>
      </div>
    </div>
  );
}

export default Tabs;
