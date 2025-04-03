import moment from "moment-jalaali";
import Image from "next/image";
import React from "react";
import { AiOutlineShop, AiTwotoneLike } from "react-icons/ai";
import { FaRegCircleCheck, FaRegStar } from "react-icons/fa6";
import { IoIosStar, IoMdMore } from "react-icons/io";
import { LuLoader } from "react-icons/lu";

function Comments({ comments }) {
  const shamsiDate = moment(comments.date).format("jD - jM -jYYYY");
  return (
    <div className="  flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit">
        دیدگاه های شما
      </span>
      <div className="flex flex-col gap-y-5  [&>div]:p-2  [&>div]:border-t-1 [&>div]:border-t-gray-200">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id}>
              <div className=" flex justify-between">
                <div>
                  <div className="flex gap-x-2 ">
                    <div className="w-18 h-18">
                      <Image
                        width={500}
                        height={500}
                        src={comment.productID.mainImage}
                      />
                    </div>
                    <p>{comment.productID.persianName}</p>
                  </div>
                  <div className="flex gap-x-2 items-center mt-3 text-xl">
                    {new Array(comment.score).fill(0).map((item, index) => (
                      <IoIosStar key={index} className="text-yellow-300" />
                    ))}
                    {new Array(5 - comment.score).fill(0).map((item, index) => (
                      <IoIosStar key={index} className="text-gray-400" />
                    ))}
                  </div>
                </div>
                <div>
                  <IoMdMore className="text-2xl mr-auto" />

                  {comment.isAccept ? (
                    <div className="flex bg-green-100 text-green-500 mt-3 items-center gap-x-1.5 p-1 rounded-lg">
                      <FaRegCircleCheck />
                      <span>تایید شده</span>
                    </div>
                  ) : (
                    <div className="flex bg-blue-100 text-blue-500 mt-3 items-center gap-x-1.5 p-1 rounded-lg">
                      <LuLoader />
                      <span>در انتطار تایید</span>
                    </div>
                  )}
                </div>
              </div>
              <hr className="text-gray-200 my-3" />
              <div>
                <span className="text-sm">{comment.body}</span>
                <hr className="text-gray-200 my-3" />
                <div className="flex justify-between items-center text-xs">
                  <div className="flex gap-x-3 items-center">
                    <div className="flex gap-x-1 items-center">
                      <span>کیوان کالا</span>
                      <AiOutlineShop />
                    </div>
                    <div className="flex gap-x-1 items-center">
                      <span>قرمز</span>
                      <span>{shamsiDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <span>این نظر برای ۳ نفر مفید بود</span>
                    <AiTwotoneLike />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>kir</p>
        )}
      </div>
    </div>
  );
}

export default Comments;
