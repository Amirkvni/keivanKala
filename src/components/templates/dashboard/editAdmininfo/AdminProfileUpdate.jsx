"use client";
import React, { useState } from "react";
import Image from "next/image";
import adminPic from "@/assets/adminProfile.jpg";
import { GoPlus } from "react-icons/go";
import { FiTrash2 } from "react-icons/fi";
import InputField from "../InputField";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const AdminProfileUpdate = ({
  name,
  family,
  job,
  email,
  phone,
  nationalcode,
  education,
}) => {
  const router = useRouter();
  const [updatedData, setUpdatedData] = useState({
    name: name || "",
    family: family || "",
    job: job || "",
    email: email || "",
    phone: phone || "",
    nationalcode: nationalcode || "",
    education: education || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editAdmininfo = async () => {
    try {
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        Swal.fire({
          title: "اطلاعات با موفقیت به‌روزرسانی شد",
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "باشه",
          confirmButtonColor: "green",
        });
        router.refresh();
      } else {
        Swal.fire("خطا در به‌روزرسانی اطلاعات");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("خطایی رخ داده است");
    }
  };
  return (
    <div className="flex flex-col gap-y-6 flex-1 p-3">
      <p className="text-lg font-bold">اطلاعات شخصی</p>

      <div className="flex gap-x-3 items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image alt="admin profile" src={adminPic} width={64} height={64} />
        </div>
        <button className="flex items-center gap-x-2 bg-green-700 text-white px-3 py-2 rounded-sm">
          آپلود تصویر <GoPlus />
        </button>
        <button className="flex items-center gap-x-2 border border-gray-400 px-3 py-2 rounded-sm">
          حذف <FiTrash2 />
        </button>
      </div>

      <div className="flex flex-col gap-y-2">
        <label>بیوگرافی :</label>
        <textarea
          rows={6}
          className="edit-profile-input resize-none outline-none rounded-md p-2"
        ></textarea>
      </div>

      <div className="flex gap-x-4">
        <InputField
          label="نام"
          name="name"
          value={updatedData.name}
          onChange={handleChange}
        />
        <InputField
          label="فامیل"
          name="family"
          value={updatedData.family}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-y-3 w-[500px]">
        <InputField
          label="شغل"
          name="job"
          value={updatedData.job}
          onChange={handleChange}
        />
        <InputField
          label="ایمیل"
          name="email"
          value={updatedData.email}
          onChange={handleChange}
        />
        <InputField
          label="شماره تماس"
          name="phone"
          value={updatedData.phone}
          onChange={handleChange}
        />
        <InputField
          label="کد ملی"
          name="nationalcode"
          value={updatedData.nationalcode}
          onChange={handleChange}
        />
        <InputField
          label="تحصیلات"
          name="education"
          value={updatedData.education}
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-emerald-500 text-white w-fit mr-auto px-6 py-2 rounded-lg mt-6"
        onClick={() => editAdmininfo()}
      >
        ذخیره تغییرات
      </button>
    </div>
  );
};

export default AdminProfileUpdate;
