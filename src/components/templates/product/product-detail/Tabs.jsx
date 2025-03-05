"use client";
import React, { useState } from "react";
import Description from "./Description";
import Details from "./Details";
import Comments from "./Comments";

function Tabs({ product }) {
  const [tab, setTab] = useState("description");
  return (
    <div className="container mx-auto mt-7 shadow-sm px-3">
      <div className="flex gap-x-8 items-center [&>button]:cursor-pointer">
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
        <button
          className={tab === "comments" ? "border-b-2 border-green-300 " : ""}
          onClick={() => setTab("comments")}
        >
          دیدگاه ها
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
