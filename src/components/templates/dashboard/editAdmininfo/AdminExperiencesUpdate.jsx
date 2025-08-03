"use client";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function AdminExperiencesUpdate({ experiences }) {
  const [workExperiences, setWorkExperiences] = useState(experiences);
  useEffect(() => {
    console.log(workExperiences);
  }, [workExperiences]);
  const handleRemove = (idToRemove) => {
    Swal.fire({
      title: "از حذف مهارت مطمئنید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "بیخیال",
      confirmButtonText: "بله، حذف کن",
      confirmButtonColor: "red",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const updatedExperiences = workExperiences.filter(
          (s) => s._id !== idToRemove
        );
        const res = await editAdminExperiences(updatedExperiences);
        if (res?.success !== false) {
          setWorkExperiences(updatedExperiences);
          Swal.fire({
            title: "مهارت حذف شد",
            icon: "success",
            confirmButtonText: "اوکی",
            confirmButtonColor: "green",
          });
        } else {
          Swal.fire({
            title: "خطا",
            text: res?.message || "مشکلی پیش آمد",
            icon: "error",
            confirmButtonText: "باشه",
          });
        }
      }
    });
  };
  const handleChange = (index, field, value) => {
    const updated = [...workExperiences];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setWorkExperiences(updated);
  };
  const editAdminExperiences = async (updatedExperiences) => {
    try {
      const res = await fetch(`/api/experiences`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ experiences: updatedExperiences }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "خطای ذخیره‌سازی");
      return data;
    } catch (err) {
      console.error(err);
      return { success: false, message: err.message };
    }
  };
  const handleAdd = () => {
    const newExperience = {
      _id: crypto.randomUUID(),
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setWorkExperiences([...workExperiences, newExperience]);
  };
  const handleSave = async () => {
    const res = await editAdminExperiences(workExperiences);
    if (res?.success !== false) {
      Swal.fire({
        title: "تغییرات ذخیره شد",
        icon: "success",
        confirmButtonText: "باشه",
      });
    } else {
      Swal.fire({
        title: "خطا در ذخیره‌سازی",
        text: res?.message || "مشکلی پیش آمد",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  };
  const formatDateForInput = (date) => {
    if (!date) return "";
    const d = typeof date === "string" ? new Date(date) : date;
    if (isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10);
  };

  return (
    <div className="p-3 w-full">
      <p className="text-lg font-bold">سوابق کاری </p>
      <div className="flex flex-col gap-y-4 mt-8">
        {workExperiences.map((experience, index) => (
          <div
            className="flex flex-col gap-y-3 w-full border border-gray-300 p-4 rounded-lg"
            key={experience._id}
          >
            <div className="flex flex-col gap-y-3 ">
              <label htmlFor="">عنوان شغلی / سمت</label>
              <input
                type="text"
                className="edit-profile-input outline-none p-2"
                value={
                  typeof experience.title === "string" ? experience.title : ""
                }
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
            </div>
            <div className="flex  gap-x-4 w-full">
              <div className="flex flex-col gap-y-3  w-full">
                <label htmlFor="">نام شرکت / سازمان</label>
                <input
                  type="text"
                  className="edit-profile-input outline-none p-2"
                  value={
                    typeof experience.company === "string"
                      ? experience.company
                      : ""
                  }
                  onChange={(e) =>
                    handleChange(index, "company", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-y-2  w-full">
                <span>تاریخ اشتغال (ماه و سال همکاری)</span>
                <div className="w-full flex items-center gap-x-5  [&>select]:w-1/3   [&>select]:border mt-1">
                  <input
                    className="edit-profile-input outline-none p-2 cursor-pointer"
                    type="date"
                    value={formatDateForInput(experience.startDate)}
                    onChange={(e) =>
                      handleChange(index, "startDate", new Date(e.target.value))
                    }
                  />
                  <span>:</span>
                  <input
                    className="edit-profile-input outline-none p-2 cursor-pointer"
                    type="date"
                    value={formatDateForInput(experience.endDate)}
                    onChange={(e) =>
                      handleChange(index, "endDate", new Date(e.target.value))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <span>توضیحات (وظایف و دستاورد‌ها)</span>
              <textarea
                className="outline-none border-none focus:border-none  edit-profile-input focus:outline-none p-2"
                rows={4}
                value={
                  typeof experience.description === "string"
                    ? experience.description
                    : ""
                }
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
              ></textarea>

              <button
                className="mr-auto mt-4 bg-red-500 p-2 rounded-lg text-white cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(experience._id);
                }}
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center [&>button]:p-3 [&>button]:rounded-lg [&>button]:bg-green-400 [&>button]:text-white  [&>button]:cursor-pointer">
        <button onClick={handleSave}>بروزرسانی</button>
        <button onClick={handleAdd}>افزودن جدید</button>
      </div>
    </div>
  );
}

export default AdminExperiencesUpdate;
