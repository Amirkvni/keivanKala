import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function CommentFormModal({ mode, commentId, setModalState }) {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(true);
  const isView = mode === "view";
  const isEdit = mode === "edit";
  useEffect(() => {
    const fetchComment = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/comments/${commentId}`);
        const data = await res.json();

        setComment(data.comment.body);
        setScore(data.comment.score);
        setStatus(data.comment.isAccept);
      } catch (err) {
        console.error("Error fetching role:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchComment();
  }, [commentId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isView) return;

    const payload = {
      body: comment,
      score,
      isAccept: status,
    };

    try {
      const res = await fetch(`/api/comments/${commentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("کامنت با موفقیت ویرایش شد").then(() => {
          router.refresh();
          setModalState({ mode: "", commentId: "" });
        });
      } else {
        alert(data.error || "خطا در ویرایش کامنت");
      }
    } catch (error) {
      console.error("Error saving role:", error);
      alert("خطای سرور، لطفا دوباره تلاش کنید");
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
      <div className="bg-white w-96 p-5 rounded-xl shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          {isEdit && "ویرایش نظر"}
          {isView && "نمایش نظر"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">نظر</span>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="مثلاً مدیریت کاربران"
              readOnly={isView}
              className="border rounded-lg px-3 py-2 border-gray-300  outline-none text-gray-600  disabled:bg-gray-100 resize-none"
            ></textarea>
          </label>

          <div className="flex justify-between items-center">
            <label className="flex gap-x-2 items-center w-16">
              <span className="text-sm text-gray-600">امتیاز</span>
              <select
                disabled={isView}
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </label>
            <label className="flex gap-x-2 items-center">
              <span className="text-sm text-gray-600">وضعیت</span>
              <div className="inline-flex items-center cursor-pointer w-fit">
                <input
                  type="checkbox"
                  disabled={isView}
                  value=""
                  checked={status}
                  className="sr-only peer"
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <div className="relative w-11 h-6 bg-red-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-red-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
              </div>
            </label>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => setModalState({ mode: "", roleId: "" })}
            >
              بستن
            </button>
            {!isView && (
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
              >
                ذخیره
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
