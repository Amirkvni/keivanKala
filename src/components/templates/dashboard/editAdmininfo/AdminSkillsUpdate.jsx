"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoIosStar } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

function AdminSkillsUpdate({ userSkills }) {
  const [skills, setSkills] = useState(userSkills);
  const [openSkillbox, setOpenSkillbox] = useState(null);
  const isChanged = JSON.stringify(skills) !== JSON.stringify(userSkills);

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
        const updatedSkills = skills.filter((s) => s._id !== idToRemove);
        const res = await editAdminSkills(updatedSkills);
        if (res?.success !== false) {
          setSkills(updatedSkills);
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
    const updated = [...skills];
    updated[index] = {
      ...updated[index],
      [field]: field === "level" ? parseInt(value) : value,
    };
    setSkills(updated);
  };

  const handleAdd = () => {
    const newSkill = {
      _id: crypto.randomUUID(), 
      name: "",
      level: 0,
    };
    setSkills([...skills, newSkill]);
  };

  const editAdminSkills = async (updatedSkills) => {
    try {
      const res = await fetch(`/api/skills`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skills: updatedSkills }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "خطای ذخیره‌سازی");
      return data;
    } catch (err) {
      console.error(err);
      return { success: false, message: err.message };
    }
  };

  const handleSave = async () => {
    const res = await editAdminSkills(skills);
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

  return (
    <div className="p-3">
      <p className="text-lg font-bold">مهارت‌ها</p>
      <div className="flex flex-col gap-y-5 mt-4">
        {skills.map((skill, index) => (
          <div
            key={skill._id || `temp-${index}`}
            className="w-[600px] border rounded-lg p-4 border-gray-300"
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() =>
                setOpenSkillbox(openSkillbox === index ? null : index)
              }
            >
              <div>
                <div>{skill.name || "بدون عنوان"}</div>
                <div className="flex items-center gap-x-3">
                  <div className="flex gap-x-0.5 text-yellow-500">
                    {[...Array(Math.round((skill.level / 100) * 5))].map(
                      (_, i) => (
                        <IoIosStar key={i} />
                      )
                    )}
                  </div>
                  <span className="text-sm text-gray-600">
                    {skill.level === 20
                      ? "(در حال یادگیری)"
                      : skill.level === 40
                      ? "(کم تجربه)"
                      : skill.level === 60
                      ? "(تسلط نسبی)"
                      : skill.level === 80
                      ? "(تسلط کامل)"
                      : skill.level === 100
                      ? "(حرفه‌ای)"
                      : "(بدون سطح بندی)"}
                  </span>
                </div>
              </div>
              <div className="flex gap-x-3 items-center">
                <MdDeleteOutline
                  className="text-2xl text-red-400 hover:text-red-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(skill._id);
                  }}
                />
                {openSkillbox === index ? (
                  <IoIosArrowUp className="text-xl text-green-700" />
                ) : (
                  <IoIosArrowDown className="text-xl text-green-700" />
                )}
              </div>
            </div>

            {openSkillbox === index && (
              <div className="mt-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-gray-600">نام مهارت</label>
                  <input
                    type="text"
                    className="w-52 p-1 edit-profile-input outline-none border border-gray-300 rounded"
                    value={skill.name}
                    onChange={(e) =>
                      handleChange(index, "name", e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-gray-600">سطح</label>
                  <select
                    className="w-52 p-1 edit-profile-input outline-none border border-gray-300 rounded"
                    value={String(skill.level || "")}
                    onChange={(e) =>
                      handleChange(index, "level", e.target.value)
                    }
                  >
                    <option value="">بدون سطح بندی</option>
                    <option value="20">★ (در حال یادگیری)</option>
                    <option value="40">★★ (کم تجربه)</option>
                    <option value="60">★★★ (تسلط نسبی)</option>
                    <option value="80">★★★★ (تسلط کامل)</option>
                    <option value="100">★★★★★ (حرفه‌ای)</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleAdd}
            className="flex items-center gap-x-2 text-sm text-green-600 hover:bg-green-200 cursor-pointer p-4 rounded-lg"
          >
            <FaPlus />
            افزودن مهارت جدید
          </button>
          <button
            className="bg-emerald-400 w-fit mr-auto p-3 rounded-lg text-white cursor-pointer"
            onClick={handleSave}
            disabled={!isChanged}
          >
            ذخیره تغییرات
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSkillsUpdate;
