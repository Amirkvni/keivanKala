"use client";
import {
  FaChevronLeft,
  FaHeart,
  FaPlus,
  FaMinus,
  FaTruckFast,
} from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { MdSupportAgent, MdShare } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import LightBox from "./LightBox";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
function ProductDetail({ product, user }) {
  let { addToCart, decreaseFromCart } = useContext(CartContext);
  const router = useRouter();
  const [quantity, setQuantity] = useState(0);
  const [isWishlist, setIsWishList] = useState(false);
  const [selectedProductColor, setSelectedProductColor] = useState(null);
  const [selectedProductSize, setSelectedProductSize] = useState(null);
  const addToWishlist = async () => {
    if (user === null) {
      router.push("/signin");
    } else {
      const wish = {
        user: user._id,
        product: product._id,
      };

      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wish),
      });

      if (res.status === 201) {
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "محصول با موفقیت به علاقه مندی های شما اضافه شد",
          showConfirmButton: false,
          timer: 1000,
        });
        setIsWishList((prev) => !prev);
      } else {
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "محصول با موفقیت از علاقه مندی ها پاک شد",
          showConfirmButton: false,
          timer: 1000,
        });
        setIsWishList((prev) => !prev);
      }
    }
  };
  const showLightBox = () => {
    Swal.fire({
      title: "اشتراک گذاری",
      text: "این کالا را با دوستان خود به اشتراک بگذارید!",
      confirmButtonText: "کپی لینک 📋",
      confirmButtonColor: "#00C923",
      showCloseButton: true,
      customClass: {
        title: "shareProduct ",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigator.clipboard.writeText(window.location.href);
        Swal.fire({
          title: "ادرس کپی شد",
          icon: "success",
          confirmButtonText: "اوکی",
          confirmButtonColor: "green",
        });
      }
    });
  };

  return (
    <>
      <div className="container mx-auto py-4 px-2  w-3/4 my-12 rounded-lg shadow-sm bg-white  hidden 2xl:block mt-[140px] dark:bg-zinc-800 ">
        <div className="gap-x-2 flex 2xl:flex-row flex-col ">
          {/* right section : */}
          <div className="w-1/3 ">
            <div className="flex gap-x-2 items-center p-3 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:cursor-pointer dark:text-white">
              {isWishlist ? (
                <FaHeart onClick={addToWishlist} className="text-red-600" />
              ) : (
                <FaRegHeart onClick={addToWishlist} />
              )}
              <MdShare onClick={showLightBox} />
            </div>
            <div className=" mt-1  py-1.5 ">
              <LightBox
                mainImage={product.mainImage}
                pictures={product.images}
              />
            </div>
          </div>
          {/* left section : */}
          <div className="w-2/3 ">
            <h1 className="font-bold 3xl:text-2xl text-xl mb-2 dark:text-white">
              {product.persianName}
            </h1>
            <div className="flex gap-x-0.5 h-[400px]">
              {/* bottom right : */}
              <div className=" w-1/2 h-full flex flex-col gap-y-5  3xl:text-base text-sm">
                <p className=" capitalize text-gray-400 ">
                  {product.englishFullName}
                </p>
                <div className="flex text-green-400 text-base items-center gap-x-3 ">
                  <span>کد کالا 6457#</span>
                  <span>|</span>
                  <span>
                    {
                      product.comments.filter((product) => product.isAccept)
                        .length
                    }{" "}
                    دیدگاه
                  </span>
                </div>
                <div className="flex  items-center 3xl:gap-x-2 gap-x-1 ">
                  <BiLike className="text-green-300 text-xl" />
                  <p className=" text-gray-400 3xl:text-base text-xs">
                    80% از خریداران، خرید این کالا را پیشنهاد کرده‌اند
                  </p>
                </div>
                <div className="font-semibold 3xl:text-xl text-lg dark:text-white">
                  ویژگی های محصول
                </div>
                <div>
                  <ul className="flex flex-col gap-y-3">
                    {Object.entries(product.attributes).map(([key, value]) => (
                      <li key={key} className="3xl:text-lg text-sm">
                        <span className="dark:text-gray-400">{key} </span>
                        <span className="dark:text-white">: {value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* bottom left : */}
              <div className=" w-1/2 h-full flex flex-col justify-between">
                <div className="font-semibold 3xl:text-lg text-sm dark:text-white ">
                  انتخاب رنگ
                </div>
                <div className="colors flex  gap-x-2 w-fit ">
                  {Object.entries(product.colors).map(([key, value]) => (
                    <div
                      className={`flex border w-fit items-center gap-x-2 cursor-pointer  ${
                        selectedProductColor === key
                          ? "border-green-700"
                          : "border-green-300"
                      } bg-white rounded-3xl px-4 py-2 dark:bg-zinc-800 dark:text-white`}
                      key={key}
                      onClick={() => setSelectedProductColor(key)}
                    >
                      <div className={`w-4 h-4 ${value} rounded-full`}></div>
                      <span className="font-semibold 3xl:text-lg text-sm">
                        {key}
                      </span>
                    </div>
                  ))}
                </div>
                {product.sizes && (
                  <>
                    <div className="font-semibold 3xl:text-lg text-sm dark:text-white">
                      انتخاب سایز
                    </div>
                    <div className="colors flex  gap-x-2 w-fit [&>div>span]:font-semibold [&>div>span]:text-lg">
                      {product.sizes.map((product) => (
                        <div
                          onClick={() => setSelectedProductSize(product)}
                          className={`w-10 h-10 flex border  items-center gap-x-2 cursor-pointer justify-center ${
                            selectedProductSize === product
                              ? "border-green-600"
                              : "border-green-300"
                          } bg-white rounded-full p-1 dark:bg-zinc-800 dark:text-white`}
                        >
                          <span>{product}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="flex items-center gap-x-3  my-3 p-4  w-full bg-green-50 rounded-sm text-green-600 dark:bg-green-800 dark:text-white ">
                  <IoShieldCheckmarkOutline className="w-6 h-6" />
                  <span className="3xl:text-lg text-sm font-semibold">
                    تضمین سلامت فیزیکی و اصالت کالا
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <div className="flex items-center gap-x-6  border-gray-200 dark:border-gray-100 border-1 rounded-sm w-fit p-2 [&>svg]:cursor-pointer">
                      <FaPlus
                        className="text-green-400"
                        onClick={() => {
                          if (quantity < 4) {
                            setQuantity((prev) => prev + 1);
                            addToCart(product);
                          }
                        }}
                      />
                      <span className="dark:text-white">{quantity}</span>
                      <FaMinus
                        className="text-red-400"
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity((prev) => prev - 1);
                            decreaseFromCart(product);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end w-1/2 items-center text-green-600 text-lg font-semibold  gap-x-2">
                    <span>{product.price.toLocaleString()}</span>
                    <span>تومان</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                    addToCart(product);
                  }}
                  className="w-full rounded-lg p-1 mt-3 text-white cursor-pointer py-3 bg-green-600 dark:bg-green-500 "
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-7 gap-x-3 [&>div]:flex [&>div]:px-3 [&>div]:py-4 [&>div]:w-1/4 [&>div]:items-center [&>div]:gap-x-2.5 [&>div]:border [&>div]:border-gray-200 [&>div]:p-0.5 [&>div]:rounded-sm 3xl:[&>div]:text-lg [&>div]:text-xs  [&>div>svg]:w-6 [&>div>svg]:h-6 dark:text-white">
          <div>
            <IoIosTimer />
            <span>هفت روز ضمانت بازگشت کالا</span>
          </div>
          <div>
            <IoShieldCheckmarkOutline />
            <span>تضمین اصالت کالا</span>
          </div>
          <div>
            <MdSupportAgent />
            <span>هفت روز هفته</span>
          </div>
          <div>
            <FaTruckFast />
            <span>تحویل اکسپرس در تهران, کرج</span>
          </div>
        </div>
      </div>

      {/* mobile : */}
      <div className="2xl:hidden my-6 rounded-lg shadow-sm bg-white dark:bg-zinc-800 container mx-auto py-1 px-2  flex flex-col border-0.5 gap-y-1.5 mt-[130px]">
        <div className="flex gap-x-2 items-center p-3 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:cursor-pointer justify-end mb-3 ">
          {isWishlist ? (
            <FaHeart onClick={addToWishlist} className="text-red-600" />
          ) : (
            <FaRegHeart onClick={addToWishlist} className="dark:text-white" />
          )}
          <MdShare onClick={showLightBox} className="dark:text-white" />
        </div>
        <div className="h-[300px]  w-[200px]  mx-auto">
          <Swiper
            slidesPerView={1}
            pagination={true}
            modules={[Pagination]}
            className="mobileProductSlider "
          >
            {product.images.map((image) => (
              <SwiperSlide key={Math.random()}>
                <Image src={image} width={500} height={500} alt="p1" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center gap-x-1 text-green-400">
          نایک
          <FaChevronLeft />
        </div>
        <h1 className="font-semibod text-lg dark:text-white  mb-2">
          {product.persianName}
        </h1>
        <div className="flex text-green-400 text-sm gap-x-4 ">
          <span> کد کالا 6457 # </span>
          <span>20 دیدگاه</span>
        </div>
        <div className="dark:text-white">انتخاب رنگ</div>
        <div className="colors flex  gap-x-2 w-fit ">
          {/* {Object.entries(product.colors).map(([key, value]) => (
            <div
              className={`flex border w-fit items-center gap-x-1 cursor-pointer  ${
                selectedProductColor === key
                  ? "border-green-700"
                  : "border-green-300"
              } bg-white rounded-3xl px-4 py-2 dark:bg-zinc-800 dark:text-white`}
              key={key}
              onClick={() => setSelectedProductColor(key)}
            >
              <div className={`w-4 h-4 ${value} rounded-full`}></div>
              <span>{key}</span>
            </div>
          ))} */}
        </div>
        <div className="dark:text-white">انتخاب سایز</div>
        <div className="colors flex  gap-x-2 w-fit ">
          {/* {product.sizes.map((product) => (
            <div
              onClick={() => setSelectedProductSize(product)}
              className={`w-10 h-10 flex border  items-center gap-x-2 cursor-pointer justify-center ${
                selectedProductSize === product
                  ? "border-green-600"
                  : "border-green-300"
              } bg-white rounded-full p-1 dark:bg-zinc-800 dark:text-white`}
            >
              <span>{product}</span>
            </div>
          ))} */}
        </div>
        <div className="dark:text-white">انتخاب تعداد </div>
        <div className="flex items-center gap-x-4  border-gray-200 border-1 rounded-sm w-fit p-1.5 [&>svg]:cursor-pointer ">
          <FaPlus
            className="text-green-400"
            onClick={() => setQuantity((prev) => prev + 1)}
          />
          <span className="dark:text-white">{quantity}</span>
          <FaMinus
            className="text-red-400"
            onClick={() => setQuantity((prev) => prev + 1)}
          />
        </div>
        <button
          onClick={() => {
            setQuantity((prev) => prev + 1);
            addToCart(product);
          }}
          className="w-full rounded-lg p-1 mt-3 text-white cursor-pointer py-3 bg-green-600 dark:bg-green-500 "
        >
          افزودن به سبد خرید
        </button>
        <div className="flex flex-col  mt-4 gap-y-2 [&>div]:flex [&>div]:px-3 [&>div]:py-2 [&>div]:dark:text-white [&>div]:w-full [&>div]:items-center [&>div]:gap-x-1 [&>div]:border [&>div]:border-gray-200 [&>div]:p-0.5 [&>div]:rounded-sm ">
          <div>
            <IoIosTimer />
            <span>هفت روز ضمانت بازگشت کالا</span>
          </div>
          <div>
            <IoShieldCheckmarkOutline />
            <span>تضمین اصالت کالا</span>
          </div>
          <div>
            <MdSupportAgent />
            <span>هفت روز هفته</span>
          </div>
          <div>
            <FaTruckFast />
            <span>تحویل اکسپرس در تهران, کرج</span>
          </div>
        </div>
      </div>
      <div className="2xl:hidden  my-6 rounded-lg shadow-sm bg-white dark:bg-zinc-800 dark:text-white py-3 container mx-auto  px-2 border-0.5">
        <div className=" pb-3">ویژگی های محصول</div>
        <div>
          <ul className="flex flex-col gap-y-5">
            {Object.entries(product.attributes).map(([key, value]) => (
              <li key={key}>
                {key} : {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* mobile */}
    </>
  );
}

export default ProductDetail;
