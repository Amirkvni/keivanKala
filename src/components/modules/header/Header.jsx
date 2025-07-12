"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import cartIcon from "@/assets/icons/logo.webp";
import { CiSearch, CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiMoonStarsLight } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoClose, IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { BsQuestion } from "react-icons/bs";
import {
  FaAngleLeft,
  FaChevronDown,
  FaChevronUp,
  FaGripfire,
  FaRegSun,
} from "react-icons/fa6";
import Cart from "./Cart";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";

function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileCategoriesActive, isMobileCategoriesActive] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState("");
  const [activeMobileSubCategory, setActiveMobileSubCategory] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const categories = [
    {
      id: "1",
      name: "مردانه",
      submenu: [
        {
          id: "s1",
          title: "لباس مردانه",
          links: [
            { id: "t1", title: "شلوار", address: "men-pants" },
            { id: "t2", title: "لباس زیر", address: "men-underwear" },
            { id: "t3", title: "پیراهن", address: "men-shirts" },
            { id: "t4", title: "ژاکت و پلیور", address: "men-knitwear" },
            { id: "t5", title: "شلوارک", address: "men-shorts" },
            { id: "t6", title: "جوراب", address: "men-socks-tights" },
          ],
          mainLink: "/category-men-clothing",
        },
        {
          id: "s2",
          title: "کفش مردانه",
          links: [
            { id: "t7", title: "روزمره", address: "men-casual-shoes" },
            { id: "t8", title: "صندل ", address: "men-sandals" },
            { id: "t9", title: "دمپایی", address: "men-slippers" },
            { id: "t10", title: "بوت", address: "men-boots" },
            { id: "t11", title: "نیم بوت", address: "men-ankle-boots" },
          ],
          mainLink: "/category-men-shoes",
        },
        {
          id: "s3",
          title: "اکسسوری مردانه",
          links: [
            { id: "t12", title: "ساعت", address: "men-watches" },
            { id: "t13", title: "عینک", address: "men-eyewear" },
            { id: "t14", title: "کمربند", address: "men-belts" },
            { id: "t15", title: "کروات", address: "men-ties" },
            { id: "t16", title: "شال", address: "men-shawl" },
          ],
          mainLink: "/category-men-accessories",
        },
      ],
      link: "/mens-category-shop",
    },
    {
      id: "2",
      name: "زنانه",
      submenu: [
        {
          id: "s4",
          title: "لباس زنانه",
          links: [
            { id: "t17", title: "شلوار", address: "" },
            { id: "t18", title: "لباس زیر", address: "/" },
            { id: "t19", title: "پیراهن", address: "/" },
            { id: "t20", title: "ژاکت و پلیور", address: "/" },
            { id: "t21", title: "شلوارک", address: "/" },
            { id: "t22", title: "جوراب", address: "/" },
          ],
          mainLink: "/",
        },
        {
          id: "s5",
          title: "کفش زنانه",
          links: [
            { id: "t23", title: "روزمره", address: "/" },
            { id: "t24", title: "صندل ", address: "/" },
            { id: "t25", title: "دمپایی", address: "/" },
            { id: "t26", title: "بوت", address: "/" },
            { id: "t27", title: "نیم بوت", address: "/" },
          ],
          mainLink: "/",
        },
        {
          id: "s6",
          title: "اکسسوری زنانه",
          links: [
            { id: "t28", title: "ساعت", address: "/" },
            { id: "t29", title: "عینک", address: "/r" },
            { id: "t30", title: "کمربند", address: "/" },
            { id: "t31", title: "کروات", address: "/" },
            { id: "t32", title: "شال", address: "/" },
          ],
          mainLink: "/",
        },
      ],
      link: "/",
    },
    {
      id: "3",
      name: "بچگانه",
      submenu: [
        {
          id: "s7",
          title: "نوزادی",
          links: [
            { id: "t33", title: "لباس راحتی", address: "/" },
            { id: "t34", title: "بادی و لباس زیر", address: "/" },
            { id: "t35", title: "پیراهن و سارافون", address: "/" },
            { id: "t36", title: "جوراب و پاپوش", address: "/" },
            { id: "t37", title: "پالتو و بارانی", address: "/" },
            { id: "t38", title: "سوییشرت و هودی", address: "/" },
          ],
          mainLink: "/",
        },
        {
          id: "s8",
          title: "دخترانه",
          links: [
            { id: "t39", title: "پیراهن و سارافون", address: "/" },
            { id: "t40", title: "سرهمی ", address: "/" },
            { id: "t41", title: "شلوار", address: "/" },
            { id: "t42", title: "دامن", address: "/" },
            { id: "t43", title: "لباس زیر", address: "/" },
          ],
          mainLink: "/",
        },
        {
          id: "s9",
          title: "پسرانه",
          links: [
            { id: "t45", title: "تیشرت", address: "/" },
            { id: "t46", title: "پولوشرت", address: "/" },
            { id: "t47", title: "پیراهن", address: "/" },
            { id: "t48", title: "شلوار", address: "/" },
            { id: "t49", title: "لباس زیر", address: "/" },
          ],
          mainLink: "/",
        },
      ],
      link: "/",
    },
    {
      id: "4",
      name: "زیبایی و سلامت",
      submenu: [
        {
          id: "s10",
          title: "عطر و ادکلن",
          links: [
            { id: "t50", title: "عطر و ادکلن مردانه", address: "/" },
            { id: "t51", title: "عطر و ادکلن زنانه", address: "/" },
            { id: "t52", title: "اسپری و بادی اسپلش زنانه", address: "/" },
            { id: "t53", title: "اسپری و بادی اسپلش مردانه", address: "/" },
          ],
          mainLink: "/",
        },
        {
          id: "s11",
          title: "آرایش و گریم",
          links: [
            { id: "t54", title: "کرم پودر", address: "/" },
            { id: "t55", title: "پنکیک ", address: "/" },
            { id: "t56", title: "رژ گونه و هایلاتر", address: "/" },
            { id: "t57", title: "برنز کننده", address: "/" },
            { id: "t58", title: "رژ لب", address: "/" },
          ],
          mainLink: "/",
        },
        {
          id: "s12",
          title: "مراقبت پوست",
          links: [
            { id: "t59", title: "کرم ضد آفتاب", address: "/" },
            { id: "t60", title: "کرم مرطوب کننده و نرم کننده", address: "/" },
            { id: "t61", title: "لوسیون و روغن آفتاب", address: "/" },
            { id: "t62", title: "کرم و نرم کننده لب", address: "/" },
            { id: "t63", title: "لوسیون و روغن بدن ", address: "/" },
          ],
          mainLink: "/",
        },
      ],
      link: "/",
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
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        if (!res.ok) return;

        const data = await res.json();
        setIsLogin(true);
        setUser(data.data); // شامل firstname و lastname و role
      } catch (err) {
        // کاربر لاگین نیست یا مشکلی پیش اومده
        setIsLogin(false);
      }
    };

    getUser();
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
    <header>
      <div className="fixed left-0 right-0 top-0 z-30 py-4 px-2 bg-white  dark:bg-zinc-800 dark:text-white">
        {/* header desktop : */}
        <div>
          <div className="hidden xl:block">
            {/* top section : */}
            <div className="container  relative z-30 flex max-w-[1680px] items-center justify-between gap-x-4 mx-auto  ">
              <div>
                <Link href="/">
                  <Image
                    src={cartIcon}
                    width={5000}
                    height={5000}
                    alt="websiteIcon"
                    className="w-62"
                  />
                </Link>
              </div>
              <div className="relative  flex items-center gap-2 rounded-lg py-3 px-2 max-w-[576px] w-[576px] bg-slate-100 dark:bg-zinc-900 ">
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
                {isLogin ? (
                  <Link href="/profile">
                    <CiUser className="text-2xl" />
                  </Link>
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
                  {isDarkMode ? (
                    <FaRegSun className="text-2xl cursor-pointer" />
                  ) : (
                    <PiMoonStarsLight className="text-2xl cursor-pointer" />
                  )}
                </button>
              </div>
              {/* cart : */}
              {isActiveCart && <Cart setIsActiveCart={setIsActiveCart} />}
            </div>
            {/* bottom section  :*/}
            <div className="absolute left-0 right-0 top-full z-20  shadow-xs duration-300 bg-white  dark:bg-zinc-800 dark:text-white ">
              <nav className="container relative flex max-w-[1680px] items-center gap-x-3 mx-auto px-4 [&>a]:text-lg ">
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
                  {/*mega menu*/}
                  <div className="absolute top-full w-full max-w-[1000px]  ">
                    <div className="relative rounded-b-lg  shadow-base hidden  group-hover:block  ">
                      <div
                        className="flex h-[450px] max-h-[450px] w-full overflow-hidden rounded-b-lg pt-0.5 "
                        onMouseLeave={() => setIsHover(false)}
                      >
                        {/* right : */}
                        <div
                          dir="ltr"
                          className="main-scroll w-50 overflow-y-auto bg-gray-100 dark:bg-black "
                        >
                          <ul dir="rtl">
                            {categories.map((category) => (
                              <li
                                key={category.id}
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
                            <div>
                              <div className="flex grow flex-wrap gap-x-14 gap-y-8">
                                {activeSubMenu?.map((submenu) => (
                                  <div className="space-y-2" key={submenu.id}>
                                    <Link
                                      href={submenu.mainLink}
                                      className=" relative before:content-[''] before:w-[2px] before:h-[25px] flex items-center gap-x-2 text-lg hover:text-green-300 before:bg-green-500 before:absolute before:right-0 before:top-0 pr-4"
                                    >
                                      <div className="">{submenu.title}</div>
                                      <FaAngleLeft />
                                    </Link>
                                    <ul>
                                      <li>
                                        {submenu.links.map((item) => (
                                          <Link
                                            key={item.id}
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
                <Link href="/special-offers">فروش ویژه</Link>
                <Link href="/contact-us">تماس با ما</Link>
                <Link href="/about-us">درباره ما</Link>
                <Link href="/questions">سوالات متدوال</Link>
                <Link href="/blogs">وبلاگ</Link>
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
                <Link href="/checkout-cart">
                  <LuShoppingCart className="text-2xl" />
                </Link>
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
            {isLogin ? (
              <CiUser className="text-2xl" />
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
                  <div
                    className="flex items-center justify-between border border-gray-300 p-2 rounded-sm  "
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
                        <div
                          className="border border-gray-300 p-2.5 rounded-sm  mt-1.5"
                          key={sub.id}
                        >
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
