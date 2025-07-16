"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoExitOutline } from "react-icons/io5";
import Swal from "sweetalert2";

function LogoutBtn() {
  const router = useRouter();
  const logoutHandler = () => {
    Swal.fire({
      title: "آیا از خروج مطمئنی؟",
      icon: "question	",
      confirmButtonText: "بله",
      confirmButtonColor: "green",
      showCancelButton: true,
      cancelButtonText: "نه",
      cancelButtonColor: "red",
      customClass: {
        title: "swal-title",
        popup: "swal-popup",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("/api/auth/signout", {
          method: "POST",
        });
        if (res.status === 200) {
          Swal.fire({
            title: "با موفقیت خارج شدی",
            icon: "success",
            confirmButtonText: "اوکی",
            customClass: {
              title: "swal-title",
              popup: "swal-popup",
            },
          }).then(() => router.replace("/"));
        }
      }
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="2xl:p-4 p-2 rounded-lg flex items-center gap-x-2 2xl:hover:bg-red-500 2xl:hover:text-white cursor-pointer text-red-600 2xl:hover:font-bold"
    >
      <IoExitOutline className="text-2xl" />
      <span>خروج</span>
    </button>
  );
}

export default LogoutBtn;
