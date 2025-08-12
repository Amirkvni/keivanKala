import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const roles = [
  { label: "سوپر ادمین", value: "super_admin" },
  { label: "ادمین", value: "admin" },
  { label: "نویسنده", value: "writer" },
  { label: "پشتیبان", value: "support" },
];

function EditPermission({ setAction, setModalState }) {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("مجوز جدید:", {
      roles: selectedRoles,
      // اینجا بقیه فیلدها رو هم اضافه کن
    });
    setAction("");
    setModalState({ mode: "", _id: "" });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
      <div className="bg-white w-96 p-5 rounded-xl shadow-lg transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-lg font-bold mb-4">ویرایش مجوز</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">نام مجوز</span>
            <input
              type="text"
              placeholder="مثلاً مدیریت کاربران"
              className="border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600">اختصاص یافته به</span>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={roles}
              value={selectedRoles}
              onChange={(val) => setSelectedRoles(val)}
            />
          </label>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setModalState({ mode: "", _id: "" });
              }}
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPermission;
