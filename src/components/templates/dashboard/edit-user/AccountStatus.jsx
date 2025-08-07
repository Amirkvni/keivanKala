"use client";
import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function AccountStatus({ status, userId }) {
  const router = useRouter();

  const changeStatusHandler = (isChecked) => {
    if (isChecked) {
      Swal.fire({
        title: "آیا مایل به مسدود کردن این حساب هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await fetch(`/api/user/ban/${userId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "ban" }),
          });
          if (res.status === 200) {
            Swal.fire("مسدود شد!", "حساب کاربر مسدود شد.", "success").then(
              () => {
                router.refresh();
              }
            );
          }
        }
      });
    } else {
      Swal.fire({
        title: "آیا مایل به فعال‌سازی این حساب هستید؟",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await fetch(`/api/user/ban/${userId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "active" }),
          });

          Swal.fire("فعال شد!", "حساب کاربر فعل شد.", "success").then(() => {
            router.refresh(); // ⬅️ رفرش بعد از موفقیت
          });
        }
      });
    }
  };
  return (
    <div className="bg-white dashboard-box-shadow [&>div]:flex [&>div]:justify-between [&>div]:items-center">
      <div>
        <p className="font-extrabold text-lg">وضعیت حساب </p>
        <span
          className={`text-xs  rounded-lg  py-1.5 px-3 ${
            status === "active"
              ? "bg-green-100 text-green-900"
              : "bg-red-100 text-red-900"
          } `}
        >
          {status === "active" ? "فعال" : "غیرفعال"}
        </span>
      </div>
      <div className="mt-4">
        <div>
          <p className="font-bold text-sm">
            {status === "ban" ? "فعال" : "مسدود"} کنید
          </p>
          <p className="text-xs text-gray-400 mt-1">
            این حساب را {status === "ban" ? "فعال" : "مسدود"} کنید
          </p>
        </div>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            checked={status === "ban"}
            className="sr-only peer"
            onChange={(e) => changeStatusHandler(e.target.checked)}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
        </label>
      </div>
    </div>
  );
}

export default AccountStatus;
