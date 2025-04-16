"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Swal from "sweetalert2";

function Comments({ product, user }) {
  const [isLogin, SetIsLogin] = useState(false);
  const showCommentModal = () => {
    Swal.fire({
      html: `
            <div class="flex flex-col gap-y-2 ">
             <label htmlFor="comment" class="text-red-400 text-right">
              متن دیدگاه : *
              </label>
              <textarea id="comment" rows="4" cols="10" class="border border-gray-400 outline-none rounded-2xl"></textarea>
              <label htmlFor="comment" class="text-red-400 text-right">
              امتیاز: *
              </label>
    <input type="number" min="1" max="5" class="w-20 border p-2 border-gray-400 outline-none rounded-2xl" id="score"/>

            </div>
      `,
      confirmButtonColor: "#00ff00",
      confirmButtonText: "ارسال",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let body = document.querySelector("#comment").value;
        let score = document.querySelector("#score").value;
        let commment = {
          userID: user._id,
          username: user.firstname + " " + user.lastname,
          body,
          email: user.email,
          score,
          productID: product._id,
        };
        let res = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(commment),
        });
        if (res.status === 201) {
          Swal.fire({
            title:
              "کامنت شما ثبت و پس از تایید مدیریت در سایت نمایش داده میشود.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="mt-8 ">
      <p className=" border-b-2 gap-y-5 w-fit my-6 text-xl border-green-400 pb-2">
        امتیاز و دیدگاه کاربران
      </p>
      <div className="  flex gap-x-2 2xl:flex-row flex-col">
        {/* Write  comment section */}
        <div className=" w-1/4 ">
          <div className="sticky top-28 flex flex-row 2xl:flex-col gap-x-3 gap-y-6">
            <div className="flex items-center gap-x-1">
              <span className="font-bold text-xl">۳.۶</span>
              <span>از </span>
              <span>۵</span>
            </div>
            <div className="flex items-center gap-x-1">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStarHalf className="-scale-x-[1] text-yellow-400" />
              <FaStar className="text-gray-200" />
            </div>
            {!isLogin && (
              <div className="2xl:block hidden">
                <p className="font-semibold text-base">
                  شما هم درباره این کالا دیدگاه ثبت کنید
                </p>

                {user === undefined ? (
                  <Link
                    className=" border-red-400 border-2 text-red-500 bg-white w-full p-2 rounded-lg mt-4 block text-center text-lg"
                    href="/signin"
                  >
                    ثبت دیدگاه
                  </Link>
                ) : (
                  <button
                    className=" border-red-400 border-2 text-red-500 bg-white w-full p-2 rounded-lg mt-4 block text-center text-lg dark:border-red-200"
                    onClick={showCommentModal}
                  >
                    ثبت دیدگاه
                  </button>
                )}
              </div>
            )}

            {isLogin && <div></div>}
          </div>
        </div>
        {/* Comments section */}
        <div className=" w-full 2xl:w-3/4">
          {product.comments.map(
            (product) =>
              product.isAccept && (
                <div
                  className="border-b-2 border-b-gray-500 py-3 my-4 flex flex-col gap-y-2"
                  key={product._id}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-2 text-lg">
                      <span>{product.username}</span>
                      <span>خریدار</span>
                      <span>
                        {new Date(product.date).toLocaleDateString("fa-IR")}
                      </span>
                    </div>
                    <FiMoreVertical className="text-lg" />
                  </div>
                  <div className="flex gap-x-2 items-center  ">
                    {new Array(product.score).fill(0).map((item, index) => (
                      <FaStar key={index} className="text-yellow-400" />
                    ))}
                    {new Array(5 - product.score).fill(0).map((item, index) => (
                      <FaStar key={index} className="text-gray-400" />
                    ))}
                  </div>
                  <p className="text-lg">{product.body}</p>
                  <div
                    className="flex gap-x-2 justify-start items-center text-xl"
                    dir="ltr"
                  >
                    <AiOutlineLike className="cursor-pointer hover:text-green-800" />
                    <span>5</span>
                    <AiOutlineDislike className="cursor-pointer hover:text-red-800" />
                    <span>3</span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Comments;
