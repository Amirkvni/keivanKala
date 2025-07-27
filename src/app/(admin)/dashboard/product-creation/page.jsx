import ProductImageUploader from "@/components/templates/dashboard/ProductImageUploader";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function page() {
  return (
    <div className="p-12">
      <span className="text-xl font-bold">ایجاد محصول</span>
      <div className="flex gap-x-2 mt-5 [&>div]:p-4 [&>div]:rounded-lg ">
        <div className="w-8/12  flex flex-col gap-y-4  [&>div]:p-6">
          <div className="bg-white rounded-lg dashboard-box-shadow flex flex-col gap-y-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2  [&>div>input]:p-2 [&>div>input]:rounded-sm [&>div>input]:outline-none ">
            <span className="font-extrabold text-lg">اطلاعات پایه</span>
            <div className="mt-4">
              <label htmlFor="">نام کالا (فارسی) :</label>
              <input type="text" className="edit-profile-input" />
            </div>
            <div className="">
              <label htmlFor="">نام کالا (انگلیسی) :</label>
              <input type="text" className="edit-profile-input" />
            </div>
            <div className="">
              <label htmlFor="">کد کالا :</label>
              <input type="text" className="edit-profile-input" />
            </div>
          </div>
          <div className="bg-white dashboard-box-shadow rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-extrabold text-lg">ویژگی های محصول</span>
              <button className="bg-green-400 rounded-lg p-2 cursor-pointer text-white">
                افزودن
              </button>
            </div>
            <div className="mt-3 [&>div>input]:outline-none  [&>div>input]:p-2 [&>div>input]:rounded-sm flex flex-col gap-y-3  [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center">
              <div>
                <input
                  className="edit-profile-input"
                  type="text"
                  placeholder="عنوان"
                />
                <span>:</span>
                <input
                  className="edit-profile-input"
                  type="text"
                  placeholder="توضیحات"
                />
              </div>
              <div>
                <input
                  className="edit-profile-input"
                  type="text"
                  placeholder="عنوان"
                />
                <span>:</span>
                <input
                  className="edit-profile-input"
                  type="text"
                  placeholder="توضیحات"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-5 [&>div]:bg-white [&>div]:p-4 [&>div]:rounded-lg ">
            <div className="dashboard-box-shadow">
              <div className="flex justify-between items-center ">
                <span className="font-extrabold text-lg">رنگ ها</span>
                <button className="bg-green-400 rounded-lg p-2 cursor-pointer text-white">
                  افزودن
                </button>
              </div>
              <div className="mt-3 [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center flex flex-col gap-y-3 ">
                <div>
                  <label htmlFor="">رنگ اول</label>
                  <span>:</span>
                  <select name="" id="" className="dashboard-box-shadow">
                    <option value="">قرمز</option>
                    <option value="">زرد</option>
                    <option value="">نارنجی</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">رنگ دوم</label>
                  <span>:</span>
                  <select name="" id="" className="dashboard-box-shadow">
                    <option value="">قرمز</option>
                    <option value="">زرد</option>
                    <option value="">نارنجی</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="[&>div]:flex dashboard-box-shadow ">
              <span className="font-extrabold text-lg">قیمت گذاری</span>
              <div className="mt-4 flex-col gap-y-6 [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center [&>div>input]:outline-none">
                <div>
                  <label htmlFor="">قیمت :</label>
                  <input type="text" className="edit-profile-input" />
                </div>
                <div>
                  <label htmlFor=""> قیمت تخفیف :</label>
                  <input type="text" className="edit-profile-input" />
                </div>
                <div>
                  <label htmlFor="">درصد تخفیف(%) :</label>
                  <input type="text" className="edit-profile-input" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12  flex flex-col gap-y-4  [&>div]:p-4  [&>div]:rounded-lg ">
          <div className="flex flex-col gap-y-6 [&>span]:text-xs [&>span]:text-gray-500 bg-white dashboard-box-shadow">
            <p className="font-extrabold text-lg">تصویر محصول</p>
            <span>
              یک عکس محصول انتخاب کنید یا به سادگی تا ۵ عکس را اینجا بکشید و رها
              کنید.
            </span>
            <ProductImageUploader />
            <span>
              فرمت‌های تصویر: .jpg, .jpeg, .png، اندازه ترجیحی: ۱:۱، حداکثر حجم
              فایل: ۵۰۰ کیلوبایت.
            </span>
          </div>
          <div className="bg-white dashboard-box-shadow">
            <p className="font-extrabold text-lg">ویژگی ها</p>
            <div className=" mt-4 flex flex-col gap-y-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2  [&>div>input]:p-2 [&>div>input]:rounded-sm [&>div>input]:outline-none ">
              <div>
                <label htmlFor="">دسته‌بندی :</label>
                <input type="text" className="edit-profile-input" />
              </div>
              <div>
                <label htmlFor="">برند :</label>
                <input type="text" className="edit-profile-input" />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-x-3 [&>button]:p-2 [&>button]:rounded-lg [&>button]:cursor-pointer  ">
            <button className="flex items-center gap-x-2 border-red-500 border text-red-500">
              دور انداحتن <FaTrashAlt className="text-red-500" />
            </button>
            <button className="bg-green-500  text-white">ایجاد کنید</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
