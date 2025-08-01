"use client";
import React, { useState } from "react";
import InputField from "../InputField";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function AdminAddressUpdate({ userAddress }) {
  const router = useRouter();
  const [updatedData, setUpdatedData] = useState({
    province: userAddress.province || "",
    city: userAddress.city || "",
    district: userAddress.district || "",
    plaque: userAddress.plaque || "",
    unit: userAddress.unit || "",
    postalCode: userAddress.postalCode || "",
    fullAddress: userAddress.fullAddress || "",
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
      <p className="text-lg font-bold mt-4">اطلاعات آدرس</p>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="استان"
          name="province"
          value={updatedData.province}
          onChange={handleChange}
        />
        <InputField
          label="شهر"
          name="city"
          value={updatedData.city}
          onChange={handleChange}
        />
        <InputField
          label="خیابان"
          name="district"
          value={updatedData.district}
          onChange={handleChange}
        />
        <InputField
          label="پلاک"
          name="plaque"
          value={updatedData.plaque}
          onChange={handleChange}
        />
        <InputField
          label="واحد"
          name="unit"
          value={updatedData.unit}
          onChange={handleChange}
        />
        <InputField
          label="کدپستی"
          name="postalCode"
          value={updatedData.postalCode}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4">
        <label>آدرس کامل :</label>
        <textarea
          rows={4}
          name="fullAddress"
          className="edit-profile-input outline-none p-2 rounded-md resize-none"
          value={updatedData.fullAddress}
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-emerald-400 w-fit mr-auto p-3 rounded-lg text-white cursor-pointer"
        onClick={editAdmininfo}
      >
        ذخیره تغییرات
      </button>
    </div>
  );
}

export default AdminAddressUpdate;
