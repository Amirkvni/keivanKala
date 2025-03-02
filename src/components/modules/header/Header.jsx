"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import cartIcon from "@/assets/icons/logo.webp";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiMoonStarsLight } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa6";
function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  useEffect(() => {
    console.log(activeSubMenu);
  });
  const categories = [
    {
      name: "مردانه",
      submenu: [
        { title: "لباس مردانه", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "کفش مردانه",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
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
        { title: "لباس زنانه", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "کفش زنانه",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
      ],
    },
    {
      name: "ساعت",
      submenu: [
        { title: "لباس زنانه", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "کفش زنانه",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
      ],
    },
    {
      name: "کیف",
      submenu: [
        { title: "لباس زنانه", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "کفش زنانه",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
      ],
    },
    {
      name: "آزایش و بهداشتی",
      submenu: [
        { title: "لباس زنانه", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "کفش زنانه",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
      ],
    },
    {
      name: "عطر و ادکلن",
      submenu: [
        { title: "لباس زنانه", links: ["شلوار", "لباس زیر", "پیراهن"] },
        {
          title: "کفش زنانه",
          links: ["کفش اسپورت", "کفش پیاده روی", "کفش راحتی"],
        },
      ],
    },
  ];
  return (
    <header>
      <div className="fixed left-0 right-0 top-0 z-30 py-4 bg-white">
        {/* header desktop : */}
        <div>
          <div className="hidden md:block">
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
                <Link href="/">
                  <LuShoppingCart className="text-2xl font-black" />
                </Link>
                <Link href="/">
                  <PiMoonStarsLight className="text-2xl font-black" />
                </Link>
              </div>
            </div>
            {/* bottom section  :*/}
            <div className="absolute left-0 right-0 top-full z-20  shadow-xs duration-300 bg-white">
              <nav className="container relative flex max-w-[1680px] items-center gap-x-3 mx-auto">
                <ul className="group z-10">
                  <div className="relative flex cursor-pointer items-center gap-x-2  ">
                    <div>
                      <RxHamburgerMenu />
                    </div>
                    <div>بسته بندی ها</div>
                  </div>
                  {/*mega mene*/}
                  <div className="absolute top-full w-full max-w-[1000px]  ">
                    <div className="relative rounded-b-lg  shadow-base hidden  group-hover:block">
                      <div className="flex h-[450px] max-h-[450px] w-full overflow-hidden rounded-b-lg pt-0.5">
                        {/* right : */}
                        <div
                          dir="ltr"
                          className="main-scroll w-50 overflow-y-auto bg-gray-50"
                        >
                          <ul dir="rtl">
                            {categories.map((category) => (
                              <li
                                class="mega-menu-active"
                                onMouseEnter={() => {
                                  setActiveCategory(category.name);
                                  setActiveSubMenu(category.submenu);
                                }}
                                // onMouseLeave={() => setActiveCategory(null)}
                              >
                                <a href="" className="flex py-4 pr-4">
                                  {category.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* left : */}
                        <div
                          dir="ltr"
                          className="main-scroll h-[450px] max-h-[450px] w-full overflow-auto"
                        >
                          <div class="flex grow p-5" dir="rtl">
                            {/* categories child */}
                            <div>
                              {/* head */}
                              <div className="mb-4 text-green-400">
                                <a
                                  href="/"
                                  className="flex items-center gap-x-1 py-2 text-sm text-primary"
                                >
                                  <div>مشاهده همه</div>
                                  <FaAngleLeft />
                                </a>
                              </div>
                              <div className="flex grow flex-wrap gap-x-14 gap-y-8">
                                {activeSubMenu?.map((submenu) => (
                                  <div className="space-y-2">
                                    <a
                                      href=""
                                      className="flex items-center gap-x-2 hover:text-primary"
                                    >
                                      <span className="flex items-center gap-x-2 hover:text-primary"></span>
                                      <div>{submenu.title}</div>
                                      <FaAngleLeft />
                                    </a>
                                    <ul>
                                      <li>
                                        {submenu.links.map((link) => (
                                          <a
                                            href=""
                                            className="block py-2 text-sm text-text/90 hover:text-green-300"
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
                <Link href="/">فروش ویژه</Link>
                <Link href="/">چرا کیوان کالا</Link>
                <Link href="/">راهنمای خرید</Link>
                <Link href="/">تماس با ما</Link>
                <Link href="/">درباره ما</Link>
                <Link href="/">سوالات متدوال</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-20  bg-black hidden "></div>
    </header>
  );
}

export default Header;
