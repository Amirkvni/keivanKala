"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import "next-range-slider/dist/main.css";
import { RangeSlider } from "next-range-slider";
import styles from "./productfilter.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";

function ProductFilter({ isMobileFiltersActive, setIsMobileFiltersActive }) {
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const [isColorsActive, setIsColorsActive] = useState(false);
  const [isSwitchToggleActive, setIsSwitchToggleActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10_000_000);
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const handleFilterChange = (filterName, value, checked) => {
    const params = new URLSearchParams(searchParams);
    let values = params.get(filterName)?.split(",") || [];

    if (checked) {
      values.push(value);
    } else {
      values = values.filter((v) => v !== value);
    }
    values.length
      ? params.set(filterName, values.join(","))
      : params.delete(filterName);
    router.push(`?${params.toString()}`);
  };
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      params.set("search", searchValue);
    } else {
      params.delete("search");
    }

    const newUrl = `?${params.toString()}`;
    router.replace(newUrl);
  }, [searchValue]);
  const colorPalettes = [
    { id: 1, name: "قرمز", code: "bg-red-600", secondName: "red" },
    { id: 2, name: "ابی", code: "bg-blue-600", secondName: "blue" },
    { id: 3, name: "زرد", code: "bg-yellow-600", secondName: "yellow" },
    { id: 4, name: "صورتی", code: "bg-fuchsia-600", secondName: "fuchsia" },
    { id: 5, name: "بنفش", code: "bg-violet-600", secondName: "violet" },
    { id: 6, name: "مشکی", code: "bg-black", secondName: "black" },
    { id: 7, name: "سبز", code: "bg-green-600", secondName: "green" },
    { id: 8, name: "طوسی", code: "bg-slate-600", secondName: "slate" },
    { id: 9, name: "نارنجی", code: "bg-orange-600", secondName: "orange" },
    { id: 10, name: "سفید", code: "bg-white", secondName: "white" },
  ];
  const deleteFilterParams = () => {
    if (searchParams.toString()) {
      const cleanUrl = pathname;
      window.history.replaceState(null, "", cleanUrl);
    }
  };
  return (
    <>
      {/* mobile filters: */}
      <div
        className={`fixed bg-white dark:bg-zinc-800 dark:text-white transition-all duration-300 z-99 w-full h-screen p-3   ${
          isMobileFiltersActive ? "top-0 left-0" : "top-[100vh]"
        }  `}
      >
        <div className="flex justify-between items-center text-xl ">
          <span>فیلتر محصولات</span>
          <IoCloseCircleOutline
            onClick={() => setIsMobileFiltersActive(false)}
          />
        </div>
        <div className="flex flex-col gap-y-6 mt-6  ">
          <input
            type="text"
            placeholder="جستجو در بین نتایج"
            className="p-3 rounded-lg  outline-none    "
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div>محدوده قیمت </div>
          <div>
            <RangeSlider
              dir="ltr"
              min={0}
              max={10_000_000}
              step={100_000}
              options={{
                leftInputProps: {
                  value: low,
                  onChange: (e) => {
                    const newLow = Number(e.target.value);
                    if (newLow <= high) {
                      setLow(newLow);
                    }
                    const params = new URLSearchParams(searchParams);

                    params.set("min-price", newLow);

                    router.push(`?${params.toString()}`);
                  },
                },
                rightInputProps: {
                  value: high,
                  onChange: (e) => {
                    const newHigh = Number(e.target.value);
                    if (newHigh >= low) {
                      setHigh(newHigh);
                    }
                    const params = new URLSearchParams(searchParams);

                    params.set("max-price", newHigh);

                    router.push(`?${params.toString()}`);
                  },
                },
                thumb: {
                  background: "#36d67e",
                  focusBackground: "#36d67e",
                  width: "20px",
                  height: "20px",
                },
                track: {
                  height: "6px",
                  background: "#36d67e",
                },
                range: { background: "#36d67e" },
              }}
            />
            <div className=" flex items-center justify-between [&>input]:w-[130px] [&>input]:p-2 text-xs [&>input]:outline-none">
              <input type="text" value={`${high.toLocaleString()} تومان`} />
              <span>تا</span>
              <input
                type="text"
                value={`${low.toLocaleString()} تومان`}
                className="text-left"
              />
            </div>
          </div>
          <div
            className="flex justify-between items-center"
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
                  id="women"
                  value="زنانه"
                  onChange={(e) =>
                    handleFilterChange("gender", "woman", e.target.checked)
                  }
                />
                <label for="women"> زنانه</label>
                <br />
                <input
                  type="checkbox"
                  id="men"
                  value="مردانه"
                  onChange={(e) =>
                    handleFilterChange("gender", "man", e.target.checked)
                  }
                />
                <label for="men"> مردانه</label>
                <br />
                <input
                  type="checkbox"
                  id="child"
                  value="بچگانه"
                  onChange={(e) =>
                    handleFilterChange("gender", "child", e.target.checked)
                  }
                />
                <label for="child">بچگانه</label>
                <br />
              </form>
            </div>
          )}
          <div
            className="flex justify-between items-center"
            onClick={() => setIsColorsActive((prev) => !prev)}
          >
            <span>رنگ ها</span>
            <FaAngleLeft />
          </div>
          {isColorsActive && (
            <div
              className={`h-[200px] overflow-y-auto p-1   ${styles.customScrollbar}`}
              dir="ltr"
            >
              {colorPalettes.map((color) => (
                <div
                  className="flex items-center justify-between "
                  key={color.id}
                  dir="rtl"
                >
                  <div>
                    <input
                      type="checkbox"
                      id="color"
                      value={color.secondName}
                      onChange={(e) =>
                        handleFilterChange(
                          "colors",
                          `${color.secondName}`,
                          e.target.checked
                        )
                      }
                    />
                    <label for="vehicle1"> {color.name}</label>
                  </div>
                  <div
                    className={`w-3 h-3 border border-gray-400 ${color.code}`}
                  ></div>
                </div>
              ))}
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
                  onChange={(e) => {
                    setIsSwitchToggleActive((prev) => !prev);
                    const params = new URLSearchParams(searchParams);
                    if (e.target.checked) {
                      params.set("inStock", "true");
                    } else {
                      params.delete("inStock");
                    }
                    router.push(`?${params.toString()}`);
                  }}
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
          <button
            className="bg-green-400 text-white py-2 rounded-xl"
            onClick={() => setIsMobileFiltersActive(false)}
          >
            اعمال فیلتر
          </button>
        </div>
      </div>
      <div className="relative w-1/4 hidden 2xl:block  p-4">
        <div className="sticky top-28 flex flex-col gap-y-4 bg-white p-2 rounded-lg text-xl dark:bg-zinc-800 dark:text-white">
          <div className="flex justify-between items-center">
            <span>فیلترها</span>
            <button
              className="text-green-500 hover:text-green-600 cursor-pointer"
              onClick={deleteFilterParams}
            >
              حذف همه
            </button>
          </div>
          <div>
            <input
              type="text"
              className="w-full  outline-none p-3 rounded-xl  bg-gray-100 placeholder:text-gray-600 placeholder:text-lg dark:bg-zinc-400 dark:text-white"
              placeholder="جستجو در بین نتایج ..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div>محدوده قیمت</div>
          <div>
            <RangeSlider
              dir="ltr"
              min={0}
              max={10_000_000}
              step={100_000}
              options={{
                leftInputProps: {
                  value: low,
                  onChange: (e) => {
                    const newLow = Number(e.target.value);
                    if (newLow <= high) {
                      setLow(newLow);
                    }
                    const params = new URLSearchParams(searchParams);

                    params.set("min-price", newLow);

                    router.push(`?${params.toString()}`);
                  },
                },
                rightInputProps: {
                  value: high,
                  onChange: (e) => {
                    const newHigh = Number(e.target.value);
                    if (newHigh >= low) {
                      setHigh(newHigh);
                    }
                    const params = new URLSearchParams(searchParams);

                    params.set("max-price", newHigh);

                    router.push(`?${params.toString()}`);
                  },
                },
                thumb: {
                  background: "#36d67e",
                  focusBackground: "#36d67e",
                  width: "20px",
                  height: "20px",
                },
                track: {
                  height: "6px",
                  background: "#36d67e",
                },
                range: { background: "#36d67e" },
              }}
            />
            <div className=" flex items-center justify-between [&>input]:w-[130px] [&>input]:p-2 text-xs [&>input]:outline-none">
              <input type="text" value={`${high.toLocaleString()} تومان`} />
              <span>تا</span>
              <input type="text" value={`${low.toLocaleString()} تومان`} />
            </div>
          </div>

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
                  id="women"
                  value="زنانه"
                  onChange={(e) =>
                    handleFilterChange("gender", "woman", e.target.checked)
                  }
                />
                <label for="women"> زنانه</label>
                <br />
                <input
                  type="checkbox"
                  id="men"
                  value="مردانه"
                  onChange={(e) =>
                    handleFilterChange("gender", "man", e.target.checked)
                  }
                />
                <label for="men"> مردانه</label>
                <br />
                <input
                  type="checkbox"
                  id="child"
                  value="بچگانه"
                  onChange={(e) =>
                    handleFilterChange("gender", "child", e.target.checked)
                  }
                />
                <label for="child">بچگانه</label>
                <br />
              </form>
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
            <div
              className={`h-[200px] overflow-y-auto p-1   ${styles.customScrollbar}`}
              dir="ltr"
            >
              {colorPalettes.map((color) => (
                <div
                  className="flex items-center justify-between "
                  key={color.id}
                  dir="rtl"
                >
                  <div>
                    <input
                      type="checkbox"
                      id="color"
                      value={color.secondName}
                      onChange={(e) =>
                        handleFilterChange(
                          "colors",
                          `${color.secondName}`,
                          e.target.checked
                        )
                      }
                    />
                    <label for="vehicle1"> {color.name}</label>
                  </div>
                  <div
                    className={`w-3 h-3 border border-gray-400 ${color.code}`}
                  ></div>
                </div>
              ))}
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
                  onChange={(e) => {
                    setIsSwitchToggleActive((prev) => !prev);
                    const params = new URLSearchParams(searchParams);
                    if (e.target.checked) {
                      params.set("inStock", "true");
                    } else {
                      params.delete("inStock");
                    }
                    router.push(`?${params.toString()}`);
                  }}
                />
                <div
                  className={`w-12 h-6 bg-gray-200 rounded-full ${
                    isSwitchToggleActive ? "bg-green-500" : "dark:bg-zinc-400"
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
    </>
  );
}

export default ProductFilter;
