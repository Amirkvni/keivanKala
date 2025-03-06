"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import cartIcon from "@/assets/icons/logo.webp";
import { CiSearch } from "react-icons/ci";

import { CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiMoonStarsLight } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa6";
import Cart from "./Cart";
function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const categories = [
    {
      name: "مردانه",
      submenu: [
        {
          title: "لباس مردانه",
          links: [
            "شلوار",
            "لباس زیر",
            "پیراهن",
            "ژاکت و پلیور",
            "جوراب",
            "شلوارک",
          ],
        },
        {
          title: "کفش مردانه",
          links: ["کفش اسپورت", "بوت", "کفش مجلسی", "نیم بوت"],
        },
        {
          title: "اکسسوری مردانه",
          links: ["ساعت", "عینک", "شال", "کلاه", "دستکش", "کمربند"],
        },
      ],
    },
    {
      name: "زنانه",
      submenu: [
        { title: "لباس زنانه", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "کفش زنانه",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
      ],
    },
    {
      name: "بچگانه",
      submenu: [
        { title: "لباس بچگانه", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "کفش بچگانه",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
      ],
    },
    {
      name: "آرایشی و بهداشتی",
      submenu: [
        { title: "صورت", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "چشم و ابرو",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
        {
          title: "ناخن",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
      ],
    },
  ];

  return (
    <header>
      <div className="fixed left-0 right-0 top-0 z-30 py-4 bg-white px-2">
        {/* header desktop : */}
        <div>
          <div className="hidden xl:block">
            {/* top section : */}
            <div className="container relative z-30 flex max-w-[1680px] items-center justify-between gap-x-4 mx-auto  ">
              <div>
                <Link href="/">
                  <Image
                    src={cartIcon}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="w-62"
                  />
                </Link>
              </div>
              <div className="relative  flex items-center gap-2 rounded-sm p-6 max-w-[576px] w-[576px] bg-slate-50">
                <CiSearch className="text-2xl" />
                <input
                  type="text"
                  className="outline-none "
                  placeholder="جستجو کنید ..."
                />
              </div>
              <div className="flex gap-x-4 ">
                <Link href="/">
                  <CiUser className="text-2xl font-black" />
                </Link>
                <Link href="/" onClick={() => setIsActiveCart(true)}>
                  <LuShoppingCart className="text-2xl font-black" />
                </Link>
                <Link href="/">
                  <PiMoonStarsLight className="text-2xl font-black" />
                </Link>
              </div>
              {/* cart : */}
              {isActiveCart && <Cart />}
            </div>
            {/* bottom section  :*/}
            <div className="absolute left-0 right-0 top-full z-20  shadow-xs duration-300 bg-white">
              <nav className="container relative flex max-w-[1680px] items-center gap-x-3 mx-auto px-4">
                <ul className="group z-10">
                  <div
                    className="relative flex cursor-pointer items-center gap-x-2  "
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                  >
                    <div>
                      <RxHamburgerMenu />
                    </div>
                    <div className="text-xl">دسته بندی ها</div>
                  </div>
                  {/*mega mene*/}
                  <div className="absolute top-full w-full max-w-[1000px]   ">
                    <div className="relative rounded-b-lg  shadow-base hidden  group-hover:block">
                      <div
                        className="flex h-[450px] max-h-[450px] w-full overflow-hidden rounded-b-lg pt-0.5 "
                        onMouseLeave={() => setIsHover(false)}
                      >
                        {/* right : */}
                        <div
                          dir="ltr"
                          className="main-scroll w-50 overflow-y-auto bg-gray-50"
                        >
                          <ul dir="rtl">
                            {categories.map((category) => (
                              <li
                                key={Math.random() * 1000}
                                className="hover:bg-white hover:text-green-300"
                                onMouseEnter={() => {
                                  setActiveCategory(category.name);
                                  setActiveSubMenu(category.submenu);
                                  setIsHover(true);
                                }}
                              >
                                <a href="" className="flex py-4 pr-4 text-lg">
                                  {category.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* left : */}
                        <div
                          dir="ltr"
                          className="main-scroll h-[450px] max-h-[450px] w-full overflow-auto bg-white"
                        >
                          <div className="flex grow p-5" dir="rtl">
                            {/* categories child */}
                            <div>
                              {/* head */}
                              <div className="mb-4 text-green-400">
                                <a
                                  href="/"
                                  className="flex items-center gap-x-1 py-2 text-primary text-lg"
                                >
                                  <div>مشاهده همه</div>
                                  <FaAngleLeft />
                                </a>
                              </div>
                              <div className="flex grow flex-wrap gap-x-14 gap-y-8">
                                {activeSubMenu?.map((submenu) => (
                                  <div
                                    className="space-y-2"
                                    key={Math.random() * 100}
                                  >
                                    <a className="relative before:content-[''] before:w-[2px] before:h-[25px] flex items-center gap-x-2 text-lg hover:text-green-300 before:bg-green-500 before:absolute before:right-0 before:top-0 pr-4">
                                      <div>{submenu.title}</div>
                                      <FaAngleLeft />
                                    </a>
                                    <ul>
                                      <li>
                                        {submenu.links.map((link) => (
                                          <a
                                            href=""
                                            className="block py-2 text-lg  hover:text-green-300"
                                          >
                                            {link}
                                          </a>
                                        ))}
                                      </li>
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
                <Link href="/" className="text-lg">
                  فروش ویژه
                </Link>
                <Link href="/" className="text-lg">
                  چرا کیوان کالا
                </Link>
                <Link href="/" className="text-lg">
                  راهنمای خرید
                </Link>
                <Link href="/" className="text-lg	">
                  تماس با ما
                </Link>
                <Link href="/" className="text-lg">
                  درباره ما
                </Link>
                <Link href="/" className="text-lg">
                  سوالات متدوال
                </Link>
              </nav>
            </div>
          </div>
        </div>
        {/* header mobile  */}
        <div>
          <div className="xl:hidden">
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
                    className="w-62"
                  />
                </Link>
              </div>
              <div className="flex gap-x-2">
                <CiUser className="text-2xl" />
                <LuShoppingCart className="text-2xl" />
              </div>
            </div>
            {/* bottom section : */}
            <div className="flex px-3 py-1 mt-3 relative bg-gray-200 rounded-lg">
              <input
                type="text"
                placeholder="جستجو کنید ..."
                className="w-full p-2 mr-5 outline-none"
              />
              <CiSearch className="absolute text-2xl top-3 right-2.5" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`xl:hidden bg-yellow-300 absolute z-50 w-3/5 h-screen top-0 right-0 transform  ${
          isActiveHamburger ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        hi
      </div>
      <div
        className={`fixed inset-0 z-20  backdrop ${
          isHover ? "block" : "hidden"
        }`}
      ></div>
    </header>
  );
}

export default Header;
