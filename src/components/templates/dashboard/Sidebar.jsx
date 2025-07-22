"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";
export default function Sidebar() {
  const [openAccount, setOpenAccount] = useState(false);
  const pathname = usePathname();
  return (
    <div className="bg-white w-64 fixed top-0 bottom-0 right-0 overflow-y-auto scrollbar-custom">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-center border-b pb-4">
          کیوان کالا
        </h2>
        <ul className="space-y-2">
          <li className="p-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              داشبورد
            </Link>
          </li>

          <li>
            <div
              className={`flex items-center justify-between cursor-pointer ${
                pathname == "/dashboard/adminInfo" ||
                pathname.startsWith("/dashboard/editAdmininfo")
                  ? "bg-green-100 text-green-400"
                  : undefined
              } p-2 rounded-sm  font-semibold`}
              onClick={() => setOpenAccount((v) => !v)}
            >
              <div className="flex items-center gap-2 ">
                <CgProfile />
                <span>حساب کاربری</span>
              </div>
              {openAccount ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {openAccount && (
              <ul className="mt-2 space-y-2 pr-6 text-sm list-disc ">
                <li>
                  <Link
                    href="/dashboard/adminInfo"
                    className={`block hover:text-blue-600 ${
                      pathname == "/dashboard/adminInfo"
                        ? "text-blue-600"
                        : null
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
                        : null
                    }`}
                  >
                    ویرایش مشخصات
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className={`flex items-center justify-between cursor-pointer ${
                pathname == "/dashboard/all-products" ||
                pathname == "/dashboard/product-creation"
                  ? "bg-green-100 text-green-400"
                  : undefined
              } p-2 rounded-sm  font-semibold`}
              onClick={() => setOpenAccount((v) => !v)}
            >
              <div className="flex items-center gap-2 ">
                <RiShoppingBag4Line />
                <span>محصولات</span>
              </div>
              {openAccount ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {openAccount && (
              <ul className="mt-2 space-y-2 pr-6 text-sm list-disc ">
                <li>
                  <Link
                    href="/dashboard/all-products"
                    className={`block hover:text-blue-600 ${
                      pathname == "/dashboard/all-products"
                        ? "text-blue-600"
                        : null
                    }`}
                  >
                    لیست محصولات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/product-creation"
                    className={`block hover:text-blue-600 ${
                      pathname == "/dashboard/product-creation"
                        ? "text-blue-600"
                        : null
                    }`}
                  >
                    ایجاد محصول
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* سایر لینک‌ها */}
        </ul>
      </div>
    </div>
  );
}
