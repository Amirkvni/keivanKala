"use client";
import { CartContext } from "@/contexts/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

function CartList({ isLogin }) {
  let router = useRouter();
  let { cart, removeFromCart, updateQuantity, getTotal, addToRedirectPath } =
    useContext(CartContext);

  const shippingMethodHandler = () => {
    if (isLogin) {
      router.push("/checkout-cart/shipping-method");
    } else {
      router.push("/signin");
      addToRedirectPath("/checkout-cart/shipping-method");
    }
  };
  return (
    <div className="mt-12 container  flex gap-x-2 mx-auto  [&>div]:rounded-lg [&>div]:p-3 dark:bg-zinc-800 dark:text-white  ">
      <div className="w-3/4 border ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2 ">
            <span>سبد خرید</span>
            <span>( 2 کالا )</span>
          </div>
          <div className="flex items-center gap-x-2  text-red-700 cursor-pointer">
            <span>حذف همه</span>
            <FaRegTrashCan />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-3">
          {cart.length === 0 ? (
            <p>سبد خرید شما خالی است</p>
          ) : (
            cart.map((product) => (
              <div
                key={product._id}
                className=" flex gap-x-6 p-3 border-b-gray-300 border-b "
              >
                <div className="cursor-pointer">
                  <div
                    onClick={() => removeFromCart(product._id)}
                    className="w-7 h-7 text-red-700"
                  >
                    <IoCloseCircleOutline className="w-full h-full" />
                  </div>

                  <div className="w-20 h-24 my-2">
                    <Image width={400} height={400} src={product.mainImage} />
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    className="border border-gray-400 w-12"
                    onChange={() =>
                      updateQuantity(product._id, Number(event.target.value))
                    }
                  />
                  {/* <div className="border rounded-lg flex justify-between items-center border-gray-400 px-2">
                    <GoPlus className="text-green-300 text-xl" />
                    <span>1</span>
                    <RiSubtractFill className="text-red-400 text-xl" />
                  </div> */}
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p>{product.persianName}</p>
                    <div className="flex gap-x-2 items-center pt-3">
                      <div className="w-4 h-4 rounded-full bg-amber-400"></div>
                      <span>ثهوه ای</span>
                    </div>
                  </div>
                  <span>{product.price.toLocaleString()} تومان</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-1/4 h-fit  border [&>div]:flex  [&>div]:py-5 [&>div]:justify-between items-center">
        <div>
          <span>قیمت کالا ها (2)</span>
          <span className="text-green-400">
            {getTotal().toLocaleString()} تومان
          </span>
        </div>
        <div className="border-y border-y-gray-400">
          <span>تخفیف</span>
          <span className="text-red-400">1,220,000 تومان</span>
        </div>
        <div>
          <span>مبلغ قابل پرداخت</span>
          <span className="text-green-500 font-bold">
            {getTotal().toLocaleString()} تومان
          </span>
        </div>
        <button
          className="bg-green-500 text-white cursor-pointer p-3 rounded-lg w-full"
          onClick={shippingMethodHandler}
        >
          ادامه فرایند خرید
        </button>
      </div>
    </div>
  );
}

export default CartList;
