import React from "react";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import { priceFormatter } from "@/utils/priceFormatter";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
export default function ProfileProductCard({
  _id,
  persianName,
  price,
  mainImage,
  productName,
  image,
}) {
  const router = useRouter();
  const deleteProduct = async (productID) => {
    const isWishlist = !!persianName;
    const apiRoute = isWishlist ? "/api/wishlist" : "/api/visits";
    const deleteMessage = isWishlist
      ? "محصول از علاقه مندی های شما پاک شد"
      : "محصول از بازدید های شما پاک شد";

    const res = await fetch(`${apiRoute}/${productID}`, { method: "DELETE" });
    if (res.status === 200) {
      Swal.fire({
        title: deleteMessage,
        icon: "success",
        timer: 1200,
        confirmButtonText: "اوکی",
        confirmButtonColor: "green",
        customClass: {
          title: "swal-title",
          popup: "swal-popup",
        },
      }).then(() => router.refresh());
    } else {
      Swal.fire({ title: "خطا", icon: "error", timer: 1200 });
    }
  };
  return (
    <div
      className="border p-3 border-gray-400 rounded-lg 2xl:w-52 2xl:h-[300px] w-36 h-52 flex flex-col 2xl:gap-y-3 gap-y-2"
      key={_id}
    >
      <div className="2xl:w-32 w-22 2xl:h-44 h-22 mx-auto">
        <Image
          width={500}
          height={500}
          src={mainImage || image}
          alt={persianName || productName}
        />
      </div>
      <p className="2xl:h-40 h-20 overflow-y-hidden text-[9px] 2xl:text-sm font-bold">
        {persianName || productName}
      </p>
      <div className="flex justify-between items-center h-8">
        <FaRegTrashCan
          className="text-red-500 hover:text-red-700 cursor-pointer"
          onClick={() => deleteProduct(_id)}
        />
        <span className="text-[10px] 2xl:text-lg">{priceFormatter(price)}</span>
      </div>
      <button className="2xl:h-12 h-9 py-2 bg-green-400 text-white rounded-lg  text-[10px] 2xl:text-lg cursor-pointer">
        افزودن به سبد خرید
      </button>
    </div>
  );
}
