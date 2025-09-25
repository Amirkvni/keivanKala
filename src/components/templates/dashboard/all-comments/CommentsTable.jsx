import React, { useEffect, useMemo, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Paginations from "../Paginations";

function CommentsTable({ allComments, selected, setSelected, setModalState }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [ratingFilter, setRatingFilter] = useState("-1");
  const [sortFilter, setSortFilter] = useState("-1");
  const [statusFilter, setStatusFilter] = useState("-1");
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, ratingFilter, sortFilter, statusFilter]);
  const filteredComments = useMemo(() => {
    let filtered = [...allComments];

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (comment) =>
          comment.productID.persianName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          comment.productID.englishFullName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          comment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comment.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (ratingFilter !== "-1") {
      filtered = filtered.filter(
        (comment) => String(comment.score) === ratingFilter
      );
    }

    if (statusFilter !== "-1") {
      filtered = filtered.filter((comment) =>
        statusFilter === "accepted" ? comment.isAccept : !comment.isAccept
      );
    }

    if (sortFilter === "most-liked") {
      filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortFilter === "most-disliked") {
      filtered.sort((a, b) => (b.dislikes || 0) - (a.dislikes || 0));
    }

    return filtered;
  }, [searchQuery, ratingFilter, sortFilter, statusFilter, allComments]);
  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = filteredComments.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredComments.length / commentsPerPage);

  const toggleSelectAll = (e) => {
    setSelected(e.target.checked ? allComments.map((c) => c._id) : []);
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };
  const deleteCommentHandler = async (id) => {
    const result = await Swal.fire({
      title: "آیا از حذف کامنت مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "خیر",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/comments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: id }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("حذف شد!", "کامنت با موفقیت حذف شد.", "success");
        router.refresh();
      } else {
        Swal.fire("خطا!", data.message || "مشکلی پیش آمد", "error");
      }
    }
  };

  return (
    <>
      <div className="my-6 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
        <input
          type="text"
          placeholder="جستجو"
          className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none"
        >
          <option value="-1">همه</option>
          <option value="5">۵ امتیاز</option>
          <option value="4">۴ امتیاز</option>
          <option value="3">۳ امتیاز</option>
          <option value="2">۲ امتیاز</option>
          <option value="1">۱ امتیاز</option>
        </select>

        <select
          value={sortFilter}
          onChange={(e) => setSortFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none"
        >
          <option value="-1">همه</option>
          <option value="most-liked">محبوب‌ترین کامنت</option>
          <option value="most-disliked">منفورترین کامنت</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none"
        >
          <option value="-1">همه</option>
          <option value="accepted">تایید شده</option>
          <option value="not-accepted">تایید نشده</option>
        </select>
      </div>

      <div>
        <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden">
          {currentComments.length === 0 && (
            <tr>
              <td colSpan="9" className="py-6 text-gray-500">
                هیچ کامنتی پیدا نشد
              </td>
            </tr>
          )}

          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700">
              <th className="p-3">
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={
                    selected.length > 0 &&
                    selected.length === allComments.length
                  }
                />
              </th>
              <th className="p-3">محصول</th>
              <th className="p-3">مشتری</th>
              <th className="p-3">تاریخ</th>
              <th className="p-3">امتیاز</th>
              <th className="p-3">پسندیده شده</th>
              <th className="p-3">پسندیده نشده</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3">اقدام</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentComments.map((comment) => (
              <tr key={comment._id} className="border-t border-gray-300">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(comment._id)}
                    onChange={() => toggleSelect(comment._id)}
                  />
                </td>
                <td className="p-3">
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        width={40}
                        height={40}
                        alt={comment.productID.persianName}
                        src={comment.productID.mainImage}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-start">
                      <p>{comment.productID.persianName}</p>
                      <p className="mt-1 text-gray-500 text-xs">
                        {comment.productID.englishFullName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <p>{comment.username}</p>
                  <p className="text-gray-500 text-xs">{comment.email}</p>
                </td>
                <td className="p-3">
                  {new Date(comment.date).toLocaleString("fa-IR")}
                </td>
                <td className="p-3">{comment.score}</td>
                <td className="p-3 text-blue-600">{comment.likes || 0}</td>
                <td className="p-3 text-red-600">{comment.dislikes || 0}</td>
                <td className="p-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-lg ${
                      comment.isAccept
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {comment.isAccept ? "تایید شده" : "تایید نشده"}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex justify-center gap-2 text-gray-600 [&>svg]:text-xl">
                    <FaRegEdit
                      className="cursor-pointer hover:text-green-600"
                      onClick={() =>
                        setModalState({
                          mode: "edit",
                          _id: comment._id,
                        })
                      }
                    />
                    <MdDeleteOutline
                      onClick={() => deleteCommentHandler(comment._id)}
                      className="cursor-pointer hover:text-red-600"
                    />
                    <MdOutlineRemoveRedEye
                      className="cursor-pointer hover:text-blue-600"
                      onClick={() =>
                        setModalState({
                          mode: "view",
                          _id: comment._id,
                        })
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginations
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default CommentsTable;
