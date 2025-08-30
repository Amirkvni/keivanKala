"use client";
import { CartContext } from "@/contexts/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import emptyCartIcon from "@/../public/images/empty-cart.svg";
function CartList({ isLogin }) {
  let router = useRouter();
  let {
    cart,
    removeFromCart,
    getTotal,
    addToRedirectPath,
    getTotalDiscountPrice,
    getPayableAmount,
    addToCart,
    decreaseFromCart,
    clearCart,
  } = useContext(CartContext);

  const shippingMethodHandler = () => {
    if (isLogin) {
      router.push("/checkout-cart/shipping-method");
    } else {
      router.push("/signin");
      addToRedirectPath("/checkout-cart/shipping-method");
    }
  };

  return (
    <div className="mt-12  container flex-col xl:flex-row gap-y-5 text-xs lg:text-base  flex gap-x-2 mx-auto  [&>div]:rounded-lg [&>div]:p-3 [&>div]:dark:bg-zinc-800 dark:text-white relative  ">
      <div
        className={`bg-white ${
          cart.length > 0 ? "xl:w-3/4" : "xl:w-full"
        }border w-full `}
      >
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-x-2 ">
            <span>سبد خرید</span>
            <span>( {cart.length} کالا )</span>
          </div>
          <div
            className="flex items-center gap-x-2  text-red-700  cursor-pointer"
            onClick={() => clearCart()}
          >
            <span>حذف همه</span>
            <FaRegTrashCan />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-3">
          {cart.length === 0 ? (
            <div className=" text-center py-12 ">
              <div className="lg:w-64 lg:h-64 mx-auto w-32 h-32">
                <Image
                  src={emptyCartIcon}
                  width={500}
                  height={500}
                  alt="emptyCartIcon"
                />
              </div>
              <span className="text-red-600"> سبد خرید شما خالی است! </span>
            </div>
          ) : (
            cart.map((product) => (
              <div
                key={`${product._id}_${product.selectedColor}`}
                className=" flex gap-x-6 p-3 border-gray-200 border rounded-lg"
              >
                <div className="cursor-pointer">
                  <div
                    onClick={() =>
                      removeFromCart({
                        _id: product._id,
                        selectedColor: product.selectedColor,
                      })
                    }
                    className="w-7 h-7 text-red-700"
                  >
                    <IoCloseCircleOutline className="w-full h-full" />
                  </div>

                  <div className="w-20 h-24 my-2 ">
                    <Image
                      width={400}
                      height={400}
                      src={product.mainImage}
                      alt={product._id}
                    />
                  </div>

                  <div className="flex items-center gap-x-6  border-gray-200 border-1 rounded-sm w-fit p-2">
                    <FaPlus
                      className="text-green-400"
                      onClick={() =>
                        addToCart(
                          {
                            ...product,
                            selectedColor: product.selectedColor,
                          },
                          1
                        )
                      }
                    />
                    <span>{product.quantity}</span>
                    <FaMinus
                      className="text-red-400"
                      onClick={() =>
                        decreaseFromCart({
                          ...product,
                          selectedColor: product.selectedColor,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className=" w-42 lg:w-full">{product.persianName}</p>
                    <div className="flex gap-x-2 items-center pt-3">
                      <span>رنگ :</span>
                      <div
                        className={`w-4 h-4 rounded-full ${product.selectedColor}`}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-3 lg:w-54">
                    <span
                      className={`${
                        product.secondPrice
                          ? "line-through decoration-red-500  text-gray-500"
                          : ""
                      }`}
                    >
                      {Number(
                        product.quantity * product.price
                      ).toLocaleString()}
                      تومان
                    </span>
                    {product.secondPrice && (
                      <span className="text-green-400 ">
                        {Number(
                          product.quantity * product.secondPrice
                        ).toLocaleString()}
                        تومان
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {cart.length > 0 && (
        <div className="xl:w-1/4 text-xs xl:text-sm w-full h-fit   bg-white [&>div]:flex  [&>div]:py-5 [&>div]:justify-between items-center sticky top-[120px]">
          <div className="text-gray-400">
            <span>قیمت کالا ها ({cart.length})</span>
            <span>{getTotal().toLocaleString()} تومان</span>
          </div>
          <div>
            <span>جمع سبد خرید</span>
            <span>{getPayableAmount().toLocaleString()} تومان</span>
          </div>
          {cart.some((item) => item.secondPrice) && (
            <div className="text-green-700">
              <span>سود شما از خرید</span>
              <span>{getTotalDiscountPrice().toLocaleString()} تومان</span>
            </div>
          )}

          <button
            className="bg-green-500 text-white cursor-pointer p-3 rounded-lg w-full"
            onClick={shippingMethodHandler}
          >
            ادامه فرایند خرید
          </button>
        </div>
      )}
    </div>
  );
}

export default CartList;
