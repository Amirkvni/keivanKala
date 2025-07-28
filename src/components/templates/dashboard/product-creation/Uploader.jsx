"use client";
import React from "react";
import ProductImageUploader from "../ProductImageUploader";

function Uploader() {
  return (
    <div className="flex flex-col gap-y-6 [&>span]:text-xs [&>span]:text-gray-500 bg-white dashboard-box-shadow">
      <p className="font-extrabold text-lg">تصویر محصول</p>
      <span>
        یک عکس محصول انتخاب کنید یا به سادگی تا ۵ عکس را اینجا بکشید و رها کنید.
      </span>
      <ProductImageUploader />
      <span>
        فرمت‌های تصویر: .jpg, .jpeg, .png، اندازه ترجیحی: ۱:۱، حداکثر حجم فایل:
        ۵۰۰ کیلوبایت.
      </span>
    </div>
  );
}

export default Uploader;
