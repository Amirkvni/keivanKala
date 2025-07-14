"use client";
import React from "react";
import Image from "next/image";
import moment from "moment-jalaali";
import { AiOutlineShop, AiTwotoneLike } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosStar, IoMdMore } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
function CommentItem({ comment }) {
  const shamsiDate = moment(comment.date).format("jD - jM -jYYYY");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const showCommentMore = () => {
    setIsDropdownOpen(true);
  };
  const deleteHandler = async (commentId) => {
    Swal.fire({
      title: "آیا این نظر حذف شود؟",
      showCancelButton: true,
      cancelButtonText: "انصراف",
      confirmButtonText: "حذف",
      confirmButtonColor: "red",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`/api/comments/${commentId}`, {
            method: "DELETE",
          });

          if (res.ok) {
            Swal.fire("نظر شما حذف شد!", "", "success").then(() => {});
            router.refresh();
          } else {
            const data = await res.json();
            Swal.fire("خطا!", data.message || "حذف انجام نشد", "error");
          }
        } catch (error) {
          Swal.fire("خطا!", "مشکلی در سرور پیش آمده", "error");
          console.error("delete error:", error);
        }
      }
    });
  };
  const editHandler = async (commentId) => {
    const { value: formValues } = await Swal.fire({
      title: "ویرایش نظر",
      html:
        `<textarea id="swal-input1" class="swal2-textarea" placeholder="متن نظر"></textarea>` +
        `<input id="swal-input2" type="number" min="1" max="5" class="swal2-input" placeholder="امتیاز (1 تا 5)">`,
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: "انصراف",
      confirmButtonText: "ذخیره",
      preConfirm: () => {
        const text = document.getElementById("swal-input1").value.trim();
        const rating = parseInt(document.getElementById("swal-input2").value);
        if (!text) {
          Swal.showValidationMessage("لطفا متن نظر را وارد کنید");
          return false;
        }
        if (!(rating >= 1 && rating <= 5)) {
          Swal.showValidationMessage("امتیاز باید بین 1 تا 5 باشد");
          return false;
        }
        return { text, rating };
      },
    });

    if (formValues) {
      try {
        const res = await fetch(`/api/comments/${commentId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        });

        if (res.ok) {
          Swal.fire(
            "ویرایش شد!",
            "نظر شما با موفقیت ویرایش شد",
            "success"
          ).then(() => {
            location.reload();
          });
        } else {
          const data = await res.json();
          Swal.fire("خطا!", data.message || "ویرایش انجام نشد", "error");
        }
      } catch (error) {
        Swal.fire("خطا!", "مشکلی در سرور پیش آمده", "error");
        console.error("edit error:", error);
      }
    }
  };
  return (
    <>
      <div className=" flex justify-between ">
        <div>
          <div className="flex 2xl:gap-x-2  ">
            <div className="w-18 h-18">
              <Image
                width={500}
                height={500}
                loading="lazy"
                src={comment.productID.mainImage}
                alt={comment.productID.persianName}
              />
            </div>
            <p className="text-xs 2xl:text-lg">
              {comment.productID.persianName}
            </p>
          </div>
          <div className="flex gap-x-2 items-center mt-3 text-xl">
            {new Array(comment.score).fill(0).map((item, index) => (
              <IoIosStar
                key={index}
                className="text-yellow-300 text-base 2xl:text-lg"
              />
            ))}
            {new Array(5 - comment.score).fill(0).map((item, index) => (
              <IoIosStar
                key={index}
                className="text-gray-400 text-base 2xl:text-lg"
              />
            ))}
          </div>
        </div>
        <div className="relative ">
          <IoMdMore
            className="text-2xl mr-auto cursor-pointer"
            onMouseEnter={showCommentMore}
          />
          <div
            className={`2xl:w-56 2xl:h-22  w-42 h-16 absolute left-0 top-6 [&>div]:flex [&>div]:items-center [&>div]:gap-x-3 [&>div]:p-2 [&>div]:cursor-pointer  [&>div]:hover:bg-gray-300  bg-white rounded-sm ${
              isDropdownOpen ? "block" : "hidden"
            }`}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div
              className="dark:text-black"
              onClick={() => editHandler(comment._id)}
            >
              <FaRegEdit />
              <span className="text-xs 2xl:text-sm ">
                ویرایش دیدگاه و امتیاز
              </span>
            </div>
            <div
              className="dark:text-black"
              onClick={() => deleteHandler(comment._id)}
            >
              <RiDeleteBin5Line className="text-red-400" />
              <span className="text-xs 2xl:text-sm ">حذف دیدگاه</span>
            </div>
          </div>
          {comment.isAccept ? (
            <div className=" bg-green-100 text-green-500  check-comment">
              <FaRegCircleCheck />
              <span>تایید شده</span>
            </div>
          ) : (
            <div className=" bg-blue-100 text-blue-500  check-comment ">
              <LuLoader />
              <span>در انتطار تایید</span>
            </div>
          )}
        </div>
      </div>
      <hr className="text-gray-200 my-3" />
      <div>
        <span className="text-sm 2xl:text-base">{comment.body}</span>
        <hr className="text-gray-200 my-3" />
        <div className="flex justify-between items-center text-[9px] 2xl:text-xs ">
          <div className="flex 2xl:gap-x-3 items-center">
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
    </>
  );
}

export default CommentItem;
