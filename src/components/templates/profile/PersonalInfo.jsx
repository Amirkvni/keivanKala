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
        if (
          fieldName.includes("year") &&
          fieldName.includes("month") &&
          fieldName.includes("day")
        ) {
          const year = updatedData["year"];
          const month = updatedData["month"];
          const day = updatedData["day"];
          updatedData["birthday"] = {
            year,
            month,
            day,
          };
        }

        try {
          const response = await fetch("/api/user", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/Json",
            },
            body: JSON.stringify(updatedData),
          })
            .then(() => {
              Swal.fire("تغییرات با موفقیت انجام شد");
            })
            .then(() => location.reload());
        } catch (error) {
          Swal.showValidationMessage(`خطا در ارسال: ${error.message}`);
        }
      },
    });
  };

  return (
    <div className="flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
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
          {user.nationalcode == null || user.nationalcode == undefined ? (
            <FaPlus onClick={() => editInfo("nationalcode", "کدملی")} />
          ) : (
            <FaRegEdit onClick={() => editInfo("nationalcode", "کدملی")} />
          )}
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
            onClick={() => editInfo("email", "ایمیل", "user@example.com")}
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
              {user.birthday.year == null || user.birthday == undefined ? (
                <p>تاریخ تولد وجود ندارد</p>
              ) : (
                <p>
                  {user.birthday.year}/{user.birthday.month}/{user.birthday.day}
                </p>
              )}
            </p>
          </div>
          {user.birthday.year == null ? (
            <FaPlus
              onClick={() =>
                editInfo(["year", "month", "day"], ["سال ", "ماه", "روز"])
              }
            />
          ) : (
            <FaRegEdit
              onClick={() =>
                editInfo(["year", "month", "day"], ["سال ", "ماه", "روز"])
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
