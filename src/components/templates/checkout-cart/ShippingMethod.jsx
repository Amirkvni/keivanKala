"use client";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import "moment/locale/fa";

import { useContext, useEffect, useState } from "react";
import { FaAngleLeft, FaTruckFast } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import moment from "moment-jalaali";
import Swal from "sweetalert2";
moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export default function ShippingMethod() {
  const [address, setAddress] = useState(null);
  useEffect(() => {
    const getAddress = async () => {
      const res = await fetch("/api/addresses");
      const data = await res.json();
      setAddress(data);
    };
    getAddress();
  }, []);
  const router = useRouter();
  let { cart, getTotal, getTotalDiscountPrice, getPayableAmount, clearCart } =
    useContext(CartContext);

  let now = moment().locale("fa");
  let sendTimes = [];
  for (let i = 0; i < 4; i++) {
    let currentDay = now.clone().add(i, "days");
    let dayOfWeekName = currentDay.format("dddd");
    let dayOfMonth = currentDay.format("jD");
    let monthName = currentDay.format("jMMMM");

    let prices = [50000, 45000, 60000, 90000];
    sendTimes.push({
      id: i + 1,
      day: dayOfWeekName,
      date: dayOfMonth,
      month: monthName,
      price: prices[i],
    });
  }
  const [sendTime, setSendTime] = useState({});

  const paymentHandler = async () => {
    const newArray = cart.map((item) => ({
      _id: item._id,
      persianName: item.persianName,
      quantity: item.quantity,
      paid: getTotal(),
    }));
    const newPayment = {
      products: newArray,
      delivery: {
        day: sendTime.day,
        date: sendTime.date,
        price: sendTime.price,
      },
      paid: getPayableAmount(),
      discount: getTotalDiscountPrice(),
    };
    const neworder = {
      products: newArray,
      delivery: {
        day: sendTime.day,
        date: sendTime.date,
        price: sendTime.price,
      },
    };
    if (Object.keys(sendTime).length !== 0) {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newPayment),
      });
      if (res.status === 201) {
        const paymentResult = await res.json();
        const { trackingCode, orderDate } = paymentResult.data;
        const res2 = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(neworder),
        });
        const orderResult = await res2.json();

        if (orderResult) {
          router.push(
            `/success-payment?trackingCode=${trackingCode}&orderDate=${orderDate}`
          );
          clearCart();
        }
      }
    } else {
      Swal.fire({
        text: "لطفا تاریخ ارسال را مشخص کنید",
        icon: "error",
        confirmButtonText: "چشم",
        confirmButtonColor: "green",
      });
    }
  };
  const changeUserAddressHandler = () => {
    Swal.fire({
      title: "جزییات آدرس",
      html: `
         <div class="flex flex-col gap-y-2 [&>div]:flex [&>div]:items-center text-xs xl:text-base  ">
            <div>
           <label for="fullAddress" class="text-red-400 ">* نشان پستی :</label>
           <textarea id="fullAddress" class="swal2-textarea" placeholder=${address.fullAddress} ></textarea>
           </div>
   
         <div>
         <label for="province" class="text-red-400">* استان :</label>
           <input type="text" id="province" class="swal2-input" placeholder=${address.province} ></input>
         </div>
   
         <div>
          <label for="city" class="text-red-400">* شهر :</label>
           <input   type="text" id="city" class="swal2-input" placeholder=${address.city}  />
         </div>
   
         <div>
          <label for="district" class="text-red-400">* محله :</label>
           <input type="text" id="district" class="swal2-input" placeholder=${address.district} />
         </div>
         
         <div>
          <label for="plaque" class="text-red-400">* پلاک :</label>
           <input type="text" id="plaque" class="swal2-input" placeholder=${address.plaque} />
         </div>
   
          <div>
          <label for="postalCode" class="text-red-400">* کدپستی :</label>
           <input type="text" id="postalCode" class="swal2-input"  placeholder=${address.postalCode} />
         </div>
   
         <div>
           <label for="unit">واحد :</label>
           <input type="text" id="unit" class="swal2-input" placeholder=${address.unit} />
         </div>
         </div>
           
         `,
      showCancelButton: true,
      cancelButtonText: "لغو",
      confirmButtonText: "ثبت",
      cancelButtonColor: "red",
      confirmButtonColor: "green",
      preConfirm: async () => {
        let newAddress = {};

        newAddress["fullAddress"] =
          document.getElementById("fullAddress").value;
        newAddress["province"] = document.getElementById("province").value;
        newAddress["city"] = document.getElementById("city").value;
        newAddress["district"] = document.getElementById("district").value;
        newAddress["plaque"] = document.getElementById("plaque").value;
        newAddress["postalCode"] = document.getElementById("postalCode").value;
        newAddress["unit"] = document.getElementById("unit").value;
        if (
          !newAddress.fullAddress ||
          !newAddress.province ||
          !newAddress.city ||
          !newAddress.district ||
          !newAddress.plaque ||
          !newAddress.postalCode
        ) {
          Swal.showValidationMessage(
            "لطفاً تمام فیلدهای ستاره‌دار را پر کنید."
          );
          return false;
        } else {
          try {
            const response = await fetch("/api/addresses", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newAddress),
            })
              .then(() => {
                Swal.fire("تغییرات با موفقیت انجام شد");
              })
              .then(() => location.reload());
          } catch (error) {
            Swal.showValidationMessage(`خطا در ارسال: ${error.message}`);
          }
        }
      },
    });
  };

  return (
    <div className="mt-12 container  flex flex-col xl:flex-row gap-x-2 mx-auto gap-y-4  [&>div]:rounded-lg [&>div]:p-3 text-xs lg:text-base ">
      <div className="xl:w-3/4 w-full border flex flex-col gap-y-4 dark:border-green-400">
        <div className="border border-blue-400 flex justify-between p-2 rounded-lg dark:border-gray-500">
          <div className="flex gap-x-2 items-center">
            <FaTruckFast />
            <div>
              <p className="text-blue-400">ارسال به آدرس انتخاب شده</p>
              <p className="dark:text-blue-400">{address?.fullAddress}</p>
            </div>
          </div>
          <div
            className="flex gap-x-2 text-blue-400 items-center cursor-pointer"
            onClick={changeUserAddressHandler}
          >
            <span> تغییر ادرس</span>
            <FaAngleLeft />
          </div>
        </div>
        <div className=" flex items-center gap-x-3 p-2 rounded-lg border border-gray-400 dark:text-blue-400">
          <IoMdTime />

          <div>
            <div>
              <span>هزینه ارسال :</span>
              {sendTime.price ? (
                <span>{sendTime.price} تومان </span>
              ) : (
                <span>نامشخص </span>
              )}
            </div>
            <div>
              <span>تاریخ ارسال :</span>
              {sendTime.day ? (
                <span>
                  {sendTime.date} {sendTime.month}
                </span>
              ) : (
                <span>نامشخص </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 items-center [&>div]:w-20 [&>div]:h-28  dark:text-blue-400 [&>div]:border  [&>div]:cursor-pointer [&>div]:rounded-lg [&>div]:text-center [&>div]:flex [&>div]:gap-y-2 [&>div]:flex-col">
          {sendTimes.map((time) => (
            <div
              key={time.id}
              onClick={() => setSendTime(time)}
              className={`${
                sendTime.id === time.id
                  ? "border-green-400 "
                  : "border-gray-400"
              }`}
            >
              <p>{time.day}</p>
              <p>{time.date}</p>
              <span className="text-sm">
                {time.price.toLocaleString()} تومان
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:w-1/4 w-full h-fit  border [&>div]:flex  [&>div]:py-5 [&>div]:justify-between items-center dark:text-green-400">
        <div>
          <span>قیمت کالا ها ({cart.length})</span>
          <span className="text-green-400">
            {getTotal().toLocaleString()} تومان
          </span>
        </div>
        <div className="border-y border-y-gray-400">
          <span>تخفیف</span>
          <span className="text-red-400">
            {getTotalDiscountPrice().toLocaleString()} تومان
          </span>
        </div>
        <div>
          <span>مبلغ قابل پرداخت</span>
          <span className="text-green-500 font-bold">
            {getPayableAmount().toLocaleString()} تومان
          </span>
        </div>
        <button
          className="bg-green-500 text-white cursor-pointer p-3 rounded-lg w-full"
          onClick={() => paymentHandler()}
        >
          پرداخت
        </button>
      </div>
    </div>
  );
}
