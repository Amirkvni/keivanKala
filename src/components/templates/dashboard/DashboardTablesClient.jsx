"use client";
import React from "react";
import { LuEye } from "react-icons/lu";
import DashboardTable from "./DashboardTable";
import Image from "next/image";
import { priceFormatter } from "@/utils/priceFormatter";
import Link from "next/link";
function DashboardTablesClient({
  recentUsers,
  recentComments,
  bestSellingProducts,
}) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <DashboardTable
        title="کاربران اخیر"
        columns={["نام", "نقش", "تلفن", "اخرین ورود"]}
        data={recentUsers}
        bgColor="bg-blue-100"
        textColor="text-blue-800"
        borderColor="border-blue-200"
        renderRow={(user) => (
          <>
            <td className="py-2 px-3">
              {user.firstname} {user.lastname}
            </td>
            <td className="py-2 px-3">
              {user.role.name === "ADMIN"
                ? "ادمین"
                : user.role.name === "SUPERADMIN"
                ? "سوپرادمین"
                : user.role.name === "AUTHOR"
                ? "نویسنده"
                : user.role.name === "USER"
                ? "کاربرمعمولی"
                : user.role.name === "SUPPORTER"
                ? "پشتیبان"
                : "کاربر"}
            </td>
            <td className="py-2 px-3">{user.phone}</td>
            <td className="py-2 px-3">
              {new Date(user.createdAt).toLocaleDateString("fa-IR")}
            </td>
            <td className="py-2 px-3 cursor-pointer">
              <Link href={`/dashboard/user/${user._id}`}>
                <LuEye className="text-xl mx-auto" />
              </Link>
            </td>
          </>
        )}
      />
      <DashboardTable
        title="نظرات اخیر"
        columns={["محصول", "کاربر", "تاریخ", "وضعیت"]}
        data={recentComments}
        bgColor="bg-green-100"
        textColor="text-green-800"
        borderColor="border-green-200"
        renderRow={(user) => (
          <>
            <td className="py-2 px-3 text-xs">
              <div className="w-8 h-8 rounded-full overflow-hidden mx-auto">
                <Image
                  src={user.productID.mainImage}
                  alt="product"
                  width={64}
                  height={64}
                />
              </div>
            </td>
            <td className="py-2 px-3">{user.username}</td>
            <td className="py-2 px-3">
              {new Date(user.date).toLocaleDateString("fa-IR")}
            </td>
            <td> {user.isAccept === false ? "تایید نشده" : "تایید شده"}</td>
            <td className="py-2 px-3 cursor-pointer">
              <Link href="/dashboard/all-comments">
                <LuEye className="text-xl mx-auto" />
              </Link>
            </td>
          </>
        )}
      />

      <DashboardTable
        title="پرفروش‌ترین محصولات"
        columns={["محصول", "تعداد فروش", "موجودی", "قیمت"]}
        data={bestSellingProducts}
        bgColor="bg-pink-100"
        textColor="text-pink-800"
        borderColor="border-pink-200"
        renderRow={(product) => (
          <>
            <td className="py-2 px-3">
              <div className="w-8 h-8 rounded-full overflow-hidden mx-auto">
                <Image
                  src={product.mainImage}
                  alt="product"
                  width={64}
                  height={64}
                />
              </div>
            </td>
            <td className="py-2 px-3">{product.stock} </td>
            <td className="py-2 px-3"> {product.sales}</td>
            <td className="py-2 px-3">{priceFormatter(product.price)} </td>
            <td className="py-2 px-3 cursor-pointer">
              <Link href="/">
                <LuEye className="text-xl mx-auto" />
              </Link>
            </td>
          </>
        )}
      />
    </div>
  );
}

export default DashboardTablesClient;
