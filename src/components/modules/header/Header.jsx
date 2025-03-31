"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import cartIcon from "@/assets/icons/logo.webp";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiMoonStarsLight } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsQuestion } from "react-icons/bs";

import {
  FaAngleLeft,
  FaChevronDown,
  FaChevronUp,
  FaGripfire,
} from "react-icons/fa6";
import Cart from "./Cart";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { IoClose, IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlinePhoneEnabled } from "react-icons/md";
function Header({ isLogin }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileCategoriesActive, isMobileCategoriesActive] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState("");
  const [activeMobileSubCategory, setActiveMobileSubCategory] = useState("");

  const categories = [
    {
      id: "1",
      name: "مردانه",
      submenu: [
        {
          id: "1",
          title: "لباس مردانه",
          links: [
            { title: "شلوار", address: "men-pants" },
            { title: "لباس زیر", address: "men-underwear" },
            { title: "پیراهن", address: "men-shirts" },
            { title: "ژاکت و پلیور", address: "men-knitwear" },
            { title: "شلوارک", address: "men-shorts" },
            { title: "جوراب", address: "men-socks-tights" },
          ],
        },
        {
          id: "2",
          title: "کفش مردانه",
          links: [
            { title: "روزمره", address: "men-casual-shoes" },
            { title: "صندل ", address: "men-sandals" },
            { title: "دمپایی", address: "men-slippers" },
            { title: "بوت", address: "men-boots" },
            { title: "نیم بوت", address: "men-ankle-boots" },
          ],
        },
        {
          id: "3",
          title: "اکسسوری مردانه",
          links: [
            { title: "ساعت", address: "men-watches" },
            { title: "عینک", address: "men-eyewear" },
            { title: "کمربند", address: "men-belts" },
            { title: "کروات", address: "men-ties" },
            { title: "شال", address: "men-shawl" },
          ],
        },
      ],
      link: "mens-category-shop",
    },
    {
      id: "2",
      name: "زنانه",
      submenu: [
        {
          id: "1",
          title: "لباس زنانه",
          links: [
            { title: "شلوار", address: "/" },
            { title: "لباس زیر", address: "/" },
            { title: "پیراهن", address: "/" },
            { title: "ژاکت و پلیور", address: "/" },
            { title: "شلوارک", address: "/" },
            { title: "جوراب", address: "/" },
          ],
        },
        {
          id: "2",
          title: "کفش زنانه",
          links: [
            { title: "روزمره", address: "/" },
            { title: "صندل ", address: "/" },
            { title: "دمپایی", address: "/" },
            { title: "بوت", address: "/" },
            { title: "نیم بوت", address: "/" },
          ],
        },
        {
          id: "3",
          title: "اکسسوری زنانه",
          links: [
            { title: "ساعت", address: "/" },
            { title: "عینک", address: "/r" },
            { title: "کمربند", address: "/" },
            { title: "کروات", address: "/" },
            { title: "شال", address: "/" },
          ],
        },
      ],
      link: "mens-category-shop",
    },
    {
      id: "3",
      name: "بچگانه",
      submenu: [
        {
          id: "1",
          title: "نوزادی",
          links: [
            { title: "لباس راحتی", address: "/" },
            { title: "بادی و لباس زیر", address: "/" },
            { title: "پیراهن و سارافون", address: "/" },
            { title: "جوراب و پاپوش", address: "/" },
            { title: "پالتو و بارانی", address: "/" },
            { title: "سوییشرت و هودی", address: "/" },
          ],
        },
        {
          id: "2",
          title: "دخترانه",
          links: [
            { title: "پیراهن و سارافون", address: "/" },
            { title: "سرهمی ", address: "/" },
            { title: "شلوار", address: "/" },
            { title: "دامن", address: "/" },
            { title: "لباس زیر", address: "/" },
          ],
        },
        {
          id: "3",
          title: "پسرانه",
          links: [
            { title: "تیشرت", address: "/" },
            { title: "پولوشرت", address: "/" },
            { title: "پیراهن", address: "/" },
            { title: "شلوار", address: "/" },
            { title: "لباس زیر", address: "/" },
          ],
        },
      ],
      link: "mens-category-shop",
    },
    {
      id: "4",
      name: "زیبایی و سلامت",
      submenu: [
        {
          id: "1",
          title: "عطر و ادکلن",
          links: [
            { title: "عطر و ادکلن مردانه", address: "/" },
            { title: "عطر و ادکلن زنانه", address: "/" },
            { title: "اسپری و بادی اسپلش زنانه", address: "/" },
            { title: "اسپری و بادی اسپلش مردانه", address: "/" },
          ],
        },
        {
          id: "2",
          title: "آرایش و گریم",
          links: [
            { title: "کرم پودر", address: "/" },
            { title: "پنکیک ", address: "/" },
            { title: "رژ گونه و هایلاتر", address: "/" },
            { title: "برنز کننده", address: "/" },
            { title: "رژ لب", address: "/" },
          ],
        },
        {
          id: "3",
          title: "مراقبت پوست",
          links: [
            { title: "کرم ضد آفتاب", address: "/" },
            { title: "کرم مرطوب کننده و نرم کننده", address: "/" },
            { title: "لوسیون و روغن آفتاب", address: "/" },
            { title: "کرم و نرم کننده لب", address: "/" },
            { title: "لوسیون و روغن بدن ", address: "/" },
          ],
        },
      ],
      link: "mens-category-shop",
    },
  ];
  const router = useRouter();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const darkmodeHandler = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };
  let { cart } = useContext(CartContext);
  return (
    <header className="">
      <div className="fixed left-0 right-0 top-0 z-30 py-4   px-2 bg-white  dark:bg-zinc-800 dark:text-white">
        {/* header desktop : */}
        <div>
          <div className="hidden xl:block">
            {/* top section : */}
            <div className="container  relative z-30 flex max-w-[1680px] items-center justify-between gap-x-4 mx-auto  ">
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
              <div className="relative  flex items-center gap-2 rounded-sm py-3 px-2 max-w-[576px] w-[576px] bg-slate-100">
                <CiSearch
                  className="text-2xl cursor-pointer"
                  onClick={searchHandler}
                />
                <input
                  type="text"
                  className="outline-none placeholder:text-gray-500 placeholder:font-medium placeholder:text-lg "
                  placeholder="جستجو کنید ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex gap-x-4 items-center">
                <Link href="/profile">
                  {isLogin ? (
                    <CiUser className="text-2xl" />
                  ) : (
                    <Link
                      className="text-lg flex items-center gap-x-1 border rounded-lg px-1.5 py-1"
                      href="/signin"
                    >
                      <span>ورود </span>
                      <span>|</span>
                      <span>ثبت نام</span>
                    </Link>
                  )}
                </Link>
                <Link
                  href="/checkout-cart"
                  className="relative "
                  onMouseEnter={() => setIsActiveCart(true)}
                >
                  <LuShoppingCart className="text-2xl" />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white  w-4.5 h-4.5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                </Link>
                <button href="/" onClick={darkmodeHandler}>
                  <PiMoonStarsLight className="text-2xl cursor-pointer" />
                </button>
              </div>
              {/* cart : */}
              {isActiveCart && <Cart setIsActiveCart={setIsActiveCart} />}
            </div>
            {/* bottom section  :*/}
            <div className="absolute left-0 right-0 top-full z-20  shadow-xs duration-300 bg-white  dark:bg-zinc-800 dark:text-white ">
              <nav className="container relative flex max-w-[1680px] items-center gap-x-3 mx-auto px-4 ">
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
                  <div className="absolute top-full w-full max-w-[1000px]  ">
                    <div className="relative rounded-b-lg  shadow-base hidden  group-hover:block  ">
                      <div
                        className="flex h-[450px] max-h-[450px] w-full overflow-hidden rounded-b-lg pt-0.5 "
                        onMouseLeave={() => setIsHover(false)}
                      >
                        {/* right : */}
                        <div
                          dir="ltr"
                          className="main-scroll w-50 overflow-y-auto bg-gray-50 dark:bg-black "
                        >
                          <ul dir="rtl">
                            {categories.map((category) => (
                              <li
                                key={Math.random() * 1000}
                                className="hover:bg-white hover:text-green-300 text-gray-700 dark:text-white dark:hover:bg-zinc-800"
                                onMouseEnter={() => {
                                  setActiveCategory(category.name);
                                  setActiveSubMenu(category.submenu);
                                  setIsHover(true);
                                }}
                              >
                                <Link
                                  href={category.link}
                                  className="flex py-4 pr-4 text-lg"
                                >
                                  {category.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* left : */}
                        <div
                          dir="ltr"
                          className="main-scroll h-[450px] max-h-[450px] w-full overflow-auto bg-white dark:bg-zinc-800 "
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
                                        {submenu.links.map((item) => (
                                          <Link
                                            key={Math.random() * 20}
                                            href={`/search/${item.address}`}
                                            className="block py-2 text-lg  hover:text-green-300 text-gray-500 dark:text-gray-200"
                                          >
                                            {item.title}
                                          </Link>
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
                <Link href="/special-offers" className="text-lg">
                  فروش ویژه
                </Link>

                <Link href="/contact-us" className="text-lg	">
                  تماس با ما
                </Link>
                <Link href="/about-us" className="text-lg ">
                  درباره ما
                </Link>
                <Link href="/questions" className="text-lg ">
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
        className={`xl:hidden p-4 bg-white fixed z-50 w-3/5 h-screen top-0 right-0 bottom-0 transform  ${
          isActiveHamburger ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between items-center">
            <IoClose
              onClick={() => setIsActiveHamburger(false)}
              className="w-6 h-6"
            />
            <button className="border border-gray-600 py-1.5 rounded-lg w-fit text-xs px-2.5">
              ورود و ثبت نام
            </button>
          </div>
          <div className="flex items-center p-0.5 border-b-1">
            <input
              type="text"
              className="outline-none"
              placeholder="جستجو ..."
            />
            <IoSearchOutline />
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
                <div>
                  <div
                    className="flex items-center justify-between border border-gray-300 p-2 rounded-sm "
                    onClick={() => setActiveMobileCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    {activeMobileCategory === category.id ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronUp />
                    )}
                  </div>
                  {activeMobileCategory === category.id && (
                    <div className="flex flex-col gap-y-2 ">
                      {category.submenu.map((sub) => (
                        <div className="border border-gray-300 p-2.5 rounded-sm  mt-1.5">
                          <div
                            className="flex items-center justify-between "
                            onClick={() => setActiveMobileSubCategory(sub.id)}
                          >
                            <span>{sub.title}</span>
                            {activeMobileSubCategory === sub.id ? (
                              <FaChevronDown />
                            ) : (
                              <FaChevronUp />
                            )}
                          </div>
                          {activeMobileSubCategory === sub.id && (
                            <div className="flex flex-col gap-y-2 mt-2 ">
                              {sub.links.map((link) => (
                                <Link href="/">{link.title}</Link>
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
        </div>
      </div>
      <div
        onMouseEnter={() => setIsHover(false)}
        className={`fixed inset-0 z-20  backdrop ${
          isHover ? "block" : "hidden"
        }`}
      ></div>
    </header>
  );
}

export default Header;
