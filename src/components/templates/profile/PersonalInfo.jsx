"use client";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegEdit, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

function PersonalInfo({ user }) {

  const router = useRouter();
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
      confirmButtonText: "ویرایش",
      confirmButtonColor: "green",
      cancelButtonText: "بیخیال",
      cancelButtonColor: "gray",
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
            .then(() => router.refresh());
        } catch (error) {
          Swal.showValidationMessage(`خطا در ارسال: ${error.message}`);
        }
      },
    });
  };

  return (
    <div className="profile-content-box">
      <SectionHeader title="اطلاعات حساب کاربری شما" />
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 [&>div]:flex [&>div]:justify-between [&>div]:p-3  [&>div]:border 2xl:[&>div]:rounded-2xl [&>div]:rounded-xl [&>div]:items-center [&>div>div>p]:text-base [&>div>svg]:text-xl 2xl:[&>div>svg]:hover:text-green-400 2xl:[&>div>svg]:cursor-pointer">
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
              {user.nationalcode == null || user.nationalcode == undefined
                ? "کدملی وجود ندارد"
                : user.nationalcode}
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
            <p className="pt-3" dir="ltr">
              {user.birthday.year == null || user.birthday == undefined
                ? "تاریخ تولد وجود ندارد"
                : ` ${user.birthday.year} / ${user.birthday.month} / ${user.birthday.day}`}
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
