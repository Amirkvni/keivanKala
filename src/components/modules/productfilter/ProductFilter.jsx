"use client";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

function ProductFilter() {
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const [isBrands, setIsBrandsActive] = useState(false);
  const [isColorsActive, setIsColorsActive] = useState(false);
  const [isSwitchToggleActive, setIsSwitchToggleActive] = useState(false);

  return (
    <div className="relative w-1/4   p-4">
      <div className="sticky top-28 flex flex-col gap-y-4 bg-white p-2 rounded-lg text-xl ">
        <div className="flex justify-between items-center">
          <span>فیلترها</span>
          <button className="text-green-500 hover:text-green-600 cursor-pointer">
            حذف همه
          </button>
        </div>
        <div>
          <input
            type="text"
            className="w-full  outline-none p-3 rounded-xl  bg-gray-100 placeholder:text-gray-600 placeholder:text-lg"
            placeholder="جستجو در بین نتایج ..."
          />
        </div>
        <div>محدوده قیمت</div>
        <div></div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsCategoryActive((prev) => !prev)}
        >
          <span>دسته بندی ها</span>
          <FaAngleLeft />
        </div>
        {isCategoryActive && (
          <div>
            <form>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> زنانه</label>
              <br />
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
              />
              <label for="vehicle2"> مردانه</label>
              <br />
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label for="vehicle3">بچگانه</label>
              <br />
            </form>
          </div>
        )}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsBrandsActive((prev) => !prev)}
        >
          <span>برندها</span>
          <FaAngleLeft />
        </div>
        {isBrands && (
          <div className=" flex flex-col gap-y-2 [&>div>input]:w-4 [&>div>input]:h-4 [&>div>input]:rounded-full [&>div>input]:bg-red-200">
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> زنانه</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
              />
              <label for="vehicle2"> مردانه</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label for="vehicle3">بچگانه</label>
            </div>
          </div>
        )}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsColorsActive((prev) => !prev)}
        >
          <span>رنگ ها</span>
          <FaAngleLeft />
        </div>
        {isColorsActive && (
          <div>
            <form>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> قرمز</label>
              <br />
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
              />
              <label for="vehicle2"> آبی</label>
              <br />
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label for="vehicle3">سبز</label>
              <br />
            </form>
          </div>
        )}
        <div className="flex justify-between items-center ">
          <span>فقط کالاهای موجود</span>
          <div dir="ltr">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isSwitchToggleActive}
                onChange={() => setIsSwitchToggleActive(!isSwitchToggleActive)}
              />
              <div
                className={`w-12 h-6 bg-gray-200 rounded-full ${
                  isSwitchToggleActive ? "bg-green-500" : ""
                } transition-colors`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                    isSwitchToggleActive ? "transform translate-x-6" : ""
                  }`}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
