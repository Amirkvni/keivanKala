"use client";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Swal from "sweetalert2";

function PersonalInfo({ user }) {
  const editInfo = async (fieldName, fieldLabel, currentValue = "") => {
    const isSingleField = typeof fieldName === "string";

    Swal.fire({
      html: isSingleField
        ? `<input id="swal-input" class="swal2-input" placeholder="${fieldLabel}" value="${currentValue}">`
        : fieldName
            .map(
              (field, index) => `
              <input id="swal-input${index}" class="swal2-input" placeholder="${
                fieldLabel[index]
              }" value="${currentValue[index] || ""}">
            `
            )
            .join(""),
      showCancelButton: true,
      confirmButtonText: "ارسال",
      cancelButtonText: "بیخیال",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        let updatedData = {};

        if (isSingleField) {
          updatedData[fieldName] = document.getElementById("swal-input").value;
        } else {
          fieldName.forEach((field, index) => {
            updatedData[field] = document.getElementById(
              `swal-input${index}`
            ).value;
          });
        }

        if (Object.values(updatedData).some((val) => !val.trim())) {
          return Swal.showValidationMessage("لطفاً همه فیلدها را پر کنید!");
        }

        try {
          const response = await fetch("/api/user", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/Json",
            },
            body: JSON.stringify(updatedData),
          });

          if (!response.ok) {
            throw new Error("مشکلی پیش آمد، دوباره امتحان کنید.");
          }

          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`خطا در ارسال: ${error.message}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    })
      .then(() => {
        Swal.fire("تغییرات با موفقیت انجام شد");
      })
      .then(() => location.reload());
  };

  return (
    <div className="flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit">
        اطلاعات حساب کاربری شما
      </span>
      <div className="grid grid-cols-2 gap-4 [&>div]:flex [&>div]:justify-between [&>div]:p-3 [&>div]:border [&>div]:rounded-2xl [&>div]:items-center">
        <div>
          <div>
            <p>نام و نام خانوادگی</p>
            <p className="pt-3">{user.firstname + " " + user.lastname}</p>
          </div>
          <FaRegEdit
            onClick={() =>
              editInfo(["firstname", "lastname"], ["نام ", "فامیل"])
            }
          />
        </div>
        <div>
          <div>
            <p>کدملی</p>
            <p className="pt-3">
              {user.nationalcode == null || user.nationalcode == undefined ? (
                <p>کدملی وجود ندارد</p>
              ) : (
                user.nationalcode
              )}
            </p>
          </div>
          <FaRegEdit onClick={() => editInfo("nationalcode", "کدملی")} />
        </div>
        <div>
          <div>
            <p>شماره موبایل</p>
            <p className="pt-3">{user.phone}</p>
          </div>
          <FaRegEdit onClick={() => editInfo("phone", "شماره تلفن")} />
        </div>
        <div>
          <div>
            <p>ایمیل</p>
            <p className="pt-3">{user.email}</p>
          </div>
          <FaRegEdit
            onClick={() => editInfo("password", "رمزعبور", "user@example.com")}
          />
        </div>
        <div>
          <div>
            <p>رمز عبور</p>
            <p className="pt-3">********</p>
          </div>
          <FaRegEdit />
        </div>
        <div>
          <div>
            <p>تاریخ تولد</p>
            <p className="pt-3">
              {user.birthday == null || user.birthday == undefined ? (
                <p>تاریخ تولد وجود ندارد</p>
              ) : (
                user.nationalcode
              )}
            </p>
          </div>
          <FaPlus />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
