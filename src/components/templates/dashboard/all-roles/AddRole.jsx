import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Swal from "sweetalert2";

const animatedComponents = makeAnimated();

function AddRole({ permissions, setModalState }) {
  const router = useRouter();
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      permissions: selectedPermissions,
    };

    try {
      const res = await fetch("/api/role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("نقش با موفقیت ایجاد شد").then(() => {
          router.refresh();
          setModalState({ mode: "", _id: "" });
        });
      } else {
        alert(data.error || "خطا در ایجاد نقش");
      }
    } catch (error) {
      console.error("Error creating role:", error);
      alert("خطای سرور، لطفا دوباره تلاش کنید");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
      <div className="bg-white w-96 p-5 rounded-xl shadow-lg transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-lg font-bold mb-4">افزودن نقش</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">نام نقش</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="مثلاً مدیریت کاربران"
              className="border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600">مجوزها</span>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={permissions}
              value={selectedPermissions}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option._id}
              onChange={(val) => setSelectedPermissions(val)}
            />
          </label>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => setModalState({ mode: "", _id: "" })}
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

export default AddRole;
