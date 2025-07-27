"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FiPercent, FiUsers } from "react-icons/fi";
import { IoGiftOutline } from "react-icons/io5";
import { LuMessageSquareMore, LuNewspaper } from "react-icons/lu";
import { RiShoppingBag4Line, RiShoppingCart2Line } from "react-icons/ri";

export default function Sidebar() {
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = useState({
    account: false,
    products: false,
    users: false,
    speicalOffers: false,
    discounts: false,
    blogs: false,
  });

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <div className="bg-white w-64 fixed top-0 bottom-0 right-0 overflow-y-auto scrollbar-custom">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-center border-b pb-4">
          کیوان کالا
        </h2>
        <ul className="space-y-2">
          {/* داشبورد */}
          <li className="p-2">
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 ${
                pathname === "/dashboard"
                  ? "bg-green-100 text-green-400 font-semibold rounded-sm p-2"
                  : ""
              }`}
            >
              داشبورد
            </Link>
          </li>

          {/* حساب کاربری */}
          <li>
            <div
              className={`flex items-center justify-between cursor-pointer p-2 rounded-sm font-semibold ${
                pathname === "/dashboard/adminInfo" ||
                pathname.startsWith("/dashboard/editAdmininfo")
                  ? "bg-green-100 text-green-400"
                  : ""
              }`}
              onClick={() => toggleMenu("account")}
            >
              <div className="flex items-center gap-2 ">
                <CgProfile />
                <span>حساب کاربری</span>
              </div>
              {openMenus.account ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openMenus.account && (
              <ul className="mt-2 space-y-2 pr-6 text-sm list-disc">
                <li>
                  <Link
                    href="/dashboard/adminInfo"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/adminInfo" ? "text-blue-600" : ""
                    }`}
                  >
                    مشخصات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/editAdmininfo"
                    className={`block hover:text-blue-600 ${
                      pathname.startsWith("/dashboard/editAdmininfo")
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    ویرایش مشخصات
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* محصولات */}
          <li>
            <div
              className={`flex items-center justify-between cursor-pointer p-2 rounded-sm font-semibold ${
                pathname === "/dashboard/all-products" ||
                pathname === "/dashboard/product-creation"
                  ? "bg-green-100 text-green-400"
                  : ""
              }`}
              onClick={() => toggleMenu("products")}
            >
              <div className="flex items-center gap-2 ">
                <RiShoppingBag4Line />
                <span>محصولات</span>
              </div>
              {openMenus.products ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openMenus.products && (
              <ul className="mt-2 space-y-2 pr-6 text-sm list-disc">
                <li>
                  <Link
                    href="/dashboard/all-products"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/all-products"
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    لیست محصولات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/product-creation"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/product-creation"
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    ایجاد محصول
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* سفارشات */}

          {/* کاربران */}
          <li>
            <div
              className={`flex items-center justify-between cursor-pointer p-2 rounded-sm font-semibold ${
                pathname === "/dashboard/all-users" ||
                pathname === "/dashboard/add-user"
                  ? "bg-green-100 text-green-400"
                  : ""
              }`}
              onClick={() => toggleMenu("users")}
            >
              <div className="flex items-center gap-2 ">
                <FiUsers />
                <span>کاربران</span>
              </div>
              {openMenus.users ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openMenus.users && (
              <ul className="mt-2 space-y-2 pr-6 text-sm list-disc">
                <li>
                  <Link
                    href="/dashboard/all-users"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/all-users" ? "text-blue-600" : ""
                    }`}
                  >
                    لیست کاربران
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/add-user"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/add-user" ? "text-blue-600" : ""
                    }`}
                  >
                    ایجاد کاربر جدید
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div
              className={`flex items-center justify-between cursor-pointer p-2 rounded-sm font-semibold ${
                pathname === "/dashboard/all-discountCodes" ||
                pathname === "/dashboard/add-discountCode"
                  ? "bg-green-100 text-green-400"
                  : ""
              }`}
              onClick={() => toggleMenu("discounts")}
            >
              <div className="flex items-center gap-2 ">
                <FiPercent />
                <span>تخفیفات</span>
              </div>
              {openMenus.discounts ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openMenus.discounts && (
              <ul className="mt-2 space-y-2 pr-6 text-sm list-disc">
                <li>
                  <Link
                    href="/dashboard/all-discountCodes"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/all-products"
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    کدهای تخفیف
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/add-discountCode"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/product-creation"
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    افزودن کد تخفیف
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className={`flex items-center justify-between cursor-pointer p-2 rounded-sm font-semibold ${
                pathname === "/dashboard/all-specialsales" ||
                pathname === "/dashboard/add-specialoffer"
                  ? "bg-green-100 text-green-400"
                  : ""
              }`}
              onClick={() => toggleMenu("speicalOffers")}
            >
              <div className="flex items-center gap-2 ">
                <IoGiftOutline />
                <span> فروش ویژه</span>
              </div>
              {openMenus.speicalOffers ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openMenus.speicalOffers && (
              <ul className="mt-2 space-y-2 pr-6 text-sm list-disc">
                <li>
                  <Link
                    href="/dashboard/all-specialsales"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/all-specialsales"
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    لیست فروش‌های ویژه
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/add-specialoffer"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/add-specialoffer"
                        ? "text-blue-600"
                        : ""
                    }`}
                  >
                    ایجاد کمپین جدید{" "}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className={`flex items-center justify-between cursor-pointer p-2 rounded-sm font-semibold ${
                pathname === "/dashboard/all-blogs" ||
                pathname === "/dashboard/add-blog"
                  ? "bg-green-100 text-green-400"
                  : ""
              }`}
              onClick={() => toggleMenu("blogs")}
            >
              <div className="flex items-center gap-2 ">
                <LuNewspaper />
                <span>وبلاگ ها</span>
              </div>
              {openMenus.discounts ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {openMenus.blogs && (
              <ul className="mt-2 space-y-2 pr-6 text-sm list-disc">
                <li>
                  <Link
                    href="/dashboard/all-blogs"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/all-blogs" ? "text-blue-600" : ""
                    }`}
                  >
                    وبلاگ ها
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/add-blog"
                    className={`block hover:text-blue-600 ${
                      pathname === "/dashboard/add-blog" ? "text-blue-600" : ""
                    }`}
                  >
                    افزودن وبلاگ
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`p-2 flex items-center justify-between cursor-pointer rounded-sm font-semibold ${
              pathname.startsWith("/dashboard/all-orders")
                ? "bg-green-100 text-green-400"
                : ""
            }`}
          >
            <Link
              href="/dashboard/all-orders"
              className="flex items-center gap-2"
            >
              <RiShoppingCart2Line />
              سفارشات
            </Link>
          </li>
          <li
            className={`p-2 flex items-center justify-between cursor-pointer rounded-sm font-semibold ${
              pathname.startsWith("/dashboard/all-comments")
                ? "bg-green-100 text-green-400"
                : ""
            }`}
          >
            <Link
              href="/dashboard/all-comments"
              className="flex items-center gap-2"
            >
              <FaRegComments />
              نظرات{" "}
            </Link>
          </li>
          <li
            className={`p-2 flex items-center justify-between cursor-pointer rounded-sm font-semibold ${
              pathname.startsWith("/dashboard/all-tickets")
                ? "bg-green-100 text-green-400"
                : ""
            }`}
          >
            <Link
              href="/dashboard/all-tickets"
              className="flex items-center gap-2"
            >
              <LuMessageSquareMore />
              تیکت ها
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
