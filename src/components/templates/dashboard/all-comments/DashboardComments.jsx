"use client";
import React, { useState } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import CommentsTable from "./CommentsTable";
import CommentFormModal from "./CommentFormModal";
import { useRouter } from "next/navigation";
export default function DashboardComments({ allComments }) {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const [modalState, setModalState] = useState({
    mode: "",
    _id: null,
  });
  const deleteCommentHandler = async () => {
    if (selected.length === 0) return;

    const result = await Swal.fire({
      title: "آیا از حذف کامنت‌ها مطمئن هستید؟",
      text: `تعداد ${selected.length} کامنت انتخاب شده است.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "خیر",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/comments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selected }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("حذف شد!", `${data.deletedCount} کامنت حذف شدند.`, "success");
        setSelected([]);
        router.refresh();
      } else {
        Swal.fire("خطا!", data.message || "مشکلی پیش آمد", "error");
      }
    }
  };
  return (
    <div className="p-12">
      <div className="bg-white p-3 rounded-lg dashboard-box-shadow">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">همه نظرات</span>
          {selected.length > 0 && (
            <button className="cursor-pointer text-red-600 border-red-600 border p-2 rounded-sm">
              <MdDeleteOutline onClick={deleteCommentHandler} />
            </button>
          )}
        </div>
        <CommentsTable
          allComments={allComments}
          selected={selected}
          setSelected={setSelected}
          setModalState={setModalState}
        />
      </div>
      {selected.length > 0 && (
        <div className="sticky bottom-0 flex justify-between items-center bg-white p-4 mt-3">
          <div className="flex items-center gap-x-3">
            <IoCheckmarkDoneOutline className="text-blue-700 text-2xl" />
            <span>{selected.length} محصولات انتخاب شده</span>
          </div>
          <button className="border border-red-500 p-2 rounded-lg text-red-500 cursor-pointer">
            حذف
          </button>
        </div>
      )}
      {modalState.mode && (
        <CommentFormModal
          mode={modalState.mode}
          commentId={modalState._id}
          setModalState={setModalState}
        />
      )}
    </div>
  );
}
