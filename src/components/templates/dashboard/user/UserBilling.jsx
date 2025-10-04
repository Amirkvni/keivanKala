import { priceFormatter } from "@/utils/priceFormatter";
import Image from "next/image";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

function UserBilling({ userPurchases, userAddresses }) {

  return (
    <div className="flex flex-col gap-y-4 [&>div>div]:mt-4">
      <div>
        <span>سابقه خرید</span>
        {userPurchases.length === 0 ? (
          <div className="text-xs text-gray-500">
            کاربر خریدی انجام نداده است
          </div>
        ) : (
          <div className="divide-y divide-gray-400 [&>div]:grid [&>div]:grid-cols-5 [&>div]:text-center">
            {userPurchases.map((pur) => (
              <div key={pur._id}>
                <span dir="ltr">{pur._id.slice(0, 6)}#</span>
                <div className="flex gap-x-2 items-center w-10 h-10 rounded-full overflow-hidden">
                  {pur.products.map((product) => (
                    <Image
                      src={product.mainImage}
                      alt={product._id}
                      width={40}
                      className="w-full h-full"
                      height={40}
                    />
                  ))}
                </div>
                <span>
                  {pur.status === "pending" ? "درحال پردازش" : pur.status}
                </span>
                <span>{pur.orderDate}</span>
                <span>{priceFormatter(pur.payment.paid)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <span>آدرس ها</span>
        {userAddresses.length === 0 ? (
          <div className="text-xs text-gray-500">
            کاربر ادرسی وارد نکرده است
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 [&>div]:flex [&>div]:justify-between [&>div]:items-center [&>div]:gap-y-1 [&>div]:rounded-lg [&>div]:border [&>div]:border-gray-400 [&>div]:p-3 ">
            {userAddresses.map((add) => (
              <div key={add._id}>
                <span> {add.fullAddress}</span>
                <MdDeleteOutline className="text-xl text-red-500 cursor-pointer hover:text-red-700" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <span>روش‌های پرداخت</span>
        <div className="border rounded-lg [&>div]:my-3 [&>div]:flex [&>div]:pb-5 [&>div]:justify-between [&>div]:px-5 [&>div]:items-center p-5 divide-y divide-gray-200  [&>div>button]:border [&>div>button]:rounded-lg [&>div>button]:text-xs [&>div>button]:p-1 border-gray-400">
          <div>
            <button>ویرایش</button>
            <div>یک</div>
          </div>{" "}
          <div>
            <button>ویرایش</button>
            <div>یک</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBilling;
