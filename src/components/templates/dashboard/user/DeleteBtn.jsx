"use client";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
function DeleteBtn({ userID }) {
  const router = useRouter();
  const userDeleteHandler = (id) => {
    Swal.fire({
      title: "آیا از حذف کاربر اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/user/delete/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          Swal.fire("حذف شد", "", "success").then((result) => {
            router.push("/dashboard/all-users");
          });
        } else {
          alert("error");
        }
      }
    });
  };
  return (
    <button
      onClick={() => {
        userDeleteHandler(userID);
      }}
      className="flex gap-x-1 cursor-pointer items-center border w-full p-3 text-center justify-center text-red-600 hover:border-red-400 border-gray-400 rounded-lg"
    >
      حذف
      <MdDeleteOutline />
    </button>
  );
}

export default DeleteBtn;
