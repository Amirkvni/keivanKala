import Link from "next/link";
import {
  FaChevronDown,
  FaChevronUp,
  FaGripfire,
  FaRegSun,
} from "react-icons/fa6";
import { IoHomeOutline, IoClose, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsQuestion } from "react-icons/bs";
import { CiSearch, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import cartIcon from "@/assets/icons/logo.webp";
import { PiMoonStarsLight } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import Image from "next/image";
import { memo, useEffect } from "react";

function MobileMenu({
  isActiveHamburger,
  setIsActiveHamburger,
  isLogin,
  categories,
  activeMobileCategory,
  setActiveMobileCategory,
  activeMobileSubCategory,
  setActiveMobileSubCategory,
  isMobileCategoriesActive,
  darkmodeHandler,
  isDarkMode,
  cartLength,
  mobileCategoriesActive,
}) {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <div className="xl:hidden ">
        {/* top section : */}
        <div className="@container flex items-center justify-between">
          <div onClick={() => setIsActiveHamburger(true)}>
            <RxHamburgerMenu className="text-2xl" />
          </div>
          <div className="w-[170px]">
            <Link href="/">
              <Image
                src={cartIcon}
                width={500}
                height={500}
                alt="Picture of the author"
                className="w-62 "
              />
            </Link>
          </div>
          <div className="flex gap-x-3 items-center">
            <button href="/" onClick={darkmodeHandler}>
              {isDarkMode ? (
                <FaRegSun className="text-2xl cursor-pointer" />
              ) : (
                <PiMoonStarsLight className="text-2xl cursor-pointer" />
              )}
            </button>

            <Link href="/checkout-cart" className="relative ">
              <LuShoppingCart className="text-2xl" />
              <span className="absolute -top-2 left-3  bg-green-500 text-white  w-4.5 h-4.5 rounded-full flex items-center justify-center">
                {cartLength}
              </span>
            </Link>
          </div>
        </div>
        {/* bottom section : */}
        <div className="flex px-3 py-1 mt-3 relative bg-gray-200 dark:bg-zinc-700 rounded-lg ">
          <input
            type="text"
            placeholder="جستجو کنید ..."
            className="w-full p-2 mr-5 outline-none"
          />
          <CiSearch className="absolute text-2xl top-3 right-2.5" />
        </div>
      </div>
      <div
        className={`xl:hidden p-4 bg-white dark:bg-zinc-900 dark:text-white fixed z-50 w-3/5 h-screen top-0 right-0 bottom-0 transform  ${
          isActiveHamburger ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between items-center">
            <IoClose
              onClick={() => setIsActiveHamburger(false)}
              className="w-6 h-6"
            />
            {isLogin ? (
              <Link href="/profile">
                <CiUser className="text-2xl" />
              </Link>
            ) : (
              <Link
                className="text-sm flex items-center gap-x-1 border rounded-lg p-1"
                href="/signin"
              >
                <span>ورود </span>
                <span>|</span>
                <span>ثبت نام</span>
              </Link>
            )}
          </div>
          <div>
            <div
              className="flex items-center justify-between"
              onClick={() => isMobileCategoriesActive((prev) => !prev)}
            >
              <span>دسته بندی ها</span>
              {mobileCategoriesActive ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            <div
              className={`flex flex-col gap-y-4 mt-4  ${
                mobileCategoriesActive ? "block" : "hidden"
              }`}
            >
              {categories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center justify-between border border-gray-300  p-2 rounded-sm  ">
                    <Link href={category.link}>{category.name}</Link>
                    {activeMobileCategory === category.id ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronUp
                        onClick={() => setActiveMobileCategory(category.id)}
                      />
                    )}
                  </div>
                  {activeMobileCategory === category.id && (
                    <div className="flex flex-col gap-y-2  ">
                      {category.submenu.map((sub) => (
                        <div
                          className="border border-gray-300 p-2.5 rounded-sm  mt-1.5 "
                          key={sub.id}
                        >
                          <div className="flex items-center justify-between ">
                            <Link href={sub.mainLink}>{sub.title}</Link>
                            {activeMobileSubCategory === sub.id ? (
                              <FaChevronDown />
                            ) : (
                              <FaChevronUp
                                onClick={() =>
                                  setActiveMobileSubCategory(sub.id)
                                }
                              />
                            )}
                          </div>
                          {activeMobileSubCategory === sub.id && (
                            <div className="flex flex-col gap-y-2 mt-2 ">
                              {sub.links.map((link) => (
                                <Link href="/" key={link.id}>
                                  {link.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Link href="/" className="flex items-center gap-x-2">
            <IoHomeOutline />
            <span> خانه</span>
          </Link>
          <Link href="/contact-us" className="flex items-center gap-x-2">
            <MdOutlinePhoneEnabled />
            <span> تماس با ما</span>
          </Link>
          <Link href="/special-offers" className="flex items-center gap-x-2">
            <FaGripfire />
            <span>فروش ويژه </span>
          </Link>
          <Link href="/about-us" className="flex items-center gap-x-2">
            <HiOutlineUserGroup />
            <span>درباره ما</span>
          </Link>
          <Link href="/questions" className="flex items-center gap-x-2">
            <BsQuestion />
            <span>سوالات متداول </span>
          </Link>
          <Link href="/blogs" className="flex items-center gap-x-2">
            <IoNewspaperOutline />
            <span>وبلاگ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(MobileMenu);
