import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { PiUserCircleLight } from "react-icons/pi";
import Swal from "sweetalert2";
function Blog({ mainImage, _id, author, updatedAt, title }) {
  const router = useRouter();
  const deleteBlogHandler = async (id) => {
    const result = await Swal.fire({
      title: "آیا از حذف این وبلاگ مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "خیر",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/blogs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: id }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("حذف شد!", "بلاگ با موفقیت حذف شد.", "success");
        router.refresh();
      } else {
        Swal.fire("خطا!", data.message || "مشکلی پیش آمد", "error");
      }
    }
  };

  return (
    <div
      key={_id}
      className="border p-2 w-[300px] flex flex-col justify-between gap-y-2 rounded-lg border-gray-300"
    >
      <div>
        <Image src={mainImage} alt={`blog-${_id}`} width={300} height={200} />
      </div>
      <div className="flex gap-x-2 items-center ">
        <PiUserCircleLight />

        <span className="text-xs">
          {author.firstname} {author.lastname}
        </span>
      </div>
      <p>{title}</p>
      <div className="flex justify-between items-center ">
        <span>{new Date(updatedAt).toLocaleDateString("fa")}</span>
        <div className="flex gap-x-2 items-center text-xl [&>svg]:cursor-pointer">
          <FiEdit className="hover:text-green-400" />
          <MdDeleteOutline
            className="hover:text-red-400"
            onClick={() => deleteBlogHandler(_id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
