"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import cartIcon from "@/assets/icons/logo.webp";
import { LuShoppingCart } from "react-icons/lu";
import { PiMoonStarsLight } from "react-icons/pi";
import { FaRegSun } from "react-icons/fa6";
import Cart from "./Cart";
import { CartContext } from "@/contexts/CartContext";
import SearchInput from "./SearchInput";
import { categories } from "@/constants/categories";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { CiUser } from "react-icons/ci";
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
        setUser(data.data);
      } catch (err) {
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

  let { cart } = useContext(CartContext);
  return (
    <header>
      <div className="fixed left-0 right-0 top-0 z-30 py-4 px-2 bg-white  dark:bg-zinc-800 dark:text-white">
        {/* header desktop : */}
        <div>
          <div className="hidden xl:block ">
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

              <SearchInput />
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
                <MegaMenu
                  categories={categories}
                  setActiveCategory={setActiveCategory}
                  activeSubMenu={activeSubMenu}
                  setActiveSubMenu={setActiveSubMenu}
                  setIsHover={setIsHover}
                />
                <Link href="/special-offers">فروش ویژه</Link>
                <Link href="/contact-us">تماس با ما</Link>
                <Link href="/about-us">درباره ما</Link>
                <Link href="/questions">سوالات متدوال</Link>
                <Link href="/blogs">وبلاگ</Link>
              </nav>
            </div>
          </div>
        </div>
        <MobileMenu
          isActiveHamburger={isActiveHamburger}
          setIsActiveHamburger={setIsActiveHamburger}
          isLogin={isLogin}
          activeMobileCategory={activeMobileCategory}
          setActiveMobileCategory={setActiveMobileCategory}
          activeMobileSubCategory={activeMobileSubCategory}
          setActiveMobileSubCategory={setActiveMobileSubCategory}
          isMobileCategoriesActive={isMobileCategoriesActive}
          darkmodeHandler={darkmodeHandler}
          isDarkMode={isDarkMode}
          cartLength={cart.length}
          mobileCategoriesActive={mobileCategoriesActive}
        />
      </div>

      <div
        onMouseEnter={() => setIsHover(false)}
        className={`fixed inset-0 z-20  backdrop  ${
          isHover ? "block" : "hidden"
        }`}
      ></div>
    </header>
  );
}

export default Header;
