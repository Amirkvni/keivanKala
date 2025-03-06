import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";
function CartProduct() {
  return (
    <div className="flex gap-x-3  ">
      <div>
        <IoCloseCircleOutline className="text-3xl cursor-pointer text-red-700" />

        <div className="w-24 h-24">
          <Image
            src={
              "https://ik.imagekit.io/bflkztneat/p2.png?updatedAt=1741102745930"
            }
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>
        <p>کفش پیاده روی مردانه نیو بالانس مدل Mdfrtlm2</p>
        <div>تعداد :۲</div>
        <div className="flex justify-between items-center">
          <div>3000000 تومان</div>
          <div className="flex items-center gap-x-6  border-gray-200 border-1 rounded-sm w-fit p-2">
            <FaPlus className="text-green-400" />
            <span>0</span>
            <FaMinus className="text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
