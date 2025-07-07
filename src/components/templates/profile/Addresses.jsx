"use client";
import { IoMdMore } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddLocationAlt, MdOutlineMessage } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { TiPhoneOutline } from "react-icons/ti";
import Image from "next/image";
import { RiEdit2Line } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";
import { TbAddressBookOff } from "react-icons/tb";
import mapImage from "@/../public/images/map.jpg";
import { useRouter } from "next/navigation";
function Addresses({ addresses }) {
  const router = useRouter();
  const addAddress = () => {
    Swal.fire({
      title: "جزییات آدرس",
      html: `
      <div class="flex flex-col gap-y-2 2xl:[&>div]:flex [&>div]:items-center ">
         <div>
        <label for="fullAddress" class="text-red-400 2xl:text-base">* نشان پستی :</label>
        <textarea id="fullAddress" class="swal2-textarea"></textarea>
        </div>
      <div>
      <label for="province" class="text-red-400 2xl:text-base">* استان :</label>
        <input type="text" id="province" class="swal2-input"></input>
      </div>
      <div>
       <label for="city" class="text-red-400 2xl:text-base">* شهر :</label>
        <input type="text" id="city" class="swal2-input" />
      </div>
      <div>
       <label for="district" class="text-red-400 2xl:text-base">* محله :</label>
        <input type="text" id="district" class="swal2-input" />
      </div>    
      <div>
       <label for="plaque" class="text-red-400 2xl:text-base">* پلاک :</label>
        <input type="text" id="plaque" class="swal2-input" />
      </div>
       <div>
       <label for="postalCode" class="text-red-400 2xl:text-base">* کدپستی :</label>
        <input type="text" id="postalCode" class="swal2-input" />
      </div>
      <div>
        <label for="unit">واحد :</label>
        <input type="text" id="unit" class="swal2-input" />
      </div>
      </div>     
      `,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "افزودن",
      confirmButtonColor: "green",
      cancelButtonColor: "gray",
      cancelButtonText: "بیخیال",
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
        try {
          const response = await fetch("/api/addresses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newAddress),
          })
            .then(() => {
              Swal.fire("تغییرات با موفقیت انجام شد");
            })
            .then(() => router.refresh());
        } catch (error) {
          Swal.showValidationMessage(`خطا در ارسال: ${error.message}`);
        }
      },
    });
  };

  const [isEditMapOpen, setIsEditMapOpen] = useState(false);
  const editMap = (addressID) => {
    Swal.fire({
      title: "ویرایش آدرس",
      html: `
      <div class="flex flex-col gap-y-2 2xl:[&>div]:flex [&>div]:items-center ">
         <div>
        <label for="fullAddress" class="text-red-400  2xl:text-base">* نشان پستی :</label>
        <textarea id="fullAddress" class="swal2-textarea"></textarea>
        </div>
      <div>
      <label for="province" class="text-red-400  2xl:text-base">* استان :</label>
        <input type="text" id="province" class="swal2-input"></input>
      </div>
      <div>
       <label for="city" class="text-red-400  2xl:text-base">* شهر :</label>
        <input type="text" id="city" class="swal2-input" />
      </div>
      <div>
       <label for="district" class="text-red-400  2xl:text-base">* محله :</label>
        <input type="text" id="district" class="swal2-input" />
      </div>
      <div>
       <label for="plaque" class="text-red-400  2xl:text-base">* پلاک :</label>
        <input type="text" id="plaque" class="swal2-input" />
      </div>
       <div>
       <label for="postalCode" class="text-red-400  2xl:text-base">* کدپستی :</label>
        <input type="text" id="postalCode" class="swal2-input" />
      </div>
      <div>
        <label for="unit">واحد :</label>
        <input type="text" id="unit" class="swal2-input" />
      </div>
      </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "ثبت",
      confirmButtonColor: "green",
      cancelButtonColor: "gray",
      cancelButtonText: "بیخیال",
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
        newAddress["_id"] = addressID;

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
            .then(() => router.refresh());
        } catch (error) {
          Swal.showValidationMessage(`خطا در ارسال: ${error.message}`);
        }
      },
    });
  };
  const deleteMap = (addressID) => {
    Swal.fire({
      title: "آیا از حذف آدرس مطمینید؟",
      showCancelButton: true,
      cancelButtonText: "بیخیال",
      confirmButtonText: "بله",
      confirmButtonColor: "red",
      denyButtonText: `Don't save`,
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetch("/api/addresses", {
              method: "DELETE",
              body: JSON.stringify({ _id: addressID }),
            });
          } catch (error) {
            Swal.showValidationMessage(`خطا در ارسال: ${error.message}`);
          }
        }
      })
      .then(() => router.refresh());
  };

  return (
    <div className="profile-content-box ">
      <div className="flex justify-between items-center ">
        <span className=" border-b-green-400 pb-2 border-b-3 ">
          آدرس های شما
        </span>
        <button
          className="flex gap-x-2 items-center text-white bg-green-400 cursor-pointer rounded-lg p-2  "
          onClick={addAddress}
        >
          <span> افزودن آدرس </span>
          <MdOutlineAddLocationAlt />
        </button>
      </div>
      <div className="flex flex-col gap-y-2 ">
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <div className="border rounded-3xl border-gray-200">
              <div className="flex justify-between items-center  p-3 relative  text-xs 2xl:text-base ">
                <div>
                  <p>{address.fullAddress}</p>
                  <p className="pt-3">امیرحسین کیوانی</p>
                </div>
                <IoMdMore
                  className="text-2xl cursor-pointer "
                  onMouseEnter={() => setIsEditMapOpen(address._id)}
                />
                {isEditMapOpen === address._id && (
                  <div
                    onMouseLeave={() => setIsEditMapOpen(false)}
                    className=" absolute px-2 group-hover:block left-[2%] top-[70%] [&>div]:flex [&>div]:gap-x-4 [&>div]:items-center [&>div]:cursor-pointer w-42 border-gray-400 rounded-2xl border bg-white"
                  >
                    <div
                      className="py-3 hover:text-green-600"
                      onClick={() => editMap(address._id)}
                    >
                      <RiEdit2Line />
                      <span>ویرایش</span>
                    </div>
                    <div
                      onClick={() => deleteMap(address._id)}
                      className="pb-3 hover:text-red-600"
                    >
                      <FaRegTrashCan />
                      <span>حذف</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between  items-center  p-3  text-xs 2xl:text-base">
                <div>
                  <ul className="flex flex-col gap-y-2 [&>li]:flex [&>li]:items-center [&>li]:gap-x-2  ">
                    <li>
                      <IoHomeOutline />
                      <span>{address.province}</span> -
                      <span>{address.city}</span>-
                      <span>{address.district}</span>
                    </li>
                    <li>
                      <MdOutlineMessage />
                      <span>{address.postalCode}</span>
                    </li>
                    <li>
                      <TiPhoneOutline />
                      <span>۰۹۱۶۲۰۳۵۹۸۷</span>
                    </li>
                    <li>
                      <GoPerson />
                      <span>امیرحسین کیوانی</span>
                    </li>
                  </ul>
                </div>
                <div className="w-24 h-24  rounded-xl ">
                  <Image src={mapImage} width={500} height={500} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center gap-y-3">
            <TbAddressBookOff className="text-6xl" />
            <p className="font-bold">لیست ادرس های شما خالی است</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Addresses;
