"use client";
import { priceFormatter } from "@/utils/priceFormatter ";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function EditOrderPage({ allProducts, orderProducts, user, userAddress }) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const [isShowAllProducts, setIsShowAllProducts] = useState(false);
  const [orderProductsList, setOrderProductsList] = useState(
    orderProducts.map((p) => ({ ...p, quantity: Number(p.quantity) }))
  );
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const changeQuantity = (productId, delta) => {
    setOrderProductsList((prev) =>
      prev.map((p) =>
        p._id === productId
          ? {
              ...p,
              quantity: Math.max(1, Number(p.quantity) + delta),
            }
          : p
      )
    );
  };
  const totalPrice = orderProductsList.reduce((sum, product) => {
    const productData = allProducts.find(
      (p) => p.persianName === product.persianName
    );
    if (!productData) return sum;

    const price = productData.secondPrice || productData.price;
    return sum + price * Number(product.quantity);
  }, 0);

  return (
    <div className="p-12 ">
      <span className="text-xl font-bold">ویرایش سفارش </span>
      <div className="flex gap-x-4 mt-4  [&>div]:rounded-lg ">
        <div className="w-3/12 p-3  bg-white dashboard-box-shadow h-fit sticky top-20 flex gap-3 flex-col gap-y-7 [&>button]:flex [&>button]:items-center [&>button]:gap-x-2 [&>button]:w-full  [&>button>span]:w-8 [&>button>div]:text-xs [&>button>div>p]:font-bold [&>button>div>span]:text-gray-600 [&>button>div]:text-start [&>button>span]:h-8 [&>button>span]:rounded-full [&>button>span]:bg-gray-200 [&>button]:hover:bg-gray-100 [&>button]:p-4 [&>button]:cursor-pointer">
          <button onClick={() => scrollToSection(section1Ref)}>
            <span></span>
            <div>
              <p>انتخاب محصولات</p>
              <span>افزودن محصول به لیست خرید.</span>
            </div>
          </button>
          <button onClick={() => scrollToSection(section2Ref)}>
            <span></span>
            <div>
              <p>اطلاعات مشتری</p>
              <span>
                وارد کردن اطلاعات مشتری مانند نام، ایمیل و شماره تلفن.
              </span>
            </div>
          </button>
          <button onClick={() => scrollToSection(section3Ref)}>
            <span></span>
            <div>
              <p>اطلاعات آدرس</p>
              <span>ارائه جزئیات آدرس حمل و نقل.</span>
            </div>
          </button>
          <button onClick={() => scrollToSection(section4Ref)}>
            <span></span>
            <div>
              <p>پرداخت</p>
              <span>وارد کردن روش و جزئیات پرداخت برای تکمیل تراکنش.</span>
            </div>
          </button>
        </div>
        <div className="w-9/12  [&>div]:flex [&>div]:flex-col [&>div]:gap-y-4 [&>div]:p-4 [&>div]:bg-white [&>div]:rounded-lg flex flex-col gap-y-4">
          <div className=" dashboard-box-shadow " ref={section1Ref}>
            <span className="text-sm font-semibold">انتخاب محصولات</span>
            <div className="flex items-center gap-2">
              <div className="w-10/12 relative   ">
                <input
                  type="text"
                  className="w-full p-3 rounded-lg outline-green-500 bg-gray-100"
                />
                <CiSearch className="absolute left-1 top-4" />
              </div>
              <button
                className="w-2/12 text-xs bg-green-500 text-white px-0.5 py-4 rounded-lg font-bold cursor-pointer"
                onClick={() => setIsShowAllProducts(true)}
              >
                مشاهده محصولات
              </button>
            </div>
            <div className="p-4">
              <table className="w-full border border-gray-200 rounded-md overflow-hidden text-sm text-right">
                <thead className="bg-gray-100 font-semibold text-gray-600">
                  <tr>
                    <th className="p-3 text-right">محصول</th>
                    <th className="p-3 text-right">قیمت</th>
                    <th className="p-3 text-right">تعداد</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {orderProductsList.map((product) => (
                    <tr key={product._id} className="border-t hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex gap-x-2 items-center">
                          <div className="w-12 h-12 rounded-md flex items-center justify-center">
                            <Image
                              width={42}
                              height={42}
                              src={
                                allProducts.find(
                                  (p) => p.persianName == product.persianName
                                )?.mainImage
                              }
                            />
                          </div>
                          <div className="flex flex-col text-gray-700">
                            <p> {product.persianName}</p>
                            <p className="text-xs text-gray-500">
                              {String(product._id).slice(-8)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-gray-700">
                        {priceFormatter(
                          allProducts.find(
                            (p) => p.persianName == product.persianName
                          )?.secondPrice * product.quantity ||
                            allProducts.find(
                              (p) => p.persianName == product.persianName
                            )?.price * product.quantity
                        )}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center justify-center gap-x-1 border rounded w-24 px-2 py-1">
                          <span
                            className="cursor-pointer select-none text-gray-600"
                            onClick={() => changeQuantity(product._id, -1)}
                          >
                            -
                          </span>
                          <span className="text-center w-6">
                            {product.quantity}
                          </span>
                          <span
                            className="cursor-pointer select-none text-gray-600"
                            onClick={() => changeQuantity(product._id, 1)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-end">مجموع: {priceFormatter(totalPrice)}</div>
          </div>
          <div className=" dashboard-box-shadow " ref={section2Ref}>
            <span className="text-sm font-semibold">اطلاعات مشتری</span>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 w-full [&>div]:w-1/2 [&>div>span]:text-xs [&>div>input]:bg-gray-100 p-3 [&>div>input]:p-3 [&>div>input]:outline-green-500">
              <div>
                <span>نام</span>
                <input type="text" defaultValue={user.firstname} />
              </div>
              <div>
                <span>نام خانوادگی</span>
                <input type="text" defaultValue={user.lastname} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs">ایمیل</span>
              <input
                type="text"
                className="bg-gray-100 p-3 outline-green-500"
                defaultValue={user.email}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs">شماره تلفن</span>
              <input
                type="text"
                className="bg-gray-100 p-3 outline-green-500"
                defaultValue={user.phone}
              />
            </div>
          </div>
          <div className=" dashboard-box-shadow " ref={section3Ref}>
            <span className="text-sm font-semibold"> اطلاعات آدرس</span>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 w-full [&>div]:w-1/2 [&>div>span]:text-xs [&>div>input]:bg-gray-100 p-3 [&>div>input]:p-3 [&>div>input]:outline-green-500">
              <div>
                <span>استان</span>
                <input type="text" defaultValue={userAddress?.province} />
              </div>
              <div>
                <span>شهر</span>
                <input type="text" defaultValue={userAddress?.city} />
              </div>
            </div>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 w-full [&>div]:w-1/2 [&>div>span]:text-xs [&>div>input]:bg-gray-100 p-3 [&>div>input]:p-3 [&>div>input]:outline-green-500">
              <div>
                <span>کوچه/ فرعی</span>
                <input type="text" defaultValue={userAddress?.district} />
              </div>
              <div>
                <span>پلاک</span>
                <input type="text" defaultValue={userAddress?.plaque} />
              </div>
            </div>
            <div className="flex gap-x-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2 w-full [&>div]:w-1/2 [&>div>span]:text-xs [&>div>input]:bg-gray-100 p-3 [&>div>input]:p-3 [&>div>input]:outline-green-500">
              <div>
                <span>واحد</span>
                <input type="text" defaultValue={userAddress?.unit} />
              </div>
              <div>
                <span>کدپستی</span>
                <input type="text" defaultValue={userAddress?.postalCode} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs" defaultValue={userAddress?.fullAddress}>
                آدرس کامل
              </span>
              <textarea
                rows={9}
                className="outline-green-500 rounded-lg bg-gray-100 resize-none p-2"
                defaultValue={userAddress.fullAddress}
              />
            </div>
          </div>
          <div className=" dashboard-box-shadow " ref={section4Ref}>
            <span className="text-sm font-semibold"> اطلاعات پرداخت</span>

            <div className="flex flex-col gap-y-2">
              <span className="text-xs">روش پرداخت </span>
              <select className="bg-gray-100 p-3 rounded-lg outline-green-500 ">
                <option value="">بانک تجارت</option>
                <option value="">بانک سامان</option>
                <option value="">پی پال</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-xs">ایمیل پی‌پال</span>
              <input
                type="text"
                className="bg-gray-100 p-3 outline-green-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-6 py-6 px-4 flex justify-end rounded-lg dashboard-box-shadow ">
        <div className="flex gap-x-4 items-center [&>button]:px-5  [&>button]:py-3 [&>button]:rounded-lg [&>button]:text-xs [&>button]:font-bold [&>button]:cursor-pointer">
          <button className=" border-red-600 border-2 text-red-600">حذف</button>
          <button className="bg-blue-500 text-white ">بروزرسانی</button>
        </div>
      </div>
      {isShowAllProducts && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
          <div className="w-[500px] h-[550px] bg-white p-7 rounded-xl flex flex-col gap-y-4">
            <div className="text-center  relative">
              <p className="font-black">همه محصولات</p>
              <p className="text-[11px] mt-1">
                محصولات را به این سفارش اضافه کنید.
              </p>
              <IoMdClose
                className="absolute left-0 top-0 text-xl cursor-pointer"
                onClick={() => setIsShowAllProducts(false)}
              />
            </div>
            <div className="h-400  overflow-y-scroll flex flex-col gap-y-3 text-xs">
              {allProducts.map((product) => (
                <div className="flex gap-x-4 items-center " key={product._id}>
                  <input type="checkbox" className="w-4 h-4" />
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-x-2">
                      <Image
                        width={70}
                        height={70}
                        alt={product._id}
                        src={product.mainImage}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="max-w-52">{product.persianName}</p>
                        <p className="mt-1">
                          کد : {String(product._id).slice(-8)}
                        </p>
                      </div>
                    </div>
                    <span>تعداد موجود:{product.stock}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="bg-green-600 text-white py-2 rounded-lg cursor-pointer"
              onClick={() => setIsShowAllProducts(false)}
            >
              انجام شد
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditOrderPage;
