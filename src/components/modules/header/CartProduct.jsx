"use client";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";
function CartProduct({ product, removeFromCart, addToCart, decreaseFromCart }) {
  console.log(product);

  return (
    <div className="flex gap-x-3  ">
      <div>
        <IoCloseCircleOutline
          className="text-3xl cursor-pointer text-red-700"
          onClick={() => removeFromCart(product._id)}
        />

        <div className="w-24 h-24">
          <Image src={product.mainImage} width={500} height={500} />
        </div>
      </div>
      <div>
        <p>{product.persianName}</p>
        <div>تعداد :{product.quantity}</div>
        <div className="flex justify-between items-center">
          <div>{(product.quantity * product.price).toLocaleString()} تومان</div>
          <div className="flex items-center gap-x-6  border-gray-200 border-1 rounded-sm w-fit p-2">
            <FaPlus
              className="text-green-400"
              onClick={() => addToCart(product)}
            />
            <span>{product.quantity}</span>
            <FaMinus
              className="text-red-400"
              onClick={() => decreaseFromCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
