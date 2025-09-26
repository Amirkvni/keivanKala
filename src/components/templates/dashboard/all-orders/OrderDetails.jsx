import Image from "next/image";
import React from "react";
import productImg from "@/assets/ex.jpg";
import OrderStatusSteps from "@/components/templates/dashboard/OrderStatusSteps";
import Link from "next/link";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TfiCreditCard } from "react-icons/tfi";
import { priceFormatter } from "@/utils/priceFormatter ";
import { FaRegUser } from "react-icons/fa";
function OrderDetails({ order, userAddress }) {
  console.log(order);

  return (
    <div className="p-12">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex gap-x-4 items-center">
            <span className="text-xl">
              سفارش #{String(order._id).slice(-5)}
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs p-1 rounded-sm">
              پرداخت شده
            </span>
            <span className="bg-green-100 text-green-800 text-xs p-1 rounded-sm">
              {order.status === "pending" && "جاری"}
              {order.status === "preparing" && "در حال آماده‌سازی"}
              {order.status === "readytoship" && "آماده برای ارسال"}
              {order.status === "shipped" && "ارسال شده"}
              {order.status === "delivered" && "تحویل داده شده"}
              {order.status === "canceled" && "لغو شده"}
              {order.status === "returned" && "مرجوع شده"}
            </span>
          </div>
          <div className="text-xs mt-1">
            {new Date(order.orderDate).toLocaleString("fa-IR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
        </div>
        <button className="bg-green-400 p-2 rounded-lg cursor-pointer text-white">
          ویرایش
        </button>
      </div>

      <div className="flex gap-x-2 ">
        <div className="w-9/12  p-4 [&>div]:bg-white [&>div]:rounded-lg [&>div]:p-3">
          <div className="dashboard-box-shadow">
            <table className="w-full border border-gray-200 rounded-md overflow-hidden">
              <thead className="bg-gray-100 text-right text-sm font-semibold text-gray-600">
                <tr>
                  <th className="p-4">محصول</th>
                  <th className="p-4">قیمت</th>
                  <th className="p-4">تخفیف</th>
                  <th className="p-4">تعداد</th>
                  <th className="p-4">جمع</th>
                </tr>
              </thead>
              <tbody className="text-right text-sm">
                {order.products.map((product, index) => {
                  const paymentProduct = order.payment.products[index];
                  return (
                    <tr key={product._id} className="hover:bg-gray-50 border-t">
                      <td className="p-4">
                        <div className="flex gap-x-4 items-center">
                          <div className="w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              width={64}
                              height={64}
                              alt="productImage"
                              src={product.mainImage}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-sm text-gray-700 space-y-1">
                            <p className="font-medium">{product.persianName}</p>
                            <p className="text-xs text-gray-500">رنگ : y</p>
                            <p className="text-xs text-gray-500">سایز : x</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-gray-700">
                        {priceFormatter(product.price)}
                      </td>
                      <td className="p-4 text-gray-700">
                        {product.secondPrice
                          ? priceFormatter(product.secondPrice)
                          : "-"}
                      </td>
                      <td className="p-4 text-gray-700">
                        {paymentProduct?.quantity || 0}
                      </td>
                      <td className="p-4 text-gray-700">
                        {priceFormatter(
                          (product.secondPrice || product.price) *
                            Number(paymentProduct?.quantity || 1)
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className=" mt-3 dashboard-box-shadow ">
            <OrderStatusSteps />
          </div>
        </div>
        <div className="w-3/12  [&>div]:bg-white flex flex-col gap-y-6 [&>div]:rounded-lg [&>div]:p-4 p-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2">
          <div className="dashboard-box-shadow ">
            <div className="flex justify-between items-center text-sm">
              <span>جزئیات مشتری</span>
              <Link href="/">مشاهده نمایه</Link>
            </div>
            <div className="h-0.5 bg-zinc-500"></div>
            <div className="flex items-center gap-x-2 ">
              <div className="w-12 h-12 rounded-full overflow-hidden border flex items-center justify-center">
                {order.user.profileUrl ? (
                  <Image
                    width={500}
                    height={500}
                    src={order.user.profileUrl}
                    alt="userProfileImage"
                  />
                ) : (
                  <FaRegUser className="text-xl" />
                )}
              </div>
              <div className="text-xs">
                <p>
                  {order.user.firstname} {order.user.lastname}
                </p>
                <p>مشتری</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <MdOutlineEmail />
              <p>{order.user.email}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <MdOutlinePhoneEnabled />
              <p>{order.user.phone}</p>
            </div>
          </div>
          <div className="dashboard-box-shadow">
            <div className="flex gap-x-3 items-center text-sm">
              <IoLocationOutline />
              <span>آدرس حمل و نقل</span>
            </div>
            <div className="h-0.5 bg-zinc-500"></div>
            <p>پیک معمولی</p>
            <p>091456146713</p>
            <p>{userAddress.fullAddress}</p>
            <p>
              {userAddress.province}-{userAddress.city}-{userAddress.district}-
              {userAddress.plaque}-{userAddress.unit}
            </p>
            <p>{userAddress.postalCode}</p>
            <p>{order.delivery.day}</p>
          </div>
          <div className="dashboard-box-shadow">
            <div className="flex gap-x-3 items-center text-sm">
              <TfiCreditCard />
              <span>جزئیات پرداخت</span>
            </div>
            <div className="h-0.5 bg-zinc-500"></div>
            <p>شماره پرداخت : {order.payment._id}</p>
            <p>روش پرداخت : درگاه بانکی</p>
            <p>
              نام پرداخت کننده : {order.user.firstname} {order.user.lastname}
            </p>
            <p>شماره کارت : xxxx xxxx xxxx 2456</p>
            <p>
              تخفیف :
              {order.payment.discount === "0"
                ? " ندارد"
                : priceFormatter(order.payment.discount)}
            </p>
            <p> مبلغ پرداختی : {priceFormatter(order.payment.paid)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
