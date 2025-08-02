"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { FiTrash2 } from "react-icons/fi";
import InputField from "../InputField";
import Swal from "sweetalert2";
import { FaRegUserCircle } from "react-icons/fa";

const AdminProfileUpdate = ({
  name,
  family,
  job,
  email,
  phone,
  nationalcode,
  education,
  biography,
  profileUrl,
}) => {
  const [updatedData, setUpdatedData] = useState({
    name: name || "",
    family: family || "",
    job: job || "",
    email: email || "",
    phone: phone || "",
    nationalcode: nationalcode || "",
    education: education || "",
    biography: biography || "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [profileImage, setProfileImage] = useState(profileUrl || "");

  // ایجاد URL برای نمایش پیش‌نمایش تصویر انتخاب‌شده
  useEffect(() => {
    if (!selectedImage) {
      setPreviewImageUrl("");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewImageUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      // اگر میخوای در لحظه عکس رو تغییر بدی، میتونی profileImage رو هم پاک کنی
      setProfileImage("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editAdmininfo = async () => {
    try {
      const formData = new FormData();

      Object.entries(updatedData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (selectedImage) {
        formData.append("profile", selectedImage);
      } else if (profileImage === "") {
        // وقتی عکس حذف شده باشه مقدار profileUrl رو خالی میفرستیم
        formData.append("profileUrl", "");
      }

      const res = await fetch("/api/user", {
        method: "PATCH",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        if (
          data.user &&
          typeof data.user.profileUrl === "string" &&
          data.user.profileUrl.trim() !== ""
        ) {
          setProfileImage(data.user.profileUrl);
          setSelectedImage(null);
          setPreviewImageUrl("");
        } else if (profileImage === "") {
          setProfileImage("");
          setSelectedImage(null);
          setPreviewImageUrl("");
        }

        Swal.fire({
          title: "اطلاعات با موفقیت به‌روزرسانی شد",
          icon: "success",
          confirmButtonText: "باشه",
          confirmButtonColor: "green",
        });
      } else {
        Swal.fire("خطا در به‌روزرسانی اطلاعات");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("خطایی رخ داده است");
    }
  };

  const removeProfileHandler = () => {
    setProfileImage("");
    setSelectedImage(null);
    setPreviewImageUrl("");
  };

  return (
    <div className="flex flex-col gap-y-6 flex-1 p-3">
      <p className="text-lg font-bold">اطلاعات شخصی</p>

      <div className="flex gap-x-3 items-center [&>button]:cursor-pointer">
        <div className="w-16 h-16 rounded-full overflow-hidden flex justify-center items-center">
          {selectedImage ? (
            <img
              src={previewImageUrl || undefined}
              alt="preview"
              width={64}
              height={64}
              style={{ borderRadius: "9999px", objectFit: "cover" }}
            />
          ) : profileImage ? (
            <Image
              src={profileImage + "?t=" + Date.now()}
              alt="profile"
              width={64}
              height={64}
              style={{ borderRadius: "9999px" }}
              priority
            />
          ) : (
            <FaRegUserCircle className="text-3xl" />
          )}
        </div>

        <label className="flex items-center gap-x-2 bg-green-700 text-white px-3 py-2 rounded-sm cursor-pointer">
          آپلود تصویر <GoPlus />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        <button
          className="flex items-center gap-x-2 border border-gray-400 px-3 py-2 rounded-sm"
          onClick={removeProfileHandler}
        >
          حذف <FiTrash2 />
        </button>
      </div>

      <div className="flex flex-col gap-y-2">
        <label>بیوگرافی :</label>
        <textarea
          rows={6}
          className="edit-profile-input resize-none outline-none rounded-md p-2"
          value={updatedData.biography}
          name="biography"
          onChange={handleChange}
        />
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
        onClick={editAdmininfo}
      >
        ذخیره تغییرات
      </button>
    </div>
  );
};

export default AdminProfileUpdate;
