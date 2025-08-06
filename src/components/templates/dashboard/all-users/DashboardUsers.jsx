"use client";
import React, { useState } from "react";

import AddButton from "@/components/templates/dashboard/AddButton";
import Paginations from "@/components/templates/dashboard/Paginations";
import UsersTable from "./UsersTable";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import Swal from "sweetalert2";
function DashboardUsers({ users }) {
  const [selected, setSelected] = useState([]);
  const [userList, setUserList] = useState(users);

  const removeUserHandler = async () => {
    const result = await Swal.fire({
      title: "آیا از حذف کاربران انتخاب‌شده اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "خیر",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch("/api/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selected }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "خطا در حذف کاربران");
      }
      const res2 = await Swal.fire({
        icon: "success",
        title: "کاربران انتخاب‌شده با موفقیت حذف شدند.",
        showCancelButton: true,
        confirmButtonText: "اوکی",
      });

      if (res2.isConfirmed) {
        setUserList((prev) =>
          prev.filter((user) => !selected.includes(user._id))
        );

        setSelected([]);
      }
    } catch (error) {
      console.error("خطا در حذف:", error.message);
      Swal.fire("خطا", error.message, "error");
    }
  };

  return (
    <div className="p-12">
      <div className="bg-white p-3 dashboard-box-shadow rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">کاربران </span>
          <AddButton title="افزودن کاربر" address="/dashboard/add-user" />
        </div>
        <UsersTable
          allUsers={userList}
          selected={selected}
          setSelected={setSelected}
        />
        <Paginations />
      </div>
      {selected.length > 0 && (
        <div className="sticky bottom-0 flex justify-between items-center bg-white p-4 mt-3">
          <div className="flex items-center gap-x-3">
            <IoCheckmarkDoneOutline className="text-blue-700 text-2xl" />
            <span>{selected.length} کاربر انتخاب شده</span>
          </div>
          <button
            className="border border-red-500 p-2 rounded-lg text-red-500 cursor-pointer"
            onClick={removeUserHandler}
          >
            حذف
          </button>
        </div>
      )}
    </div>
  );
}

export default DashboardUsers;
