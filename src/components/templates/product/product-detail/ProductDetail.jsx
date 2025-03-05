import { FaChevronLeft } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompare } from "react-icons/md";
import { MdShare } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import LightBox from "./LightBox";
function ProductDetail({ product }) {
  return (
    <div className="container mx-auto py-4 px-2  w-3/4 my-12 rounded-lg shadow-sm">
      <div className="gap-x-2 flex">
        {/* right section : */}
        <div className="w-1/3 ">
          <div className="flex gap-x-2 items-center p-3 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:cursor-pointer ">
            <FaRegHeart />
            <MdOutlineCompare />
            <MdShare />
          </div>
          <div className=" mt-1  py-1.5">
            <LightBox mainImage={product.mainImage} pictures={product.images} />
          </div>
        </div>
        {/* left section : */}
        <div className="w-2/3 ">
          <div className="flex items-center gap-x-2 text-green-400">
            نایک
            <FaChevronLeft />
          </div>
          <h1 className="font-medium text-lg mb-2">{product.persianName}</h1>
          <div className="flex gap-x-0.5 h-[400px]">
            {/* bottom right : */}
            <div className=" w-1/2 h-full flex flex-col gap-y-5 ">
              <p className="text-sm capitalize">{product.englishFullName}</p>
              <div className="flex text-green-400 text-sm ">
                <span>کد کالا 6457#</span>
                <span>20 دیدگاه</span>
              </div>
              <div className="flex  items-center gap-x-2 ">
                <AiOutlineLike className="text-green-300" />

                <p className="text-sm text-gray-400">
                  80% از خریداران، خرید این کالا را پیشنهاد کرده‌اند
                </p>
              </div>
              <div className="font-medium">ویژگی های محصول</div>
              <div>
                <ul className="flex flex-col gap-y-5">
                  {Object.entries(product.attributes).map(([key, value]) => (
                    <li key={key}>
                      {key} : {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* bottom left : */}
            <div className=" w-1/2 h-full flex flex-col justify-between">
              <div>انتخاب رنگ</div>
              <div className="colors flex  gap-x-2 w-fit ">
                {Object.entries(product.colors).map(([key, value]) => (
                  <div className="flex border w-fit items-center gap-x-2 cursor-pointer border-green-300 bg-white rounded-3xl px-4 py-2">
                    <div className={`w-4 h-4 ${value} rounded-full`}></div>
                    <span>{key}</span>
                  </div>
                ))}
              </div>
              <div>انتخاب سایز</div>
              <div className="colors flex  gap-x-2 w-fit ">
                <div className="w-10 h-10 flex border  items-center gap-x-2 cursor-pointer justify-center border-green-300 bg-white rounded-full p-1">
                  <span>37</span>
                </div>
                <div className="w-10 h-10 flex border  items-center gap-x-2 cursor-pointer justify-center border-green-300 bg-white rounded-full p-1">
                  <span>37</span>
                </div>
                <div className="w-10 h-10 flex border  items-center gap-x-2 cursor-pointer justify-center border-green-300 bg-white rounded-full p-1">
                  <span>37</span>
                </div>
                <div className="w-10 h-10 flex border  items-center gap-x-2 cursor-pointer justify-center border-green-300 bg-white rounded-full p-1">
                  <span>37</span>
                </div>
                <div className="w-10 h-10 flex border  items-center gap-x-2 cursor-pointer justify-center border-green-300 bg-white rounded-full p-1">
                  <span>37</span>
                </div>
              </div>
              <div className="flex items-center gap-x-3  my-3 p-4  w-full bg-green-50 rounded-sm text-green-600">
                <IoShieldCheckmarkOutline />
                <span className="text-sm">تضمین سلامت فیزیکی و اصالت کالا</span>
              </div>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <div className="flex items-center gap-x-6  border-gray-200 border-1 rounded-sm w-fit p-2">
                    <FaPlus className="text-green-400" />
                    <span>0</span>
                    <FaMinus className="text-red-400" />
                  </div>
                </div>
                <div className="flex justify-end w-1/2 items-center text-green-600   gap-x-2">
                  <span>{product.price.toLocaleString()}</span>
                  <span>تومان</span>
                </div>
              </div>
              <button className="w-full rounded-lg p-1 mt-3 text-white cursor-pointer py-3 bg-green-600">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 gap-x-3 [&>div]:flex [&>div]:px-3 [&>div]:py-2 [&>div]:w-1/4 [&>div]:items-center [&>div]:gap-x-1 [&>div]:border [&>div]:border-gray-200 [&>div]:p-0.5 [&>div]:rounded-sm ">
        <div>
          <IoIosTimer />
          <span>هفت روز ضمانت بازگشت کالا</span>
        </div>
        <div>
          <IoShieldCheckmarkOutline />
          <span>تضمین اصالت کالا</span>
        </div>
        <div>
          <MdSupportAgent />
          <span>هفت روز هفته</span>
        </div>
        <div>
          <FaTruckFast />
          <span>تحویل اکسپرس در تهران, کرج</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
