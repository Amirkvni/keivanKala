"use client";
import React from "react";
import ProductImageUploader from "../ProductImageUploader";
import Image from "next/image";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";

function Uploader({ images, mainImage }) {
  return (
    <div className="flex flex-col gap-y-6 [&>span]:text-xs [&>span]:text-gray-500 bg-white dashboard-box-shadow">
      <p className="font-extrabold text-lg">تصویر محصول</p>
      <span>
        یک عکس محصول انتخاب کنید یا به سادگی تا ۵ عکس را اینجا بکشید و رها کنید.
      </span>

      <div className="grid grid-cols-3 gap-4 [&>div]:h-28 [&>div]:border [&>div]:border-gray-200 [&>div]:relative [&>div]:rounded-lg [&>div]:overflow-hidden [&>div]:p-1 [&>div>img]:w-full [&>div>img]:h-full">
        <div className="group">
          <Image
            src={mainImage}
            width={500}
            height={500}
            alt="mainProductImage"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-x-2 [&>svg]:text-xl [&>svg]:cursor-pointer [&>svg]:font-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <MdDeleteOutline className="text-green-500 " />
            <MdOutlineRemoveRedEye className="text-red-500" />
          </div>
        </div>
        {images &&
          images.map((image, indx) => (
            <div className="group" key={indx}>
              <Image
                src={image}
                width={500}
                height={500}
                alt={`picture-${indx + 1}`}
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-x-2 [&>svg]:text-xl  [&>svg]:cursor-pointer [&>svg]:font-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <MdDeleteOutline className="text-green-500" />
                <MdOutlineRemoveRedEye className="text-red-500" />
              </div>
            </div>
          ))}

        <ProductImageUploader />
      </div>

      <span>
        فرمت‌های تصویر: .jpg, .jpeg, .png، اندازه ترجیحی: ۱:۱، حداکثر حجم فایل:
        ۵۰۰ کیلوبایت.
      </span>
    </div>
  );
}

export default Uploader;
